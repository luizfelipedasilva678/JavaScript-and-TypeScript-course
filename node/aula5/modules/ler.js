const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..' ,'teste.json');

console.log(caminhoArquivo);

fs.readFile(caminhoArquivo, {encoding: 'utf8'})
    .then(
        (result) => {
            return result;
        }
    )
    .then(
       result => console.log(JSON.parse(result))
    )
    .catch(
        e => console.log(e)
    )
    