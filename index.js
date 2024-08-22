function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    var y = document.getElementById("menuitems");
    if (y.className === "flexer") {
        y.className -= " flexer";
    } else {
        y.className = "flexer";
    }
}
function doTouch(event) {
  var clientX = event.touches[0].clientX;
  var clientY = event.touches[0].clientY;
  pingEffect(clientX, clientY);
}
function doClick(event) {
  // get the click co-ords
  var clientX = event.clientX;
  var clientY = event.clientY;
  pingEffect(clientX, clientY);
}

var pingName = 'example';

function pingEffect(clientX, clientY) {
  // get and position the ping element
  var ping = document.getElementById('ping');
  ping.style.left = clientX+'px';
  ping.style.top = clientY+'px';
  ping.style.transform = 'translate(-50%, -50%)';
  ping.style.display = 'block';
  // run the animation
  ping.classList.remove(pingName);
  void ping.offsetWidth; // trigger a DOM reflow
  ping.classList.add(pingName);
}
document.addEventListener('touchstart', doTouch);
document.addEventListener('click', doClick);