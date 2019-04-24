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
function animateFinished()
{
    var animation = setInterval(function (){
        if (animateStep == 750) {
            clearInterval(animation);
            cutToFinished();
        }
        if (animateStep < 250.0) {
            document.getElementById("circle-container").style.opacity = 1 - animateStep / 250;
            document.getElementById("visits-container").style.opacity = 1 - animateStep / 250;
        } else if (animateStep == 250) {
            document.getElementById("circle-container").style.display = 'none';
            document.getElementById("visits-container").style.display = 'none';
            document.getElementById("finished").style.opacity = 0;
            document.getElementById("finished").style.display = 'block';
            document.body.style.background = '#ff0081';
        } else if (animateStep < 500.0) {
            var r = 255 * (1 - (animateStep - 250) / 250) + 32 * (animateStep - 250) / 250;
            var g = 0 * (1 - (animateStep - 250) / 250) + 32 * (animateStep - 250) / 250;
            var b = 129 * (1 - (animateStep - 250) / 250) + 32 * (animateStep - 250) / 250;
            document.body.style.background = "rgb(" + r + ", " + g + ", " + b + ")";
        } else if (animateStep == 500.0) {
            document.body.style.background = "#202020";
        } else {
            document.getElementById("finished").style.opacity = (animateStep - 500) / 250;
        }
        animateStep++;
    }, 20);
}

function cutToFinished() {
    document.body.style.background = '#202020';

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