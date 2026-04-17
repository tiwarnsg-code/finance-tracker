// =============================================================
// FINANCE TRACKER - Google Apps Script Backend
// คัดลอกโค้ดนี้ทั้งหมดไปวางใน Google Apps Script แล้ว Deploy
// =============================================================

// ── VERSION ──────────────────────────────────────────────────
const APP_VERSION = {
  version:    '1.5.0',
  updated_at: '2026-04-17T00:00:00+07:00',   // แก้วันนี้ทุกครั้งที่ Re-deploy
  note:       'Cumulative income, savings lock, double-submit guard, month cache'
};
// ─────────────────────────────────────────────────────────────

const SHEETS = {
  TRANSACTIONS: 'Transactions',
  CREDIT_CARDS: 'CreditCards',
  CREDIT_TX: 'CreditTransactions',
  FIXED_COSTS: 'FixedCosts',
  MONTHLY_FIXED: 'MonthlyFixed',
  SAVINGS: 'Savings'
};

const HEADERS = {
  Transactions: ['id','date','type','category','description','amount','notes','created_at','paid_by_card_id','slip_ref'],
  CreditCards: ['id','name','bank','last4','credit_limit','statement_day','due_day','color','active','linked_card_id'],
  CreditTransactions: ['id','card_id','date','description','amount','category','created_at','installment_total','installment_monthly','installment_paid'],
  FixedCosts: ['id','name','category','amount','active','notes','created_at'],
  MonthlyFixed: ['id','fixed_cost_id','year','month','paid','paid_date'],
  Savings: ['id','date','type','amount','description','created_at']
};

function initSheets_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  for (const [name, headers] of Object.entries(HEADERS)) {
    let sheet = ss.getSheetByName(name);
    if (!sheet) {
      sheet = ss.insertSheet(name);
      const r = sheet.getRange(1, 1, 1, headers.length);
      r.setValues([headers]);
      r.setFontWeight('bold');
      r.setBackground('#4f46e5');
      r.setFontColor('#ffffff');
    }
  }
}

// Adds missing columns to existing sheets (safe to run on every request)
function migrateSheets_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  for (const [name, headers] of Object.entries(HEADERS)) {
    const sheet = ss.getSheetByName(name);
    if (!sheet) continue;
    const lastCol = sheet.getLastColumn();
    const existingHeaders = sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(String);
    headers.forEach((h, i) => {
      if (!existingHeaders.includes(h)) {
        const col = existingHeaders.length + 1;
        sheet.getRange(1, col).setValue(h);
        sheet.getRange(1, col).setFontWeight('bold').setBackground('#4f46e5').setFontColor('#ffffff');
        existingHeaders.push(h);
      }
    });
  }
}


