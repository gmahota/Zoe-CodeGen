const {
  quicktype,
  InputData,
  jsonInputForTargetLanguage,
  JSONSchemaInput,
  JSONSchemaStore,
} = require("quicktype-core");

async function quicktypeJSON(targetLanguage, typeName, jsonString) {
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

modules.exports = [test, quicktypeJSONSchema, quicktypeJSON];
