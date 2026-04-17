// ===== FINANCE TRACKER — Main Application =====

// ===== CATEGORIES =====
const CATEGORIES = {
  income: [
    { id: 'salary',      name: 'เงินเดือน',   icon: '💼', color: '#10b981' },
    { id: 'business',    name: 'ธุรกิจ',       icon: '🏢', color: '#3b82f6' },
    { id: 'investment',  name: 'การลงทุน',     icon: '📈', color: '#8b5cf6' },
    { id: 'freelance',   name: 'ฟรีแลนซ์',    icon: '💻', color: '#06b6d4' },
    { id: 'bonus',       name: 'โบนัส',        icon: '🎁', color: '#f59e0b' },
    { id: 'rental',      name: 'ค่าเช่า',      icon: '🏠', color: '#ec4899' },
    { id: 'other_in',    name: 'อื่นๆ',        icon: '💰', color: '#6b7280' },
  ],
  expense: [
    { id: 'food',        name: 'อาหาร',        icon: '🍜', color: '#f59e0b' },
    { id: 'transport',   name: 'เดินทาง',      icon: '🚗', color: '#06b6d4' },
    { id: 'housing',     name: 'ที่พัก',        icon: '🏠', color: '#ec4899' },
    { id: 'health',      name: 'สุขภาพ',       icon: '💊', color: '#ef4444' },
    { id: 'entertain',   name: 'บันเทิง',      icon: '🎬', color: '#8b5cf6' },
    { id: 'shopping',    name: 'ช้อปปิ้ง',    icon: '🛍️', color: '#f97316' },
    { id: 'education',   name: 'การศึกษา',     icon: '📚', color: '#3b82f6' },
    { id: 'utilities',   name: 'สาธารณูปโภค', icon: '⚡', color: '#84cc16' },
    { id: 'phone',       name: 'โทร/เน็ต',    icon: '📱', color: '#0ea5e9' },
    { id: 'other_ex',    name: 'อื่นๆ',        icon: '💸', color: '#6b7280' },
  ],
  fixed: [
    { id: 'rent',        name: 'ค่าเช่า',      icon: '🏠', color: '#ec4899' },
    { id: 'electric',    name: 'ค่าไฟ',        icon: '⚡', color: '#f59e0b' },
    { id: 'water',       name: 'ค่าน้ำ',       icon: '💧', color: '#06b6d4' },
    { id: 'internet',    name: 'อินเทอร์เน็ต', icon: '🌐', color: '#3b82f6' },
    { id: 'phone_fix',   name: 'ค่าโทรศัพท์', icon: '📱', color: '#8b5cf6' },
    { id: 'insurance',   name: 'ประกัน',       icon: '🛡️', color: '#10b981' },
    { id: 'streaming',   name: 'Streaming',    icon: '🎬', color: '#ef4444' },
    { id: 'gym',         name: 'ยิม',          icon: '💪', color: '#f97316' },
    { id: 'other_fix',   name: 'อื่นๆ',        icon: '📌', color: '#6b7280' },
  ]
};

// ===== FIXED COST EMOJI GROUPS =====
const FC_EMOJI_GROUPS = [
  { id: 'home',     label: '🏠 บ้าน',       emoji: ['🏠','🏡','🏢','🏗️','🛋️','🪟','🚪','🔑','🧹','🧺','🧻','🪣','💡','🔧','🪛','🔨','🪜','🛏️','🛁','🚿'] },
  { id: 'util',     label: '⚡ สาธารณูปโภค', emoji: ['⚡','💧','🌐','📡','🌡️','♻️','🔋','📻','☎️','🔌','💨','🔥','🪔','⛽'] },
  { id: 'food',     label: '🍔 อาหาร',       emoji: ['🍜','🍔','🍕','🍣','🍱','🥘','🍲','🥗','🍛','🍝','🍟','🌮','🥪','🍞','🥚','🥛','☕','🧃','🥤','🍺'] },
  { id: 'travel',   label: '🚗 เดินทาง',     emoji: ['🚗','🚕','🚌','🚂','✈️','🛵','🚲','🛺','⛽','🅿️','🗺️','🧳','🎫','🚖','🏍️','⛴️','🚁'] },
  { id: 'health',   label: '💊 สุขภาพ',      emoji: ['💊','🏥','🩺','💉','🩹','🦷','👓','🏃','🧘','🛌','🧬','💆','🧖','🫀','🩻','🧴','🧼','😷'] },
  { id: 'entertain',label: '🎬 บันเทิง',     emoji: ['🎬','🎮','🎯','🎵','🎸','🎭','🎪','🎡','🏊','⛳','🎲','📺','📱','🕹️','🎥','🎤','🎧','🎹','♟️','🎨'] },
  { id: 'shopping', label: '🛍️ ช้อปปิ้ง',   emoji: ['🛍️','👗','👠','👔','🧥','👜','💎','💄','🪥','🛒','🏪','🏬','💸','👒','🧣','🥻','💍','🕶️'] },
  { id: 'education',label: '📚 การศึกษา',    emoji: ['📚','📖','✏️','🎓','📝','🏫','📐','💻','🔬','🧪','📊','📈','🗒️','📓','🔭','🧑‍💻','📜','🖊️'] },
  { id: 'tech',     label: '💻 เทคโนโลยี',  emoji: ['💻','📱','⌨️','🖥️','🖨️','🖱️','📷','🎧','📡','🔌','🔋','💾','💿','📀','🤖','📲','🖲️'] },
  { id: 'work',     label: '💼 ทำงาน',       emoji: ['💼','📊','📉','📈','🗂️','📋','📌','📎','✂️','🖊️','🖋️','📅','⏰','🤝','🏆','🗃️','📧','📮'] },
  { id: 'fitness',  label: '💪 ออกกำลังกาย', emoji: ['💪','🏋️','🤸','🧗','🚴','🏊','⛹️','🏅','🥇','👟','🧢','🥊','⚽','🏀','🎾','🏐','🏈','🧘'] },
  { id: 'family',   label: '👨‍👩‍👧 ครอบครัว',   emoji: ['👶','👧','👦','👩','👨','👴','👵','🐶','🐱','🌸','🎁','🎂','❤️','🎡','🍼','🧸','🪀','🎈'] },
  { id: 'finance',  label: '💰 การเงิน',     emoji: ['💰','💴','💵','💸','🏦','💳','📊','💹','🪙','🤑','💎','📈','🏧','🧾','💱','🪙','📑','🏛️'] },
  { id: 'misc',     label: '🎁 อื่นๆ',       emoji: ['📌','🎁','⭐','🌟','✨','🔔','🎀','🌈','☂️','🧲','🔐','🗝️','📦','🎗️','🏷️','🧩','🪄','🎊'] },
];

// ===== STATE =====
const state = {
  view: 'dashboard',
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
  viewMonths: 1,
  txSortCol: 'date',
  txSortDir: 'desc',
  savingsSortCol: 'date',
  savingsSortDir: 'desc',
  ccTxSortCol: 'date',
  ccTxSortDir: 'desc',
  data: {
    transactions: [],
    creditCards: [],
    creditTransactions: [],
    fixedCosts: [],
    monthlyFixed: [],
    summary: null,
    savings: [],
  },
  selectedCard: null,
  charts: {},
};

// ===== DATA CACHE (per month key) =====
const _dataCache = {};
function _cacheKey(y, m, vm) { return `${y}-${m}-${vm}`; }
function _invalidateCache(y, m) {
  // Remove all cache entries that overlap the given month
  Object.keys(_dataCache).forEach(k => {
    const [ky, km] = k.split('-').map(Number);
    if (ky === y && km === m) delete _dataCache[k];
  });
}

// ===== SAVE GUARD (prevent double-submit) =====
let _saving = false;
function _lockSave(btn) {
  if (_saving) return false;
  _saving = true;
  if (btn) { btn.disabled = true; btn._origText = btn.textContent; btn.textContent = 'กำลังบันทึก...'; }
  return true;
}
function _unlockSave(btn) {
  _saving = false;
  if (btn) { btn.disabled = false; btn.textContent = btn._origText || btn.textContent; }
}

// ===== INIT =====
function init() {
  initTheme();
  if (!api.isConfigured()) {
    showSetupScreen();
    return;
  }
  showApp();
  initMonthSelectors();
  setupNavigation();
  loadData();
  // Auto-refresh every 60 seconds when tab is visible
  setInterval(() => { if (!document.hidden) loadData(true); }, 60000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) loadData(true); });
}

function showSetupScreen() {
  document.getElementById('setup-screen').classList.remove('hidden');
  document.getElementById('app').classList.add('hidden');
}

function showApp() {
  document.getElementById('setup-screen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  document.getElementById('settings-api-url').value = localStorage.getItem('ft_api_url') || '';
  applyUserName();
}

function applyUserName() {
  const name = localStorage.getItem('ft_user_name') || '';
  const el = document.getElementById('sidebar-user-name');
  if (el) el.textContent = name ? '👤 ' + name : 'รายรับ-รายจ่ายส่วนตัว';
  const settingsEl = document.getElementById('settings-user-name');
  if (settingsEl) settingsEl.value = name;
}

function saveUserName() {
  const name = (document.getElementById('settings-user-name').value || '').trim();
  if (name) {
    localStorage.setItem('ft_user_name', name);
  } else {
    localStorage.removeItem('ft_user_name');
  }
  applyUserName();
  showToast('บันทึกชื่อแล้ว ✓', 'success');
}

// ===== THEME =====
function initTheme() {
  const mode  = localStorage.getItem('ft_theme_mode')  || 'light';
  const color = localStorage.getItem('ft_theme_color') || 'indigo';
  applyThemeMode(mode);
  applyThemeColor(color);
}

function applyThemeMode(mode) {
  const html = document.documentElement;
  if (mode === 'dark') {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.removeAttribute('data-theme');
  }
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) btn.textContent = mode === 'dark' ? '☀️' : '🌙';
  const lBtn = document.getElementById('theme-light-btn');
  const dBtn = document.getElementById('theme-dark-btn');
  if (lBtn) lBtn.style.fontWeight = mode === 'light' ? '700' : '';
  if (dBtn) dBtn.style.fontWeight = mode === 'dark'  ? '700' : '';
}

function applyThemeColor(color) {
  document.documentElement.setAttribute('data-color', color);
  document.querySelectorAll('.color-swatch').forEach(el => {
    el.classList.toggle('active', el.dataset.color === color);
    el.textContent = el.dataset.color === color ? '✓' : '';
  });
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  setThemeMode(isDark ? 'light' : 'dark');
}

function setThemeMode(mode) {
  localStorage.setItem('ft_theme_mode', mode);
  applyThemeMode(mode);
}

function setThemeColor(color) {
  localStorage.setItem('ft_theme_color', color);
  applyThemeColor(color);
}

function connectAPI() {
  const nameVal = (document.getElementById('setup-name-input').value || '').trim();
  if (!nameVal) { showToast('กรุณากรอกชื่อของคุณก่อน', 'error'); return; }
  const url = document.getElementById('api-url-input').value.trim();
  if (!url) { showToast('กรุณากรอก URL', 'error'); return; }
  if (!url.startsWith('https://script.google.com')) {
    showToast('URL ไม่ถูกต้อง ต้องเป็น script.google.com', 'error'); return;
  }
  localStorage.setItem('ft_user_name', nameVal);
  api.setUrl(url);
  showApp();
  initMonthSelectors();
  setupNavigation();
  loadData();
}

function saveSettings() {
  const url = document.getElementById('settings-api-url').value.trim();
  if (!url) { showToast('กรุณากรอก URL', 'error'); return; }
  api.setUrl(url);
  showToast('บันทึกการตั้งค่าแล้ว', 'success');
  loadData();
}

async function testConnection() {
  showToast('กำลังทดสอบ...', 'info');
  try {
    await api.getSummary({ year: state.year, month: state.month });
    showToast('เชื่อมต่อสำเร็จ! ✓', 'success');
  } catch (e) {
    showToast('เชื่อมต่อไม่ได้: ' + e.message, 'error');
  }
}

function disconnectAPI() {
  if (!confirm('ต้องการยกเลิกการเชื่อมต่อใช่ไหม?')) return;
  localStorage.removeItem('ft_api_url');
  api.baseUrl = '';
  showSetupScreen();
}

// ===== SIDEBAR TOGGLE (Mobile) =====
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const isOpen = sidebar.classList.contains('open');
  if (isOpen) {
    closeSidebar();
  } else {
    sidebar.classList.add('open');
    overlay.classList.add('show');
  }
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('show');
}

// ===== NAVIGATION =====
function setupNavigation() {
  // Sidebar nav items
  document.querySelectorAll('.nav-item[data-view]').forEach(btn => {
    btn.addEventListener('click', () => {
      navigate(btn.dataset.view);
      closeSidebar(); // close drawer on mobile after tap
    });
  });
  // Bottom nav items
  document.querySelectorAll('.bottom-nav-item[data-view]').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.view));
  });
}

const VIEW_TITLES = {
  'dashboard':    'ภาพรวม',
  'transactions': 'รายรับ-รายจ่าย',
  'credit-cards': 'บัตรเครดิต',
  'fixed-costs':  'รายจ่ายคงที่',
  'savings':      'เงินออม',
  'reports':      'รายงาน & กราฟ',
  'settings':     'ตั้งค่า',
};

function navigate(view) {
  state.view = view;

  // Views
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const viewEl = document.getElementById('view-' + view);
  if (viewEl) viewEl.classList.add('active');

  // Sidebar nav
  document.querySelectorAll('.nav-item[data-view]').forEach(n => n.classList.remove('active'));
  const navBtn = document.querySelector(`.nav-item[data-view="${view}"]`);
  if (navBtn) navBtn.classList.add('active');

  // Bottom nav
  document.querySelectorAll('.bottom-nav-item[data-view]').forEach(n => n.classList.remove('active'));
  const bottomBtn = document.querySelector(`.bottom-nav-item[data-view="${view}"]`);
  if (bottomBtn) bottomBtn.classList.add('active');

  document.getElementById('page-title').textContent = VIEW_TITLES[view] || view;

  // Render view-specific content
  switch (view) {
    case 'dashboard':    renderDashboard(); break;
    case 'transactions': renderTransactions(); break;
    case 'credit-cards': renderCreditCards(); break;
    case 'fixed-costs':  renderFixedCosts(); break;
    case 'savings':      renderSavings(); break;
    case 'reports':      renderReports(); break;
  }
}

// ===== MONTH SELECTORS =====
function initMonthSelectors() {
  const months = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน',
                  'กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
  const mSel = document.getElementById('month-select');
  const ySel = document.getElementById('year-select');
  months.forEach((m, i) => {
    const o = document.createElement('option');
    o.value = i + 1; o.textContent = m;
    if (i + 1 === state.month) o.selected = true;
    mSel.appendChild(o);
  });
  const curYear = new Date().getFullYear();
  for (let y = curYear - 2; y <= curYear + 1; y++) {
    const o = document.createElement('option');
    o.value = y; o.textContent = y + 543 + ' (' + y + ')';
    if (y === state.year) o.selected = true;
    ySel.appendChild(o);
  }
}

function onMonthChange() {
  state.month = parseInt(document.getElementById('month-select').value);
  state.year = parseInt(document.getElementById('year-select').value);
  loadData(false, false); // use cache if available → instant switch
}

function onMonthRangeChange() {
  state.viewMonths = parseInt(document.getElementById('months-range-select').value) || 1;
  loadData(false, false);
}

// ===== DATA LOADING =====
function _applyData(data) {
  state.data.transactions     = data.transactions     || [];
  state.data.creditCards      = data.creditCards      || [];
  state.data.creditTransactions = data.creditTransactions || [];
  state.data.fixedCosts       = data.fixedCosts       || [];
  state.data.monthlyFixed     = data.monthlyFixed     || [];
  state.data.summary          = data.summary          || {};
  state.data.savings          = data.savings          || [];
  navigate(state.view);
}

// forceRefresh=true → bypass cache (used by Refresh button & post-mutation reload)
async function loadData(silent = false, forceRefresh = false) {
  const key = _cacheKey(state.year, state.month, state.viewMonths);

  // ── Serve from cache instantly ──────────────────────────────────────────
  if (!forceRefresh && _dataCache[key]) {
    _applyData(_dataCache[key]);
    setSyncStatus('synced');
    return; // no toast, no spinner — instant
  }

  // ── Fetch from API ──────────────────────────────────────────────────────
  if (!silent) showLoading();
  setSyncStatus('syncing');
  try {
    const data = await api.getAllData({ year: state.year, month: state.month, months: state.viewMonths });
    _dataCache[key] = data;           // store in cache
    _applyData(data);
    setSyncStatus('synced');
    if (!silent) showToast('โหลดข้อมูลสำเร็จ', 'success');
  } catch (e) {
    setSyncStatus('error');
    showToast('โหลดข้อมูลไม่ได้: ' + e.message, 'error');
  } finally {
    hideLoading();
  }
}

