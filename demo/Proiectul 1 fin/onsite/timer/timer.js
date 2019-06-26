let sec = document.querySelector('#sec');
let min = document.querySelector('#min');
let or = document.querySelector('#ore');

let secunde = 0;
let minute = 0;
let ore = 0;

function time() {
    secunde++;
    sec.innerHTML = formatNumar(secunde);
    min.innerHTML = formatNumar(minute);
    or.innerHTML = formatNumar(ore);
    if (secunde > 58) {
        secunde = -1;
        minute++;
        if (minute > 58) {
            minute = 0
            ore++;
            if (ore === 24) {
                ore = 0;
            }
        }
    }
}


function formatNumar(number) {
    if (number < 10) {
        number = 0 + '' + number;
    }
    return number;
}

setInterval(time, 1000);