const path = require('path');
const a  = require('./B/C/D/mod');

console.log(path.resolve(__dirname, '..','..'));
console.log(__dirname)

console.log(path.dirname())