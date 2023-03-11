const red = 
document.querySelector(".red");

const green = 
document.querySelector(".green");

const yellow =        document.querySelector(".yellow");


function myTimer() {
   red.classList.add("red-color");
}

function myTimer1() {
   red.classList.remove("red-color");
   green.classList.add("green-color")
}

function myTimer2() {
   green.classList.remove("green-color");
   yellow.classList.add("yellow-color")
}

function myTimer3() {
   yellow.classList.remove("yellow-color");
}

setInterval(myTimer, 1000);

setInterval(myTimer1, 2000);

setInterval(myTimer2, 3000);

setInterval(myTimer3, 4000);