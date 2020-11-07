(function () {
    let tbody = document.querySelector('tbody');
    
    document.querySelector('#submit').addEventListener('click', function(e) {
        e.preventDefault();
        
        let height = document.querySelector("#height");
        let weight = document.querySelector("#weight");
        let imc;

        if(weight.value == '' || height.value == '') {
            alert('Nenhum campo pode estar vazio!');
        }else {
            imc = (Number(weight.value)/Number(height.value)**2);
        }
        removeBackGround();

        if(imc < 18.5) {
            paintTr(0);
        }else if(imc < 24.9) {
            paintTr(1);
        }else if(imc < 29.9) {
            paintTr(2);
        }else if(imc < 34.9) {
            paintTr(3);
        }else if(imc < 39.9) {
            paintTr(4);
        }else if(imc > 40){
            paintTr(5);
        }else {
            alert('Você pode ter digitado algum valor inválido');
        }
    
        console.log(imc);
        
        height.value = '';
        weight.value = '';
    });

    function paintTr(num) { 
        tbody.children[num].style.backgroundColor =  '#5040C0';
        tbody.children[num].style.color =  '#fff';
    }

    function removeBackGround() {
        for(let i = 0; i < 6; i++) {
            if (tbody.children[i].hasAttribute("style")) {
                tbody.children[i].removeAttribute("style");
            }
        }
    }

})();