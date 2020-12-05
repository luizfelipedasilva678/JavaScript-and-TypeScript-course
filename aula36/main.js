function* geradora1(num) {
    yield 'Valor 1';

    yield 'Valor 2';

    yield 'yES';
}

const a = geradora1();

console.log(a.next().value);

console.log(a.next().value);

console.log(a.next().value);

function* infiniteGenerator() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const teste = infiniteGenerator();

console.log(teste.next().value);
console.log(teste.next().value);
console.log(teste.next().value);
console.log(teste.next().value);
console.log(teste.next().value);
console.log(teste.next().value);
console.log(teste.next().value);
console.log(teste.next().value);
console.log(teste.next().value);
console.log(teste.next().value);
console.log(teste.next().value);


function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
}