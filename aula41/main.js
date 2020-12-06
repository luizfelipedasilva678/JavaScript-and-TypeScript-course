const produto = {nome: 'Caneca',  preco: 1.8}
const outraCoisa = {...produto};

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;

//console.log(produto);
//console.log(outraCoisa);


for( entry of Object.entries(produto)) {
    //console.log(entry)
}

console.log(Object.values(produto))