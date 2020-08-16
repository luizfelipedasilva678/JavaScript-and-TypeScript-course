const nome = 'Luiz';
const sobreNome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc;
let anoNascimento  = 2020 - idade;
imc = peso/(altura * altura);

console.log(`${nome} nasceu em ${anoNascimento} ele tem ${idade} anos, pesa ${peso}, mede ${altura} e seu Imc é ${imc.toFixed(2)}`);