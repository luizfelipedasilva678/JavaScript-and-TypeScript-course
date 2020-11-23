(function (){

    /*
    function Pessoa(nome, idade) {
        this.nome = nome || 'Joao';
        this.idade = idade || 10;
        this.getIdade = function () {
            return this.idade;
        }
        this.setIdade = function (age) {
            return this.idade = age;
        }
    }

    let pessoa = new Pessoa('Luiz', 15);
    pessoa.setIdade(30);
    let pessoa2 = pessoa;

    console.log(pessoa2)
    */

    function Pessoa(nome, idade) {
        return {
            name: nome,
            age: idade,
            get idade(){
                return this.age;
            },
            set idade(idade){
                this.age = idade;
            }

        }
    }

    let pessoa = new Pessoa('Luiz', 15);
    pessoa.idade = 25;
    console.log(pessoa)
})();