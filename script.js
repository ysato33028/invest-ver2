// script.js
document.getElementById('export-ppt-button').addEventListener('click', function(e) {
    e.preventDefault();

    const text = document.getElementById('textInput').value;

    let pptx = new PptxGenJS();
    let slide = pptx.addSlide();
    slide.addText(text, { x:1, y:1, fontSize:18 });

    pptx.writeFile('output.pptx').then(() => {
        console.log('PPT file created successfully');
    }).catch(err => {
        console.error('Error generating PPT', err);
    });
});

