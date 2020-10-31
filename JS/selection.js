function clearSelection() {
    Cookies.remove('selection');
    window.open("../index.html", "_self");
}

var userSelection = Cookies.get("selection");

if(userSelection == "Apple") {
    document.getElementById("selection-container").innerHTML = "<h3> Apple </h3>";
} else if(userSelection == "Orange") {
    document.getElementById("selection-container").innerHTML = "<h3> Orange </h3>";
} else if(userSelection == "Banana") {
    document.getElementById("selection-container").innerHTML = "<h3> Banana </h3>";
} else {
    document.getElementById("selection-container").innerHTML = "<h3> Invalid Selection! </h3>";
}