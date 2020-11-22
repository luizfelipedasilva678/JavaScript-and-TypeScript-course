function soma() {
    let total = 0;
    
    for(let value of arguments) {
        total += value;
    }
    
    console.log(total);
}

function soma2(a, b = 2, c = 2) {
    let total = 0;
    total = a + b + c;
    
    console.log(total);
}

soma(1,2,3,4,6,57)
soma2(1,2,undefined)

let v = [1,2,3,4,];


let [valor1, valor2, ...valor3] = v;

console.log(valor3);

console.log('-------------------------------------');


function sum(a, b, c,d) {
    console.log(a,b,c,d);
}

let values = [1,2,3,4];

sum(...values);
