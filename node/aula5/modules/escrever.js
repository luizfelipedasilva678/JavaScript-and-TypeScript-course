const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..','teste.json');

fs.writeFile(caminhoArquivo, '{"a":"Frase 1"}', {
    flag: 'w',
    encoding: 'utf8'
})

