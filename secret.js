const button = document.getElementById("alecButton");
var clickCount = 0;

button.addEventListener('click', () => {
    clickCount++;

    if (clickCount == 15) {
        button.href = "secret.html";
    }
});

const secretButton = document.getElementById("samanthaButton");
var secretClickCount = 0;

secretButton.addEventListener('click', () => {
    secretClickCount++;

    if (secretClickCount == 15) {
        secretButton.href = "supersecret.html";
    }
});

const exploder = document.getElementById("superSplode");
var splodeCountdown = 15;

exploder.addEventListener('click', () => {
    splodeCountdown--;

    if (splodeCountdown == 0)  {
        exploder.src = "assets\\leaders\\jakob-dies.gif";
    }
});

const shade = document.getElementById("shadeEffect");
var shadeEffectCountdown = 15;

var currentScale = 1;
var shadeInterval;

shade.addEventListener('click', () => {
    shadeEffectCountdown--;
    if (shadeEffectCountdown == 0) {
        shade.src = "assets\\leaders\\Shade Burgess.png"
        shadeInterval = setInterval(scaleShade, 33);
    }

    if (currentScale > 5) {
        shade.style.transform = "scale(1, 1)";
        clearInterval(shadeInterval)
        shadeEffectCountdown = 15;
        currentScale = 1;
    }
});

function scaleShade() {
    currentScale += .0333;
    shade.style.transform = "scale(" + currentScale + ", 1)";
    if (currentScale == 30) {
        clearInterval(shadeInterval)
    }
}

var byronEffectCountdown = 15;
var rotateByron;

byron.addEventListener('click', () => {
    byronEffectCountdown--;
    if (byronEffectCountdown === 0) {
        byronInterval = setInterval(rotateByron, 5);
    }
})

function rotateByron() {
    var rotation = Math.random() * 360
    document.getElementById("byron").style.transform = "rotate(" + rotation + "deg)";
}