var progress1Start = new Date('11/25/2018 12:00 PM');
var progress2Start = new Date('09/01/2018 12:00 PM');
var progress3Start = new Date('09/01/2018 12:00 PM');
var progress4Start = new Date('06/12/2016 06:00 PM');
var progress5Start = new Date('06/12/2016 06:00 PM');
var starts = [progress1Start, progress2Start, progress3Start, progress4Start, progress5Start]

var progress1End = new Date('12/19/2018 10:00 PM');
var progress2End = new Date('12/21/2018 10:00 PM');
var progress3End = new Date('05/03/2019 10:00 PM');
var progress4End = new Date('05/03/2020 10:00 PM');
var progress5End = new Date('06/12/2019 10:00 PM');
var ends = [progress1End, progress2End, progress3End, progress4End, progress5End]

function updateProgress() {
    var now = new Date();
    for (i = 1; i <= 5; i++) {
        var distance = end - now;
        var start = starts[i - 1];
        var end = ends[i - 1];
        var distance = end - now;
        var total = end - start;
        var progress = now - start;
        
        var days = Math.floor(distance / _day);
        if (days < 0) {
            days = 0;
        }

        document.getElementById('progress' + i).getElementsByClassName("days")[0].innerHTML = days + " days";
        document.getElementById('progress' + i).getElementsByClassName("percent")[0].innerHTML = Math.round(100 * (progress / total)) + "%";
        document.getElementById('progress' + i).getElementsByClassName("bar")[0].childNodes[0].style.width = (100 * (progress / total)) + '%';
    }
}