// Functions

function ola(){
    console.log('Ika');
}

ola();

function obj(){
    console.log('Olá');
    let func2 = { quadrado: (x, y) => {return Math.pow(x, y)} };
    return func2;
};

let func = () => console.log('Olá com uma Arrow Function.');

func();



let aa  = obj();

console.log(aa.quadrado(2,10));