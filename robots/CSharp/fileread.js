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

module.exports = readJsonTemplate;