// Refresh button → force re-fetch and update cache
function refreshData() {
  _invalidateCache(state.year, state.month);
  loadData(false, true);
}

// Post-mutation: invalidate cache for this month then silent background refresh
async function _reloadAfterMutate() {
  _invalidateCache(state.year, state.month);
  await loadData(true, true); // silent + force
}

// ===== DASHBOARD =====
function renderDashboard() {
  const s = state.data.summary;
  if (!s) return;

  // Metrics
  document.getElementById('dash-income').textContent = fmt(s.income);
  document.getElementById('dash-expense').textContent = fmt(s.expense);
  document.getElementById('dash-balance').textContent = fmt(s.balance);
  document.getElementById('dash-savings').textContent = s.savingsRate + '%';
  document.getElementById('dash-income-sub').textContent = `${countTx('income')} รายการ`;
  document.getElementById('dash-expense-sub').textContent = `${countTx('expense')} รายการ`;
  const balColor = s.balance >= 0 ? 'var(--success)' : 'var(--danger)';
  document.getElementById('dash-balance').style.color = balColor;

  // Charts
  renderTrendChart('trend-chart', s.trend);
  renderCategoryDonut('category-chart', s.expenseByCategory, 'expense');

  // Recent Transactions
  const recentEl = document.getElementById('dash-recent-tx');
  const txList = state.data.transactions.slice(0, 8);
  if (!txList.length) {
    recentEl.innerHTML = '<div class="empty-state"><div class="icon">📋</div><p>ยังไม่มีรายการ</p></div>';
  } else {
    recentEl.innerHTML = txList.map(tx => txItemHTML(tx)).join('');
  }

  // Credit Card Summary (with shared limit support)
  const ccEl = document.getElementById('dash-credit-summary');
  if (!s.creditSummary || !s.creditSummary.length) {
    ccEl.innerHTML = '<div class="empty-state"><div class="icon">💳</div><p>ยังไม่มีบัตรเครดิต</p></div>';
  } else {
    const usageMap = buildUsageMap();
    const monthUsageMap = buildMonthUsageMap();
    const renderedIds = new Set();

    const rows = state.data.creditCards.map(card => {
      const cardId = String(card.id);
      if (renderedIds.has(cardId)) return ''; // already shown as part of a pair

      const shared = getSharedInfo(card, usageMap);

      if (shared && shared.isPrimary) {
        // Render primary card with combined view
        renderedIds.add(String(shared.partnerCard.id));
        const pct = shared.sharedLimit > 0 ? Math.min((shared.totalUsed / shared.sharedLimit) * 100, 100) : 0;
        const barColor = pct > 80 ? 'var(--danger)' : card.color || '#6366f1';
        const ownMonthUsed    = monthUsageMap[cardId] || 0;
        const partnerMonthUsed = monthUsageMap[String(shared.partnerCard.id)] || 0;
        const totalMonthUsed  = ownMonthUsed + partnerMonthUsed;
        return `<div style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px">
            <span style="font-size:13.5px;font-weight:700">${esc(card.name)} <span style="font-size:10px;background:#e0e7ff;color:var(--primary-dark);border-radius:8px;padding:1px 7px;font-weight:600">🔗 แชร์วงเงิน</span></span>
            <span style="font-size:13px;font-weight:700;color:var(--success)">เหลือ ${fmt(shared.available)}</span>
          </div>
          <div class="fixed-progress-bar" style="height:7px;margin-bottom:4px">
            <div class="fixed-progress-fill" style="width:${pct.toFixed(1)}%;background:${barColor}"></div>
          </div>
          <div style="display:flex;gap:8px;font-size:11px;color:var(--text-muted)">
            <span>${esc(card.name.split(' ')[0])}: <strong>${fmt(shared.ownUsed)}</strong></span>
            <span>·</span>
            <span>${esc(shared.partnerCard.name.split(' ')[0])}: <strong>${fmt(shared.partnerUsed)}</strong></span>
            <span style="margin-left:auto">เดือนนี้ <strong>${fmt(totalMonthUsed)}</strong> · ใช้ ${fmt(shared.totalUsed)}/${fmt(shared.sharedLimit)}</span>
          </div>
        </div>`;
      } else if (shared && !shared.isPrimary) {
        // Secondary card — skip, already rendered with primary
        renderedIds.add(cardId);
        return '';
      } else {
        // Standalone card
        const used = usageMap[cardId] || 0;
        const monthUsed = monthUsageMap[cardId] || 0;
        const limit = parseFloat(card.credit_limit) || 0;
        const available = Math.max(0, limit - used);
        const pct = limit > 0 ? Math.min((used / limit) * 100, 100) : 0;
        return `<div style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px">
            <span style="font-size:13.5px;font-weight:600">${esc(card.name)}</span>
            <span style="font-size:13px;font-weight:700;color:var(--success)">เหลือ ${fmt(available)}</span>
          </div>
          <div class="fixed-progress-bar" style="height:7px;margin-bottom:4px">
            <div class="fixed-progress-fill" style="width:${pct.toFixed(1)}%;background:${card.color || 'var(--primary)'}"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-muted)">
            <span>ใช้ ${fmt(used)} / ${fmt(limit)}</span>
            <span>เดือนนี้ ${fmt(monthUsed)}</span>
          </div>
        </div>`;
      }
    }).join('');

    ccEl.innerHTML = rows || '<div class="empty-state"><div class="icon">💳</div><p>ยังไม่มีบัตรเครดิต</p></div>';
  }

  // Fixed Cost Summary on Dashboard
  const fcEl = document.getElementById('dash-fixed-summary');
  if (!s.fixedCosts || !s.fixedCosts.length) {
    fcEl.innerHTML = '<div class="empty-state"><div class="icon">📌</div><p>ยังไม่มีรายจ่ายคงที่</p></div>';
  } else {
    const paidIds = new Set((s.monthlyPayments||[]).filter(p => p.paid === true || p.paid === 'TRUE').map(p => String(p.fixed_cost_id)));
    fcEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;margin-bottom:10px;font-size:14px">
        <span>รวม: <strong>${fmt(s.totalFixed)}</strong></span>
        <span style="color:var(--success)">จ่ายแล้ว: <strong>${fmt(s.paidFixed)}</strong></span>
        <span style="color:var(--danger)">ยังขาด: <strong>${fmt(s.remainingFixed)}</strong></span>
      </div>
      <div class="fixed-progress-bar" style="margin-bottom:10px">
        <div class="fixed-progress-fill" style="width:${s.totalFixed>0?Math.min((s.paidFixed/s.totalFixed)*100,100).toFixed(1):0}%"></div>
      </div>
      <div>${s.fixedCosts.slice(0,5).map(fc => {
        const paid = paidIds.has(String(fc.id));
        const cat = getCatInfo(fc.category, 'fixed');
        return `<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border)">
          <span style="font-size:16px">${cat.icon}</span>
          <span style="flex:1;font-size:13.5px">${fc.name}</span>
          <span style="font-size:13px;font-weight:600">${fmt(fc.amount)}</span>
          <span style="font-size:11px;padding:2px 8px;border-radius:12px;background:${paid?'var(--success-light)':'var(--danger-light)'};color:${paid?'var(--success)':'var(--danger)'}">${paid?'จ่ายแล้ว':'ยังไม่จ่าย'}</span>
        </div>`;
      }).join('')}</div>`;
  }
}

function countTx(type) {
  return state.data.transactions.filter(t => t.type === type).length;
}

// ===== TRANSACTIONS =====
function renderTransactions() {
  // Show month range label above table
  const months = ['','มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน',
                  'กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
  if (state.viewMonths > 1) {
    const startD = new Date(state.year, state.month - state.viewMonths, 1);
    const startLabel = months[startD.getMonth()+1] + ' ' + startD.getFullYear();
    const endLabel   = months[state.month] + ' ' + state.year;
    const rangeEl = document.getElementById('tx-range-label');
    if (rangeEl) rangeEl.textContent = `📅 ${startLabel} — ${endLabel} (${state.viewMonths} เดือน)`;
  } else {
    const rangeEl = document.getElementById('tx-range-label');
    if (rangeEl) rangeEl.textContent = `📅 ${months[state.month]} ${state.year}`;
  }

  const type = document.getElementById('tx-filter-type').value;
  const cat = document.getElementById('tx-filter-cat').value;
  const search = document.getElementById('tx-search').value.toLowerCase();

  // Populate category filter
  const catSel = document.getElementById('tx-filter-cat');
  const currentCat = catSel.value;
  catSel.innerHTML = '<option value="">ทุกหมวดหมู่</option>';
  [...CATEGORIES.income, ...CATEGORIES.expense].forEach(c => {
    const o = document.createElement('option');
    o.value = c.id; o.textContent = c.icon + ' ' + c.name;
    catSel.appendChild(o);
  });
  catSel.value = currentCat;

  // Client-side date range filter (works even before backend re-deployment)
  let txs = state.data.transactions.filter(t => {
    if (!t.date) return false;
    const d = new Date(t.date);
    if (state.viewMonths <= 1) {
      return d.getFullYear() === state.year && d.getMonth() + 1 === state.month;
    }
    // Multi-month: startDate = first day (viewMonths ago), endDate = last day of selected month
    const start = new Date(state.year, state.month - state.viewMonths, 1);
    const end   = new Date(state.year, state.month, 0); // last day of selected month
    return d >= start && d <= end;
  });
  if (type !== 'all') txs = txs.filter(t => t.type === type);
  if (cat) txs = txs.filter(t => t.category === cat);
  if (search) txs = txs.filter(t =>
    (t.description||'').toLowerCase().includes(search) ||
    (t.notes||'').toLowerCase().includes(search) ||
    (t.category||'').toLowerCase().includes(search)
  );

  // Sort
  txs.sort((a, b) => {
    const dir = state.txSortDir === 'asc' ? 1 : -1;
    if (state.txSortCol === 'date') {
      return dir * (new Date(a.date) - new Date(b.date));
    }
    if (state.txSortCol === 'amount') {
      return dir * (parseFloat(a.amount) - parseFloat(b.amount));
    }
    if (state.txSortCol === 'type') {
      return dir * (a.type || '').localeCompare(b.type || '');
    }
    if (state.txSortCol === 'category') {
      return dir * (a.category || '').localeCompare(b.category || '');
    }
    if (state.txSortCol === 'description') {
      return dir * (a.description || '').localeCompare(b.description || '');
    }
    return 0;
  });

  const totalIncome = txs.filter(t => t.type === 'income').reduce((s,t) => s + parseFloat(t.amount), 0);
  const totalExpense = txs.filter(t => t.type === 'expense').reduce((s,t) => s + parseFloat(t.amount), 0);
  document.getElementById('tx-total-income').textContent = '+' + fmt(totalIncome);
  document.getElementById('tx-total-expense').textContent = '-' + fmt(totalExpense);

  const tbody = document.getElementById('tx-table-body');
  if (!txs.length) {
    tbody.innerHTML = `<tr><td colspan="7"><div class="empty-state"><div class="icon">📋</div><h3>ไม่มีรายการ</h3><p>เพิ่มรายการใหม่โดยกดปุ่ม "เพิ่มรายการ"</p></div></td></tr>`;
    return;
  }
  tbody.innerHTML = txs.map(tx => {
    const cat = getCatInfo(tx.category, tx.type);
    const amtColor = tx.type === 'income' ? 'var(--success)' : 'var(--danger)';
    const amtPrefix = tx.type === 'income' ? '+' : '-';
    const cardBadge = (() => {
      if (!tx.paid_by_card_id || String(tx.paid_by_card_id).trim() === '') return '';
      const card = state.data.creditCards.find(c => String(c.id) === String(tx.paid_by_card_id));
      return card ? `<span class="tx-card-badge">💳 ${esc(card.name)}</span>` : '';
    })();
    return `<tr>
      <td style="white-space:nowrap;font-size:13px;color:var(--text-muted)">${fmtDate(tx.date)}</td>
      <td><span class="cat-badge" style="background:${tx.type==='income'?'var(--success-light)':'var(--danger-light)'};color:${tx.type==='income'?'var(--success)':'var(--danger)'}">${tx.type==='income'?'💚 รายรับ':'🔴 รายจ่าย'}</span></td>
      <td><span class="cat-badge" style="background:${cat.color}22;color:${cat.color}">${cat.icon} ${cat.name}</span></td>
      <td style="font-weight:500">${esc(tx.description||'-')}${cardBadge}</td>
      <td class="text-right font-bold" style="color:${amtColor};white-space:nowrap">${amtPrefix}${fmt(tx.amount)}</td>
      <td style="font-size:12px;color:var(--text-muted);max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(tx.notes||'')}</td>
      <td>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${tx.slip_ref && String(tx.slip_ref).trim() ? `<span class="tx-ref-badge" title="เลขที่รายการ: ${esc(tx.slip_ref)}">🧾 ${esc(String(tx.slip_ref).trim())}</span>` : ''}
          ${isSavingsTx(tx)
            ? `<span style="font-size:11px;color:var(--text-muted);padding:2px 8px;border-radius:999px;background:var(--border);display:inline-block">🔒 รายการออมเงิน</span>`
            : `<button class="btn btn-outline btn-xs" onclick="openTransactionModal('${tx.id}')">แก้ไข</button>
               <button class="btn btn-danger btn-xs" onclick="confirmDelete('transaction','${tx.id}','${esc(tx.description||'รายการนี้')}')">ลบ</button>`
          }
        </div>
      </td>
    </tr>`;
  }).join('');

  // Update sort icons
  ['date','type','category','description','amount'].forEach(col => {
    const el = document.getElementById('si-' + col);
    if (!el) return;
    const th = document.getElementById('th-' + col);
    if (state.txSortCol === col) {
      el.textContent = state.txSortDir === 'asc' ? '↑' : '↓';
      if (th) th.style.color = 'var(--primary)';
    } else {
      el.textContent = '↕';
      if (th) th.style.color = '';
    }
  });
}

function setTxSort(col) {
  if (state.txSortCol === col) {
    state.txSortDir = state.txSortDir === 'asc' ? 'desc' : 'asc';
  } else {
    state.txSortCol = col;
    state.txSortDir = col === 'date' ? 'desc' : 'asc';
  }
  renderTransactions();
}

// ===== SHARED CREDIT LIMIT HELPERS =====

/** Build a map of card.id → monthly spending from summary */
function buildUsageMap() {
  const map = {};
  const s = state.data.summary;
  if (s && s.creditSummary) {
    s.creditSummary.forEach(c => { map[String(c.id)] = c.used || 0; });
  }
  return map;
}

function buildMonthUsageMap() {
  const map = {};
  const s = state.data.summary;
  if (s && s.creditSummary) {
    s.creditSummary.forEach(c => { map[String(c.id)] = c.monthUsed || 0; });
  }
  return map;
}

/**
 * Returns shared-limit info for a card, or null if not shared.
 * Rules:
 *  - Card A sets linked_card_id = B.id  → A is "secondary", B is "primary"
 *  - Shared limit = B's credit_limit
 *  - Combined usage = A's usage + B's usage
 *  - Both cards display combined usage / shared limit
 */
function getSharedInfo(card, usageMap) {
  const linkedId = String(card.linked_card_id || '').trim();
  const cards = state.data.creditCards;

  if (linkedId) {
    // This card is secondary — it links to a primary
    const primary = cards.find(c => String(c.id) === linkedId);
    if (!primary) return null;
    const ownUsed     = usageMap[String(card.id)] || 0;
    const primaryUsed = usageMap[linkedId] || 0;
    const totalUsed   = ownUsed + primaryUsed;
    const sharedLimit = parseFloat(primary.credit_limit) || 0;
    return {
      isPrimary: false,
      partnerCard: primary,
      ownUsed, partnerUsed: primaryUsed,
      totalUsed, sharedLimit,
      available: sharedLimit - totalUsed,
    };
  }

  // Check if this card is a primary (someone links TO it)
  const secondary = cards.find(c => String(c.linked_card_id || '').trim() === String(card.id));
  if (!secondary) return null;
  const ownUsed       = usageMap[String(card.id)] || 0;
  const secondaryUsed = usageMap[String(secondary.id)] || 0;
  const totalUsed     = ownUsed + secondaryUsed;
  const sharedLimit   = parseFloat(card.credit_limit) || 0;
  return {
    isPrimary: true,
    partnerCard: secondary,
    ownUsed, partnerUsed: secondaryUsed,
    totalUsed, sharedLimit,
    available: sharedLimit - totalUsed,
  };
}

// ===== CREDIT CARDS =====
function renderCreditCards() {
  const grid = document.getElementById('credit-cards-grid');
  const cards = state.data.creditCards;
  const usageMap = buildUsageMap();
  const monthUsageMap = buildMonthUsageMap();

  // Compute pending installment totals per card (unpaid installment amounts remaining)
  function pendingInstallments(cardId) {
    const plans = (state.data.creditTransactions || [])
      .filter(t => String(t.card_id) === String(cardId) && t.is_installment_plan);
    return plans.reduce((sum, p) => {
      const remaining = (parseInt(p.installment_total) || 0) - (parseInt(p.installment_paid) || 0);
      return sum + remaining * (parseFloat(p.installment_monthly) || 0);
    }, 0);
  }

  const cardsHTML = cards.map(card => {
    const shared = getSharedInfo(card, usageMap);
    const limit  = parseFloat(card.credit_limit) || 0;
    const ownUsed = usageMap[String(card.id)] || 0;
    const ownMonthUsed = monthUsageMap[String(card.id)] || 0;
    const ownPending = pendingInstallments(card.id);

    let displayUsed, displayLimit, usedPct, sharedTagHTML = '', sharedBreakdownHTML = '';

    if (shared) {
      displayUsed  = shared.totalUsed;
      displayLimit = shared.sharedLimit;
      usedPct      = displayLimit > 0 ? Math.min((displayUsed / displayLimit) * 100, 100) : 0;
      const available = Math.max(0, displayLimit - displayUsed);
      const partnerName = shared.partnerCard.name + (shared.partnerCard.last4 ? ` ••${shared.partnerCard.last4}` : '');
      const role = shared.isPrimary ? 'บัตรหลัก' : 'บัตรเสริม';
      const partnerMonthUsed = monthUsageMap[String(shared.partnerCard.id)] || 0;
      const totalMonthUsed = ownMonthUsed + partnerMonthUsed;
      const partnerPending = pendingInstallments(shared.partnerCard.id);
      const totalPending = ownPending + partnerPending;

      sharedTagHTML = `<div class="cc-shared-tag">🔗 ${role} · แชร์วงเงินกับ ${esc(partnerName)}</div>`;

      sharedBreakdownHTML = `
        <div class="cc-shared-info">
          <div class="cc-available-main">
            <span class="cc-avail-label">วงเงินคงเหลือ</span>
            <span class="cc-avail-amount">${fmt(available)}</span>
          </div>
          <div class="cc-bar" style="margin:6px 0">
            <div class="cc-bar-fill" style="width:${usedPct.toFixed(1)}%;background:${usedPct>80?'#fca5a5':'rgba(255,255,255,0.9)'}"></div>
          </div>
          <div class="cc-shared-breakdown" style="margin-bottom:4px">
            <div class="cc-shared-card-pill">
              <div class="dot"></div>
              ${esc(card.name.split(' ')[0])} ${fmt(shared.ownUsed)}
            </div>
            <div class="cc-shared-card-pill">
              <div class="dot"></div>
              ${esc(shared.partnerCard.name.split(' ')[0])} ${fmt(shared.partnerUsed)}
            </div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:10.5px;opacity:0.8">
            <span>ใช้รวม ${fmt(displayUsed)} / ${fmt(displayLimit)}</span>
            ${totalMonthUsed > 0 ? `<span>เดือนนี้ ${fmt(totalMonthUsed)}</span>` : ''}
          </div>
          ${totalPending > 0 ? `<div style="font-size:10px;opacity:0.75;margin-top:3px">📅 ผ่อนที่ยังค้างอยู่ ${fmt(totalPending)}</div>` : ''}
        </div>`;
    } else {
      displayUsed  = ownUsed;
      displayLimit = limit;
      usedPct      = limit > 0 ? Math.min((ownUsed / limit) * 100, 100) : 0;
      const available = Math.max(0, limit - ownUsed);
      sharedBreakdownHTML = `
        <div class="cc-limit-bar">
          <div class="cc-available-main">
            <span class="cc-avail-label">วงเงินคงเหลือ</span>
            <span class="cc-avail-amount">${fmt(available)}</span>
          </div>
          <div class="cc-bar" style="margin:6px 0">
            <div class="cc-bar-fill" style="width:${usedPct.toFixed(1)}%;background:${usedPct>80?'#fca5a5':'rgba(255,255,255,0.9)'}"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:10.5px;color:rgba(255,255,255,0.8)">
            <span>ใช้ ${fmt(ownUsed)} / ${fmt(limit)}</span>
            ${ownMonthUsed > 0 ? `<span>เดือนนี้ ${fmt(ownMonthUsed)}</span>` : ''}
          </div>
          ${ownPending > 0 ? `<div style="font-size:10px;color:rgba(255,255,255,0.7);margin-top:3px">📅 ผ่อนที่ยังค้างอยู่ ${fmt(ownPending)}</div>` : ''}
        </div>`;
    }

    return `<div class="credit-card-visual" style="background:linear-gradient(135deg, ${card.color||'#6366f1'}, ${shadeColor(card.color||'#6366f1', -30)})" onclick="selectCard('${card.id}')">
      <div>
        <div class="cc-top">
          <span class="cc-chip">💳</span>
          <span class="cc-bank">${esc(card.bank||'')}</span>
        </div>
        <div class="cc-number">•••• •••• •••• ${esc(card.last4||'????')}</div>
        <div class="cc-name">${esc(card.name||'')}</div>
        ${sharedTagHTML}
      </div>
      ${sharedBreakdownHTML}
      <div class="cc-actions">
        <button class="btn btn-sm" style="background:rgba(255,255,255,0.25);color:white;padding:4px 10px;font-size:12px" onclick="event.stopPropagation();openCreditCardModal('${card.id}')">แก้ไข</button>
        <button class="btn btn-sm" style="background:rgba(239,68,68,0.8);color:white;padding:4px 10px;font-size:12px" onclick="event.stopPropagation();confirmDelete('creditCard','${card.id}','${esc(card.name)}')">ลบ</button>
      </div>
    </div>`;
  }).join('');

  grid.innerHTML = cardsHTML + `<button class="cc-add-card" onclick="openCreditCardModal()">
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
    เพิ่มบัตรเครดิต
  </button>`;

  if (state.selectedCard) selectCard(state.selectedCard);
}

function selectCard(cardId) {
  state.selectedCard = cardId;
  const card = state.data.creditCards.find(c => String(c.id) === String(cardId));
  if (!card) return;

  document.getElementById('credit-card-detail').classList.remove('hidden');
  document.getElementById('cc-detail-title').textContent = `💳 ${card.name} — รายการใช้จ่าย`;
  document.getElementById('cctx-card-id').value = cardId;

  const allTxs      = state.data.creditTransactions.filter(t => String(t.card_id) === String(cardId));
  const planRows    = allTxs.filter(t => t.is_installment_plan);
  const regularRows = allTxs.filter(t => {
    if (t.is_installment_plan) return false;
    if (!t.date) return false;
    const d = new Date(t.date);
    if (state.viewMonths <= 1) {
      return d.getFullYear() === state.year && d.getMonth() + 1 === state.month;
    }
    const start = new Date(state.year, state.month - state.viewMonths, 1);
    const end   = new Date(state.year, state.month, 0);
    return d >= start && d <= end;
  });

  // ── Installment Plans section ──────────────────────────────────────────
  const plansEl = document.getElementById('cc-installment-plans');
  if (plansEl) {
    if (planRows.length > 0) {
      plansEl.style.display = '';
      plansEl.innerHTML =
        `<div style="font-weight:700;font-size:14px;margin-bottom:10px;color:var(--text)">📅 แผนผ่อนชำระ</div>` +
        planRows.map(plan => {
          const paid     = parseInt(plan.installment_paid)    || 0;
          const total    = parseInt(plan.installment_total)   || 0;
          const monthly  = parseFloat(plan.installment_monthly) || 0;
          const origAmt  = parseFloat(plan.original_amount)  || 0;
          const pct      = total > 0 ? Math.round((paid / total) * 100) : 0;
          const isDone   = paid >= total;
          const nextNum  = paid + 1;
          const cat      = getCatInfo(plan.category, 'expense');

          return `<div class="installment-plan-card${isDone ? ' done' : ''}">
            <div class="iplan-header">
              <span class="iplan-cat">${cat.icon}</span>
              <div class="iplan-info">
                <div class="iplan-name">${esc(plan.description || '-')}</div>
                <div class="iplan-meta">ยอดรวม ${fmt(origAmt)} · ${fmt(monthly)}/งวด · เริ่ม ${fmtDate(plan.date)}</div>
              </div>
              <div class="iplan-status${isDone ? ' done' : ''}">
                ${isDone ? '✅ ผ่อนครบแล้ว' : `งวด ${paid}/${total}`}
              </div>
            </div>
            <div class="iplan-bar-row">
              <div class="iplan-bar-bg"><div class="iplan-bar-fill" style="width:${pct}%"></div></div>
              <span class="iplan-pct">${pct}%</span>
            </div>
            ${isDone ? `<div style="font-size:12px;color:var(--success);text-align:center;padding:6px 0">✅ ผ่อนครบ ${total} งวด แล้ว</div>` : `
            <div class="iplan-pay-row">
              <label style="font-size:12px;color:var(--text-muted);white-space:nowrap">📅 วันที่ชำระ:</label>
              <input type="date" class="form-input" id="iplan-date-${plan.id}"
                     value="${toDateInput(new Date())}"
                     style="width:145px;padding:5px 8px;font-size:13px;flex-shrink:0">
              <button class="btn btn-primary btn-sm iplan-pay-btn"
                      onclick="payNextInstallment('${plan.id}','${cardId}',${monthly},${nextNum},${total})">
                💳 ชำระงวดที่ ${nextNum} (${fmt(monthly)})
              </button>
              <button class="btn btn-outline btn-xs" style="flex-shrink:0"
                      onclick="openCreditTxModal('${plan.id}')">แก้ไขแผน</button>
              <button class="btn btn-danger btn-xs" style="flex-shrink:0"
                      onclick="confirmDelete('creditTx','${plan.id}','แผนผ่อน: ${esc(plan.description||'')}')">ลบแผน</button>
            </div>`}
          </div>`;
        }).join('');
    } else {
      plansEl.style.display = 'none';
      plansEl.innerHTML = '';
    }
  }

  // ── Regular transaction table ──────────────────────────────────────────
  const tbody = document.getElementById('cc-tx-table-body');
  if (!regularRows.length) {
    tbody.innerHTML = `<tr><td colspan="5"><div class="empty-state"><div class="icon">📋</div><p>ยังไม่มีรายการ</p></div></td></tr>`;
    return;
  }
  // Sort CC transactions
  const ccSorted = [...regularRows].sort((a, b) => {
    const dir = state.ccTxSortDir === 'asc' ? 1 : -1;
    if (state.ccTxSortCol === 'date')        return dir * (new Date(a.date) - new Date(b.date));
    if (state.ccTxSortCol === 'amount')      return dir * ((parseFloat(a.amount)||0) - (parseFloat(b.amount)||0));
    if (state.ccTxSortCol === 'description') return dir * (a.description||'').localeCompare(b.description||'');
    if (state.ccTxSortCol === 'category')    return dir * (a.category||'').localeCompare(b.category||'');
    return 0;
  });
  tbody.innerHTML = ccSorted.map(tx => {
    const amount      = parseFloat(tx.amount) || 0;
    const isInstPay   = typeof tx.description === 'string' && tx.description.startsWith('ผ่อนงวด ');
    const isPayment   = !isInstPay && (amount < 0 || tx.category === 'payment');
    const cat = isPayment
      ? { icon: '💰', name: 'ชำระบัตร', color: '#22c55e' }
      : getCatInfo(tx.category, 'expense');

    if (tx.from_transaction) {
      return `<tr>
        <td style="font-size:13px;color:var(--text-muted);white-space:nowrap">${fmtDate(tx.date)}</td>
        <td style="font-weight:500">${esc(tx.description||'-')} <span class="cc-tx-from-badge">จากรายรับ-รายจ่าย</span></td>
        <td><span class="cat-badge" style="background:${cat.color}22;color:${cat.color}">${cat.icon} ${cat.name}</span></td>
        <td class="text-right font-bold" style="color:var(--danger);white-space:nowrap">-${fmt(Math.abs(amount))}</td>
        <td><span style="font-size:12px;color:var(--text-muted)">—</span></td>
      </tr>`;
    }
    if (isPayment) {
      return `<tr style="background:#f0fdf4">
        <td style="font-size:13px;color:var(--text-muted);white-space:nowrap">${fmtDate(tx.date)}</td>
        <td style="font-weight:500;color:var(--success)">💰 ${esc(tx.description||'ชำระบัตรเครดิต')}</td>
        <td><span class="cat-badge" style="background:#bbf7d0;color:#15803d">💰 ชำระบัตร</span></td>
        <td class="text-right font-bold" style="color:var(--success);white-space:nowrap">+${fmt(Math.abs(amount))}</td>
        <td>
          <div style="display:flex;gap:4px">
            <button class="btn btn-outline btn-xs" onclick="openCreditTxModal('${tx.id}')">แก้ไข</button>
            <button class="btn btn-danger btn-xs" onclick="confirmDelete('creditTx','${tx.id}','${esc(tx.description||'รายการนี้')}')">ลบ</button>
          </div>
        </td>
      </tr>`;
    }
    if (isInstPay) {
      return `<tr style="background:#f0fdf4">
        <td style="font-size:13px;color:var(--text-muted);white-space:nowrap">${fmtDate(tx.date)}</td>
        <td style="font-weight:500;color:var(--success)">📅 ${esc(tx.description||'-')}</td>
        <td><span class="cat-badge" style="background:#bbf7d0;color:#15803d">📅 ผ่อนชำระ</span></td>
        <td class="text-right font-bold" style="color:var(--success);white-space:nowrap">+${fmt(Math.abs(amount))}</td>
        <td>
          <div style="display:flex;gap:4px">
            <button class="btn btn-outline btn-xs" onclick="openCreditTxModal('${tx.id}')">แก้ไข</button>
            <button class="btn btn-danger btn-xs" onclick="confirmDelete('creditTx','${tx.id}','${esc(tx.description||'รายการนี้')}')">ลบ</button>
          </div>
        </td>
      </tr>`;
    }
    return `<tr>
      <td style="font-size:13px;color:var(--text-muted);white-space:nowrap">${fmtDate(tx.date)}</td>
      <td style="font-weight:500">${esc(tx.description||'-')}</td>
      <td><span class="cat-badge" style="background:${cat.color}22;color:${cat.color}">${cat.icon} ${cat.name}</span></td>
      <td class="text-right font-bold" style="color:var(--danger);white-space:nowrap">-${fmt(Math.abs(amount))}</td>
      <td>
        <div style="display:flex;gap:4px">
          <button class="btn btn-outline btn-xs" onclick="openCreditTxModal('${tx.id}')">แก้ไข</button>
          <button class="btn btn-danger btn-xs" onclick="confirmDelete('creditTx','${tx.id}','${esc(tx.description||'รายการนี้')}')">ลบ</button>
        </div>
      </td>
    </tr>`;
  }).join('');

  // Update CC sort icons
  ['date','description','category','amount'].forEach(col => {
    const el = document.getElementById('ccsi-' + col);
    const th = document.getElementById('ccth-' + col);
    if (!el) return;
    if (state.ccTxSortCol === col) {
      el.textContent = state.ccTxSortDir === 'asc' ? '↑' : '↓';
      if (th) th.style.color = 'var(--primary)';
    } else {
      el.textContent = '↕';
      if (th) th.style.color = '';
    }
  });
}

function setCCTxSort(col) {
  if (state.ccTxSortCol === col) {
    state.ccTxSortDir = state.ccTxSortDir === 'asc' ? 'desc' : 'asc';
  } else {
    state.ccTxSortCol = col;
    state.ccTxSortDir = col === 'date' ? 'desc' : 'asc';
  }
  if (state.selectedCard) selectCard(state.selectedCard);
}

// ── Pay the next pending installment on a plan ────────────────────────────
async function payNextInstallment(planId, cardId, monthlyAmt, nextNum, totalMonths) {
  const dateInput = document.getElementById('iplan-date-' + planId);
  const payDate   = dateInput ? dateInput.value : toDateInput(new Date());
  if (!payDate) { showToast('กรุณาระบุวันที่ชำระ', 'error'); return; }

  showLoading();
  try {
    await api.payInstallment({ plan_id: planId, card_id: cardId, date: payDate });
    const remaining = totalMonths - nextNum;
    showToast(
      `✅ ชำระงวดที่ ${nextNum}/${totalMonths} (${fmt(monthlyAmt)}) สำเร็จ` +
      (remaining > 0 ? ` · เหลืออีก ${remaining} งวด` : ' · ผ่อนครบแล้ว! 🎉'),
      'success'
    );
    await _reloadAfterMutate();
  } catch (e) {
    showToast('เกิดข้อผิดพลาด: ' + e.message, 'error');
  } finally {
    hideLoading();
  }
}

// ===== FIXED COSTS =====
function renderFixedCosts() {
  const costs = state.data.fixedCosts;
  const payments = state.data.monthlyFixed;
  const s = state.data.summary;

  const paidIds = new Set(payments.filter(p => p.paid === true || p.paid === 'TRUE').map(p => String(p.fixed_cost_id)));
  const totalFixed = costs.reduce((sum, f) => sum + (parseFloat(f.amount)||0), 0);
  const paidFixed = costs.filter(f => paidIds.has(String(f.id))).reduce((sum, f) => sum + (parseFloat(f.amount)||0), 0);
  const remaining = totalFixed - paidFixed;

  document.getElementById('fc-total').textContent = fmt(totalFixed);
  document.getElementById('fc-paid').textContent = fmt(paidFixed);
  document.getElementById('fc-remaining').textContent = fmt(remaining);
  const pct = totalFixed > 0 ? (paidFixed/totalFixed*100).toFixed(1) : 0;
  document.getElementById('fc-progress-fill').style.width = pct + '%';

  const months = ['','มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน',
                  'กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
  document.getElementById('fc-month-label').textContent = `${months[state.month]} ${state.year + 543}`;

  const listEl = document.getElementById('fixed-costs-list');
  if (!costs.length) {
    listEl.innerHTML = `<div class="empty-state"><div class="icon">📌</div><h3>ยังไม่มีรายจ่ายคงที่</h3><p>เพิ่มรายจ่ายที่ต้องชำระทุกเดือน เช่น ค่าเช่า ค่าไฟ ค่าน้ำ</p></div>`;
    return;
  }

  listEl.innerHTML = costs.map(fc => {
    const cat = getCatInfo(fc.category, 'fixed');
    const paid = paidIds.has(String(fc.id));
    return `<div class="fixed-cost-item">
      <div class="fc-icon" style="background:${cat.color}22">${cat.icon}</div>
      <div class="fc-info">
        <div class="fc-name">${esc(fc.name)}</div>
        <div class="fc-meta">${cat.name}${fc.notes ? ' · ' + esc(fc.notes) : ''}</div>
      </div>
      <span class="fc-amount">${fmt(fc.amount)}</span>
      <button class="btn btn-xs ${paid ? 'btn-success' : 'btn-outline'}" onclick="toggleFixedPaid('${fc.id}', ${!paid})" style="margin-right:8px;white-space:nowrap">
        ${paid ? '✓ จ่ายแล้ว' : 'ยังไม่จ่าย'}
      </button>
      <button class="btn btn-outline btn-xs" onclick="openFixedCostModal('${fc.id}')">แก้ไข</button>
      &nbsp;
      <button class="btn btn-danger btn-xs" onclick="confirmDelete('fixedCost','${fc.id}','${esc(fc.name)}')">ลบ</button>
    </div>`;
  }).join('');
}

// ===== SAVINGS =====
function renderSavings() {
  const rows = state.data.savings || [];
  // Sort by date desc for display, but compute running balance in chronological order
  const chronological = [...rows].sort((a, b) => new Date(a.date) - new Date(b.date));
  let running = 0;
  const balanceMap = {};
  chronological.forEach(r => {
    const amt = parseFloat(r.amount) || 0;
    running += r.type === 'deposit' ? amt : -amt;
    balanceMap[r.id] = running;
  });
  const totalDeposited  = rows.filter(r => r.type === 'deposit').reduce((s, r) => s + (parseFloat(r.amount) || 0), 0);
  const totalWithdrawn  = rows.filter(r => r.type === 'withdraw').reduce((s, r) => s + (parseFloat(r.amount) || 0), 0);
  const balance = totalDeposited - totalWithdrawn;

  const balEl = document.getElementById('savings-balance-amount');
  if (balEl) balEl.textContent = fmt(balance);
  const depEl = document.getElementById('savings-total-deposited');
  if (depEl) depEl.textContent = fmt(totalDeposited);
  const wdEl  = document.getElementById('savings-total-withdrawn');
  if (wdEl)  wdEl.textContent  = fmt(totalWithdrawn);

  // Color balance card
  const card = document.getElementById('savings-balance-card');
  if (card) card.style.setProperty('--savings-color', balance >= 0 ? 'var(--success)' : 'var(--danger)');

  const tbody = document.getElementById('savings-table-body');
  if (!rows.length) {
    tbody.innerHTML = `<tr><td colspan="6"><div class="empty-state"><div class="icon">🏦</div><h3>ยังไม่มีรายการออม</h3><p>กดปุ่ม "ออมเงิน" เพื่อเริ่มออม</p></div></td></tr>`;
    return;
  }
  // Sort based on state
  const sorted = [...rows].sort((a, b) => {
    const dir = state.savingsSortDir === 'asc' ? 1 : -1;
    if (state.savingsSortCol === 'date')   return dir * (new Date(a.date) - new Date(b.date));
    if (state.savingsSortCol === 'type')   return dir * (a.type || '').localeCompare(b.type || '');
    if (state.savingsSortCol === 'amount') return dir * ((parseFloat(a.amount)||0) - (parseFloat(b.amount)||0));
    if (state.savingsSortCol === 'description') return dir * (a.description||'').localeCompare(b.description||'');
    return 0;
  });
  tbody.innerHTML = sorted.map(r => {
    const amt  = parseFloat(r.amount) || 0;
    const isDeposit = r.type === 'deposit';
    const bal  = balanceMap[r.id];
    return `<tr style="background:${isDeposit ? '#f0fdf4' : '#fff5f5'}">
      <td style="font-size:13px;color:var(--text-muted);white-space:nowrap">${fmtDate(r.date)}</td>
      <td>${isDeposit
        ? `<span class="cat-badge" style="background:#bbf7d0;color:#15803d">💰 ออมเงิน</span>`
        : `<span class="cat-badge" style="background:#fee2e2;color:#dc2626">↩️ นำออก</span>`
      }</td>
      <td style="font-weight:500">${esc(r.description || (isDeposit ? 'ออมเงิน' : 'นำออกสู่บัญชีหลัก'))}</td>
      <td class="text-right font-bold" style="color:${isDeposit ? 'var(--success)' : 'var(--danger)'};white-space:nowrap">
        ${isDeposit ? '+' : '-'}${fmt(amt)}
      </td>
      <td class="text-right" style="font-weight:600;white-space:nowrap;color:${(bal||0) >= 0 ? 'var(--text)' : 'var(--danger)'}">
        ${fmt(bal || 0)}
      </td>
      <td>
        <span style="font-size:11px;color:var(--text-muted);padding:2px 8px;border-radius:999px;background:var(--border);display:inline-block">🔒 บันทึกแล้ว</span>
      </td>
    </tr>`;
  }).join('');

  // Update savings sort icons
  ['date','type','description','amount'].forEach(col => {
    const el = document.getElementById('ssi-' + col);
    const th = document.getElementById('sth-' + col);
    if (!el) return;
    if (state.savingsSortCol === col) {
      el.textContent = state.savingsSortDir === 'asc' ? '↑' : '↓';
      if (th) th.style.color = 'var(--primary)';
    } else {
      el.textContent = '↕';
      if (th) th.style.color = '';
    }
  });
}

function setSavingsSort(col) {
  if (state.savingsSortCol === col) {
    state.savingsSortDir = state.savingsSortDir === 'asc' ? 'desc' : 'asc';
  } else {
    state.savingsSortCol = col;
    state.savingsSortDir = col === 'date' ? 'desc' : 'asc';
  }
  renderSavings();
}

function openSavingsModal(type = 'deposit', id = null) {
  const isEdit = !!id;
  document.getElementById('savings-modal-title').textContent =
    isEdit ? 'แก้ไขรายการ' :
    type === 'deposit' ? '💰 ออมเงิน' : '↩️ นำออกสู่บัญชีหลัก';
  document.getElementById('savings-id').value    = id || '';
  document.getElementById('savings-type').value  = type;

  const saveBtn = document.getElementById('savings-save-btn');
  if (saveBtn) {
    saveBtn.textContent = isEdit ? 'บันทึกการแก้ไข' : (type === 'deposit' ? '💰 ออมเงิน' : '↩️ นำออก');
    saveBtn.className = 'btn ' + (type === 'deposit' ? 'btn-primary' : 'btn-outline');
  }

  if (isEdit) {
    const rec = (state.data.savings || []).find(r => r.id === id);
    if (rec) {
      document.getElementById('savings-date').value        = rec.date ? rec.date.split('T')[0] : toDateInput(new Date());
      document.getElementById('savings-amount').value      = parseFloat(rec.amount) || '';
      document.getElementById('savings-description').value = rec.description || '';
    }
  } else {
    document.getElementById('savings-date').value        = toDateInput(new Date());
    document.getElementById('savings-description').value = '';
    // Autofill with current savings balance for deposit
    if (type === 'deposit') {
      const rows = state.data.savings || [];
      const totalDep = rows.filter(r => r.type === 'deposit').reduce((s, r) => s + (parseFloat(r.amount) || 0), 0);
      const totalWd  = rows.filter(r => r.type === 'withdraw').reduce((s, r) => s + (parseFloat(r.amount) || 0), 0);
      const bal = Math.max(0, totalDep - totalWd);
      document.getElementById('savings-amount').value = bal > 0 ? bal : '';
    } else {
      document.getElementById('savings-amount').value = '';
    }
  }
  openModal('modal-savings');
}

async function saveSavingsRecord() {
  const id   = document.getElementById('savings-id').value;
  const type = document.getElementById('savings-type').value;
  const date = document.getElementById('savings-date').value;
  const amount = parseFloat(document.getElementById('savings-amount').value) || 0;
  const description = document.getElementById('savings-description').value.trim();

  if (!date)   { showToast('กรุณาระบุวันที่', 'error'); return; }
  if (!amount) { showToast('กรุณาระบุจำนวนเงิน', 'error'); return; }

  // Validate withdrawal doesn't exceed balance
  if (type === 'withdraw') {
    const rows = state.data.savings || [];
    const totalDep = rows.filter(r => r.type === 'deposit').reduce((s, r) => s + (parseFloat(r.amount) || 0), 0);
    const totalWd  = rows.filter(r => r.type === 'withdraw' && r.id !== id).reduce((s, r) => s + (parseFloat(r.amount) || 0), 0);
    const balance  = totalDep - totalWd;
    if (amount > balance) {
      showToast(`ยอดเงินออมไม่เพียงพอ (คงเหลือ ${fmt(balance)})`, 'error'); return;
    }
  }

  const btn = document.getElementById('savings-save-btn');
  if (!_lockSave(btn)) return;
  showLoading();
  try {
    const data = { date, type, amount, description };
    if (id) {
      // Edit: only update savings record (transaction was already created on original save)
      await api.updateSavings({ ...data, id, created_at: (state.data.savings.find(r => r.id === id) || {}).created_at || '' });
      showToast('แก้ไขสำเร็จ ✓', 'success');
    } else {
      // Step 1: save savings record
      await api.addSavings(data);

      // Step 2: mirror as income/expense transaction in main ledger
      const txDesc = type === 'deposit'
        ? '🏦 ออมเงิน' + (description ? ': ' + description : '')
        : '🏦 นำเงินออมกลับบัญชีหลัก' + (description ? ': ' + description : '');
      const txData = {
        date,
        type:        type === 'deposit' ? 'expense' : 'income',
        amount,
        category:    type === 'deposit' ? 'other_ex' : 'other_in',
        description: txDesc,
        tags:        'savings',
      };
      await api.addTransaction(txData);

      showToast(
        type === 'deposit'
          ? `💰 ออมเงิน ${fmt(amount)} สำเร็จ — หักจากบัญชีหลักแล้ว`
          : `↩️ นำออก ${fmt(amount)} กลับบัญชีหลักแล้ว`,
        'success'
      );
    }
    closeModal('modal-savings');
    await _reloadAfterMutate();
  } catch (e) { showToast('เกิดข้อผิดพลาด: ' + e.message, 'error'); }
  finally { hideLoading(); _unlockSave(btn); }
}

async function confirmDeleteSavings(id, desc) {
  if (!confirm(`ลบรายการ "${desc}" ใช่ไหม?`)) return;
  showLoading();
  try {
    await api.deleteSavings(id);
    showToast('ลบสำเร็จ', 'success');
    await _reloadAfterMutate();
  } catch (e) { showToast('เกิดข้อผิดพลาด: ' + e.message, 'error'); }
  hideLoading();
}

// ===== REPORTS =====
function renderReports() {
  const s = state.data.summary;
  if (!s) return;

  document.getElementById('rpt-income').textContent = fmt(s.income);
  document.getElementById('rpt-expense').textContent = fmt(s.expense);
  document.getElementById('rpt-balance').textContent = fmt(s.balance);
  document.getElementById('rpt-savings').textContent = s.savingsRate + '%';

  renderTrendChart('rpt-trend-chart', s.trend, true);
  renderCategoryDonut('rpt-expense-cat-chart', s.expenseByCategory, 'expense');
  renderCategoryDonut('rpt-income-cat-chart', s.incomeByCategory, 'income');
  renderMonthlyBarChart('rpt-monthly-bar', s.trend);

  // Expense category breakdown list
  renderCategoryBreakdown('rpt-expense-breakdown', s.expenseByCategory, 'expense', s.expense);
  renderCategoryBreakdown('rpt-income-breakdown', s.incomeByCategory, 'income', s.income);

  // Credit card usage (with shared limit support)
  const ccEl = document.getElementById('rpt-credit-cards');
  if (!state.data.creditCards.length) {
    ccEl.innerHTML = '<div class="empty-state"><div class="icon">💳</div><p>ไม่มีบัตรเครดิต</p></div>';
  } else {
    const usageMap = buildUsageMap();
    const renderedIds = new Set();

    const rows = state.data.creditCards.map(card => {
      const cardId = String(card.id);
      if (renderedIds.has(cardId)) return '';

      const shared = getSharedInfo(card, usageMap);

      if (shared && shared.isPrimary) {
        renderedIds.add(String(shared.partnerCard.id));
        const pct = shared.sharedLimit > 0 ? Math.min((shared.totalUsed / shared.sharedLimit) * 100, 100) : 0;
        const barColor = pct > 80 ? 'var(--danger)' : pct > 60 ? 'var(--warning)' : 'var(--success)';
        return `<div style="margin-bottom:16px;padding:14px;background:#f8fafc;border-radius:var(--radius-sm);border:1px solid var(--border)">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
            <div>
              <div style="font-size:14px;font-weight:700">${esc(card.name)} + ${esc(shared.partnerCard.name)}</div>
              <div style="font-size:11.5px;color:var(--primary);margin-top:3px;font-weight:600">🔗 แชร์วงเงินร่วมกัน</div>
            </div>
            <span style="font-size:14px;font-weight:700;color:${pct>80?'var(--danger)':'var(--text)'}">${pct.toFixed(1)}%</span>
          </div>
          <div style="height:10px;background:var(--border);border-radius:5px;overflow:hidden;margin-bottom:8px">
            <div style="height:100%;width:${pct.toFixed(1)}%;background:${barColor};border-radius:5px;transition:width 0.5s"></div>
          </div>
          <div style="display:flex;gap:12px;font-size:12px;color:var(--text-muted);flex-wrap:wrap">
            <span>${esc(card.name.split(' ')[0])}: <strong>${fmt(shared.ownUsed)}</strong></span>
            <span>${esc(shared.partnerCard.name.split(' ')[0])}: <strong>${fmt(shared.partnerUsed)}</strong></span>
            <span style="margin-left:auto">รวม: <strong style="color:var(--danger)">${fmt(shared.totalUsed)}</strong> / ${fmt(shared.sharedLimit)}</span>
          </div>
          <div style="text-align:right;font-size:12px;margin-top:4px;color:var(--success)">เหลือ: <strong>${fmt(shared.available)}</strong></div>
        </div>`;
      } else if (shared && !shared.isPrimary) {
        renderedIds.add(cardId);
        return '';
      } else {
        const used = usageMap[cardId] || 0;
        const limit = parseFloat(card.credit_limit) || 0;
        const pct = limit > 0 ? Math.min((used / limit) * 100, 100) : 0;
        const barColor = pct > 80 ? 'var(--danger)' : pct > 60 ? 'var(--warning)' : 'var(--success)';
        return `<div style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px">
            <div>
              <span style="font-size:14px;font-weight:700">${esc(card.name)}</span>
              <span style="font-size:12px;color:var(--text-muted);margin-left:8px">${esc(card.bank||'')} •••• ${esc(card.last4||'')}</span>
            </div>
            <span style="font-size:13px;font-weight:600;color:${pct>80?'var(--danger)':'var(--text)'}">${pct.toFixed(1)}%</span>
          </div>
          <div style="height:8px;background:var(--border);border-radius:4px;overflow:hidden">
            <div style="height:100%;width:${pct.toFixed(1)}%;background:${barColor};border-radius:4px;transition:width 0.5s"></div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:4px;font-size:12px;color:var(--text-muted)">
            <span>ใช้ไป: <strong style="color:var(--danger)">${fmt(used)}</strong></span>
            <span>วงเงิน: ${fmt(limit)}</span>
            <span>เหลือ: <strong style="color:var(--success)">${fmt(limit - used)}</strong></span>
          </div>
        </div>`;
      }
    }).join('');

    ccEl.innerHTML = rows || '<div class="empty-state"><div class="icon">💳</div><p>ไม่มีบัตรเครดิต</p></div>';
  }

  // Fixed costs status in report
  const costs = state.data.fixedCosts;
  const payments = state.data.monthlyFixed;
  const paidIds = new Set(payments.filter(p => p.paid === true || p.paid === 'TRUE').map(p => String(p.fixed_cost_id)));
  const paidCount = costs.filter(f => paidIds.has(String(f.id))).length;
  const remainingCount = costs.length - paidCount;
  document.getElementById('rpt-fc-paid-count').textContent = paidCount;
  document.getElementById('rpt-fc-remaining-count').textContent = remainingCount;
  const pct2 = costs.length > 0 ? (paidCount/costs.length*100).toFixed(1) : 0;
  document.getElementById('rpt-fc-progress').style.width = pct2 + '%';

  const fcListEl = document.getElementById('rpt-fixed-costs-list');
  fcListEl.innerHTML = costs.map(fc => {
    const paid = paidIds.has(String(fc.id));
    const cat = getCatInfo(fc.category, 'fixed');
    return `<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid var(--border);font-size:13px">
      <span>${cat.icon}</span>
      <span style="flex:1;font-weight:500">${esc(fc.name)}</span>
      <span style="font-weight:700">${fmt(fc.amount)}</span>
      <span style="padding:2px 10px;border-radius:12px;font-size:11px;background:${paid?'var(--success-light)':'var(--danger-light)'};color:${paid?'var(--success)':'var(--danger)'}">${paid?'จ่ายแล้ว':'ยังไม่จ่าย'}</span>
    </div>`;
  }).join('') || '<p style="color:var(--text-muted);font-size:13px;padding:12px 0">ไม่มีรายจ่ายคงที่</p>';
}

function renderCategoryBreakdown(elId, catData, type, total) {
  const el = document.getElementById(elId);
  if (!catData || !Object.keys(catData).length) { el.innerHTML = '<p style="color:var(--text-muted);font-size:13px">ไม่มีข้อมูล</p>'; return; }
  const sorted = Object.entries(catData).sort((a, b) => b[1] - a[1]);
  el.innerHTML = sorted.map(([catId, amount]) => {
    const cat = getCatInfo(catId, type);
    const pct = total > 0 ? (amount/total*100).toFixed(1) : 0;
    return `<div class="cb-item">
      <span class="cb-icon">${cat.icon}</span>
      <span class="cb-name">${cat.name}</span>
      <div class="cb-bar-wrap"><div class="cb-bar" style="width:${pct}%;background:${cat.color}"></div></div>
      <span style="font-size:11px;color:var(--text-muted);width:35px;text-align:right">${pct}%</span>
      <span class="cb-amount">${fmt(amount)}</span>
    </div>`;
  }).join('');
}

// ===== CHARTS =====
const CHART_DEFAULTS = {
  font: { family: "'Sarabun', 'Inter', sans-serif", size: 12 },
  plugins: { legend: { labels: { font: { family: "'Sarabun', 'Inter', sans-serif", size: 12 } } } }
};

function renderTrendChart(canvasId, trend, tall = false) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !trend) return;
  if (state.charts[canvasId]) { state.charts[canvasId].destroy(); }
  state.charts[canvasId] = new Chart(canvas, {
    type: 'line',
    data: {
      labels: trend.map(t => t.label),
      datasets: [
        { label: 'รายรับ', data: trend.map(t => t.income), borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)', fill: true, tension: 0.4, pointBackgroundColor: '#10b981', pointRadius: 4 },
        { label: 'รายจ่าย', data: trend.map(t => t.expense), borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.08)', fill: true, tension: 0.4, pointBackgroundColor: '#ef4444', pointRadius: 4 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'top', ...CHART_DEFAULTS.plugins.legend }, tooltip: { callbacks: { label: ctx => ctx.dataset.label + ': ฿' + ctx.parsed.y.toLocaleString('th-TH') } } },
      scales: { y: { ticks: { callback: v => '฿' + (v/1000).toFixed(0) + 'k' }, grid: { color: '#f1f5f9' } }, x: { grid: { display: false } } }
    }
  });
}

function renderCategoryDonut(canvasId, catData, type) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  if (state.charts[canvasId]) { state.charts[canvasId].destroy(); }
  if (!catData || !Object.keys(catData).length) { return; }
  const entries = Object.entries(catData).filter(([,v]) => v > 0);
  const labels = entries.map(([k]) => { const c = getCatInfo(k, type); return c.icon + ' ' + c.name; });
  const data = entries.map(([,v]) => v);
  const colors = entries.map(([k]) => getCatInfo(k, type).color);
  state.charts[canvasId] = new Chart(canvas, {
    type: 'doughnut',
    data: { labels, datasets: [{ data, backgroundColor: colors, borderWidth: 2, borderColor: 'white', hoverOffset: 6 }] },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '65%',
      plugins: {
        legend: { position: 'right', labels: { font: { size: 11, family: "'Sarabun', sans-serif" }, boxWidth: 12, padding: 10 } },
        tooltip: { callbacks: { label: ctx => ctx.label + ': ฿' + ctx.parsed.toLocaleString('th-TH') + ' (' + ((ctx.parsed/ctx.dataset.data.reduce((a,b)=>a+b,0))*100).toFixed(1) + '%)' } }
      }
    }
  });
}

function renderMonthlyBarChart(canvasId, trend) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !trend) return;
  if (state.charts[canvasId]) { state.charts[canvasId].destroy(); }
  state.charts[canvasId] = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: trend.map(t => t.label),
      datasets: [
        { label: 'รายรับ', data: trend.map(t => t.income), backgroundColor: 'rgba(16,185,129,0.8)', borderRadius: 6, borderSkipped: false },
        { label: 'รายจ่าย', data: trend.map(t => t.expense), backgroundColor: 'rgba(239,68,68,0.8)', borderRadius: 6, borderSkipped: false }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'top', ...CHART_DEFAULTS.plugins.legend }, tooltip: { callbacks: { label: ctx => ctx.dataset.label + ': ฿' + ctx.parsed.y.toLocaleString('th-TH') } } },
      scales: { y: { ticks: { callback: v => '฿' + (v/1000).toFixed(0) + 'k' }, grid: { color: '#f1f5f9' } }, x: { grid: { display: false } } }
    }
  });
}

// ===== TRANSACTION MODAL =====
function openTransactionModal(id = null, preType = null) {
  const isEdit = !!id;
  document.getElementById('modal-tx-title').textContent = isEdit ? 'แก้ไขรายการ' : 'เพิ่มรายการ';

  // Populate card dropdown
  const cardSel = document.getElementById('tx-paid-by-card');
  cardSel.innerHTML = '<option value="">— เลือกบัตรเครดิต —</option>' +
    state.data.creditCards.map(c => `<option value="${c.id}">${esc(c.name)}${c.last4 ? ' ('+c.last4+')' : ''}</option>`).join('');

  if (isEdit) {
    const tx = state.data.transactions.find(t => String(t.id) === String(id));
    if (!tx) return;
    document.getElementById('tx-id').value = tx.id;
    // Safely convert any date format → YYYY-MM-DD for the input
    document.getElementById('tx-date').value = tx.date ? toDateInput(new Date(tx.date)) : toDateInput(new Date());
    document.getElementById('tx-amount').value = tx.amount;
    document.getElementById('tx-description').value = tx.description || '';
    document.getElementById('tx-notes').value = tx.notes || '';
    document.getElementById('tx-slip-ref').value = tx.slip_ref || '';
    document.getElementById('tx-linked-fc-id').value = '';
    setTxType(tx.type);
    document.getElementById('tx-category').value = tx.category;
    // Restore payment method
    if (tx.type === 'expense') {
      if (tx.paid_by_card_id && String(tx.paid_by_card_id).trim() !== '') {
        setPayMethod('credit');
        cardSel.value = tx.paid_by_card_id;
      } else {
        setPayMethod('cash');
      }
    }
  } else {
    document.getElementById('tx-id').value = '';
    document.getElementById('tx-date').value = toDateInput(new Date());
    document.getElementById('tx-amount').value = '';
    document.getElementById('tx-description').value = '';
    document.getElementById('tx-notes').value = '';
    document.getElementById('tx-slip-ref').value = '';
    document.getElementById('tx-linked-fc-id').value = '';
    setTxType(preType || 'expense');
    setPayMethod('cash');
  }
  renderCategoryGrid('tx-category-grid', document.getElementById('tx-type').value, document.getElementById('tx-category').value);
  openModal('modal-transaction');
}

function setTxType(type) {
  document.getElementById('tx-type').value = type;
  document.querySelectorAll('#modal-transaction .type-toggle-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.classList.contains(type)) btn.classList.add('active');
  });
  renderCategoryGrid('tx-category-grid', type, '');
  // Show payment method + fixed cost link only for expense
  const pmGroup = document.getElementById('tx-payment-method-group');
  const fcGroup = document.getElementById('tx-fixed-link-group');
  if (type === 'expense') {
    pmGroup.classList.remove('hidden');
    fcGroup.classList.remove('hidden');
    renderTxFixedCostList();
  } else {
    pmGroup.classList.add('hidden');
    fcGroup.classList.add('hidden');
    setPayMethod('cash');
    document.getElementById('tx-linked-fc-id').value = '';
  }
}

function renderTxFixedCostList() {
  const listEl = document.getElementById('tx-fc-link-list');
  if (!listEl) return;
  const costs = state.data.fixedCosts;
  if (!costs.length) {
    listEl.innerHTML = '<span style="font-size:12.5px;color:var(--text-muted)">ยังไม่มีรายจ่ายคงที่ — ไปเพิ่มในหน้า "รายจ่ายคงที่" ก่อน</span>';
    return;
  }
  const payments = state.data.monthlyFixed;
  const paidIds = new Set(payments.filter(p => p.paid === true || p.paid === 'TRUE').map(p => String(p.fixed_cost_id)));
  const cur = document.getElementById('tx-linked-fc-id').value;
  listEl.innerHTML = costs.map(fc => {
    const cat = getCatInfo(fc.category, 'fixed');
    const isPaid   = paidIds.has(String(fc.id));
    const isSelected = String(fc.id) === String(cur);
    return `<button type="button"
        class="fc-link-pill ${isSelected ? 'selected' : ''} ${isPaid ? 'fc-link-paid' : ''}"
        onclick="selectTxLinkedFc('${fc.id}','${esc(fc.name)}','${fc.amount}')"
        title="${isPaid ? 'จ่ายแล้วเดือนนี้' : 'ยังไม่จ่าย'}">
        ${cat.icon} ${esc(fc.name)} <strong>${fmt(fc.amount)}</strong>${isPaid ? ' <span style="font-size:10px">✓</span>' : ''}
      </button>`;
  }).join('');
}

function selectTxLinkedFc(fcId, name, amount) {
  const cur = document.getElementById('tx-linked-fc-id').value;
  if (String(cur) === String(fcId)) {
    // Toggle off
    document.getElementById('tx-linked-fc-id').value = '';
  } else {
    document.getElementById('tx-linked-fc-id').value = fcId;
    // Auto-fill description + amount if empty
    if (!document.getElementById('tx-description').value.trim()) {
      document.getElementById('tx-description').value = name;
    }
    if (!document.getElementById('tx-amount').value) {
      document.getElementById('tx-amount').value = parseFloat(amount) || '';
    }
  }
  renderTxFixedCostList();
}

// ── Fixed Cost link list for SLIP UPLOAD modal ──────────────────────────
function renderSlipFixedCostList() {
  const listEl = document.getElementById('slip-fc-link-list');
  if (!listEl) return;
  const costs = state.data.fixedCosts;
  if (!costs || !costs.length) {
    listEl.innerHTML = '<span style="font-size:12.5px;color:var(--text-muted)">ยังไม่มีรายจ่ายคงที่</span>';
    return;
  }
  const payments = state.data.monthlyFixed || [];
  const paidIds = new Set(payments.filter(p => p.paid === true || p.paid === 'TRUE').map(p => String(p.fixed_cost_id)));
  const cur = document.getElementById('slip-linked-fc-id').value;
  listEl.innerHTML = costs.map(fc => {
    const cat = getCatInfo(fc.category, 'fixed');
    const isPaid     = paidIds.has(String(fc.id));
    const isSelected = String(fc.id) === String(cur);
    return `<button type="button"
        class="fc-link-pill ${isSelected ? 'selected' : ''} ${isPaid ? 'fc-link-paid' : ''}"
        onclick="selectSlipLinkedFc('${fc.id}','${esc(fc.name)}','${fc.amount}')"
        title="${isPaid ? 'จ่ายแล้วเดือนนี้' : 'ยังไม่จ่าย'}">
        ${cat.icon} ${esc(fc.name)} <strong>${fmt(fc.amount)}</strong>${isPaid ? ' <span style="font-size:10px">✓</span>' : ''}
      </button>`;
  }).join('');
}

function selectSlipLinkedFc(fcId, name, amount) {
  const cur = document.getElementById('slip-linked-fc-id').value;
  if (String(cur) === String(fcId)) {
    document.getElementById('slip-linked-fc-id').value = '';
  } else {
    document.getElementById('slip-linked-fc-id').value = fcId;
    // Auto-fill description + amount if empty
    if (!document.getElementById('slip-description').value.trim()) {
      document.getElementById('slip-description').value = name;
    }
    if (!document.getElementById('slip-amount').value) {
      document.getElementById('slip-amount').value = parseFloat(amount) || '';
    }
  }
  renderSlipFixedCostList();
}

function setPayMethod(method) {
  document.getElementById('tx-pay-method').value = method;
  document.querySelectorAll('#modal-transaction .pay-method-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.method === method);
  });
  const cardGroup = document.getElementById('tx-card-select-group');
  if (method === 'credit') {
    cardGroup.classList.remove('hidden');
  } else {
    cardGroup.classList.add('hidden');
    document.getElementById('tx-paid-by-card').value = '';
  }
}

function setSlipPayMethod(method) {
  document.getElementById('slip-pay-method').value = method;
  document.querySelectorAll('#modal-slip .pay-method-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.method === method);
  });
  const cardGroup = document.getElementById('slip-card-select-group');
  if (method === 'credit') {
    cardGroup.classList.remove('hidden');
  } else {
    cardGroup.classList.add('hidden');
    document.getElementById('slip-paid-by-card').value = '';
  }
}

function renderCategoryGrid(gridId, type, selectedId) {
  const grid = document.getElementById(gridId);
  const cats = CATEGORIES[type] || CATEGORIES.expense;
  grid.innerHTML = cats.map(c => `
    <button type="button" class="cat-option ${c.id === selectedId ? 'selected' : ''}" onclick="selectCategory('${gridId}','${type}','${c.id}')">
      <span class="icon">${c.icon}</span>
      <span class="name">${c.name}</span>
    </button>`).join('');
}

function selectCategory(gridId, type, catId) {
  const prefix = gridId === 'tx-category-grid' ? 'tx' : 'fc';
  document.getElementById(prefix + '-category').value = catId;
  renderCategoryGrid(gridId, type, catId);
}

async function saveTransaction() {
  const id = document.getElementById('tx-id').value;
  const type = document.getElementById('tx-type').value;
  const payMethod = type === 'expense' ? document.getElementById('tx-pay-method').value : 'cash';
  const paidByCard = payMethod === 'credit' ? document.getElementById('tx-paid-by-card').value : '';
  if (type === 'expense' && payMethod === 'credit' && !paidByCard) {
    showToast('กรุณาเลือกบัตรเครดิต', 'error'); return;
  }
  const data = {
    date:            document.getElementById('tx-date').value,
    type,
    category:        document.getElementById('tx-category').value,
    description:     document.getElementById('tx-description').value,
    amount:          document.getElementById('tx-amount').value,
    notes:           document.getElementById('tx-notes').value,
    paid_by_card_id: paidByCard,
    slip_ref:        document.getElementById('tx-slip-ref').value.trim(),
  };
  if (!data.date || !data.amount || !data.category || !data.description) {
    showToast('กรุณากรอกข้อมูลให้ครบ', 'error'); return;
  }
  const linkedFcId = document.getElementById('tx-linked-fc-id').value;
  const btn = document.getElementById('tx-save-btn');
  if (!_lockSave(btn)) return;
  showLoading();
  try {
    if (id) {
      const tx = state.data.transactions.find(t => String(t.id) === String(id));
      await api.updateTransaction({ ...tx, ...data });
      showToast('แก้ไขรายการสำเร็จ', 'success');
    } else {
      await api.addTransaction(data);
      showToast('เพิ่มรายการสำเร็จ', 'success');
    }
    // If linked to a fixed cost → auto-mark it as paid
    if (linkedFcId && data.type === 'expense') {
      try {
        await api.setMonthlyFixed({ fixed_cost_id: linkedFcId, year: state.year, month: state.month, paid: true });
        showToast('✓ มาร์กว่าชำระรายจ่ายคงที่แล้ว', 'success');
      } catch(e) { /* non-fatal */ }
    }
    closeModal('modal-transaction');
    await _reloadAfterMutate();
  } catch (e) { showToast('เกิดข้อผิดพลาด: ' + e.message, 'error'); }
  finally { hideLoading(); _unlockSave(btn); }
}

// ===== SLIP MODAL =====
function openSlipModal() {
  document.getElementById('slip-date').value = toDateInput(new Date());
  document.getElementById('slip-amount').value = '';
  document.getElementById('slip-description').value = '';
  document.getElementById('slip-ref').value = '';
  document.getElementById('slip-preview').classList.add('hidden');
  document.getElementById('slip-placeholder').classList.remove('hidden');
  document.getElementById('slip-ocr-section').style.display = 'none';
  document.getElementById('slip-ocr-status').textContent = '';
  document.getElementById('slip-ocr-bar').style.display = 'none';
  document.getElementById('slip-ocr-fill').style.width = '0%';
  document.getElementById('slip-file-input').value = '';
  document.getElementById('slip-scan-btn').textContent = '🔍 สแกนและอ่านข้อมูลอัตโนมัติ';
  document.getElementById('slip-scan-btn').disabled = false;
  document.getElementById('slip-linked-fc-id').value = '';
  setSlipType('expense');
  setSlipPayMethod('cash');
  renderSlipFixedCostList();
  // Populate card dropdown
  const cardSel = document.getElementById('slip-paid-by-card');
  cardSel.innerHTML = '<option value="">— เลือกบัตรเครดิต —</option>' +
    state.data.creditCards.map(c => `<option value="${c.id}">${esc(c.name)}${c.last4 ? ' ('+c.last4+')' : ''}</option>`).join('');
  openModal('modal-slip');
}

function setSlipType(type) {
  document.getElementById('slip-type').value = type;
  document.querySelectorAll('#modal-slip .type-toggle-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.classList.contains(type)) btn.classList.add('active');
  });
  const cats = type === 'income' ? CATEGORIES.income : CATEGORIES.expense;
  document.getElementById('slip-category').innerHTML = cats.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
  // Show fixed cost link only for expense
  const fcGroup = document.getElementById('slip-fixed-link-group');
  if (fcGroup) fcGroup.style.display = type === 'expense' ? '' : 'none';
  if (type !== 'expense') {
    document.getElementById('slip-linked-fc-id').value = '';
  }
}

function previewSlip(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const img = document.getElementById('slip-preview');
    img.src = e.target.result;
    img.classList.remove('hidden');
    document.getElementById('slip-placeholder').classList.add('hidden');
    document.getElementById('slip-ocr-section').style.display = '';
    // Auto-trigger OCR
    scanSlip();
  };
  reader.readAsDataURL(file);
}

async function saveSlipTransaction() {
  const payMethod = document.getElementById('slip-pay-method').value;
  const paidByCard = payMethod === 'credit' ? document.getElementById('slip-paid-by-card').value : '';
  if (payMethod === 'credit' && !paidByCard) {
    showToast('กรุณาเลือกบัตรเครดิต', 'error'); return;
  }
  const linkedFcId = document.getElementById('slip-linked-fc-id').value;
  const data = {
    date:            document.getElementById('slip-date').value,
    type:            document.getElementById('slip-type').value,
    category:        document.getElementById('slip-category').value,
    description:     document.getElementById('slip-description').value,
    amount:          document.getElementById('slip-amount').value,
    notes:           'บันทึกจากสลิป',
    paid_by_card_id: paidByCard,
    slip_ref:        document.getElementById('slip-ref').value.trim(),
  };
  if (!data.date || !data.amount || !data.description) {
    showToast('กรุณากรอกข้อมูลให้ครบ', 'error'); return;
  }
  const btn = document.getElementById('slip-save-btn');
  if (!_lockSave(btn)) return;
  showLoading();
  try {
    await api.addTransaction(data);
    // Auto-mark linked fixed cost as paid
    if (linkedFcId) {
      try {
        await api.setMonthlyFixed({
          fixed_cost_id: linkedFcId,
          year: state.year,
          month: state.month,
          paid: true,
        });
      } catch (_) { /* non-fatal */ }
    }
    showToast('บันทึกรายการจากสลิปสำเร็จ' + (linkedFcId ? ' และทำเครื่องหมายรายจ่ายคงที่แล้ว ✓' : ''), 'success');
    closeModal('modal-slip');
    await _reloadAfterMutate();
  } catch (e) { showToast('เกิดข้อผิดพลาด: ' + e.message, 'error'); }
  finally { hideLoading(); _unlockSave(btn); }
}

// ===== OCR / SLIP SCANNING =====
let _tesseractWorker = null;

async function getTesseractWorker(progressCb) {
  if (!window.Tesseract) {
    await new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
      s.onload = resolve;
      s.onerror = () => reject(new Error('โหลด OCR Engine ไม่ได้ กรุณาเชื่อมต่ออินเทอร์เน็ต'));
      document.head.appendChild(s);
    });
  }
  if (_tesseractWorker) return _tesseractWorker;
  _tesseractWorker = await Tesseract.createWorker(['tha', 'eng'], 1, {
    logger: m => { if (progressCb) progressCb(m); }
  });
  return _tesseractWorker;
}

async function scanSlip() {
  const img = document.getElementById('slip-preview');
  if (img.classList.contains('hidden') || !img.src || img.src === window.location.href) {
    showToast('กรุณาอัพโหลดรูปสลิปก่อน', 'error'); return;
  }
  const btn = document.getElementById('slip-scan-btn');
  const statusEl = document.getElementById('slip-ocr-status');
  const barEl = document.getElementById('slip-ocr-bar');
  const fillEl = document.getElementById('slip-ocr-fill');
  btn.disabled = true;
  btn.textContent = '⏳ กำลังโหลด OCR Engine...';
  barEl.style.display = '';
  fillEl.style.width = '2%';
  statusEl.textContent = 'กำลังโหลด OCR Engine (ครั้งแรกอาจใช้เวลา 15-30 วินาที)...';
  try {
    const worker = await getTesseractWorker(m => {
      if (m.status === 'loading tesseract core') {
        statusEl.textContent = 'โหลด OCR Engine... ' + Math.round((m.progress || 0) * 100) + '%';
        fillEl.style.width = Math.round((m.progress || 0) * 25) + '%';
      } else if (m.status === 'loading language traineddata') {
        statusEl.textContent = 'โหลดข้อมูลภาษา... ' + Math.round((m.progress || 0) * 100) + '%';
        fillEl.style.width = (25 + Math.round((m.progress || 0) * 45)) + '%';
      } else if (m.status === 'recognizing text') {
        statusEl.textContent = 'กำลังอ่านข้อความ... ' + Math.round((m.progress || 0) * 100) + '%';
        fillEl.style.width = (70 + Math.round((m.progress || 0) * 30)) + '%';
      }
    });
    btn.textContent = '⏳ กำลังอ่านสลิป...';
    const result = await worker.recognize(img);
    const text = result.data.text;
    fillEl.style.width = '100%';
    fillFromOCR(text);
    statusEl.textContent = '✅ อ่านสลิปเสร็จแล้ว — ตรวจสอบและแก้ไขข้อมูลได้ตามต้องการ';
  } catch (e) {
    statusEl.textContent = '❌ ไม่สามารถอ่านสลิปได้: ' + e.message;
    barEl.style.display = 'none';
  } finally {
    btn.disabled = false;
    btn.textContent = '🔍 สแกนอีกครั้ง';
  }
}

const SLIP_KEYWORDS = [
  { patterns: ['การไฟฟ้า','ค่าไฟ','electricity','pea','mea','provincial electricity','metropolitan electricity','กฟน','กฟภ'], cat: 'electric', desc: 'ค่าไฟฟ้า' },
  { patterns: ['ประปา','ค่าน้ำ','waterworks','mwa','pwa','water authority','กปน','กปภ'], cat: 'water', desc: 'ค่าน้ำประปา' },
  { patterns: ['internet','อินเตอร์เน็ต','อินเทอร์เน็ต','3bb','tot fibre','ais fibre','true online','fiber optic'], cat: 'internet', desc: 'ค่าอินเทอร์เน็ต' },
  { patterns: ['ais','dtac','true move','ค่าโทรศัพท์มือถือ','ntmobile','ntml'], cat: 'phone_fix', desc: 'ค่าโทรศัพท์' },
  { patterns: ['insurance','ประกัน','muang thai life','allianz','axa','fwd','ocean life'], cat: 'insurance', desc: 'ค่าประกัน' },
  { patterns: ['ค่าเช่า','rent','rental','ค่าห้อง'], cat: 'rent', desc: 'ค่าเช่า' },
  { patterns: ['netflix','spotify','youtube premium','disney+','hbo','viu','apple tv','paramount'], cat: 'streaming', desc: 'ค่า Streaming' },
  { patterns: ['gym','fitness','รายการออกกำลังกาย','fitnessfirst','virgin active'], cat: 'gym', desc: 'ค่าฟิตเนส' },
  { patterns: ['ร้านอาหาร','restaurant','food delivery','grab food','foodpanda','lineman'], cat: 'food', desc: 'ค่าอาหาร' },
  { patterns: ['grab','bolt','taxi','bts','mrt','airport rail','fuel','น้ำมัน','เชื้อเพลิง'], cat: 'transport', desc: 'ค่าเดินทาง' },
  { patterns: ['hospital','โรงพยาบาล','clinic','pharmacy','ร้านขายยา','รพ.'], cat: 'health', desc: 'ค่าสุขภาพ' },
];

function detectCategoryFromText(lowerText) {
  for (const entry of SLIP_KEYWORDS) {
    for (const pat of entry.patterns) {
      if (lowerText.includes(pat.toLowerCase())) {
        return { cat: entry.cat, desc: entry.desc };
      }
    }
  }
  return null;
}

/**
 * ดึงยอดเงินจาก OCR text ของสลิปธนาคารไทย
 *
 * ลำดับความสำคัญ (หยุดทันทีเมื่อหาเจอ):
 *  1. "จำนวน" / "จำนวน :" / "จำนวนเงิน :" — keyword หลักบนสลิปทุกธนาคาร
 *  2. ตัวเลขที่ตามหลัง "บาท" ทันที — e.g. "500.00 บาท" หรือ "บาท 500.00"
 *  3. ฿ symbol
 *  4. คำว่า ยอด / amount / total
 *  5. Fallback: ตัวเลขทศนิยม 2 ตำแหน่ง (.xx) ที่มีขนาดสมเหตุสมผล
 *     (ไม่ใช้ "ตัวเลขใหญ่สุด" เพราะจะไปชนเลขบัญชีหรือเลขอ้างอิง)
 */
function extractSlipAmount(rawText) {
  // ── Step 0: Normalise OCR noise ─────────────────────────────────────────
  // Thai digits → Arabic, zero-width/NBSP → space, collapse tabs
  const THAI_DIG = {'๐':'0','๑':'1','๒':'2','๓':'3','๔':'4','๕':'5','๖':'6','๗':'7','๘':'8','๙':'9'};
  let text = rawText
    .replace(/[๐-๙]/g, c => THAI_DIG[c] || c)   // Thai numerals
    .replace(/[\u200b\u00a0\ufeff]/g, ' ')         // zero-width, NBSP
    .replace(/[ \t]+/g, ' ');                       // collapse whitespace

  /**
   * Smart number parser — handles every OCR format Thai bank slip produces:
   *   "1,500.00"   standard            → 1500.00
   *   "1.500.00"   OCR comma→dot       → 1500.00
   *   "1 500.00"   space=thousands     → 1500.00
   *   "1,500 00"   OCR dot→space       → 1500.00
   *   "1 500 00"   both seps → space   → 1500.00  ← NEW
   *   "1500.00"    no thousands sep    → 1500.00
   *   "500.50"     simple decimal      → 500.50
   *   "1.500,00"   European format     → 1500.00
   *   "500"        integer             → 500.00
   */
  function parseNum(raw) {
    if (!raw) return null;
    // Normalise Thai digits within captured string too
    let r = raw.replace(/[๐-๙]/g, c => THAI_DIG[c] || c);
    // Replace letter-O that OCR confused with zero (common with PromptPay / KBank slips)
    r = r.replace(/O/g, '0');

    // ── Special case: spaces could be BOTH thousands AND decimal separator ──
    // e.g. "1 500 00" → the last group of 1–2 digits is likely cents
    const spaceParts = r.trim().split(/\s+/);
    if (spaceParts.length >= 2 && spaceParts.every(p => /^\d+$/.test(p))) {
      const last = spaceParts[spaceParts.length - 1];
      if (last.length <= 2) {
        // Last part = cents, rest = integer (join them)
        const intStr = spaceParts.slice(0, -1).join('');
        const candidate = parseFloat(intStr + '.' + last.padEnd(2, '0'));
        if (!isNaN(candidate) && candidate > 0 && candidate < 10_000_000) return candidate;
      }
      // All groups, no decimal → plain integer
      const intOnly = parseFloat(spaceParts.join(''));
      if (!isNaN(intOnly) && intOnly > 0 && intOnly < 10_000_000) return intOnly;
    }

    // Now strip all whitespace for separator analysis
    let s = r.replace(/\s/g, '');
    if (!s || !/\d/.test(s)) return null;

    const dotCount   = (s.match(/\./g) || []).length;
    const commaCount = (s.match(/,/g)  || []).length;
    let n;

    if (dotCount === 0 && commaCount === 0) {
      n = parseFloat(s);                             // plain integer "1500"

    } else if (dotCount >= 1 && commaCount === 0) {
      if (dotCount === 1) {
        const afterDot = s.slice(s.lastIndexOf('.') + 1);
        if (afterDot.length === 3 && !/^0/.test(afterDot)) {
          // "1.500" — thousands dot (Thai style), no cents → remove dot
          n = parseFloat(s.replace(/\./g, ''));
        } else {
          // "500.50" or "1500.0" — normal decimal
          n = parseFloat(s);
        }
      } else {
        // "1.500.00" — multiple dots: last = decimal, rest = thousands
        const parts = s.split('.');
        const dec   = parts.pop();
        n = parseFloat(parts.join('') + '.' + dec);
      }

    } else if (dotCount === 0 && commaCount >= 1) {
      if (commaCount === 1) {
        const afterComma = s.slice(s.lastIndexOf(',') + 1);
        if (afterComma.length === 3 && !/^0/.test(afterComma)) {
          n = parseFloat(s.replace(/,/g, ''));       // "1,500" thousands comma
        } else {
          n = parseFloat(s.replace(',', '.'));        // "1500,50" European decimal
        }
      } else {
        n = parseFloat(s.replace(/,/g, ''));          // "1,500,000"
      }

    } else {
      // Mixed dot + comma
      const lastDot   = s.lastIndexOf('.');
      const lastComma = s.lastIndexOf(',');
      if (lastDot > lastComma) {
        n = parseFloat(s.replace(/,/g, ''));          // "1,500.00"
      } else {
        n = parseFloat(s.replace(/\./g, '').replace(',', '.')); // "1.500,00"
      }
    }

    return (!isNaN(n) && n > 0 && n < 10_000_000) ? Math.round(n * 100) / 100 : null;
  }

  // ── Helper: try to parse any number-looking token near a keyword ──────
  function firstNum(str) {
    // Try whole string first, then first whitespace-delimited token
    const n = parseNum(str);
    if (n !== null) return n;
    const tok = str.trim().split(/\s+/)[0];
    return parseNum(tok);
  }

  // ── Priority 1: "จำนวน" / "จำนวนเงิน" keyword ───────────────────────────
  // Tolerates OCR noise: จานวน, จำนวณ, ฉำนวน etc. → จ…วน
  // Also handles number on next line(s)
  const numCapture = '[\\d][\\d,.๐-๙ ]*';
  // Same-line match
  const jamnuanRe = new RegExp(
    'จ.{0,6}วน(?:เงิน)?(?:\\s*\\([^)]{0,25}\\))?\\s*[:\\-–]?\\s*(' + numCapture + ')', '');
  let m = text.match(jamnuanRe);
  if (!m) {
    // Next-line match (number may be on the line immediately after)
    const mlRe = new RegExp(
      'จ.{0,6}วน(?:เงิน)?[^\\n\\r]*[\\n\\r]+\\s*(' + numCapture + ')', '');
    m = text.match(mlRe);
  }
  if (m) {
    const n = firstNum(m[1]);
    if (n !== null) return n;
  }

  // ── Priority 2: number immediately before or after "บาท" ─────────────────
  const bahtAfterRe  = /([\d๐-๙][,.\d๐-๙ ]*)\s*บาท/g;
  const bahtBeforeRe = /บาท\s*([\d๐-๙][,.\d๐-๙ ]*)/g;
  const bahtMatches  = [];
  let bm;
  while ((bm = bahtAfterRe.exec(text))  !== null) { const n = firstNum(bm[1]); if (n) bahtMatches.push(n); }
  while ((bm = bahtBeforeRe.exec(text)) !== null) { const n = firstNum(bm[1]); if (n) bahtMatches.push(n); }
  if (bahtMatches.length === 1) return bahtMatches[0];
  if (bahtMatches.length > 1)   return bahtMatches[bahtMatches.length - 1];

  // ── Priority 3: ฿ symbol ────────────────────────────────────────────────
  const bsm = text.match(/฿\s*([\d][,.\d ]*)/);
  if (bsm) { const n = firstNum(bsm[1]); if (n) return n; }

  // ── Priority 4: ยอด / amount / total keywords ────────────────────────────
  const kwRe = /(?:ยอด(?:ชำระ|โอน|รวม|เงิน)?|amount|total\s*(?:amount)?|net\s*amount)\s*[:\-–]?\s*([\d][,.\d ]*)/i;
  const kwm = text.match(kwRe);
  if (kwm) { const n = firstNum(kwm[1]); if (n) return n; }

  // ── Priority 5 (fallback): decimal numbers with exactly 2 decimal places ─
  // Thai bank slips ALWAYS show cents, so .00 / .50 etc. is the strongest signal
  const decRe = /\b((?:\d{1,3}[,. ])*\d{1,3}[,.]\d{2})\b/g;
  const decCandidates = [];
  let dm;
  while ((dm = decRe.exec(text)) !== null) {
    const n = parseNum(dm[1]);
    if (n !== null && n >= 1 && !(n >= 2000 && n <= 2600)) decCandidates.push(n);
  }
  if (decCandidates.length > 0) {
    // Prefer amounts that are NOT time-like (e.g. 10.30)
    const nonTime = decCandidates.find(n => n >= 100 || (n % 1) > 0.09);
    return nonTime !== undefined ? nonTime : decCandidates[0];
  }

  return null;
}

function fillFromOCR(text) {
  const lowerText = text.toLowerCase();

  // 1. Extract reference number (เลขที่รายการ) — highest priority, most unique data on slip
  const refPatterns = [
    /(?:เลขที่รายการ|หมายเลขอ้างอิง|เลขอ้างอิง|รายการเลขที่)[^\d\w]*([A-Z0-9][\dA-Z]{5,})/i,
    /(?:ref(?:erence)?\.?\s*(?:no\.?|number)?|transaction\s*(?:id|ref|no))[^\d\w]*([A-Z0-9][\dA-Z\-]{5,})/i,
    /(?:ref|txn|trx)\s*[:#]?\s*([A-Z0-9]{8,})/i,
    // Long numeric string (10–20 digits) that looks like a reference number
    /\b(\d{10,20})\b/,
  ];
  for (const pat of refPatterns) {
    const m = text.match(pat);
    if (m) {
      const ref = m[1].replace(/\s+/g, '').toUpperCase();
      // Exclude date-like or phone-like strings
      if (ref.length >= 6 && !/^(25|20)\d{2}/.test(ref)) {
        document.getElementById('slip-ref').value = ref;
        break;
      }
    }
  }

  // 2. Extract amount — "จำนวน" is THE anchor keyword on every Thai bank slip
  const detectedAmount = extractSlipAmount(text);
  if (detectedAmount !== null) {
    document.getElementById('slip-amount').value = detectedAmount.toFixed(2);
  }

  // 3. Detect category
  const catResult = detectCategoryFromText(lowerText);
  if (catResult) {
    document.getElementById('slip-category').value = catResult.cat;
    if (!document.getElementById('slip-description').value.trim()) {
      document.getElementById('slip-description').value = catResult.desc;
    }
    setSlipType('expense'); // also shows FC list
  }
  // Refresh FC list in case it wasn't shown yet
  renderSlipFixedCostList();

  // 4. Extract date — Thai + numeric formats, priority order
  _fillOCRDate(text);
}

/**
 * Date extraction separated so it can run on the full OCR text with all formats.
 * Priority: Thai full name → Thai short name → numeric YYYY/MM/DD → DD/MM/YYYY
 */
function _fillOCRDate(rawText) {
  // ── Normalise ───────────────────────────────────────────────────────────
  const THAI_DIG = {'๐':'0','๑':'1','๒':'2','๓':'3','๔':'4','๕':'5','๖':'6','๗':'7','๘':'8','๙':'9'};
  const norm = rawText
    .replace(/[๐-๙]/g, c => THAI_DIG[c] || c)
    .replace(/[\u200b\u00a0\ufeff]/g, ' ')
    .replace(/[ \t]{2,}/g, ' ');

  // sep = any date separator including optional surrounding spaces
  const SEP = '\\s*[/\\-\\.]\\s*';

  /**
   * trySetDate — validates and writes the date to #slip-date.
   * Accepts Buddhist Era (y > 2400) and 2-digit years (interpreted as BE 25xx).
   */
  function trySetDate(y, mo, d) {
    y = parseInt(y, 10); mo = parseInt(mo, 10); d = parseInt(d, 10);
    if (isNaN(y) || isNaN(mo) || isNaN(d)) return false;
    // 2-digit year: could be CE (25, 26) or short BE (63-70 → 2563-2570, 68 → 2568)
    if (y < 100) {
      // Assume Buddhist short year if 60–99, else current century CE
      y += (y >= 60 ? 2500 : 2000);
    }
    if (y > 2400) y -= 543;           // Convert BE → CE
    if (y < 2010 || y > 2040) return false;
    if (mo < 1 || mo > 12 || d < 1 || d > 31) return false;
    document.getElementById('slip-date').value =
      `${y}-${String(mo).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    return true;
  }

  // ── Pattern A: Thai FULL month name ─────────────────────────────────────
  // "14 เมษายน 2568"  /  "วันที่ 14 เมษายน 68"  /  "14เมษายน2568"
  const THAI_FULL = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน',
                     'กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
  for (let mi = 0; mi < THAI_FULL.length; mi++) {
    const re = new RegExp('(\\d{1,2})\\s*' + THAI_FULL[mi] + '\\s*(\\d{2,4})');
    const hit = re.exec(norm);
    if (hit && trySetDate(hit[2], mi + 1, hit[1])) return;
  }

  // ── Pattern B: Thai SHORT month abbreviations ────────────────────────────
  // Each month has several OCR variants (dots optional, may have space)
  const THAI_SHORT = [
    ['ม\\.?ค\\.?', 'ม ค'],               // มกราคม
    ['ก\\.?พ\\.?', 'ก พ'],               // กุมภาพันธ์
    ['มี\\.?ค\\.?', 'มี ค'],             // มีนาคม
    ['เม\\.?ย\\.?', 'เม ย'],             // เมษายน
    ['พ\\.?ค\\.?', 'พ ค'],               // พฤษภาคม
    ['มิ\\.?ย\\.?', 'มิ ย'],             // มิถุนายน
    ['ก\\.?ค\\.?', 'ก ค'],               // กรกฎาคม
    ['ส\\.?ค\\.?', 'ส ค'],               // สิงหาคม
    ['ก\\.?ย\\.?', 'ก ย'],               // กันยายน
    ['ต\\.?ค\\.?', 'ต ค'],               // ตุลาคม
    ['พ\\.?ย\\.?', 'พ ย'],               // พฤศจิกายน
    ['ธ\\.?ค\\.?', 'ธ ค'],               // ธันวาคม
  ];
  for (let mi = 0; mi < THAI_SHORT.length; mi++) {
    for (const variant of THAI_SHORT[mi]) {
      const re = new RegExp('(\\d{1,2})\\s*(?:' + variant + ')\\s*(\\d{2,4})');
      const hit = re.exec(norm);
      if (hit && trySetDate(hit[2], mi + 1, hit[1])) return;
    }
  }

  // ── Pattern C: YYYY/MM/DD (possibly Buddhist year 2568) ─────────────────
  // Allows spaces around separators: "2568 / 04 / 14"
  const ymdRe = new RegExp(
    '\\b(2[0-9]{3}|25[0-9]{2})' + SEP + '(0?[1-9]|1[0-2])' + SEP + '(0?[1-9]|[12]\\d|3[01])\\b', 'g');
  let hit;
  while ((hit = ymdRe.exec(norm)) !== null) {
    if (trySetDate(hit[1], hit[2], hit[3])) return;
  }

  // ── Pattern D: DD/MM/YYYY or DD/MM/YYYY (full 4-digit year) ─────────────
  const dmyRe = new RegExp(
    '\\b(0?[1-9]|[12]\\d|3[01])' + SEP + '(0?[1-9]|1[0-2])' + SEP + '(2[0-9]{3}|25[0-9]{2})\\b', 'g');
  while ((hit = dmyRe.exec(norm)) !== null) {
    if (trySetDate(hit[3], hit[2], hit[1])) return;
  }

  // ── Pattern E: DD/MM/YY (2-digit year — Thai slips often use short BE) ──
  // e.g. "14/04/68" = 14 April 2568
  const dmyShortRe = new RegExp(
    '\\b(0?[1-9]|[12]\\d|3[01])' + SEP + '(0?[1-9]|1[0-2])' + SEP + '(\\d{2})\\b', 'g');
  while ((hit = dmyShortRe.exec(norm)) !== null) {
    if (trySetDate(hit[3], hit[2], hit[1])) return;
  }

  // ── Pattern F: วันที่ / date label prefix ────────────────────────────────
  // "วันที่ 14/04/68"  or  "date: 2025-04-14"
  const labelRe = /(?:วัน(?:ที่)?|date\s*:?)\s*(\d{1,2})\s*[\/\-\.]\s*(\d{1,2})\s*[\/\-\.]\s*(\d{2,4})/gi;
  while ((hit = labelRe.exec(norm)) !== null) {
    // Try DD/MM/Y format first
    if (trySetDate(hit[3], hit[2], hit[1])) return;
  }
}

// ===== CREDIT CARD MODAL =====
function openCreditCardModal(id = null) {
  document.getElementById('modal-cc-title').textContent = id ? 'แก้ไขบัตรเครดิต' : 'เพิ่มบัตรเครดิต';
  document.getElementById('cc-id').value = id || '';

  // Populate linked card dropdown (exclude self)
  const linkedSel = document.getElementById('cc-linked-card');
  linkedSel.innerHTML = '<option value="">-- เลือกบัตรที่ต้องการแชร์วงเงิน --</option>';
  state.data.creditCards
    .filter(c => !id || String(c.id) !== String(id))
    .forEach(c => {
      const o = document.createElement('option');
      o.value = c.id;
      o.textContent = `${c.name}${c.last4 ? ' (•••• ' + c.last4 + ')' : ''}`;
      linkedSel.appendChild(o);
    });

  if (id) {
    const card = state.data.creditCards.find(c => String(c.id) === String(id));
    if (!card) return;
    document.getElementById('cc-name').value = card.name || '';
    document.getElementById('cc-bank').value = card.bank || 'KBank';
    document.getElementById('cc-last4').value = card.last4 || '';
    document.getElementById('cc-limit').value = card.credit_limit || '';
    document.getElementById('cc-statement-day').value = card.statement_day || '';
    document.getElementById('cc-due-day').value = card.due_day || '';
    document.getElementById('cc-color').value = card.color || '#6366f1';

    // Shared limit state
    const linkedId = String(card.linked_card_id || '').trim();
    const useShared = !!linkedId;
    document.getElementById('cc-use-shared').checked = useShared;
    document.getElementById('cc-linked-card-id').value = linkedId;
    document.getElementById('shared-limit-body').classList.toggle('hidden', !useShared);
    if (useShared) linkedSel.value = linkedId;
  } else {
    document.getElementById('cc-name').value = '';
    document.getElementById('cc-last4').value = '';
    document.getElementById('cc-limit').value = '';
    document.getElementById('cc-statement-day').value = '';
    document.getElementById('cc-due-day').value = '';
    document.getElementById('cc-color').value = '#6366f1';
    document.getElementById('cc-use-shared').checked = false;
    document.getElementById('cc-linked-card-id').value = '';
    document.getElementById('shared-limit-body').classList.add('hidden');
    linkedSel.value = '';
  }
  openModal('modal-credit-card');
}

function toggleSharedLimitUI() {
  const checked = document.getElementById('cc-use-shared').checked;
  document.getElementById('shared-limit-body').classList.toggle('hidden', !checked);
  if (!checked) {
    document.getElementById('cc-linked-card').value = '';
    document.getElementById('cc-linked-card-id').value = '';
  }
}

function selectCardColor(btn) {
  document.getElementById('cc-color').value = btn.dataset.color;
  document.querySelectorAll('.cc-color-btn').forEach(b => b.style.outline = 'none');
  btn.style.outline = '3px solid var(--primary)';
  btn.style.outlineOffset = '2px';
}
function selectCardColorCustom(color) {
  document.getElementById('cc-color').value = color;
  document.querySelectorAll('.cc-color-btn').forEach(b => b.style.outline = 'none');
}

async function saveCreditCard() {
  const id = document.getElementById('cc-id').value;
  const useShared = document.getElementById('cc-use-shared').checked;
  const linkedCardId = useShared ? document.getElementById('cc-linked-card').value : '';

  if (useShared && !linkedCardId) {
    showToast('กรุณาเลือกบัตรที่ต้องการแชร์วงเงิน', 'error'); return;
  }

  // Warn if trying to link to a card that's already a secondary (avoid chain links)
  if (useShared && linkedCardId) {
    const targetCard = state.data.creditCards.find(c => String(c.id) === linkedCardId);
    if (targetCard && String(targetCard.linked_card_id || '').trim()) {
      showToast('บัตรที่เลือกมีการเชื่อมวงเงินอยู่แล้ว — ไม่สามารถเชื่อมซ้อนได้', 'error'); return;
    }
  }

  const data = {
    name: document.getElementById('cc-name').value,
    bank: document.getElementById('cc-bank').value,
    last4: document.getElementById('cc-last4').value,
    credit_limit: document.getElementById('cc-limit').value,
    statement_day: document.getElementById('cc-statement-day').value,
    due_day: document.getElementById('cc-due-day').value,
    color: document.getElementById('cc-color').value,
    linked_card_id: linkedCardId,
  };
  if (!data.name || !data.credit_limit) { showToast('กรุณากรอกชื่อบัตรและวงเงิน', 'error'); return; }
  const btn = document.getElementById('cc-save-btn');
  if (!_lockSave(btn)) return;
  showLoading();
  try {
    if (id) { await api.updateCreditCard({ ...data, id }); showToast('แก้ไขบัตรสำเร็จ', 'success'); }
    else { await api.addCreditCard(data); showToast('เพิ่มบัตรสำเร็จ', 'success'); }
    closeModal('modal-credit-card');
    await _reloadAfterMutate();
  } catch (e) { showToast('เกิดข้อผิดพลาด: ' + e.message, 'error'); }
  finally { hideLoading(); _unlockSave(btn); }
}

// ===== CREDIT TX KIND (charge vs payment) =====
function setCctxKind(kind) {
  document.getElementById('cctx-kind').value = kind;
  // Toggle the kind selector buttons (the first pay-method-toggle in the modal)
  const kindToggle = document.querySelector('#modal-credit-tx .pay-method-toggle');
  if (kindToggle) {
    kindToggle.querySelectorAll('.pay-method-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.method === kind);
    });
  }

  const isPayment = kind === 'payment';
  const hint = document.getElementById('cctx-payment-hint');
  const payTypeGrp = document.getElementById('cctx-pay-type-group');
  const installGrp = document.getElementById('cctx-installment-group');
  const catGrp     = document.getElementById('cctx-category').closest('.form-group');
  const amtLabel   = document.getElementById('cctx-amount-label');

  if (isPayment) {
    hint.classList.remove('hidden');
    payTypeGrp.classList.add('hidden');
    installGrp.classList.add('hidden');
    catGrp.classList.add('hidden');
    amtLabel.textContent = 'ยอดชำระบัตร (บาท)';
    setCctxPayType('full'); // reset
  } else {
    hint.classList.add('hidden');
    payTypeGrp.classList.remove('hidden');
    catGrp.classList.remove('hidden');
    amtLabel.textContent = 'ยอดเงินทั้งหมด (บาท)';
  }
}