function doGet(e) {
  try {
    initSheets_();
    migrateSheets_();
    const params = e.parameter;
    const callback = params.callback;
    const action = params.action;
    const result = dispatch_(action, params);
    const json = JSON.stringify({ success: true, data: result });
    if (callback) {
      return ContentService.createTextOutput(callback + '(' + json + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    const errJson = JSON.stringify({ success: false, error: err.message });
    const cb = e.parameter.callback;
    if (cb) {
      return ContentService.createTextOutput(cb + '(' + errJson + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return ContentService.createTextOutput(errJson).setMimeType(ContentService.MimeType.JSON);
  }
}

function dispatch_(action, params) {
  switch (action) {
    case 'getTransactions':       return getTransactions_(params);
    case 'addTransaction':        return addTransaction_(parseData_(params.data));
    case 'updateTransaction':     return updateTransaction_(parseData_(params.data));
    case 'deleteTransaction':     return deleteRow_(SHEETS.TRANSACTIONS, params.id);
    case 'getCreditCards':        return getActiveRows_(SHEETS.CREDIT_CARDS);
    case 'addCreditCard':         return addCreditCard_(parseData_(params.data));
    case 'updateCreditCard':      return updateCreditCard_(parseData_(params.data));
    case 'deleteCreditCard':      return softDelete_(SHEETS.CREDIT_CARDS, params.id);
    case 'getCreditTransactions': return getCreditTransactions_(params);
    case 'addCreditTransaction':  return addCreditTransaction_(parseData_(params.data));
    case 'updateCreditTransaction': return updateCreditTransaction_(parseData_(params.data));
    case 'deleteCreditTransaction': return deleteRow_(SHEETS.CREDIT_TX, params.id);
    case 'payInstallment':          return payInstallment_(params);
    case 'getFixedCosts':         return getActiveRows_(SHEETS.FIXED_COSTS);
    case 'addFixedCost':          return addFixedCost_(parseData_(params.data));
    case 'updateFixedCost':       return updateFixedCost_(parseData_(params.data));
    case 'deleteFixedCost':       return softDelete_(SHEETS.FIXED_COSTS, params.id);
    case 'getMonthlyFixed':       return getMonthlyFixed_(params);
    case 'setMonthlyFixed':       return setMonthlyFixed_(parseData_(params.data));
    case 'getSavings':    return getSavings_(params);
    case 'addSavings':    return addSavingsRecord_(parseData_(params.data));
    case 'updateSavings': return updateSavingsRecord_(parseData_(params.data));
    case 'deleteSavings': return deleteRow_(SHEETS.SAVINGS, params.id);
    case 'getSummary':            return getSummary_(params);
    case 'getAllData':             return getAllData_(params);
    case 'getVersion':            return APP_VERSION;
    default: throw new Error('Unknown action: ' + action);
  }
}

// ===== HELPERS =====
function parseData_(s) {
  if (!s) return {};
  try { return JSON.parse(s); } catch(e) { return {}; }
}
function genId_() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}
function getSheet_(name) {
  const s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
  if (!s) throw new Error('Sheet not found: ' + name);
  return s;
}
function sheetToObjects_(sheet) {
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  const headers = data[0].map(String);
  return data.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = row[i]; });
    return obj;
  });
}
function findRow_(sheet, id) {
  const vals = sheet.getDataRange().getValues();
  for (let i = 1; i < vals.length; i++) {
    if (String(vals[i][0]) === String(id)) return i + 1;
  }
  return -1;
}
function deleteRow_(sheetName, id) {
  const sheet = getSheet_(sheetName);
  const rowNum = findRow_(sheet, id);
  if (rowNum === -1) throw new Error('Record not found: ' + id);
  sheet.deleteRow(rowNum);
  return { deleted: id };
}
function softDelete_(sheetName, id) {
  const sheet = getSheet_(sheetName);
  const rowNum = findRow_(sheet, id);
  if (rowNum === -1) throw new Error('Record not found: ' + id);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const col = headers.indexOf('active') + 1;
  sheet.getRange(rowNum, col).setValue(false);
  return { deleted: id };
}
function getActiveRows_(sheetName) {
  return sheetToObjects_(getSheet_(sheetName))
    .filter(r => r.active !== false && r.active !== 'FALSE');
}

// ===== TRANSACTIONS =====
function getTransactions_(params) {
  let rows = sheetToObjects_(getSheet_(SHEETS.TRANSACTIONS));
  if (params.year && params.month) {
    const endY = parseInt(params.year), endM = parseInt(params.month);
    const months = parseInt(params.months) || 1;
    if (months > 1) {
      // Range: include transactions from (months) months ago up to selected month
      const startDate = new Date(endY, endM - months, 1);
      const endDate   = new Date(endY, endM, 0); // last day of endM
      rows = rows.filter(r => {
        if (!r.date) return false;
        const d = new Date(r.date);
        return d >= startDate && d <= endDate;
      });
    } else {
      rows = rows.filter(r => {
        if (!r.date) return false;
        const d = new Date(r.date);
        return d.getFullYear() === endY && d.getMonth() + 1 === endM;
      });
    }
  }
  if (params.type && params.type !== 'all') rows = rows.filter(r => r.type === params.type);
  return rows.map(r => ({ ...r, amount: parseFloat(r.amount) || 0 }))
             .sort((a, b) => new Date(b.date) - new Date(a.date));
}
function addTransaction_(d) {
  const sheet = getSheet_(SHEETS.TRANSACTIONS);
  const id = genId_();
  const now = new Date().toISOString();
  sheet.appendRow([id, d.date, d.type, d.category, d.description, parseFloat(d.amount)||0, d.notes||'', now, d.paid_by_card_id||'', d.slip_ref||'']);
  return { id, ...d, created_at: now };
}
function updateTransaction_(d) {
  const sheet = getSheet_(SHEETS.TRANSACTIONS);
  const row = findRow_(sheet, d.id);
  if (row === -1) throw new Error('Transaction not found');
  sheet.getRange(row, 1, 1, 10).setValues([[d.id, d.date, d.type, d.category, d.description, parseFloat(d.amount)||0, d.notes||'', d.created_at||'', d.paid_by_card_id||'', d.slip_ref||'']]);
  return d;
}

