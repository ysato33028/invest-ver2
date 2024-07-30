document.getElementById('exportForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const text = document.getElementById('textInput').value;

    // PPTXの生成
    let pptx = new PptxGenJS();
    let slide = pptx.addSlide();
    slide.addText(text, { x:1, y:1, fontSize:18 });

    // PPTXファイルを生成し、ブラウザでダウンロード
    pptx.writeFile('output.pptx');
});
