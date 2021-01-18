function rand(min, max) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('BAD VALUE');
        }

        setTimeout(() => {
            resolve(msg + ' - Passei na promise');
        }, tempo)
    })
    
}

const promises = [
    esperaAi('Promise 3', 1000),
    //'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    //'Outro valor'
];

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e))

/*Promise.all(promises)
    .then((valor) => {
        console.log(valor);
    })*/


/*Promise.race(promises)
    .then(valor => {
        console.log(valor)
    })*/


/*
esperaAi('Frase 1', rand(1,3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 2', rand(1,3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi(22, rand(1,3))
    })
    .then(resposta => {
        console.log(resposta)
    })
    .catch(e => {
        console.log('ERRO:', e)
    });
*/
