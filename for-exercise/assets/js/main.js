(function () {
    let container = document.querySelector('.container');

    const elementos = [
        {tag: 'section', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'},
    ]


    for(let i=0; i<elementos.length; i++) {
        const {tag, texto} = elementos[i];
        createElement(tag, texto);
    }

    function createElement(element, value) {
        let DOMelement = document.createElement(element);
        DOMelement.innerHTML= value;
        container.appendChild(DOMelement);
    }
})();  

