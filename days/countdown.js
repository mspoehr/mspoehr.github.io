var end = new Date('03/08/2019 5:00 PM');

var _milli = 1
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
        document.getElementById('days').innerHTML = "NO";
        document.getElementById('tagline').innerHTML = "Hmm, stop looking at this page and be with me!";
        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second)
    var millis = Math.floor((distance % _second));

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = leftPad(hours, 2);
    document.getElementById('minutes').innerHTML = leftPad(minutes, 2);
    document.getElementById('seconds').innerHTML = leftPad(seconds, 2);
//    document.getElementById('countdown').innerHTML += leftPad(millis, 3) + ' seconds';
}

updateVisits();
showRemaining();
updateProgress();
timer = setInterval(function () { 
    showRemaining();
    updateProgress();
}, 1000);
