//* Dark Mode
var x = '0';

function darken() {
    if (x == '0'){
        document.getElementById('dmicon').src = "../index/i24_photoedit_brightness-512.png";
        document.getElementById('html').style.backgroundColor = "rgb(25, 25, 25)";
        document.getElementById('darkmode').style.backgroundColor = "rgb(170, 170, 170)";
        document.getElementById('headerRec').style.boxShadow = "0px 4px 6px black;";
        document.getElementById('abt').style.color = "rgb(255, 255, 255)";
        document.getElementById('htu').style.color = "rgb(255, 255, 255)";
        document.getElementById('whytodo').style.color = "rgb(255, 255, 255)";
        document.getElementById('whattodo').style.color = "rgb(255, 255, 255)";
        document.getElementById('abtt').style.color = "rgb(255, 255, 255)";
        document.getElementById('htut').style.color = "rgb(255, 255, 255)";
        document.getElementById('whytodot').style.color = "rgb(255, 255, 255)";
        document.getElementById('whattodot').style.color = "rgb(255, 255, 255)";
        x = '1';
        } else{
        document.getElementById('dmicon').src = "../index/nightmode-512.png";
        document.getElementById('html').style.backgroundColor = "rgb(240, 240, 240, 0.98)";
        document.getElementById('darkmode').style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById('headerRec').style.boxShadow = "0px 4px 6px black;";
        document.getElementById('abt').style.color = "rgb(0, 0, 0)";
        document.getElementById('htu').style.color = "rgb(0, 0, 0)";
        document.getElementById('whytodo').style.color = "rgb(0, 0, 0)";
        document.getElementById('whattodo').style.color = "rgb(0, 0, 0)";
        document.getElementById('abtt').style.color = "rgb(0, 0, 0)";
        document.getElementById('htut').style.color = "rgb(0, 0, 0)";
        document.getElementById('whytodot').style.color = "rgb(0, 0, 0)";
        document.getElementById('whattodot').style.color = "rgb(0, 0, 0)";
        x = '0'
        x = '0'
    } 
}