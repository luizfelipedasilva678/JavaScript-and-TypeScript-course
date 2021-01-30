//const fala  = require('./mod1');
const a = require('./mod1').fala;
const {nome, sobreNome} = require('./mod1');

console.log(nome);
console.log(sobreNome);
console.log(a('Maria', 'Joana'));