function browser(b){
    return `<div class=" browser" id="test0">
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="before-${b}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="after-${b}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(browsers, url){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${url}"> ${url}</a>
            </h1>
            
            <div id="visualizer">
                ${browsers.map(b=>browser(b))}
            </div>
        </body>
    </html>`
}
const browsers = ["chromium"];

fs.writeFileSync(`./test=results/report.html`, createReport(datetime, resultInfo));
fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);