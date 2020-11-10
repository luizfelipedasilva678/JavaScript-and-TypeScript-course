//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras - umDia);

//const data = new Date(2019, 3, 20, 15, 14, 27); //a, m, d, h, M, s, ms


const data = new Date('2019-04-20 20:20:59');

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milisegundo', data.getMilliseconds());
console.log('Dia Semana', data.getDay());

console.log(data.toString());
console.log(Date.now());

function zeroAESquerda(num) {
    return num >= 10 ? num : '0' + num
}

function formatData(data) {
    const dia = data.getDate();
    const mes2 = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const mes = data.getMonth();
    const seg = data.getSeconds();

    return `${zeroAESquerda(dia)}/${zeroAESquerda(mes)}/${zeroAESquerda(ano)} `
}

const data2 = new Date();

console.log( formatData(data2) );