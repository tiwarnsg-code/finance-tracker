// ===== Finance Tracker API Layer =====
// ติดต่อกับ Google Apps Script ผ่าน JSONP

class FinanceAPI {
  constructor() {
    this.baseUrl = localStorage.getItem('ft_api_url') || '';
    this._pending = 0;
  }

  setUrl(url) {
    this.baseUrl = url.trim();
    localStorage.setItem('ft_api_url', this.baseUrl);
  }

  isConfigured() {
    return !!this.baseUrl;
  }

  call(action, params = {}) {
    return new Promise((resolve, reject) => {
      if (!this.baseUrl) {
        reject(new Error('ยังไม่ได้ตั้งค่า API URL'));
        return;
      }

      const cbName = '_ftcb_' + Date.now() + '_' + (++this._pending);
      const url = new URL(this.baseUrl);
      url.searchParams.set('action', action);
      url.searchParams.set('callback', cbName);

      Object.entries(params).forEach(([k, v]) => {
        url.searchParams.set(k, typeof v === 'object' ? JSON.stringify(v) : String(v));
      });

      const timer = setTimeout(() => {
        cleanup();
        reject(new Error('Request timeout (30s)'));
      }, 30000);

      function cleanup() {
        clearTimeout(timer);
        delete window[cbName];
        if (script && script.parentNode) script.parentNode.removeChild(script);
      }

      window[cbName] = (result) => {
        cleanup();
        if (result && result.success) resolve(result.data);
        else reject(new Error(result ? result.error : 'Unknown error'));
      };

      const script = document.createElement('script');
      script.src = url.toString();
      script.onerror = () => { cleanup(); reject(new Error('Network error - ตรวจสอบ URL หรือการเชื่อมต่ออินเทอร์เน็ต')); };
      document.head.appendChild(script);
    });
  }

  // Transactions
  getTransactions(params = {}) { return this.call('getTransactions', params); }
  addTransaction(data) { return this.call('addTransaction', { data }); }
  updateTransaction(data) { return this.call('updateTransaction', { data }); }
  deleteTransaction(id) { return this.call('deleteTransaction', { id }); }

  // Credit Cards
  getCreditCards() { return this.call('getCreditCards'); }
  addCreditCard(data) { return this.call('addCreditCard', { data }); }
  updateCreditCard(data) { return this.call('updateCreditCard', { data }); }
  deleteCreditCard(id) { return this.call('deleteCreditCard', { id }); }

  // Credit Transactions
  getCreditTransactions(params = {}) { return this.call('getCreditTransactions', params); }
  addCreditTransaction(data) { return this.call('addCreditTransaction', { data }); }
  updateCreditTransaction(data) { return this.call('updateCreditTransaction', { data }); }
  deleteCreditTransaction(id) { return this.call('deleteCreditTransaction', { id }); }
  payInstallment(params) { return this.call('payInstallment', params); }

  // Fixed Costs
  getFixedCosts() { return this.call('getFixedCosts'); }
  addFixedCost(data) { return this.call('addFixedCost', { data }); }
  updateFixedCost(data) { return this.call('updateFixedCost', { data }); }
  deleteFixedCost(id) { return this.call('deleteFixedCost', { id }); }

  // Monthly Fixed Payments
  getMonthlyFixed(params = {}) { return this.call('getMonthlyFixed', params); }
  setMonthlyFixed(data) { return this.call('setMonthlyFixed', { data }); }

  // Summary
  getSummary(params = {}) { return this.call('getSummary', params); }
  getAllData(params = {}) { return this.call('getAllData', params); }

  // Savings
  getSavings(params = {}) { return this.call('getSavings', params); }
  addSavings(data) { return this.call('addSavings', { data }); }
  updateSavings(data) { return this.call('updateSavings', { data }); }
  deleteSavings(id) { return this.call('deleteSavings', { id }); }

  // Version
  getVersion() { return this.call('getVersion'); }

}

const api = new FinanceAPI();
