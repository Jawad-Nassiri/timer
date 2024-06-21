let numDays = document.querySelector('.days-number');
let numHours = document.querySelector('.hours-number');
let numMinutes = document.querySelector('.minutes-number');
let numSeconds = document.querySelector('.seconds-number');

function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}

let timer = setInterval(function() {
    let seconds = parseInt(numSeconds.innerHTML);
    let minutes = parseInt(numMinutes.innerHTML);
    let hours = parseInt(numHours.innerHTML);
    let days = parseInt(numDays.innerHTML);

    seconds--;

    if (seconds < 0) {
        seconds = 59;
        minutes--;

        if (minutes < 0) {
            minutes = 59;
            hours--;

            if (hours < 0) {
                hours = 23;
                days--;

                if (days < 0) {
                    clearInterval(timer);
                    days = 0;
                    hours = 0;
                    minutes = 0;
                    seconds = 0;
                }
            }
        }
    }

    numSeconds.innerHTML = formatTime(seconds);
    numMinutes.innerHTML = formatTime(minutes);
    numHours.innerHTML = formatTime(hours);
    numDays.innerHTML = formatTime(days);
}, 1000);