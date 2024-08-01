// 投資・物件条件のデータ保存・読み込み
function saveFormData() {
    const propertyName = document.getElementById('property-name').value;
    if (!propertyName) {
        alert("物件名を入力してください");
        return;
    }

    const data = {
        propertyName,
        depreciation: document.getElementById('depreciation').value,
        rent: document.getElementById('rent').value,
        area: document.getElementById('area').value,
        duration: document.getElementById('duration').value,
        personnel: document.getElementById('personnel').value,
        promotion: document.getElementById('promotion').value,
        equipmentCost: document.getElementById('equipment-cost').value,
        general: document.getElementById('general').value,
        annualSales: document.getElementById('annual-sales').value,
        grossMarginRate: document.getElementById('gross-margin-rate').value
    };

    let allData = JSON.parse(localStorage.getItem('allData')) || {};
    allData[propertyName] = data;
    localStorage.setItem('allData', JSON.stringify(allData));
    alert("データを保存しました");
}

function loadFormData(propertyName) {
    const allData = JSON.parse(localStorage.getItem('allData'));
    if (allData && allData[propertyName]) {
        const data = allData[propertyName];
        document.getElementById('property-name').value = data.propertyName || '';
        document.getElementById('depreciation').value = data.depreciation || '';
        document.getElementById('rent').value = data.rent || '';
        document.getElementById('area').value = data.area || '';
        document.getElementById('duration').value = data.duration || '';
        document.getElementById('personnel').value = data.personnel || '';
        document.getElementById('promotion').value = data.promotion || '';
        document.getElementById('equipment-cost').value = data.equipmentCost || '';
        document.getElementById('general').value = data.general || '';
        document.getElementById('annual-sales').value = data.annualSales || '';
        document.getElementById('gross-margin-rate').value = data.grossMarginRate || '';
    } else {
        alert("データが見つかりません");
    }
}

function searchData() {
    const propertyName = prompt("検索する物件名を入力してください");
    if (propertyName) {
        loadFormData(propertyName);
    }
}

// 既存の設備投資のデータ保存・読み込み関数
function saveInvestmentData() {
    const investmentData = {
        interior: document.getElementById('interior').value,
        fixtures: document.getElementById('fixtures').value,
        lighting: document.getElementById('lighting').value,
        design: document.getElementById('design').value,
        system: document.getElementById('system').value,
        construction: document.getElementById('construction').value,
        common: document.getElementById('common').value,
        cooperation: document.getElementById('cooperation').value,
        management: document.getElementById('management').value,
        promotion: document.getElementById('promotion').value,
        extinguisher: document.getElementById('extinguisher').value,
        phone: document.getElementById('phone').value,
        register: document.getElementById('register').value,
        restoration: document.getElementById('restoration').value,
        deposit: document.getElementById('deposit').value,
        store: document.getElementById('store').value,
        assistance: document.getElementById('assistance').value,
        preOpening: document.getElementById('pre-opening').value,
        recruitment: document.getElementById('recruitment').value,
        flyers: document.getElementById('flyers').value,
        application: document.getElementById('application').value,
        constructionCost: document.getElementById('construction-cost').value
    };
    localStorage.setItem('investmentData', JSON.stringify(investmentData));
}

function loadInvestmentData() {
    const investmentData = JSON.parse(localStorage.getItem('investmentData'));
    if (investmentData) {
        document.getElementById('interior').value = investmentData.interior || '';
        document.getElementById('fixtures').value = investmentData.fixtures || '';
        document.getElementById('lighting').value = investmentData.lighting || '';
        document.getElementById('design').value = investmentData.design || '';
        document.getElementById('system').value = investmentData.system || '';
        document.getElementById('construction').value = investmentData.construction || '';
        document.getElementById('common').value = investmentData.common || '';
        document.getElementById('cooperation').value = investmentData.cooperation || '';
        document.getElementById('management').value = investmentData.management || '';
        document.getElementById('promotion').value = investmentData.promotion || '';
        document.getElementById('extinguisher').value = investmentData.extinguisher || '';
        document.getElementById('phone').value = investmentData.phone || '';
        document.getElementById('register').value = investmentData.register || '';
        document.getElementById('restoration').value = investmentData.restoration || '';
        document.getElementById('deposit').value = investmentData.deposit || '';
        document.getElementById('store').value = investmentData.store || '';
        document.getElementById('assistance').value = investmentData.assistance || '';
        document.getElementById('pre-opening').value = investmentData.preOpening || '';
        document.getElementById('recruitment').value = investmentData.recruitment || '';
        document.getElementById('flyers').value = investmentData.flyers || '';
        document.getElementById('application').value = investmentData.application || '';
        document.getElementById('construction-cost').value = investmentData.constructionCost || '';
    }
}

function calculateTotal() {
    const interior = parseFloat(document.getElementById('interior').value) || 0;
    const fixtures = parseFloat(document.getElementById('fixtures').value) || 0;
    const lighting = parseFloat(document.getElementById('lighting').value) || 0;
    const design = parseFloat(document.getElementById('design').value) || 0;
    const system = parseFloat(document.getElementById('system').value) || 0;
    const construction = parseFloat(document.getElementById('construction').value) || 0;
    const common = parseFloat(document.getElementById('common').value) || 0;
    const cooperation = parseFloat(document.getElementById('cooperation').value) || 0;
    const management = parseFloat(document.getElementById('management').value) || 0;
    const promotion = parseFloat(document.getElementById('promotion').value) || 0;
    const extinguisher = parseFloat(document.getElementById('extinguisher').value) || 0;
    const phone = parseFloat(document.getElementById('phone').value) || 0;
    const register = parseFloat(document.getElementById('register').value) || 0;
    const restoration = parseFloat(document.getElementById('restoration').value) || 0;
    const deposit = parseFloat(document.getElementById('deposit').value) || 0;
    const store = parseFloat(document.getElementById('store').value) || 0;
    const assistance = parseFloat(document.getElementById('assistance').value) || 0;
    const preOpening = parseFloat(document.getElementById('pre-opening').value) || 0;
    const recruitment = parseFloat(document.getElementById('recruitment').value) || 0;
    const flyers = parseFloat(document.getElementById('flyers').value) || 0;
    const application = parseFloat(document.getElementById('application').value) || 0;
    const constructionCost = parseFloat(document.getElementById('construction-cost').value) || 0;

    const total = interior + fixtures + lighting + design + system + construction + common + cooperation + management + promotion + extinguisher + phone + register + restoration + deposit + store + assistance + preOpening + recruitment + flyers + application + constructionCost;
    
    document.getElementById('total').innerText = `合計: ${total.toLocaleString()}円`;
}

// ページ読み込み時にデータを読み込む
window.onload = function() {
    loadFormData();
    loadInvestmentData();
    calculateTotal();
};

// データ保存・読み込み・計算関数の呼び出し
document.getElementById('saveFormDataButton').onclick = saveFormData;
document.getElementById('loadFormDataButton').onclick = loadFormData;
document.getElementById('calculateButton').onclick = calculateTotal;
document.getElementById('saveInvestmentDataButton').onclick = saveInvestmentData;
document.getElementById('loadInvestmentDataButton').onclick = loadInvestmentData;
