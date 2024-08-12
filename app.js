// 投資・物件条件のデータ保存・読み込み
function saveFormData() {
    const data = {
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
    localStorage.setItem('formData', JSON.stringify(data));

    //　6年分の売上シミュレーション
    const sixdata = {
        annualSales: document.getElementById('annual-sales').value,
        grossMarginRate: document.getElementById('gross-margin-rate').value,
        yearlyInputs: []
    };

    // 6年間の入力データを保存
    for (let i = 1; i <= 6; i++) {
        const growthRate = document.getElementById(`sales-growth-year-${i}`).value;
        const grossMarginRate = document.getElementById(`gross-margin-year-${i}`).value;
        sixdata.yearlyInputs.push({ growthRate, grossMarginRate });
    }

    localStorage.setItem('formSixData', JSON.stringify(sixdata));
}

function loadFormData() {
    const data = JSON.parse(localStorage.getItem('formData'));
    if (data) {
        console.log(data); // デバッグ用のログ
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
    }

    const sixdata = JSON.parse(localStorage.getItem('formSixData'));
    if (sixdata) {
        document.getElementById('annual-sales').value = sixdata.annualSales || '';
        document.getElementById('gross-margin-rate').value = data.grossMarginRate || '';

        sixdata.yearlyInputs.forEach((input, index) => {
            document.getElementById(`sales-growth-year-${index + 1}`).value = input.growthRate || '';
            document.getElementById(`gross-margin-year-${index + 1}`).value = input.grossMarginRate || '';
        });
    }
}

// 設備投資のデータ保存・読み込み
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
        promotion: document.getElementById('open-promotion').value,
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
        document.getElementById('open-promotion').value = investmentData.promotion || '';
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
    const promotion = parseFloat(document.getElementById('open-promotion').value) || 0;
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

    const totalInvestment = interior + fixtures + lighting + design + system + construction + common + cooperation + management +
                            promotion + extinguisher + phone + register + restoration + deposit + store + assistance + preOpening +
                            recruitment + flyers + application + constructionCost;

    document.getElementById('total-investment').textContent = totalInvestment.toLocaleString();
    localStorage.setItem('totalInvestment', totalInvestment);
}

function saveAndReturn() {
    calculateTotal();
    saveInvestmentData();
    window.location.href = 'index.html';
}

