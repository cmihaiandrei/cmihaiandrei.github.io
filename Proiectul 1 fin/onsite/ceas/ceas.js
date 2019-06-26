// CEAS
//selectie din html a campului 'ceas'
let clock = document.querySelector('#ceas');

// functie de obtinere a ceasului
function updateTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    //daca sunt mai putin de 10 secunde sa se afiseze
    //in acelasi format
    if (seconds < 10) {
        seconds = 0 + '' + seconds;
    }
    //daca sunt mai putin de 10 minute sa se afiseze
    //in acelasi format
    if (minutes < 10) {
        minutes = 0 + '' + minutes;
    }
    //daca sunt mai putin de 10 ore sa se afiseze
    //in acelasi format
    if (hours < 10) {
        hours = 0 + '' + hours;
    }

    // se stocheaza toate orele, minutele si secundentele 
    // intr-o variabila de timp curent
    let currentTime = hours + ':' + minutes + ':' + seconds;

    //se inlocuieste timpul curent in html la id-ul ceas
    clock.innerHTML = currentTime;
}

//se ruleaza functia updateTime la 1 secunda
setInterval(updateTime, 1000);


//////////////////////////////////////////////////////

// Cronometru