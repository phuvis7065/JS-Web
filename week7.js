

// function showCoords(event) {
// 	document.getElementById("target").innerHTML =
// 	"screen : (" + event.screenX+ ", " + event.screenY+ ")\n"+ "client : (" + event.clientX+ ", " + event.clientY+ ")\n" + "button : " + event.button;
// }

window.onload = pageLoad;
var timer = null;

function pageLoad(){
    document.getElementById("clickme").onclick = delayedMessage2;
}

function delayedMessage(){
    document.getElementById("output").innerHTML = "wait for it";
    setTimeout(sayHello,5000);
}

function sayHello(){
    document.getElementById("output").innerHTML = "Hello";
}

function delayedMessage2(){
    document.getElementById("clickme").onclick = delayedMessage2;
}

function delayedMessage2(){
    if(timer === null){
        timer = setInterval(rudy,1000);
    }
    else{
        clearInterval(timer);
        timer = null ;
    }
}

function rudy(){
    document.getElementById("output").innerHTML += "MDT!"
}
