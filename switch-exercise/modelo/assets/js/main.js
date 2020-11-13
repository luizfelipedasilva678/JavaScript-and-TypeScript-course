(function (){
    const data = new Date();
    let h1 = document.querySelector("#day");
    let p = document.querySelector("#others-information");
    let dayOfWeek = getDayOfWeek(data.getDay());
    
    
    h1.innerHTML = dayOfWeek;
    
    setInterval(function (){
        const hours = new Date();
        p.innerHTML = `${hours.toDateString()} ${hours.toLocaleTimeString()}`;
    }, 1000)
    
    function getDayOfWeek(day) {
        let dayOfWeek;

        switch(day) {
            case 1: 
                dayOfWeek = 'Monday';
                break;
            case 2: 
                dayOfWeek = 'Tuesday';
                break;
            case 3: 
                dayOfWeek = 'Wednesday';
                break;
            case 4:
                dayOfWeek = 'Thursday';
                break;
            case 5:
                dayOfWeek = 'Friday';
                break;
            case 6:
                dayOfWeek = 'Saturday';
                break;
            case 7:
                dayOfWeek = 'Sunday';
                break;
        }

        return dayOfWeek;
    }

    
})();