// ===== INSTALLMENT HELPERS =====
function setCctxPayType(method) {
  document.getElementById('cctx-pay-type').value = method;
  document.querySelectorAll('#modal-credit-tx .pay-method-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.method === method);
  });
  const grp = document.getElementById('cctx-installment-group');
  if (method === 'installment') { grp.classList.remove('hidden'); }
  else { grp.classList.add('hidden'); updateInstallmentCalc(); }
}

function updateInstallmentCalc() {
  const total   = parseFloat(document.getElementById('cctx-amount').value) || 0;
  const months  = parseInt(document.getElementById('cctx-installment-months').value) || 0;
  const monthly = parseFloat(document.getElementById('cctx-installment-monthly').value);
  const preview = document.getElementById('cctx-installment-preview');
  if (!preview) return;

  if (months >= 2 && total > 0) {
    const autoMonthly = Math.round(total / months * 100) / 100;
    if (!monthly || isNaN(monthly)) {
      document.getElementById('cctx-installment-monthly').value = autoMonthly.toFixed(2);
    }
    const usedMonthly = parseFloat(document.getElementById('cctx-installment-monthly').value) || autoMonthly;
    const totalCalc   = usedMonthly * months;
    preview.innerHTML = `<div style="display:flex;gap:16px;flex-wrap:wrap">
      <span>💳 ยอดซื้อ: <strong>${fmt(total)}</strong></span>
      <span>📅 <strong>${months}</strong> งวด × <strong>${fmt(usedMonthly)}</strong>/เดือน</span>
      <span>🧾 รวมจ่าย: <strong>${fmt(totalCalc)}</strong></span>
    </div>`;
  } else {
    preview.textContent = 'กรอกจำนวนงวดเพื่อคำนวณยอดผ่อนอัตโนมัติ';
  }
}

