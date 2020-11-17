(function (){
    const ps = document.querySelectorAll('p');

    const estilo = getComputedStyle(document.body);

    Array.prototype.forEach.call(ps, (elem) => {
       elem.style.backgroundColor = estilo.backgroundColor;
       elem.style.color = 'white';
    })
})();

