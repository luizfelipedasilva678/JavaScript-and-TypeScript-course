(function (){
    function Bigger(number1, number2) {
        return number1 > number2 ? number1 : number2;
    }

    function ePaisagem(width, height) {
        return width > height ? 'Paisagem' : 'Retrato';
    }

    function FizzBuzz(e) {
        if (typeof e === 'number') {
            if (e % 3 === 0 && e % 5 === 0) {
                console.log('FizzBuzz');
            }else if (e % 3 === 0) {
                console.log('Fizz');
            }else if (e % 5 === 0) {
                console.log('Buzz');
            }else {
                console.log(e);
            }
        } else {
            console.log('Somente números são aceitos');
        }
    }

    for(let i = 1; i<101;i++) {
        FizzBuzz(i);
    }
})();