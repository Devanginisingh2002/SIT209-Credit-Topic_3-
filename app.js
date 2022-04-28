const username = ["Devangini", "Kevin", "Lella"];

const email = ["devangini@gmail.com", "kevin@gmail.com", "lella@gmail.com"];

let i = 0;

function log() {
    location.href = "/"
}

function func() {
    for (let j = 0; j <= 1; j++) {
        if (document.getElementById("uname").value == username[j] || document.getElementById("email") == email[j]) {
            alert("Logged successfully");
            location.href = "main.html";
            break;
        }
        else if (document.getElementById("uname").value != username[j] || document.getElementById("email") != email[j]) {
            alert("Name must be filled out");
        }
    }
}

window.history.forward();
function noBack() {
    window.history.forward();
}