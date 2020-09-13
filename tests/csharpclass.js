const testRead = require('./robots/csharp/fileread.js');

const content = {}

content.path = "./content/sampleperson"
content.project="SamplePerson"
content.json = testRead('example/TypeScript','person.template.json');

console.log(content);

const aaa = require('./services/codegen.js');