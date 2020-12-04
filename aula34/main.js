(function (){
    function Calculator() {
        this.sum = (number1, number2) =>  {
            return number1 + number2;
        }
        
        this.subtract = (number1, number2) =>  {
            return number1 - number2
        }
         
        this.share = (number1, number2) => {
            return number1 / number2
        }

        this.multiply = (number1, number2) =>  {
            return number1 * number2;
        }
    }

    let calculator = new Calculator();
    let menuNumber = Number(prompt(' 1 - para soma \n 2 - para subtração \n 3 - para multiplicação \n 4 - para divisão \n 5 - para cancelar'));
    let number1;
    let number2;
    let result;

    while(menuNumber >= 1 && menuNumber <= 4) {
        number1 = Number(prompt('Digite o primeiro número'));
        number2 = Number(prompt('Digite o segundo número'));
        
        switch(menuNumber) {
            case 1:
                result= calculator.sum(number1, number2);
                break;
            case 2:
                result = calculator.subtract(number1, number2);
                break;
            case 3:
                result = calculator.multiply(number1, number2);
                break;
            case 4:
                result = calculator.share(number1, number2);
                break;
            default:
                result = 'NaN';
                break;
        }

        alert('Resultado: ' + result);

        menuNumber = Number(prompt(' 1 - para soma \n 2 - para subtração \n 3 - para multiplicação \n 4 - para divisão \n 5 - para cancelar'));;
    } 
    
})();