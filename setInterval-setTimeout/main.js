(function () {
    function mostraHora() {
        let data = new Date();

        return data.toLocaleTimeString('pt-BR', {
            hour12: false
        });
    }

    //setInterval(() => { console.log(mostraHora()); }, 1000)
    setTimeout(() => { console.log(mostraHora()); }, 1000)

})();