// ===== CREDIT CARDS =====
function addCreditCard_(d) {
  const sheet = getSheet_(SHEETS.CREDIT_CARDS);
  const id = genId_();
  sheet.appendRow([id, d.name, d.bank||'', d.last4||'', parseFloat(d.credit_limit)||0, parseInt(d.statement_day)||1, parseInt(d.due_day)||1, d.color||'#6366f1', true, d.linked_card_id||'']);
  return { id, ...d };
}
function updateCreditCard_(d) {
  const sheet = getSheet_(SHEETS.CREDIT_CARDS);
  const row = findRow_(sheet, d.id);
  if (row === -1) throw new Error('Credit card not found');
  sheet.getRange(row, 1, 1, 10).setValues([[d.id, d.name, d.bank||'', d.last4||'', parseFloat(d.credit_limit)||0, parseInt(d.statement_day)||1, parseInt(d.due_day)||1, d.color||'#6366f1', true, d.linked_card_id||'']]);
  return d;
}

// ===== CREDIT TRANSACTIONS =====
function getCreditTransactions_(params) {
  let rows = sheetToObjects_(getSheet_(SHEETS.CREDIT_TX));
  if (params.card_id) rows = rows.filter(r => String(r.card_id) === String(params.card_id));

  const targetYear   = params.year   ? parseInt(params.year)   : null;
  const targetMonth  = params.month  ? parseInt(params.month)  : null;
  const targetMonths = params.months ? parseInt(params.months) : 1;

  // Compute date range when multi-month
  let startDate = null, endDate = null;
  if (targetYear && targetMonth) {
    if (targetMonths > 1) {
      startDate = new Date(targetYear, targetMonth - targetMonths, 1);
      endDate   = new Date(targetYear, targetMonth, 0); // last day of targetMonth
    } else {
      startDate = new Date(targetYear, targetMonth - 1, 1);
      endDate   = new Date(targetYear, targetMonth, 0);
    }
  }

  function inRange(dateStr) {
    if (!dateStr) return false;
    const d = new Date(dateStr);
    if (!startDate) return true; // no filter
    return d >= startDate && d <= endDate;
  }

  let result = [];
  rows.forEach(r => {
    const totalMonths = parseInt(r.installment_total)  || 0;
    const monthlyAmt  = parseFloat(r.installment_monthly) || 0;

    if (totalMonths > 0 && monthlyAmt > 0) {
      // ── Installment PLAN row — ALWAYS returned regardless of date filter ──
      // Full purchase price is reserved from credit limit immediately.
      // Each manual payment creates a negative regular row that reduces the balance.
      // We always include plans so the credit card detail view shows all active plans,
      // even if the plan was created in a previous month.
      result.push({
        ...r,
        amount: parseFloat(r.amount) || 0,
        original_amount: parseFloat(r.amount) || 0,
        is_installment_plan: true,
        installment_paid: parseInt(r.installment_paid) || 0,
        installment_total: totalMonths,
        installment_monthly: monthlyAmt,
      });
    } else {
      // ── Regular / individual-installment-payment transaction ──
      if (startDate) {
        if (inRange(r.date)) result.push({ ...r, amount: parseFloat(r.amount) || 0 });
      } else {
        result.push({ ...r, amount: parseFloat(r.amount) || 0 });
      }
    }
  });

  // ── Merge in Transactions paid by this card ──
  let txRows = sheetToObjects_(getSheet_(SHEETS.TRANSACTIONS))
    .filter(r => r.paid_by_card_id && String(r.paid_by_card_id).trim() !== '');
  if (params.card_id) txRows = txRows.filter(r => String(r.paid_by_card_id) === String(params.card_id));
  if (startDate) {
    txRows = txRows.filter(r => inRange(r.date));
  }
  const merged = txRows.map(r => ({
    id: 'tx_' + r.id,
    card_id: r.paid_by_card_id,
    date: r.date,
    description: r.description,
    amount: parseFloat(r.amount) || 0,
    category: r.category,
    created_at: r.created_at,
    from_transaction: true,
    original_tx_id: r.id
  }));

  return result.concat(merged).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function addCreditTransaction_(d) {
  const sheet = getSheet_(SHEETS.CREDIT_TX);
  const id = genId_();
  const now = new Date().toISOString();
  const totalMonths = parseInt(d.installment_total) || 0;
  const monthlyAmt  = totalMonths > 0
    ? (parseFloat(d.installment_monthly) || Math.round((parseFloat(d.amount)||0) / totalMonths * 100) / 100)
    : 0;
  // installment_paid starts at 0
  sheet.appendRow([id, d.card_id, d.date, d.description, parseFloat(d.amount)||0, d.category||'', now, totalMonths, monthlyAmt, 0]);
  return { id, ...d, created_at: now };
}

function updateCreditTransaction_(d) {
  const sheet = getSheet_(SHEETS.CREDIT_TX);
  const row = findRow_(sheet, d.id);
  if (row === -1) throw new Error('Credit transaction not found');
  const totalMonths = parseInt(d.installment_total) || 0;
  const monthlyAmt  = totalMonths > 0 ? (parseFloat(d.installment_monthly) || 0) : 0;
  const paidCount   = parseInt(d.installment_paid) || 0;
  sheet.getRange(row, 1, 1, 10).setValues([[d.id, d.card_id, d.date, d.description, parseFloat(d.amount)||0, d.category||'', d.created_at||'', totalMonths, monthlyAmt, paidCount]]);
  return d;
}

// User manually pays the next installment on a plan
function payInstallment_(params) {
  const sheet   = getSheet_(SHEETS.CREDIT_TX);
  const allData = sheet.getDataRange().getValues();
  const headers = allData[0].map(String);

  const col = name => headers.indexOf(name);
  const idCol             = col('id');
  const cardIdCol         = col('card_id');
  const descCol           = col('description');
  const categoryCol       = col('category');
  const installTotalCol   = col('installment_total');
  const installMonthlyCol = col('installment_monthly');
  const installPaidCol    = col('installment_paid');

  // Locate the plan row
  let planRowIdx = -1;
  for (let i = 1; i < allData.length; i++) {
    if (String(allData[i][idCol]) === String(params.plan_id)) { planRowIdx = i; break; }
  }
  if (planRowIdx === -1) throw new Error('แผนผ่อนชำระไม่พบ');

  const planRow     = allData[planRowIdx];
  const totalMonths = parseInt(planRow[installTotalCol])   || 0;
  const monthlyAmt  = parseFloat(planRow[installMonthlyCol]) || 0;
  const paidCount   = parseInt(planRow[installPaidCol])    || 0;
  const nextNum     = paidCount + 1;

  if (nextNum > totalMonths) throw new Error('ผ่อนครบทุกงวดแล้ว');
  if (monthlyAmt <= 0)       throw new Error('ยอดผ่อนต่อเดือนไม่ถูกต้อง');

  // Create a regular payment transaction for this installment
  const id       = genId_();
  const now      = new Date().toISOString();
  const planDesc = String(planRow[descCol] || '');
  const payDesc  = 'ผ่อนงวด ' + nextNum + '/' + totalMonths + (planDesc ? ': ' + planDesc : '');
  const cardId   = params.card_id || String(planRow[cardIdCol]);
  const category = String(planRow[categoryCol] || '');
  const payDate  = params.date || new Date().toISOString().split('T')[0];

  // installment_total=0 → treated as a normal row; negative amount reduces outstanding balance
  sheet.appendRow([id, cardId, payDate, payDesc, -monthlyAmt, category, now, 0, 0, 0]);

  // Update paid counter on the plan row
  sheet.getRange(planRowIdx + 1, installPaidCol + 1).setValue(nextNum);

  return {
    id, installment_num: nextNum, installment_total: totalMonths,
    amount: monthlyAmt, date: payDate, description: payDesc,
    remaining: totalMonths - nextNum, plan_id: params.plan_id,
  };
}

// ===== FIXED COSTS =====
function addFixedCost_(d) {
  const sheet = getSheet_(SHEETS.FIXED_COSTS);
  const id = genId_();
  const now = new Date().toISOString();
  sheet.appendRow([id, d.name, d.category||'อื่นๆ', parseFloat(d.amount)||0, true, d.notes||'', now]);
  return { id, ...d, created_at: now };
}
function updateFixedCost_(d) {
  const sheet = getSheet_(SHEETS.FIXED_COSTS);
  const row = findRow_(sheet, d.id);
  if (row === -1) throw new Error('Fixed cost not found');
  sheet.getRange(row, 1, 1, 7).setValues([[d.id, d.name, d.category||'อื่นๆ', parseFloat(d.amount)||0, true, d.notes||'', d.created_at||'']]);
  return d;
}

// ===== MONTHLY FIXED =====
function getMonthlyFixed_(params) {
  let rows = sheetToObjects_(getSheet_(SHEETS.MONTHLY_FIXED));
  if (params.year && params.month) {
    rows = rows.filter(r =>
      parseInt(r.year) === parseInt(params.year) &&
      parseInt(r.month) === parseInt(params.month)
    );
  }
  return rows;
}
function setMonthlyFixed_(d) {
  const sheet = getSheet_(SHEETS.MONTHLY_FIXED);
  const rows = sheetToObjects_(sheet);
  for (let i = 0; i < rows.length; i++) {
    if (String(rows[i].fixed_cost_id) === String(d.fixed_cost_id) &&
        parseInt(rows[i].year) === parseInt(d.year) &&
        parseInt(rows[i].month) === parseInt(d.month)) {
      sheet.getRange(i + 2, 1, 1, 6).setValues([[rows[i].id, d.fixed_cost_id, d.year, d.month, d.paid, d.paid ? new Date().toISOString() : '']]);
      return { ...d, id: rows[i].id };
    }
  }
  const id = genId_();
  sheet.appendRow([id, d.fixed_cost_id, d.year, d.month, d.paid, d.paid ? new Date().toISOString() : '']);
  return { id, ...d };
}

// ===== SAVINGS =====
function getSavings_(params) {
  let rows = sheetToObjects_(getSheet_(SHEETS.SAVINGS));
  rows = rows.map(r => ({
    ...r,
    amount: parseFloat(r.amount) || 0,
  }));
  if (params.year && params.month) {
    const y = parseInt(params.year), m = parseInt(params.month);
    const months = parseInt(params.months) || 1;
    const startDate = new Date(y, m - months, 1);
    const endDate   = new Date(y, m, 0);
    rows = rows.filter(r => {
      if (!r.date) return false;
      const d = new Date(r.date);
      return d >= startDate && d <= endDate;
    });
  }
  return rows.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function addSavingsRecord_(d) {
  const sheet = getSheet_(SHEETS.SAVINGS);
  const id  = genId_();
  const now = new Date().toISOString();
  sheet.appendRow([id, d.date, d.type || 'deposit', parseFloat(d.amount) || 0, d.description || '', now]);
  return { id, ...d, created_at: now };
}

function updateSavingsRecord_(d) {
  const sheet = getSheet_(SHEETS.SAVINGS);
  const row   = findRow_(sheet, d.id);
  if (row === -1) throw new Error('Savings record not found');
  sheet.getRange(row, 1, 1, 6).setValues([[d.id, d.date, d.type || 'deposit', parseFloat(d.amount) || 0, d.description || '', d.created_at || '']]);
  return d;
}

// ===== SUMMARY / REPORTS =====
function getSummary_(params) {
  const year  = parseInt(params.year)  || new Date().getFullYear();
  const month = parseInt(params.month) || (new Date().getMonth() + 1);
  // Summary is always single-month (dashboard metrics, charts)
  const transactions = getTransactions_({ year, month });
  const income = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);

  // All-time cumulative totals (no date filter)
  const allTx = getTransactions_({});
  const cumulativeIncome  = allTx.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const cumulativeExpense = allTx.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const cumulativeBalance = cumulativeIncome - cumulativeExpense;
  const expenseByCategory = {};
  transactions.filter(t => t.type === 'expense').forEach(t => {
    expenseByCategory[t.category] = (expenseByCategory[t.category] || 0) + t.amount;
  });
  const incomeByCategory = {};
  transactions.filter(t => t.type === 'income').forEach(t => {
    incomeByCategory[t.category] = (incomeByCategory[t.category] || 0) + t.amount;
  });
  const fixedCosts = getActiveRows_(SHEETS.FIXED_COSTS).map(f => ({ ...f, amount: parseFloat(f.amount)||0 }));
  const totalFixed = fixedCosts.reduce((s, f) => s + f.amount, 0);
  const monthlyPayments = getMonthlyFixed_({ year, month });
  const paidIds = new Set(monthlyPayments.filter(p => p.paid === true || p.paid === 'TRUE').map(p => String(p.fixed_cost_id)));
  const paidFixed = fixedCosts.filter(f => paidIds.has(String(f.id))).reduce((s, f) => s + f.amount, 0);
  const trend = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(year, month - 1 - i, 1);
    const m = d.getMonth() + 1, y = d.getFullYear();
    const tx = getTransactions_({ year: y, month: m });
    trend.push({
      label: y + '/' + String(m).padStart(2, '0'), month: m, year: y,
      income: tx.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0),
      expense: tx.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0)
    });
  }
  const cards = getActiveRows_(SHEETS.CREDIT_CARDS).map(c => ({ ...c, credit_limit: parseFloat(c.credit_limit)||0 }));
  const creditSummary = cards.map(card => {
    // ALL-TIME cumulative usage = total outstanding balance (carries forward each month)
    // Negative credit transactions count as payments and reduce the balance
    const allTxs = getCreditTransactions_({ card_id: card.id });
    const used = allTxs.reduce((s, t) => s + (parseFloat(t.amount) || 0), 0);
    const monthUsed = getCreditTransactions_({ card_id: card.id, year, month })
      .reduce((s, t) => s + (parseFloat(t.amount) || 0), 0);
    return { ...card, used: Math.max(0, used), available: card.credit_limit - Math.max(0, used), monthUsed };
  });
  return { income, expense, balance: income - expense,
    cumulativeIncome, cumulativeExpense, cumulativeBalance,
    savingsRate: cumulativeIncome > 0 ? parseFloat(((cumulativeBalance) / cumulativeIncome * 100).toFixed(1)) : 0,
    expenseByCategory, incomeByCategory, totalFixed, paidFixed,
    remainingFixed: totalFixed - paidFixed, fixedCosts, monthlyPayments,
    trend, creditSummary, recentTransactions: transactions.slice(0, 10) };
}

function getAllData_(params) {
  const year   = parseInt(params.year)   || new Date().getFullYear();
  const month  = parseInt(params.month)  || (new Date().getMonth() + 1);
  const months = parseInt(params.months) || 1;
  return {
    summary: getSummary_(params),
    transactions: getTransactions_({ year, month, months }),
    creditCards: getActiveRows_(SHEETS.CREDIT_CARDS),
    creditTransactions: getCreditTransactions_({ year, month, months }),
    fixedCosts: getActiveRows_(SHEETS.FIXED_COSTS),
    monthlyFixed: getMonthlyFixed_({ year, month }),
    savings: getSavings_({})
  };
}