// index.htmlからの呼び出し
function calculate() {
    const totalInvestment = parseFloat(localStorage.getItem('totalInvestment')) || 0;
    document.getElementById('total-investment-input').value = totalInvestment.toLocaleString();

    // 投資・物件条件の入力値を取得
    const rent = parseFloat(document.getElementById('rent').value) || 0;
    const area = parseFloat(document.getElementById('area').value) || 0;
    const duration = parseFloat(document.getElementById('duration').value) || 0;
    const depreciation = parseFloat(document.getElementById('depreciation').value) || 0;
    const personnel = parseFloat(document.getElementById('personnel').value) || 0;
    const promotion = parseFloat(document.getElementById('promotion').value) || 0;
    const equipmentCost = parseFloat(document.getElementById('equipment-cost').value) || 0;
    const general = parseFloat(document.getElementById('general').value) || 0;
    const annualSales = parseFloat(document.getElementById('annual-sales').value) || 0;
    const grossMarginRate = parseFloat(document.getElementById('gross-margin-rate').value) || 0;

    // 年間の月間運営費用を算出
    const annualPersonnel = personnel * 12;
    const annualPromotion = promotion * 12;
    const annualEquipmentCost = equipmentCost * 12;
    const annualOperatingCosts = annualPersonnel + annualPromotion + annualEquipmentCost + general * 12;

    // 売上原価の計算
    const purchaseCost = annualSales * ((100 - grossMarginRate) / 100);
    const costOfSales = purchaseCost;

    // 投資回収シミュレーションの計算
    const sales = annualSales;  // 1. 売上高
    const grossProfit = sales - costOfSales;  // 3. 売上総利益
    const totalPersonnel = annualPersonnel;  // 4. 人件費計
    const totalPromotion = annualPromotion;  // 5. 販売促進費計
    const totalEquipmentCost = annualEquipmentCost;  // 6. 設備費計
    const annualDepreciation = totalInvestment / depreciation * 12;  // 7. うち減価償却費
    const totalSGA = annualOperatingCosts + annualDepreciation;  // 8. 販売費一般管理費合計
    const operatingProfit = grossProfit - totalSGA;  // 9. 営業利益
    const tax = operatingProfit * 0.4;  // 10. 税金概算（40％）
    const netIncome = operatingProfit - tax;  // 11. 税引後純利益
    const cashFlow = netIncome + annualDepreciation;  // 12. 営業キャッシュフロー
    const paybackPeriod = totalInvestment / (cashFlow / 12);  // 13. 投資回収期間（ヶ月）

    // 結果をHTMLに表示
    document.getElementById('sales').textContent = Math.trunc(sales).toLocaleString();
    document.getElementById('cost-of-sales').textContent = Math.trunc(costOfSales).toLocaleString();
    document.getElementById('gross-profit').textContent = Math.trunc(grossProfit).toLocaleString();
    document.getElementById('total-personnel').textContent = Math.trunc(totalPersonnel).toLocaleString();
    document.getElementById('total-promotion').textContent = Math.trunc(totalPromotion).toLocaleString();
    document.getElementById('total-equipment-cost').textContent = Math.trunc(totalEquipmentCost).toLocaleString();
    document.getElementById('annual-depreciation').textContent = Math.trunc(annualDepreciation).toLocaleString();
    document.getElementById('total-sga').textContent = Math.trunc(totalSGA).toLocaleString();
    document.getElementById('operating-profit').textContent = Math.trunc(operatingProfit).toLocaleString();
    document.getElementById('tax').textContent = Math.trunc(tax).toLocaleString();
    document.getElementById('net-income').textContent = Math.trunc(netIncome).toLocaleString();
    document.getElementById('cash-flow').textContent = Math.trunc(cashFlow).toLocaleString();
    document.getElementById('payback-period').textContent = paybackPeriod.toFixed(2);

    // 計算結果を保存
    document.getElementById('calculate-btn').addEventListener('click', function() {
        const sales = annualSales;
        localStorage.setItem('annualSales', sales);
        const cost = costOfSales;
        localStorage.setItem('costOfSales', cost);
        const gross = grossProfit;
        localStorage.setItem('grossProfit', gross);
        const personnel = annualPersonnel;
        localStorage.setItem('personnel', personnel);
        const promotion = annualPromotion;
        localStorage.setItem('promotion', promotion);
        const equipmentCost = annualEquipmentCost;
        localStorage.setItem('equipmentCost', equipmentCost);
        const depreciation = annualDepreciation;
        localStorage.setItem('depreciation', depreciation);
        const general = totalSGA;
        localStorage.setItem('general', general);
        const operating = operatingProfit;
        localStorage.setItem('operatingProfit', operating);
        const taxmargin = tax;
        localStorage.setItem('tax', taxmargin);
        const netincome = netIncome;
        localStorage.setItem('netIncome', netincome);
        const cashflow = cashFlow;
        localStorage.setItem('cashFlow', cashflow);
        localStorage.setItem('totalInvestment', totalInvestment);

        // 月度別のページにリダイレクト
        window.location.href = 'monthly-calculations.html';
    });
}

// 物件登録ボタンのクリックイベント
document.getElementById('register-property-button').addEventListener('click', function() {
    let propertyName = prompt("物件名を入力してください:");
    if (propertyName) {
        // 物件情報をローカルストレージに保存
        let properties = JSON.parse(localStorage.getItem('properties')) || [];
        let propertyData = gatherPropertyData();
        console.log("Property Data to Save:", propertyData); // 保存するデータをログに出力

        // 既存の物件名をチェック
        let existingIndex = properties.findIndex(p => p.name === propertyName);
        if (existingIndex !== -1) {
            // 既存物件名がある場合、更新確認ポップアップを表示
            let confirmUpdate = confirm("その物件名は登録済みです。更新しますか？");
            if (confirmUpdate) {
                properties[existingIndex].data = propertyData; // 既存データを更新
                localStorage.setItem('properties', JSON.stringify(properties));
                alert("物件が更新されました。");
            } else {
                alert("物件の登録を中止しました。");
            }
        } else {
            // 新規物件名の場合、追加
            properties.push({ name: propertyName, data: propertyData });
            localStorage.setItem('properties', JSON.stringify(properties));
            alert("物件が登録されました。");
        }
    }
});


