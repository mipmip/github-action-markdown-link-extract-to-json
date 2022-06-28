const fs                    = require('fs');
const core                  = require('@actions/core');
const github                = require('@actions/github');
const mdExtract             = require('markdown-extract')
const markdownLinkExtractor = require('markdown-link-extractor');

try {

  const section     = core.getInput('section');
  const inFile      = core.getInput('in-file');
  const outFile     = core.getInput('out-file');

  //const section     = "Sponsored by Quiqr"
  //const inFile      = "README.md"
  //const outFile     = "links.json"

  let inText = "";
  let outText;
  let data = {};
  data.section = section
  data.inFile = inFile
  data.outFile = outFile
  data.time = (new Date()).toTimeString();
  data.payload = JSON.stringify(github.context.payload, undefined, 2)

  if(fs.existsSync(inFile)) {
    inText = fs.readFileSync(inFile, 'utf-8')
  }

  if(section && section.trim !==''){
    const pattern = `/${section}/`
    const regex = new RegExp(pattern);
    outText = mdExtract({type: /heading/, text: section, gnp: true}, {gfm:true}, inText).join('\n')
  }
  else{
    outText = inText;
  }

  console.log(outText);
  data.links = markdownLinkExtractor(outText);

  data.links.forEach(link => console.log(link));

  const jsondata = JSON.stringify(data);
  fs.writeFile(outFile, jsondata, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved to "+outFile+".");
  });
  console.log(jsondata);


} catch (error) {
  core.setFailed(error.message);
}
