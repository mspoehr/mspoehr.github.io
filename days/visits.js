function updateVisits() {
    var name = "visits=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    var visits = 0;

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            visits = parseInt(c.substring(name.length, c.length), 10);
        }
    }

    visits++;

    console.log(visits);

    document.cookie = "visits=" + visits;
    document.getElementById('visits').innerHTML = visits;
}