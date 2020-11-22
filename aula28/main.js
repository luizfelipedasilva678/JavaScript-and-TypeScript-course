function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('Luiz', 'Otávio');

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const olaMundo = falaFrase('ola');

const txt = olaMundo('mundo')

console.log(txt);