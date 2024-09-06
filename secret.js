const button = document.getElementById("alecButton");
var clickCount = 0;

button.addEventListener('click', () => {
    clickCount++;
    console.log(clickCount);

    if (clickCount === 15) {
        button.href = "secret.html";
    }
});

const exploder = document.getElementById("superSplode");
var splodeCountdown = 15;

exploder.addEventListener('click', () => {
    splodeCountdown--;

    if (splodeCountdown === 0)  {
        exploder.src = "assets\\leaders\\jakob-dies.gif";
    }
});

const shade = document.getElementById("shadeEffect");
var shadeEffectCountdown = 8;
var shadeEffectTrigger = false;

shade.addEventListener('click', () => {
    shadeEffectCountdown--;
    console.log(shadeEffectCountdown);

    if (shadeEffectCountdown === 0) {
        console.log('gets here');
        shadeEffectTrigger = true;
    }
});

if (shadeEffectTrigger) {
    console.log('gets here again');
    let x = event.clientX;
    let y = event.clientY;
    shade.style.objectPosition = x + "px " + y + "px";
}