// ===== CREDIT TRANSACTION MODAL =====
function openCreditTxModal(id = null) {
  document.getElementById('modal-cctx-title').textContent = id ? 'แก้ไขรายการบัตร' : 'เพิ่มรายการบัตร';
  document.getElementById('cctx-id').value = id || '';
  document.getElementById('cctx-installment-months').value = '';
  document.getElementById('cctx-installment-monthly').value = '';
  document.getElementById('cctx-installment-preview').textContent = 'กรอกจำนวนงวดเพื่อคำนวณยอดผ่อนอัตโนมัติ';
  setCctxKind('charge'); // always reset to charge on open
  const catSel = document.getElementById('cctx-category');
  catSel.innerHTML = CATEGORIES.expense.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
  if (id) {
    const tx = state.data.creditTransactions.find(t => String(t.id) === String(id));
    if (tx) {
      // Safely convert any date format → YYYY-MM-DD
      document.getElementById('cctx-date').value = tx.date ? toDateInput(new Date(tx.date)) : toDateInput(new Date());
      // For installments, show the original total amount
      document.getElementById('cctx-amount').value = tx.original_amount || tx.amount;
      document.getElementById('cctx-description').value = tx.description || '';
      catSel.value = tx.category;
      document.getElementById('cctx-card-id').value = tx.card_id;
      // Restore installment state
      const totalM = parseInt(tx.installment_total) || 0;
      if (totalM > 0) {
        setCctxPayType('installment');
        document.getElementById('cctx-installment-months').value = totalM;
        document.getElementById('cctx-installment-monthly').value = parseFloat(tx.installment_monthly) || '';
        updateInstallmentCalc();
      } else {
        setCctxPayType('full');
      }
    }
  } else {
    document.getElementById('cctx-date').value = toDateInput(new Date());
    document.getElementById('cctx-amount').value = '';
    document.getElementById('cctx-description').value = '';
    setCctxPayType('full');
  }
  openModal('modal-credit-tx');
}

