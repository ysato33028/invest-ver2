const express = require('express');
const bodyParser = require('body-parser');
const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/export-ppt', (req, res) => {
    const text = req.body.text;

    let pptx = new PptxGenJS();
    let slide = pptx.addSlide();
    slide.addText(text, { x:1, y:1, fontSize:18 });

    const filePath = path.join(__dirname, 'output.pptx');
    pptx.writeFile(filePath).then(() => {
        res.sendFile(filePath, (err) => {
            if (err) {
                console.error('Error sending file:', err);
                res.status(500).send('Error generating PPT');
            } else {
                // Delete the file after sending it
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error('Error deleting file:', err);
                    }
                });
            }
        });
    }).catch(err => {
        console.error('Error generating PPT:', err);
        res.status(500).send('Error generating PPT');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
