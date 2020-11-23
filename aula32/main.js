(function (){
    class Gato {
        constructor(nome) {
            this.nome = nome;
        }

        get getNome() {
            return this.nome;
        }

        set setNome(value) {
            this.nome = value;
        }
    }

    let gato = new Gato('shazam')
    let gato2 = new Gato('sh2azam')

    gato2.setNome = 'Joao'
    console.log(gato2.getNome);
})();


