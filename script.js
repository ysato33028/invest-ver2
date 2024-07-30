// script.js
document.getElementById('export-ppt-button').addEventListener('click', function () {
    let pptx = new PptxGenJS();
    let slide = pptx.addSlide();
    slide.addText('Demo Presentation', { x: 1, y: 1, fontSize: 18 });

    pptx.writeFile({ fileName: 'demo_presentation.pptx' });
});
