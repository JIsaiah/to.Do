//* Submit Field Info
function sendinfo() {
    var username = document.getElementById('userName').value;
    var pword = document.getElementById('password').value;
    var confpword = document.getElementById('confirmPassword').value;
    if(pword === confpword) {
        localStorage.setItem('Username', username);
        localStorage.setItem('Password', pword);
        window.location.href = "../Index/Index.html";
    } else {
        alert('Passwords do not match! Please try again.')
    }
}

//* Dark Mode
function darken() {
    var x = 0;
    if(x == 0) {
        document.getElementById('dmicon').src = "../indexTESTBUILD/i24_photoedit_brightness-512.png";
        document.getElementById('html').style.backgroundColor = "rgb(25, 25, 25)";
        document.getElementById('why').style.color = "rgb(255, 255, 255)";
        document.getElementById('signintext').style.color = "rgb(255, 255, 255)";
        document.getElementById('pinfo').style.color = "rgb(255, 255, 255)";
        document.getElementById('pwordfield').style.color = "rgb(255, 255, 255)";
        document.getElementById('miscinfofield').style.color = "rgb(255, 255, 255)";
        document.getElementById('darkmode').style.backgroundColor = "rgb(170, 170, 170)";
        x = 1;
    } else {
        document.getElementById('dmicon').src = "../indexTESTBUILD/nightmode-512.png";
        document.getElementById('html').style.backgroundColor = "rgb(240, 240, 240, 0.98)";
        document.getElementById('signintext').style.color = "rgb(0, 0, 0)";
        document.getElementById('pinfo').style.color = "rgb(0, 0, 0)";
        document.getElementById('pwordfield').style.color = "rgb(0, 0, 0)";
        document.getElementById('miscinfofield').style.color = "rgb(0, 0, 0)";
        document.getElementById('darkmode').style.backgroundColor = "rgb(255, 255, 255)";
        x = 0;
    }
}