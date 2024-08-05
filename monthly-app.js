document.addEventListener('DOMContentLoaded', function () {
    // localStorageからデータを取得し、数値に変換
    const sales = parseFloat(localStorage.getItem('annualSales'));
    const costOfSales = parseFloat(localStorage.getItem('costOfSales'));
    const grossProfit = parseFloat(localStorage.getItem('grossProfit'));
    const laborCosts = parseFloat(localStorage.getItem('personnel'));
    const promotionCosts = parseFloat(localStorage.getItem('promotion'));
    const equipmentCosts = parseFloat(localStorage.getItem('equipmentCost'));
    const depreciation = parseFloat(localStorage.getItem('depreciation'));
    const sellingGeneralAdminCosts = parseFloat(localStorage.getItem('general'));
    const operatingProfit = parseFloat(localStorage.getItem('operatingProfit'));
    const tax = parseFloat(localStorage.getItem('tax'));
    const netIncome = parseFloat(localStorage.getItem('netIncome'));
    const cashFlow = parseFloat(localStorage.getItem('cashFlow'));

    const baseValues = {
        sales: sales,
        costOfGoodsSold: costOfSales,
        grossProfit: grossProfit,
        laborCosts: laborCosts,
        promotionCosts: promotionCosts,
        equipmentCosts: equipmentCosts,
        depreciation: depreciation,
        sellingGeneralAdminCosts: sellingGeneralAdminCosts,
        operatingProfit: operatingProfit,
        tax: tax,
        netProfit: netIncome,
        cashFlow: cashFlow,
    };

    const totalInvestment = parseFloat(localStorage.getItem('totalInvestment')) || 0;

    // 数値に変換するための関数
    function parseNumber(value) {
        return isNaN(parseFloat(value)) ? 0 : parseFloat(value);
    }

    function calculateMonthlyValues(factors) {
        const totalFactor = factors.reduce((sum, factor) => sum + factor, 0);
        const monthlyValues = factors.map(factor => {
            const sales = baseValues.sales * (factor / totalFactor);
            return {
                sales: sales,
                costOfGoodsSold: baseValues.costOfGoodsSold * (sales / baseValues.sales),
                grossProfit: baseValues.grossProfit * (sales / baseValues.sales),
                laborCosts: baseValues.laborCosts * (sales / baseValues.sales),
                promotionCosts: baseValues.promotionCosts * (sales / baseValues.sales),
                equipmentCosts: baseValues.equipmentCosts * (sales / baseValues.sales),
                depreciation: baseValues.depreciation * (sales / baseValues.sales),
                sellingGeneralAdminCosts: baseValues.sellingGeneralAdminCosts * (sales / baseValues.sales),
                operatingProfit: baseValues.operatingProfit * (sales / baseValues.sales),
                tax: baseValues.tax * (sales / baseValues.sales),
                netProfit: baseValues.netProfit * (sales / baseValues.sales),
                cashFlow: baseValues.cashFlow * (sales / baseValues.sales),
            };
        });

        return monthlyValues;
    }

    function updateTable() {
        const factors = [];
        for (let i = 1; i <= 12; i++) {
            factors.push(parseNumber(document.getElementById(`factor-${i}`).value));
        }

        const monthlyValues = calculateMonthlyValues(factors);
        let investmentBalance = -totalInvestment;

        for (let i = 0; i < 12; i++) {
            document.getElementById(`sales-${i+1}`).textContent = Math.ceil(monthlyValues[i].sales).toLocaleString();
            document.getElementById(`cost-${i+1}`).textContent = Math.ceil(monthlyValues[i].costOfGoodsSold).toLocaleString();
            document.getElementById(`gross-profit-${i+1}`).textContent = Math.ceil(monthlyValues[i].grossProfit).toLocaleString();
            document.getElementById(`labor-costs-${i+1}`).textContent = Math.ceil(monthlyValues[i].laborCosts).toLocaleString();
            document.getElementById(`promotion-costs-${i+1}`).textContent = Math.ceil(monthlyValues[i].promotionCosts).toLocaleString();
            document.getElementById(`equipment-costs-${i+1}`).textContent = Math.ceil(monthlyValues[i].equipmentCosts).toLocaleString();
            document.getElementById(`depreciation-${i+1}`).textContent = Math.ceil(monthlyValues[i].depreciation).toLocaleString();
            document.getElementById(`selling-general-admin-costs-${i+1}`).textContent = Math.ceil(monthlyValues[i].sellingGeneralAdminCosts).toLocaleString();
            document.getElementById(`operating-profit-${i+1}`).textContent = Math.ceil(monthlyValues[i].operatingProfit).toLocaleString();
            document.getElementById(`tax-${i+1}`).textContent = Math.ceil(monthlyValues[i].tax).toLocaleString();
            document.getElementById(`net-profit-${i+1}`).textContent = Math.ceil(monthlyValues[i].netProfit).toLocaleString();
            document.getElementById(`cash-flow-${i+1}`).textContent = Math.ceil(monthlyValues[i].cashFlow).toLocaleString();

            investmentBalance += Math.ceil(monthlyValues[i].cashFlow);
            
            const investmentBalanceElement = document.getElementById(`investment-balance-${i + 1}`);
            if (investmentBalance < 0) {
                investmentBalanceElement.textContent = '▲' + Math.abs(investmentBalance).toLocaleString();
                investmentBalanceElement.classList.add('negative-balance');
            } else {
                investmentBalanceElement.textContent = investmentBalance.toLocaleString();
                investmentBalanceElement.classList.remove('negative-balance');
            }
        }
    }

    // 各月の入力フィールドにイベントリスナーを追加
    for (let i = 1; i <= 12; i++) {
        document.getElementById(`factor-${i}`).addEventListener('input', updateTable);
    }

    // 初期テーブルの更新
    updateTable();
});
