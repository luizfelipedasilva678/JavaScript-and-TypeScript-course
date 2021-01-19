(function (){
    document.addEventListener('click', (e) => {
        e.preventDefault()
        
        /*
        fetch(e.target.href)
            .then(response => {
                return response.text();
            })
            .then(text => {
                document.querySelector('.content').innerHTML = text
            })
        */
       async function carrega() {
           let response = await ajax({
               method: 'GET',
               url: e.target.href
           })
   
           console.log(response)
       }
       
       carrega()
    })
    

    const ajax  = (obj) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(obj.method, obj.url, true);
            xhr.send(null);

            xhr.addEventListener('load', () => {
                if(xhr.status >= 200 && xhr.status < 300) {
                    document.querySelector('.content').innerHTML = xhr.responseText
                } else {
                   reject(xhr.statusText)
                }
            })
        })
    }
})();