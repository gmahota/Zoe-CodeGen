const fs = require('fs');
const path = require('path');

const rootPath = path.resolve(process.cwd(), '.')

const fromRoot = relPath => path.resolve(rootPath, relPath)

function readJsonTemplate(folder,file){
    const templateFilePath = fromRoot(`./${folder}/${file}`);
    const fileBuffer = fs.readFileSync(templateFilePath, 'utf-8');
    const contentJson = JSON.parse(fileBuffer);
    return contentJson;
}

function readJsonFile(folder,file){
    const templateFilePath = fromRoot(`./${folder}/${file}`);
    const fileBuffer = fs.readFileSync(templateFilePath, 'utf-8');
    return fileBuffer;
}

function save(content) {
    const filePath = content.outputFilename
    const scriptString = content.codegen
    return fs.writeFileSync(filePath, scriptString)
}
module.exports = {readJsonTemplate, readJsonFile,save};