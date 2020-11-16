const verdadeira = true;

// let tem escopo de bloco {...bloco}
// Var só tem escopo de função

let nome = 'Luiz';
let nome2 = 'Luiz';

if(verdadeira) {
    let nome = 'Otávio';
    console.log(nome, nome2);

    if(verdadeira) {
        console.log('OK');
    }
}
