let $elem = document.querySelector('#resultado');

let num1 = Number(prompt('Digite um número: '));
let num2 = Number(prompt('Digite outro número: '));

let resultado = num1 + num2 ;

$elem.innerHTML = '<h1>'+ resultado + '</h1>';
