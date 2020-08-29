let varA = 'A';
let varB = 'B';
let varC = 'C';

const tempA = varA;
varA = varB;
varB = varC;
varC = tempA;


console.log(varA, varB, varC);

function a(num1,num2){
    console.log(arguments);
}

a(10,20,40,70,80,100,100);