async function saveCreditTransaction() {
  const id       = document.getElementById('cctx-id').value;
  const kind     = document.getElementById('cctx-kind').value; // 'charge' or 'payment'
  const isPayment = kind === 'payment';
  const payType  = document.getElementById('cctx-pay-type').value;
  const isInstall = !isPayment && payType === 'installment';
  const totalMonths = isInstall ? (parseInt(document.getElementById('cctx-installment-months').value) || 0) : 0;
  const monthlyAmt  = isInstall ? (parseFloat(document.getElementById('cctx-installment-monthly').value) || 0) : 0;

  if (isInstall && totalMonths < 2) {
    showToast('กรุณากรอกจำนวนงวด (อย่างน้อย 2 งวด)', 'error'); return;
  }
  if (isInstall && monthlyAmt <= 0) {
    showToast('กรุณากรอกยอดผ่อนต่อเดือน', 'error'); return;
  }

  let rawAmount = parseFloat(document.getElementById('cctx-amount').value) || 0;
  // Payment reduces outstanding balance → store as negative
  if (isPayment) rawAmount = -Math.abs(rawAmount);

  const data = {
    card_id:            document.getElementById('cctx-card-id').value,
    date:               document.getElementById('cctx-date').value,
    amount:             rawAmount,
    description:        document.getElementById('cctx-description').value || (isPayment ? 'ชำระบัตรเครดิต' : ''),
    category:           isPayment ? 'payment' : document.getElementById('cctx-category').value,
    installment_total:  totalMonths,
    installment_monthly: monthlyAmt,
  };
  if (!data.date || !data.amount) { showToast('กรุณากรอกวันที่และจำนวนเงิน', 'error'); return; }
  if (!isPayment && !data.description) { showToast('กรุณากรอกรายละเอียด', 'error'); return; }
  const btn = document.getElementById('cctx-save-btn');
  if (!_lockSave(btn)) return;
  showLoading();
  try {
    if (id) { await api.updateCreditTransaction({ ...data, id }); showToast('แก้ไขสำเร็จ', 'success'); }
    else { await api.addCreditTransaction(data); showToast(isPayment ? 'บันทึกยอดชำระบัตรสำเร็จ ✓' : (isInstall ? `เพิ่มแผนผ่อน ${totalMonths} งวด สำเร็จ ✓` : 'เพิ่มรายการสำเร็จ'), 'success'); }
    closeModal('modal-credit-tx');
    await _reloadAfterMutate();
  } catch (e) { showToast('เกิดข้อผิดพลาด: ' + e.message, 'error'); }
  finally { hideLoading(); _unlockSave(btn); }
}

