function random() {
    return Math.random() * 1000;
}

function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if(callback) callback();
    }, random())
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if(callback) callback();
    }, random())
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if(callback) callback();
    }, random())
}

f1(function (){
    f2(function (){
        f3(function (){
            console.log('Ola');
        });
    })
});
