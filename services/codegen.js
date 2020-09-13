const {
  quicktype,
  InputData,
  jsonInputForTargetLanguage,
  JSONSchemaInput,
  JSONSchemaStore,
} = require("quicktype-core");

const state  = require('./../robots/csharp/fileread.js');

async function codegen(content) {

  const { lines: converted } = await quicktypeJSON(
    content.language,
    content.typeName,
    content.jsonString,
    content.outputFilename 
  );

  content.codegen = converted.join("\n");

  state.save(content);

}

async function quicktypeJSON(targetLanguage, typeName, jsonString,outputFilename) {
  const jsonInput = jsonInputForTargetLanguage(targetLanguage);

  // We could add multiple samples for the same desired
  // type, or many sources for other types. Here we're
  // just making one type from one piece of sample JSON.
  await jsonInput.addSource({
    name: typeName,
    samples: [jsonString],
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  return await quicktype({
    inputData,
    lang: targetLanguage,
    outputFilename:outputFilename
  });
}

async function quicktypeJSONSchema(targetLanguage, typeName, jsonSchemaString) {
  const schemaInput = new JSONSchemaInput(new JSONSchemaStore());

  // We could add multiple schemas for multiple types,
  // but here we're just making one type from JSON schema.
  await schemaInput.addSource({ name: typeName, schema: jsonSchemaString });

  const inputData = new InputData();
  inputData.addInput(schemaInput);

  return await quicktype({
    inputData,
    lang: targetLanguage,
  });
}

async function test() {
  let jsonString = `
    {
        
            "id": "int",
            "name": "string",
            "age": "int",
            "gender": "string"      
        
    }
    `;
  const { lines: swiftPerson } = await quicktypeJSON(
    "C#",
    "Person",
    jsonString
  );
  console.log(swiftPerson.join("\n"));
}

module.exports = codegen;
