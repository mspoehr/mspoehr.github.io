var end = new Date("06/12/2021 11:00 AM");

var _milli = 1;
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function leftPad(number, targetLength) {
  var output = number + "";
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return output;
}

function showRemaining() {
  var now = new Date();
  var distance = end - now;
  if (distance < 0 && distance > -10000) {
    const elementsToHide = document.getElementsByClassName('hide-when-complete');
    for(let i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style['opacity'] = '0';
    }
    document.getElementsByClassName('fas fa-heart expand')[0].style['font-size'] = '50px';
    return;
  } else if (distance < 0) {
    const elementsToHide = document.getElementsByClassName('hide-when-complete');
    for(let i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style['display'] = 'none';
      elementsToHide[i].innerHTML = '&nbsp;';
    }
    document.getElementsByClassName('fas fa-heart expand')[0].style['font-size'] = '50px';
    clearInterval(timer);
    return;
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);
  var millis = Math.floor(distance % _second);

  document.getElementById(
    "time-remaining"
  ).innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

showRemaining();
timer = setInterval(function () {
  showRemaining();
}, 1000);
