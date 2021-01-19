(function (){
    document.addEventListener('click', (e) => {
        e.preventDefault()
    
        fetch(e.target.href)
            .then(response => {
                return response.text();
            })
            .then(text => {
                document.querySelector('.content').innerHTML = text
            })

    })
    
})();