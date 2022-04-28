document.getElementById("color-red").style.backgroundColor = "red";
document.getElementById("color-blue").style.backgroundColor = "lightblue";
document.getElementById("color-grey").style.backgroundColor = "lightgrey";
document.getElementById("color-orange").style.backgroundColor = "orange";
document.getElementById("color-green").style.backgroundColor = "lightgreen";

class currentUser {
    constructor(lightColor) {
        this.lightColor = lightColor;
    }
}


function colorchanger(colorname) {
    currentUser.lightColor = colorname;
    document.getElementById("current-ambience").style.backgroundColor = currentUser.lightColor;
}