// ===== EMOJI PICKER (Fixed Costs) =====
let _fcEmojiActiveGroup = FC_EMOJI_GROUPS[0].id;

function renderFcEmojiPicker(selectedEmoji) {
  // ── Preset pills (9 standard categories) ──
  const pillsEl = document.getElementById('fc-preset-pills');
  pillsEl.innerHTML = CATEGORIES.fixed.map(c =>
    `<button type="button" class="fc-preset-pill ${selectedEmoji === c.id ? 'selected' : ''}"
       onclick="selectFcEmoji('${c.id}','${c.id}',true)" title="${c.name}">
       ${c.icon} <span style="font-size:11px">${c.name}</span>
     </button>`
  ).join('');

  // ── Tab bar ──
  const tabsEl = document.getElementById('fc-emoji-tabs');
  tabsEl.innerHTML = FC_EMOJI_GROUPS.map(g =>
    `<button type="button" class="emoji-tab-btn ${g.id === _fcEmojiActiveGroup ? 'active' : ''}"
       onclick="switchFcEmojiTab('${g.id}')">${g.label}</button>`
  ).join('');

  // ── Emoji grid ──
  renderFcEmojiGrid(selectedEmoji);

  // ── Preview ──
  updateFcEmojiPreview(selectedEmoji);
}

