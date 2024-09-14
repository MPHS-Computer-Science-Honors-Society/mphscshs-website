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
  ping.style.left = clientX + 'px';
  ping.style.top = clientY + 'px';
  ping.style.transform = 'translate(-50%, -50%)';
  ping.style.display = 'block';
  // run the animation
  ping.classList.remove(pingName);
  void ping.offsetWidth; // trigger a DOM reflow
  ping.classList.add(pingName);
}
document.addEventListener('touchstart', doTouch);
document.addEventListener('click', doClick);

var lastForm = 0

function attendenceForm(form) {
  console.log(lastForm)
  if (document.getElementById("attendence-form").src.includes("google") && lastForm == form) {
    // console.log(document.getElementById("attendence-form").src)
    document.getElementById("attendence-form").height = 50;
    document.getElementById("attendence-form").src = "";
  } /*else {
    if (form == 1) {
      document.getElementById("attendence-form").src = "https://docs.google.com/forms/d/e/1FAIpQLSdOwOSN1cMb-qF24Q_iF2RSFK0oEysuKhhWnLXEcrMWhdGC2w/viewform?embedded=true"
      lastForm = form;
    } else if (form == 2) {
      document.getElementById("attendence-form").src = "https://docs.google.com/forms/d/e/1FAIpQLScQ1a3tEsdzoY0e2uMP2xa7jrDoWPFdJAOFlbRWjcjiMpA9KA/viewform?embedded=true"
      lastForm = form;
    }  else {
      exit();
    }
    document.getElementById("attendence-form").height = 700;
  }*/
}

function documents(doc) {
  console.log("lastForm: " + lastForm);
  console.log("doc: " + doc);console.log
  console.log(document.getElementById("document").src);
  if (document.getElementById("document").src.includes("google") && lastForm == doc) {
    document.getElementById("document").height = 50;
    document.getElementById("document").src = "";
  } /*else {
    if (doc == 1) {
      document.getElementById("document").src = "https://docs.google.com/document/d/1ioduJc5vhMFwheAq6y6N2dIqTfv9kAuk2i0Svz3QRMg/pub?embedded=true"
      lastForm = doc;
    } else if (doc == 2) {
      document.getElementById("document").src = "https://docs.google.com/document/d/1IDod10EVljmHSWMkDLdGEZ0cAZSGirhqtqxdzuMEB5M/pub?embedded=true"
      lastForm = doc;
    } else {
      exit();
    }
    document.getElementById("document").height = 700;
  }*/
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert("Copied To Clipboard: " + text);
}


function randomColor(div) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    div.style.backgroundColor = rgbToHex(r, g, b);
}

function alecRotate(alec) {
  var rotation = Math.random() * 360
  alec.style.transform = "rotate(" + rotation + "deg)";
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
