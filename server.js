const express = require('express');
const bodyParser = require('body-parser');
const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/export-ppt', (req, res) => {
    const data = req.body;

    const sales = data.sales || 0;
    const costOfSales = data.costofsales || 0;
    const grossProfit = data.grossprofit || 0;
    const personnel = data.personnel || 0;
    const promotion = data.promotion || 0;
    const equipmentCost = data.equipmentcost || 0;
    const annualDepreciation = data.annualdepreciation || 0;
    const totalSGA = data.totalsga || 0;
    const operatingProfit = data.operatingprofit || 0;
    const tax = data.tax || 0;
    const netIncome = data.netincome || 0;
    const cashFlow = data.cashflow || 0;
    const paybackPeriod = data.paybackperiod || 0;

    const pptx = new pptxgen();
    const slide = pptx.addSlide();

    slide.addText('投資回収シミュレーション', { x: 1, y: 0.5, fontSize: 24, bold: true, fontFace: 'メイリオ'  });

    const tableData = [
        [{ text: '勘定科目', options: { fill: { color: '45A049' }, color: 'FFFFFF', fontFace: 'メイリオ'  } },
         { text: '計算結果', options: { fill: { color: '45A049' }, color: 'FFFFFF', fontFace: 'メイリオ'  } }],
        ['売上高', sales],
        ['売上原価', costOfSales],
        ['売上総利益', grossProfit],
        ['人件費計', personnel],
        ['販売促進費計', promotion],
        ['設備費計', equipmentCost],
        ['うち減価償却費', annualDepreciation],
        ['販売費一般管理費合計', totalSGA],
        ['営業利益', operatingProfit],
        ['税金概算（40％）', tax],
        ['税引後純利益', netIncome],
        ['キャッシュフロー', cashFlow],
        ['投資回収期間（ヶ月）', paybackPeriod]
    ];

    const opts = {
        x: 1,
        y: 0.8,
        w: '80%',
        colW: [2.54, 5],
        border: { pt: '1', color: 'FFFFFF' },
        fill: 'FFFFFF',
        fillStyles: [{ type: 'solid', color: 'F2F2F2' }, { type: 'solid', color: 'FFFFFF' }],
        fontSize: 14
    };

    slide.addTable(tableData, opts);

    const filePath = path.join(__dirname, 'output.pptx');
    pptx.writeFile(filePath)
        .then(() => {
            res.download(filePath, 'output.pptx', (err) => {
                if (err) {
                    console.error('エクスポート中にエラーが発生しました:', err);
                    res.status(500).send('エクスポート中にエラーが発生しました');
                } else {
                    fs.unlink(filePath, (unlinkErr) => {
                        if (unlinkErr) {
                            console.error('一時ファイルの削除中にエラーが発生しました:', unlinkErr);
                        }
                    });
                }
            });
        })
        .catch((err) => {
            console.error('PPTXの生成中にエラーが発生しました:', err);
            res.status(500).send('PPTXの生成中にエラーが発生しました');
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
