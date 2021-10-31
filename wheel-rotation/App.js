import { Wheel } from "./Wheel.js";

const ui = new UI("#26262c", 406, 406.52, "canvas");
const wheel = new Wheel(60, 6, 16, 200, { x: 750 / 2, y: 750 / 2 }, ui.createCanvas());
wheel.createWheel();
wheel.drawWheel();

document.getElementById('rotate').addEventListener("click", function(e){
    wheel.spinWheel();
    document.getElementById('txt').innerText = `Random number = ${wheel.rectRandomNumber}`;
    document.getElementById('rotate').style.pointerEvents = 'none';
});

document.getElementById('canvas').addEventListener('webkitTransitionEnd', function(event) {
    wheel.modAngle();
    document.getElementById('rotate').style.pointerEvents = 'auto';
}, false);

setInterval(function(){
    wheel.changeColorToArrow();
},1);