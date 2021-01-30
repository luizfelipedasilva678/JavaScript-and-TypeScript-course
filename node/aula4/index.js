const fs = require('fs').promises;
const path2 = require('path');

/*

Readfile()

async function print(path) {
    path = path2.resolve(__dirname, 'index.js');
    const result = await fs.readFile(path, {encoding: 'utf-8'});

    console.log(result)
}


print('./index.js');
*/

//readdir()
 
async function print(path) {
    path = path || path2.resolve(__dirname);
    const result = await fs.readdir(path);

   walk(result); 
}

async function walk(result) {
    let resultado = null;
    for (let value of result) {
        resultado = await fs.stat(path2.resolve(__dirname, '..', '..' ,value));
        if(resultado.isDirectory()) {
            showFiles(value);
        }
    }
}

async function showFiles(directory) {
    let p = await fs.readdir(path2.resolve(__dirname, '..', '..' , directory));
    console.log(directory, p)
}


print('/home/luiz/Documentos/JavaScript-and-TypeScript-course/');
