(function (){
    function saudacao(text) {
        if (typeof text === "string") {
            console.log(text)
        } else {
            throw new Error("Você errou feio e rude");
        }
    }

    try {
        saudacao(10);
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log('legal')
    }
})();