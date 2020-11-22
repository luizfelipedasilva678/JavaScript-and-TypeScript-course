function fala(name) {
    return function() {
        console.log(name);
    }
}

const falaMaria = fala('Maria');
const falaJoao = fala('Joao');

console.log('-----------------');

falaMaria();
falaJoao();