// 物件検索フォームのsubmitイベント
document.getElementById('property-search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルト動作を無効化
    let propertyName = document.getElementById('property-search-input').value;
    let properties = JSON.parse(localStorage.getItem('properties')) || [];
    let property = properties.find(p => p.name === propertyName);

    // 検索結果を表示するエリアをクリア
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';

    if (!property) {
        alert("この物件名での登録はありません");
    } else {
        if (confirm("この物件のデータを反映しますか？")) {
            // データを反映する処理
            loadPropertyData(property.data);
        }

        // 削除ボタンを追加する
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';
        deleteButton.addEventListener('click', function() {
            deleteProperty(propertyName);
        });

        // 検索結果に削除ボタンを追加
        searchResults.appendChild(deleteButton);
    }
});

// 物件を削除する関数
function deleteProperty(propertyName) {
    let properties = JSON.parse(localStorage.getItem('properties')) || [];
    properties = properties.filter(p => p.name !== propertyName);
    localStorage.setItem('properties', JSON.stringify(properties));
    alert("物件が削除されました。");

    // 削除後に検索結果をクリア
    document.getElementById('search-results').innerHTML = '';
}

// フォームデータを収集してオブジェクトにまとめる関数
function gatherPropertyData() {
    const data = {
        rent: document.getElementById('rent').value,
        area: document.getElementById('area').value,
        duration: document.getElementById('duration').value,
        depreciation: document.getElementById('depreciation').value,
        personnel: document.getElementById('personnel').value,
        promotion: document.getElementById('promotion').value,
        equipmentCost: document.getElementById('equipment-cost').value,
        general: document.getElementById('general').value,
        annualSales: document.getElementById('annual-sales').value,
        grossMarginRate: document.getElementById('gross-margin-rate').value,
        sales: document.getElementById('sales').textContent.replace(/,/g, ''),
        costOfSales: document.getElementById('cost-of-sales').textContent.replace(/,/g, ''),
        grossProfit: document.getElementById('gross-profit').textContent.replace(/,/g, ''),
        totalPersonnel: document.getElementById('total-personnel').textContent.replace(/,/g, ''),
        totalPromotion: document.getElementById('total-promotion').textContent.replace(/,/g, ''),
        totalEquipmentCost: document.getElementById('total-equipment-cost').textContent.replace(/,/g, ''),
        annualDepreciation: document.getElementById('annual-depreciation').textContent.replace(/,/g, ''),
        totalSGA: document.getElementById('total-sga').textContent.replace(/,/g, ''),
        operatingProfit: document.getElementById('operating-profit').textContent.replace(/,/g, ''),
        tax: document.getElementById('tax').textContent.replace(/,/g, ''),
        netIncome: document.getElementById('net-income').textContent.replace(/,/g, ''),
        cashFlow: document.getElementById('cash-flow').textContent.replace(/,/g, ''),
        paybackPeriod: document.getElementById('payback-period').textContent.replace(/,/g, ''),
        totalInvestment: document.getElementById('total-investment-input').value.replace(/,/g, '') // 追加
    };
    console.log("Gathered Property Data:", data); // データをログに出力
    return data;
}

function loadPropertyData(data) {
    try {
        // 投資・物件条件の入力値を設定
        document.getElementById('rent').value = data.rent || '';
        document.getElementById('area').value = data.area || '';
        document.getElementById('duration').value = data.duration || '';
        document.getElementById('depreciation').value = data.depreciation || '';
        document.getElementById('personnel').value = data.personnel || '';
        document.getElementById('promotion').value = data.promotion || '';
        document.getElementById('equipment-cost').value = data.equipmentCost || '';
        document.getElementById('general').value = data.general || '';
        document.getElementById('annual-sales').value = data.annualSales || '';
        document.getElementById('gross-margin-rate').value = data.grossMarginRate || '';
        
        // 投資回収シミュレーション結果
        document.getElementById('sales').textContent = data.sales || '';
        document.getElementById('cost-of-sales').textContent = data.costOfSales || '';
        document.getElementById('gross-profit').textContent = data.grossProfit || '';
        document.getElementById('total-personnel').textContent = data.totalPersonnel || '';
        document.getElementById('total-promotion').textContent = data.totalPromotion || '';
        document.getElementById('total-equipment-cost').textContent = data.totalEquipmentCost || '';
        document.getElementById('annual-depreciation').textContent = data.annualDepreciation || '';
        document.getElementById('total-sga').textContent = data.totalSGA || '';
        document.getElementById('operating-profit').textContent = data.operatingProfit || '';
        document.getElementById('tax').textContent = data.tax || '';
        document.getElementById('net-income').textContent = data.netIncome || '';
        document.getElementById('cash-flow').textContent = data.cashFlow || '';
        document.getElementById('payback-period').textContent = data.paybackPeriod || '';

        // 設備投資合計の値を設定
        document.getElementById('total-investment-input').value = data.totalInvestment || '';

    } catch (error) {
        console.error("Error loading property data: ", error);
    }
}

