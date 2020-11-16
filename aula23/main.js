const pessoa = {
    nome: 'Joao',
    exibeNome: function() { console.log('Olá') },
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}


const { nome} = pessoa;
const { exibeNome: func} = pessoa;
const { endereco: {rua, numero} } = pessoa;

func();
console.log( rua, numero)