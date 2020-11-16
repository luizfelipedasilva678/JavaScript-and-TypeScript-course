let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c ,a];
[a, b, c] = letras;

console.log(a, b, c);

// ----------------------------------//

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero, resto);

const numeros2 = [
    [1, 2, 3],
    [1, 2, 6],
    [1, 2, 3]
]

const [,[,,seis]] = numeros2;

console.log(seis)

