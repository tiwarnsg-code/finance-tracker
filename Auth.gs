// =============================================================
// FINANCE TRACKER - Authentication Script (Auth.gs)
// Deploy แยกต่างหากจาก Code.gs หลัก
//
// โครงสร้างชีต "Username_Password":
//   คอลัมน์ A : username
//   คอลัมน์ B : password
//   คอลัมน์ C : apps_script_url  (URL ของ Code.gs ของ user นั้น)
//   คอลัมน์ D : display_name     (ชื่อที่แสดงในแอป — ใส่หรือไม่ก็ได้)
// =============================================================

const AUTH_SPREADSHEET_ID = '1-90T5Ote4l-WKVhDAiuoW4LsONOMPPouBEtzFm4mvzY';
const AUTH_SHEET_NAME      = 'Username_Password';

// ── Entry point ──────────────────────────────────────────────
function doGet(e) {
  const p  = e.parameter || {};
  const cb = p.callback  || '_authcb';
  let result;
  try {
    const action = (p.action || '').toLowerCase();
    if      (action === 'login') result = login_(p.username || '', p.password || '');
    else if (action === 'ping')  result = { success: true,  data: { status: 'ok' } };
    else                         result = { success: false, error: 'Unknown action' };
  } catch (err) {
    result = { success: false, error: err.message };
  }
  return ContentService
    .createTextOutput(cb + '(' + JSON.stringify(result) + ')')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

// ── Login logic ───────────────────────────────────────────────
function login_(username, password) {
  const u = username.trim();
  const p = password.trim();

  if (!u || !p) {
    return { success: false, error: 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน' };
  }

  let ss, sheet;
  try {
    ss    = SpreadsheetApp.openById(AUTH_SPREADSHEET_ID);
    sheet = ss.getSheetByName(AUTH_SHEET_NAME);
  } catch (err) {
    return { success: false, error: 'เข้าถึง Spreadsheet ไม่ได้: ' + err.message };
  }

  if (!sheet) {
    return { success: false, error: 'ไม่พบชีต "' + AUTH_SHEET_NAME + '"' };
  }

  const rows = sheet.getDataRange().getValues();
  // Row 0 = header, skip it
  for (let i = 1; i < rows.length; i++) {
    const row         = rows[i];
    const rowUser     = String(row[0] || '').trim();
    const rowPass     = String(row[1] || '').trim();
    const rowApiUrl   = String(row[2] || '').trim();
    const rowDispName = String(row[3] || '').trim() || rowUser;

    if (!rowUser) continue; // empty row

    if (rowUser === u && rowPass === p) {
      if (!rowApiUrl) {
        return { success: false, error: 'บัญชีนี้ยังไม่ได้ผูก Apps Script URL — กรุณาติดต่อ Admin' };
      }
      return {
        success: true,
        data: {
          username:    rowUser,
          displayName: rowDispName,
          apiUrl:      rowApiUrl
        }
      };
    }
  }

  return { success: false, error: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' };
}
