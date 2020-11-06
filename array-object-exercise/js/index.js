(function(){

    function Console(){
        console.log(this);
    }
    
    let pessoas = [];
    document.querySelector("#submit").addEventListener('click', function(e){
        e.preventDefault();
        let name = document.querySelector('#name');
        let surname = document.querySelector('#surname');
        let weight = document.querySelector('#weight');
        let height = document.querySelector('#height');
        
        let pessoa = new Pessoa(name.value, surname.value, weight.value, height.value);
        document.querySelector("#result").innerHTML += pessoa.Getname + "</br>" + "Imc:" + Math.floor((pessoa.weight/(pessoa.height**2))) 
        + '</br>' + "---------------------" + '</br>';
        
        pessoas.push(pessoa);
        
        name.value = '';
        surname.value = '';
        weight.value = '';
        height.value = '';
        
    });
    
    class Pessoa{
        constructor(name , surname , weight, height ){

            this.name = name || 'Name not informed';
            this.surname = surname;
            this.weight = weight;
            this.height = height;
        }
    
        get Getname(){
            return this.name;
        }
    
        set Setname(Nome){
            this.name = Nome;
        }
    }

    Console();
})();




