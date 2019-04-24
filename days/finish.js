var alreadyRan = false;

function checkFinished(animate) {
    if (alreadyRan) {
        return;
    }
    
    var now = new Date();
    if (end - now < 0) {
        alreadyRan = true;
        if (animate) {
            animateFinished();
        } else {
            cutToFinished();
        }
    }
}

var animateStep = 0.0;
var originalProgressColors = [[0, 188, 212], [244, 67, 54], [255, 152, 0], [255, 235, 59], [205, 220, 57]];
var bars = document.querySelectorAll(".bar");
function animateFinished() {
    var animation = setInterval(function () {
        if (animateStep < 250.0) {
            document.getElementById("circle-container").style.opacity = 1 - animateStep / 250;
            document.getElementById("visits-container").style.opacity = 1 - animateStep / 250;
        } else if (animateStep == 250) {
            var finished = document.getElementById("finished");
            finished.style.position = 'absolute';
            finished.style.visibility = 'hidden';
            finished.style.display = 'block';
            finished.style.marginBottom = '-40px';
            finished.style.marginTop = document.getElementById("circle-container").offsetHeight - finished.offsetHeight;
            document.getElementById("circle-container").style.display = 'none';
            document.getElementById("visits-container").style.display = 'none';
            finished.style.position = 'relative';
            finished.style.visibility = 'visible';
            finished.style.opacity = 0;
            finished.style.display = 'block';
            // document.body.style.background = '#ff0081';
        } else if (animateStep < 500.0) {
            // var r = 255 * (1 - (animateStep - 250) / 250) + 32 * (animateStep - 250) / 250;
            // var g = 0 * (1 - (animateStep - 250) / 250) + 32 * (animateStep - 250) / 250;
            // var b = 129 * (1 - (animateStep - 250) / 250) + 32 * (animateStep - 250) / 250;
            // document.body.style.background = "rgb(" + r + ", " + g + ", " + b + ")";
            
            document.getElementById("background").style.opacity = (animateStep - 250) / 250;
            // document.getElementById("heart").style.opacity = 0.1 * (1 - (animateStep - 250) / 250)
            document.getElementById("table-title").style.opacity = 0.8 * (1 - (animateStep - 250)/ 250) + 0.2;
            document.getElementById("progress-container").style.opacity = 0.8 * (1 - (animateStep - 250)/ 250) + 0.2;
            for (var i = 0; i < bars.length; i++) {
                r = originalProgressColors[i][0] * (1 - (animateStep - 250) / 250) + 255 * (animateStep - 250) / 250;
                g = originalProgressColors[i][1] * (1 - (animateStep - 250) / 250) + 255 * (animateStep - 250) / 250;
                b = originalProgressColors[i][2] * (1 - (animateStep - 250) / 250) + 255 * (animateStep - 250) / 250;
                bars[i].childNodes[0].style.background = "rgb(" + r + ", " + g + ", " + b + ")";
            }
        } else if (animateStep == 550.0) {
            document.getElementById("background").style.opacity = 1;
        } else if (animateStep < 800) {
            document.getElementById("finished").style.opacity = (animateStep - 550) / 250;
        } else if (animateStep < 900) {
            document.getElementById("table-title").style.opacity = 0.2 * (1 - (animateStep - 800) / 100);
        } else if (animateStep == 900) {
            document.getElementById("table-title").innerHTML = "Look how far we've come...";
        } else if (animateStep < 1000) {
            document.getElementById("table-title").style.opacity = 0.2 * ((animateStep - 900) / 100);
        } else {
            clearInterval(animation);
        }
        animateStep++;
    }, 20);
}

function cutToFinished() {
    document.body.background = "#202020";
    document.getElementById("background").style.opacity = 1;

    // change finished's height to match
    var finished = document.getElementById("finished");
    finished.style.position = 'absolute';
    finished.style.visibility = 'hidden';
    finished.style.display = 'block';
    finished.style.marginBottom = '-40px';
    finished.style.marginTop = document.getElementById("circle-container").offsetHeight - finished.offsetHeight;
    document.getElementById("circle-container").style.display = 'none';
    document.getElementById("visits-container").style.display = 'none';
    finished.style.position = 'relative';
    finished.style.visibility = 'visible';

    // hide things we don't want anymore
    document.getElementById("heart").style.display = 'none';
    document.getElementById("circle-container").style.display = 'none';
    document.getElementById("visits-container").style.display = 'none';

    // show finished things
    document.getElementById("finished").style.display = 'block';
    document.getElementById("table-title").innerHTML = "Look how far we've come...";
    document.getElementById("table-title").style.opacity = 0.2;
    document.getElementById("progress-container").style.opacity = 0.2;

    var bars = document.querySelectorAll(".bar");
    for (var i = 0; i < bars.length; i++) {
        bars[i].childNodes[0].style.background = 'white';
    }
}