function renderFcEmojiGrid(selectedEmoji) {
  const group = FC_EMOJI_GROUPS.find(g => g.id === _fcEmojiActiveGroup) || FC_EMOJI_GROUPS[0];
  const gridEl = document.getElementById('fc-emoji-grid');
  gridEl.innerHTML = group.emoji.map(e =>
    `<button type="button" class="emoji-btn ${selectedEmoji === e ? 'selected' : ''}"
       onclick="selectFcEmoji('${e}','${e}',false)" title="${e}">${e}</button>`
  ).join('');
}

function switchFcEmojiTab(groupId) {
  _fcEmojiActiveGroup = groupId;
  const cur = document.getElementById('fc-category').value;
  document.querySelectorAll('.emoji-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.includes(FC_EMOJI_GROUPS.find(g=>g.id===groupId)?.label?.slice(0,2)));
  });
  // Re-render just tabs + grid (preserve selection)
  const tabsEl = document.getElementById('fc-emoji-tabs');
  tabsEl.innerHTML = FC_EMOJI_GROUPS.map(g =>
    `<button type="button" class="emoji-tab-btn ${g.id === groupId ? 'active' : ''}"
       onclick="switchFcEmojiTab('${g.id}')">${g.label}</button>`
  ).join('');
  renderFcEmojiGrid(cur);
}

