const testRead = require('./robots/CSharp/fileread.js.js');



function robot(content){
     
    content.fileConverted = newCSharpClass(content);

    function newCSharpClass(content){
        return `
            using System;
            using System.Collections.Generic;
            using System.Data;
            using System.Linq;
            using System.Text;
            using System.Threading.Tasks;
    
            namespace ${content.project}
            {
                public class ${content.json[0]}
                {
                    ${content.parameters}
                }
            }
        `;
    }

    function getParameters(content){
        content.json[0].forEach(([key, value]) => {

            switch(value[0]){
                case "int":
                    content.parameters.push(
                        `public ${key} ${value} {get;set;}`
                    );break;
                case "string":
                    content.parameters.push(
                        `public ${key} ${value} {get;set;}`
                    );break;
            }
            console.log(content.parameters);
        });
    }
}



/// Type public, private...
function str_convertInt(type,value){
    return `${type} int ${value} {get;set;}`
}

module.exports = robot;