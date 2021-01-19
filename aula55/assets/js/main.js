/*
fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => console.log(json))

*/

//axios('pessoas.json')
    //.then(response => console.log(response))

async function carrega() {
    let resposta = await axios('pessoas.json');
    console.log(resposta.data)
} 

carrega()