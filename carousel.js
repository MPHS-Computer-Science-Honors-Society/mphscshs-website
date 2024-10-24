let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let sliderbox = document.getElementById('slide');
    
let active = 0;
let autoInterval;
let intTime = 7000;
function loadShow(){
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    items[active].style.zIndex = 100;
    for(var i = active + 1; i < items.length; i++){
        stt++;
        if (stt === 1) items[i].style.opacity = 0.6;
        if (stt === 2) items[i].style.opacity = 0.3;
        if (stt > 2) items[i].style.opacity = 0;
        items[i].style.transform = `translateX(${150*stt}px) scale(${1 - 0.2*stt})`;
        items[i].style.zIndex = stt;
        items[i].style.filter = 'blur(10px)';
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        if (stt === 1) items[i].style.opacity = 0.6;
        if (stt === 2) items[i].style.opacity = 0.3;
        if (stt > 2) items[i].style.opacity = 0;
        items[i].style.transform = `translateX(${-150*stt}px) scale(${1 - 0.2*stt})`;
        items[i].style.zIndex = stt;
        items[i].style.filter = 'blur(10px)';
    }
}
loadShow();

autoInterval = setInterval(null, intTime);

let onScreen;

function autoSlide() {
    active = active + 1 < items.length ? active + 1 : 0;
    loadShow();
}

function isPartView() {
    let rect = sliderbox.getBoundingClientRect();
    return (
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right > 0
    );
}

window.addEventListener('scroll', () => {
    if (isPartView()) {
        if (!onScreen) {
            autoInterval = setInterval(autoSlide, intTime);
            onScreen = true;
        }
    }
    else {
        clearInterval(autoInterval);
        onScreen = false;
    }
});

next.onclick = function() {
    active = active + 1 < items.length ? active + 1 : 0;
    clearInterval(autoInterval);
    autoInterval = setInterval(autoSlide, intTime);
    loadShow();
}
prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : items.length - 1;
    loadShow();
}

sliderbox.addEventListener('mouseover', () => {
    clearInterval(autoInterval);
    sliderbox.style.transform = 'scale(1.05)';
});

sliderbox.addEventListener('mouseleave', () => {
    autoInterval = setInterval(autoSlide, intTime);
    sliderbox.style.transform = 'scale(1)'
});
