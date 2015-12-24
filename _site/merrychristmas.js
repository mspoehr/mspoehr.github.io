var name;
var queryString = window.location.search.substring(1);
    queries = queryString.split('&');
    for (var i in queries) {
      var pair = queries[i].split('=');
      if (pair[0] == "name") {
        // Decode the parameter value, replacing %20 with a space etc.
        name = decodeURI(pair[1]);
      }
    }
document.getElementById("wish").innerHTML = "Merry Christmas, " + name + "!";
