var end = new Date('10/12/2015 12:0 AM');

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

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second)
        var millis = Math.floor((distance % _second));

        document.getElementById('countdown').innerHTML = days + ':';
        document.getElementById('countdown').innerHTML += leftPad(hours, 2) + ':';
        document.getElementById('countdown').innerHTML += leftPad(minutes, 2) + ':';
        document.getElementById('countdown').innerHTML += leftPad(seconds, 2) + ':';
        document.getElementById('countdown').innerHTML += leftPad(millis, 3);
    }

    timer = setInterval(showRemaining, 1);
