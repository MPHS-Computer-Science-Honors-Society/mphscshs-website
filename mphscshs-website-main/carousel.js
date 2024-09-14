let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
    
let active = 0;
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
next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : 0;
    loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : items.length - 1;
    loadShow();
}