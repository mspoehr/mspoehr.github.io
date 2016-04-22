var end = new Date('10/12/2015 12:0 AM');

var _milli = 1
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

music = new Audio("final_countdown.mp3")
music.loop = true

var now = new Date();
if (end - now > 0) {
  music.play();
}

paused = false

function toggle_music() {
  if (!paused) {
    music.pause()
    document.getElementById("pause").innerHTML = "UNMUTE";
  }
  else {
    music.play()
    document.getElementById("pause").innerHTML = "MUTE";
  }
  paused = !paused
}

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

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = '18, baby!';

        document.getElementById('bottom').style.height = "0%"
        document.getElementById('top').style.height = "0%"
        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);
    var millis = Math.floor((distance % _second));

    _millisremaining = 7200000
    if (distance < _millisremaining) {
      percent = (distance / _millisremaining) * 100;
      p = Math.round(percent);
      right = 100 - p;
      document.getElementById('bottom').style.height = right +"%"
      document.getElementById('top').style.height = p +"%"
    }

    document.getElementById('countdown').innerHTML = days + ':';
    document.getElementById('countdown').innerHTML += leftPad(hours, 2) + ':';
    document.getElementById('countdown').innerHTML += leftPad(minutes, 2) + ':';
    document.getElementById('countdown').innerHTML += leftPad(seconds, 2) + ':';
    document.getElementById('countdown').innerHTML += leftPad(millis, 3);
}

timer = setInterval(showRemaining, 1);
