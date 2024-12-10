const caesarSubmit = document.getElementById('caesarbutton');
const caesarSwitch = document.getElementById('caesarswitch');
const caesarShift = document.getElementById('caesarshift');
const caesarText = document.getElementById('caesartext');
const caesarBox = document.getElementById('caesarbox');
const caesarCipherText = document.getElementById('cCT');
const caesarResult = document.getElementById('cR');

// original height of the content in the box
const coHeight = parseFloat(getComputedStyle(document.getElementById('caesarcontentheight')).height);
let caesarCounter = 0;
var caesarInterval = setInterval(() => {}, 0);

caesarBox.style.height = String(coHeight + 16) + 'px';

caesarSubmit.addEventListener('click', () => {
    clearInterval(caesarInterval)
    var i = 0;
    caesarCipherText.textContent = "";

    if (caesarText.value.length && caesarShift.value.length) {
        caesarResult.textContent = "Result:"
        var ciphertext = caesarCipher(caesarText.value, Number(caesarShift.value), caesarSwitch);
        
        const cipherArray = ciphertext.split('');
    
        caesarInterval = setInterval(() => {
            if (i < cipherArray.length) {
                caesarCipherText.textContent += cipherArray[i];
                i++;
            } else {
                clearInterval(caesarInterval);
            }
        }, 80);

        if (caesarCounter == 0) { 
            caesarBox.style.height = String(coHeight + caesarResult.clientHeight + 75) + "px";
            caesarCounter++;
        }
    }
});

function caesarCipher(str, shift, mode) {
    if (mode.checked) {
        shift = -shift;
    }

    return str.split('').map(function(char) {
        // Check if character is a letter
        if (char.match(/[a-z]/i)) {
            // Get the character code
            let code = char.charCodeAt(0);
            
            // Uppercase letters
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code + shift) - 39) % 26 + 65);
            }
            // Lowercase letters
            else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code + shift) - 71) % 26 + 97);
            }
        }
        // Return non-letter characters as they are
        return char;
    }).join('');
}
