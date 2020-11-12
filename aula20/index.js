const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    default:
        diaSemanaTexto = 'Um dia qualquer';
        break;
}

console.log(diaSemanaTexto);