function selectFcEmoji(emoji, catId, isPreset) {
  const fcCat = catId || emoji;
  document.getElementById('fc-category').value = fcCat;
  document.getElementById('fc-emoji-custom').value = '';
  updateFcEmojiPreview(fcCat);
  // Update preset pill highlights
  document.querySelectorAll('.fc-preset-pill').forEach(btn => {
    btn.classList.toggle('selected', btn.getAttribute('onclick')?.includes(`'${fcCat}'`));
  });
  // Update emoji grid highlights
  document.querySelectorAll('.emoji-btn').forEach(btn => {
    btn.classList.toggle('selected', btn.textContent === emoji);
  });
}

function updateFcEmojiPreview(val) {
  const previewEl = document.getElementById('fc-emoji-preview');
  if (!val) { previewEl.textContent = '📌'; return; }
  const cat = getCatInfo(val, 'fixed');
  previewEl.textContent = cat.icon || val;
}

function onFcEmojiCustomInput(val) {
  // Just update preview live; actual application on button click
  const trimmed = val.trim();
  if (trimmed) {
    const previewEl = document.getElementById('fc-emoji-preview');
    previewEl.textContent = trimmed.slice(0, 4); // show first 4 chars max
  }
}

function applyFcCustomEmoji() {
  const val = document.getElementById('fc-emoji-custom').value.trim();
  if (!val) return;
  // Extract first emoji/character cluster
  const firstEmoji = [...val][0] || val; // spread handles surrogate pairs
  document.getElementById('fc-category').value = firstEmoji;
  document.getElementById('fc-emoji-custom').value = firstEmoji;
  updateFcEmojiPreview(firstEmoji);
  // Clear grid selection
  document.querySelectorAll('.emoji-btn, .fc-preset-pill').forEach(b => b.classList.remove('selected'));
  showToast('ใช้ไอคอน ' + firstEmoji + ' แล้ว', 'success');
}

// ===== FIXED COST MODAL =====
function openFixedCostModal(id = null) {
  document.getElementById('modal-fc-title').textContent = id ? 'แก้ไขรายจ่ายคงที่' : 'เพิ่มรายจ่ายคงที่';
  document.getElementById('fc-id').value = id || '';
  _fcEmojiActiveGroup = FC_EMOJI_GROUPS[0].id;
  if (id) {
    const fc = state.data.fixedCosts.find(f => String(f.id) === String(id));
    if (!fc) return;
    document.getElementById('fc-name').value = fc.name || '';
    document.getElementById('fc-amount').value = fc.amount || '';
    document.getElementById('fc-notes').value = fc.notes || '';
    document.getElementById('fc-category').value = fc.category || '';
    document.getElementById('fc-emoji-custom').value = '';
    renderFcEmojiPicker(fc.category || '');
  } else {
    document.getElementById('fc-name').value = '';
    document.getElementById('fc-amount').value = '';
    document.getElementById('fc-notes').value = '';
    document.getElementById('fc-category').value = '';
    document.getElementById('fc-emoji-custom').value = '';
    renderFcEmojiPicker('');
  }
  openModal('modal-fixed-cost');
}

async function saveFixedCost() {
  const id = document.getElementById('fc-id').value;
  const data = {
    name: document.getElementById('fc-name').value,
    amount: document.getElementById('fc-amount').value,
    category: document.getElementById('fc-category').value || '📌',
    notes: document.getElementById('fc-notes').value,
  };
  if (!data.name || !data.amount) { showToast('กรุณากรอกชื่อและจำนวนเงิน', 'error'); return; }
  const btn = document.getElementById('fc-save-btn');
  if (!_lockSave(btn)) return;
  showLoading();
  try {
    if (id) { const fc = state.data.fixedCosts.find(f => String(f.id) === String(id)); await api.updateFixedCost({ ...fc, ...data }); showToast('แก้ไขสำเร็จ', 'success'); }
    else { await api.addFixedCost(data); showToast('เพิ่มรายจ่ายคงที่สำเร็จ', 'success'); }
    closeModal('modal-fixed-cost');
    await _reloadAfterMutate();
  } catch (e) { showToast('เกิดข้อผิดพลาด: ' + e.message, 'error'); }
  finally { hideLoading(); _unlockSave(btn); }
}

async function toggleFixedPaid(fcId, paid) {
  showLoading();
  try {
    await api.setMonthlyFixed({ fixed_cost_id: fcId, year: state.year, month: state.month, paid });
    showToast(paid ? 'บันทึกว่าจ่ายแล้ว ✓' : 'ยกเลิกการจ่าย', paid ? 'success' : 'warning');
    await _reloadAfterMutate();
  } catch (e) { showToast('เกิดข้อผิดพลาด: ' + e.message, 'error'); }
  finally { hideLoading(); }
}

// ===== DELETE =====
function confirmDelete(type, id, name) {
  document.getElementById('confirm-message').textContent = `ต้องการลบ "${name}" ใช่ไหม? การลบไม่สามารถย้อนกลับได้`;
  const btn = document.getElementById('confirm-btn');
  btn.onclick = () => doDelete(type, id);
  openModal('modal-confirm');
}

async function doDelete(type, id) {
  closeModal('modal-confirm');
  showLoading();
  try {
    switch (type) {
      case 'transaction': await api.deleteTransaction(id); break;
      case 'creditCard': await api.deleteCreditCard(id); state.selectedCard = null; break;
      case 'creditTx': await api.deleteCreditTransaction(id); break;
      case 'fixedCost': await api.deleteFixedCost(id); break;
    }
    showToast('ลบสำเร็จ', 'success');
    await _reloadAfterMutate();
  } catch (e) { showToast('ลบไม่ได้: ' + e.message, 'error'); }
  finally { hideLoading(); }
}

// ===== MODAL HELPERS =====
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
// Close modal when clicking outside
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) e.target.classList.remove('open');
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
});

// ===== UI HELPERS =====
function showLoading() { document.getElementById('loading-overlay').classList.add('show'); }
function hideLoading() { document.getElementById('loading-overlay').classList.remove('show'); }

function showToast(msg, type = 'info') {
  const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type]||'ℹ'}</span><span class="toast-msg">${esc(msg)}</span>`;
  document.getElementById('toast-container').appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function setSyncStatus(status) {
  const dot = document.getElementById('sync-dot');
  const txt = document.getElementById('sync-text');
  dot.className = 'sync-dot ' + status;
  const labels = { syncing: 'กำลังซิงค์...', synced: 'ซิงค์แล้ว', error: 'ซิงค์ไม่ได้' };
  txt.textContent = labels[status] || '';
}

// ===== UTILITY =====
function fmt(amount) {
  const n = parseFloat(amount) || 0;
  return '฿' + n.toLocaleString('th-TH', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

function fmtDate(dateStr) {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' });
  } catch { return dateStr; }
}

function toDateInput(date) {
  return date.toISOString().split('T')[0];
}

function esc(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Returns true if a transaction was auto-created by the savings module (immutable)
function isSavingsTx(tx) {
  const desc = String(tx.description || '');
  return desc.startsWith('🏦 ออมเงิน') || desc.startsWith('🏦 นำเงินออมกลับ');
}

function getCatInfo(catId, type) {
  if (!catId) return { id: '', name: 'อื่นๆ', icon: '📦', color: '#6b7280' };
  const allCats = [...CATEGORIES.income, ...CATEGORIES.expense, ...CATEGORIES.fixed];
  const found = allCats.find(c => c.id === catId);
  if (found) return found;
  // If it's a short string with non-ASCII lead → treat as custom emoji
  const s = String(catId).trim();
  if (s.length <= 8 && (s.codePointAt(0) || 0) > 0x00FF) {
    return { id: s, name: s, icon: s, color: '#6b7280' };
  }
  return { id: catId, name: catId||'อื่นๆ', icon: '📦', color: '#6b7280' };
}

function txItemHTML(tx) {
  const cat = getCatInfo(tx.category, tx.type);
  const isIncome = tx.type === 'income';
  return `<div class="tx-item">
    <div class="tx-category-icon" style="background:${cat.color}22">${cat.icon}</div>
    <div class="tx-info">
      <div class="tx-desc">${esc(tx.description||'-')}</div>
      <div class="tx-meta">${fmtDate(tx.date)} · ${cat.name}</div>
    </div>
    <div class="tx-amount ${tx.type}">${isIncome?'+':'-'}${fmt(tx.amount)}</div>
  </div>`;
}

function shadeColor(hex, pct) {
  try {
    const num = parseInt(hex.replace('#',''), 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + pct));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + pct));
    const b = Math.min(255, Math.max(0, (num & 0xff) + pct));
    return '#' + ((r<<16)|(g<<8)|b).toString(16).padStart(6,'0');
  } catch { return hex; }
}

// ===== START =====
document.addEventListener('DOMContentLoaded', init);
