// Valor por referência;

const nomes = ['Eduardo', 'Maria', 'Joana', 'Paulo','Pietro'];
console.log(typeof nomes)
nomes.splice(nomes.length - 1, 1)

const a1 = [1 ,2 , 3];
const a2 = [4 ,5, 6];

const a3 = a1.concat(a1).concat(a2)

let [nome, nome1] = nomes;

function maiorQue10(value){
    return value >= 10;
}

function multiplicaPor2(value) {
    return value * 2;
}

function reduzir(acumulator, valor, index, array) {
    return acumulator += valor;
}

const numeros = [1,2,3,4,5,10,20,30,50];
const numeros2 = [1,2,3,4,5,10,20,30,50];
const numeros3 = [1,2,3,4,5,10,20,30,50];

//nomes[2] = 'João';
//console.log(nomes.slice(0,-1));

console.log(numeros3.reduce(reduzir))
console.log(numeros2.map(multiplicaPor2));
console.log(numeros.filter(maiorQue10));
console.log(nomes)
console.log('TESTE:', nome, nome1)