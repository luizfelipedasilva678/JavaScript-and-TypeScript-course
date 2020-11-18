(function (){
    function soma (x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw new Error('Os parâmetros precisam ser números');
        }

        return x + y;
    }

    try {
        console.log(soma('2',2));
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log('Ola');
    }
})();