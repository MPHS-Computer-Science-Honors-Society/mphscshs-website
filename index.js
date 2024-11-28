// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
//   var y = document.getElementById("menuitems");
//   if (y.className === "flexer") {
//     y.className -= " flexer";
//   } else {
//     y.className = "flexer";
//   }
// }
// function doTouch(event) {
//   var clientX = event.touches[0].clientX;
//   var clientY = event.touches[0].clientY;
//   pingEffect(clientX, clientY);
// }
// function doClick(event) {
//   // get the click co-ords
//   var clientX = event.clientX;
//   var clientY = event.clientY;
//   pingEffect(clientX, clientY);
// }

// var pingName = 'example';

// function pingEffect(clientX, clientY) {
//   // get and position the ping element
//   var ping = document.getElementById('ping');
//   ping.style.left = clientX + 'px';
//   ping.style.top = clientY + 'px';
//   ping.style.transform = 'translate(-50%, -50%)';
//   ping.style.display = 'block';
//   // run the animation
//   ping.classList.remove(pingName);
//   void ping.offsetWidth; // trigger a DOM reflow
//   ping.classList.add(pingName);
// }
// document.addEventListener('touchstart', doTouch);
// document.addEventListener('click', doClick);

var lastForm = 0;
var lastDoc = 0;

function attendenceForm(form) {
  if (document.getElementById("attendence-form").src.includes("google") && lastForm == form) {
    // console.log(document.getElementById("attendence-form").src)
    document.getElementById("attendence-form").height = 50;
    document.getElementById("attendence-form").src = "";
  } else {
    if (form == 1) {
      document.getElementById("attendence-form").src = "https://docs.google.com/forms/d/e/1FAIpQLSc3rvk73AUQi_sVq0jSfBy0L_6qMKS0Qi5d3B7UvAC6qowEZw/viewform?embedded=true";
      lastForm = form;
    } else if (form == 2) {
      document.getElementById("attendence-form").src = "https://docs.google.com/forms/d/e/1FAIpQLScnqdaOoFmutZl5oF37hcylejRP4cAh3mq6gpgsmEzwrYYklQ/viewform?embedded=true";
      lastForm = form;
    } else if (form == 3) {
      document.getElementById("attendence-form").src = "https://docs.google.com/forms/d/e/1FAIpQLSdWGHNA_0dFoWMV4nhh4HmtSL4-F-U-_neb1j3YCItwdGbPBA/viewform?embedded=true";
      lastForm = form;
    } else if (form == 4) {
      document.getElementById("attendence-form").src = "https://docs.google.com/forms/d/e/1FAIpQLSdfbiJpIOTDNmr4G4-6k0VHmjxGGRwccZwY9r_RkNsK-xqBsw/viewform?embedded=true";
      lastForm = form;
    } else if (form == 5) {
      document.getElementById("attendence-form").src = "https://docs.google.com/forms/d/e/1FAIpQLSdfcZsT4_79b6TDpt7N1uSNQRPcXPkR8TDLh4pRbg9vquSgsw/viewform?embedded=true";
      lastForm = form;
    } else {
      exit();
    }
    document.getElementById("attendence-form").height = 700;
  }
}
function documents(doc) {
  if (document.getElementById("document").src.includes("google") && lastDoc == doc) {
    document.getElementById("document").height = 50;
    document.getElementById("document").src = "";
  } else {
    if (doc == 1) {
      document.getElementById("document").src = "https://docs.google.com/document/d/e/2PACX-1vT7Xfguc3w7f5UOSz168byXDLZe6ddUN1YHDekOmvaPLYILlvZ7sdoMq9D2NTcAMnGjJIUlWjggDWnr/pub?embedded=true"
      lastDoc = doc;
    } else if (doc == 2) {
      document.getElementById("document").src = "https://docs.google.com/document/d/e/2PACX-1vSmceuPcL6JdElRMUIPRoAgXa1XD77Tj4TJt4EBq9IxhsT0smz2HuG78Y0hQ0yvxwC4whT1oU4HX-Vv/pub?embedded=true"
      lastDoc = doc;
    } else if (doc == 3) {
      document.getElementById("document").src = "https://docs.google.com/document/d/e/2PACX-1vRNvxinZIGw5pAdzerE2L_xQ8Gncsi6NxPONYl7n9FltbLm-B7U4w6vsmBqHNZVcCT1aE5JxxATFXoL/pub?embedded=true"
      lastDoc = doc;
    } else if (doc == 4) {
      document.getElementById("document").src = "https://docs.google.com/document/d/e/2PACX-1vQqDqF502QZCU3_ztevNH_MpUh2nmJHu8BhjGPNHEmsPoIcceUS8eHmEdqIA_6SUztcBcis9q2RdN4x/pub?embedded=true"
      lastDoc = doc;
    } else if (doc == 5) {
      document.getElementById("document").src = "https://docs.google.com/document/d/e/2PACX-1vTuwm5nI9oTp2YHEE6zefd2FPmer0YuqXAQwMWA0-mUAq87sOqvR0alb2bA55Zc23JxCpWHtlNtckcR/pub?embedded=true"
      lastDoc = doc;
    } else {
      exit();
    }
    if (window.innerWidth < 500) {
      document.getElementById("document").width = "100%";
    }
    document.getElementById("document").height = 700;
  }
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