// ページ読み込み時にフォームデータを読み込む
window.onload = function() {
    loadFormData();
    const totalInvestment = parseFloat(localStorage.getItem('totalInvestment')) || 0;
    document.getElementById('total-investment-input').value = totalInvestment.toLocaleString();

    let properties = JSON.parse(localStorage.getItem('properties')) || [];
    console.log("Stored Properties:", properties); // 保存されたデータをログに出力
    // 他の初期化コード
};

//　6年分の売上シミュレーション
function calculate6YearSimulation() {
    let sales = parseFloat(document.getElementById('annual-sales').value);
    let simulationResults = [];

    for (let i = 1; i <= 6; i++) {
        const growthRate = parseFloat(document.getElementById(`sales-growth-year-${i}`).value) / 100;
        const grossMarginRate = parseFloat(document.getElementById(`gross-margin-year-${i}`).value) / 100;

        const totalInvestment = parseFloat(localStorage.getItem('totalInvestment')) || 0;
        document.getElementById('total-investment-input').value = totalInvestment.toLocaleString();

        const depreciation = parseFloat(document.getElementById('depreciation').value) || 0;

        const personnel = parseFloat(document.getElementById('personnel').value) || 0;
        const promotion = parseFloat(document.getElementById('promotion').value) || 0;
        const equipmentCost = parseFloat(document.getElementById('equipment-cost').value) || 0;
        const general = parseFloat(document.getElementById('general').value) || 0;

        // 年間の月間運営費用を算出
        const annualPersonnel = personnel * 12;
        const annualPromotion = promotion * 12;
        const annualEquipmentCost = equipmentCost * 12;
        const annualOperatingCosts = annualPersonnel + annualPromotion + annualEquipmentCost + general * 12;

        const totalPersonnel = annualPersonnel;  // 4. 人件費計
        const totalPromotion = annualPromotion;  // 5. 販売促進費計
        const totalEquipmentCost = annualEquipmentCost;  // 6. 設備費計
        const annualDepreciation = totalInvestment / depreciation * 12;  // 7. うち減価償却費
        const totalSGA = annualOperatingCosts + annualDepreciation;  // 8. 販売費一般管理費合計

        sales *= (1 + growthRate);
        const grossProfit = sales * grossMarginRate;
        const operatingProfit = grossProfit - totalSGA;
        const netIncome = operatingProfit * 0.6;  // 税引後純利益 (40%税金)
        const cashFlow = netIncome + parseFloat(document.getElementById('annual-depreciation').value);

        simulationResults.push({
            year: i,
            sales,
            grossProfit,
            operatingProfit,
            netIncome,
            cashFlow
        });
    }

    displaySimulationResults(simulationResults);
}

function displaySimulationResults(results) {
    const resultsTable = document.getElementById('simulation-results');
    resultsTable.innerHTML = '';

    results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.year}</td>
            <td>${Math.trunc(result.sales).toLocaleString()}</td>
            <td>${Math.trunc(result.grossProfit).toLocaleString()}</td>
            <td>${Math.trunc(result.operatingProfit).toLocaleString()}</td>
            <td>${Math.trunc(result.netIncome).toLocaleString()}</td>
        `;
        resultsTable.appendChild(row);
    });
}

// ページロード時に年次入力フィールドを動的に生成
document.addEventListener('DOMContentLoaded', function() {
    const yearlyInputsTable = document.getElementById('yearly-inputs');

    for (let i = 1; i <= 6; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i}年目</td>
            <td><input type="number" id="sales-growth-year-${i}" value="0" oninput="saveFormData()"></td>
            <td><input type="number" id="gross-margin-year-${i}" value="45" oninput="saveFormData()"></td>
        `;
        yearlyInputsTable.appendChild(row);
    }

    loadFormData();
});
