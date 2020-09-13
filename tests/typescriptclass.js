
const fs = require('fs');
const path = require('path');

const rootPath = path.resolve(process.cwd(), '.')

const fromRoot = relPath => path.resolve(rootPath, relPath)

async function start() {
    const file  = require('./robots/csharp/fileread.js');

    const content = {}

    content.path = "./content/sampleperson"
    content.project="SamplePerson"
    content.jsonString = file.readJsonFile('example','person.template.json');
    content.language = "TypeScript";
    content.typeName="Person";

    content.outputFilename = fromRoot("./content/sampleperson/person.ts");

    console.log(content.jsonString);
    
    const codegen = require('./services/codegen.js');

    await codegen(content);
  }
  
  start()