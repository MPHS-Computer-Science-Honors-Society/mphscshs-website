const caesarSubmit = document.getElementById('caesarbutton');
const caesarSwitch = document.getElementById('caesarswitch');
const caesarShift = document.getElementById('caesarshift');
const caesarText = document.getElementById('caesartext');
const caesarBox = document.getElementById('caesarbox');
const caesarResult = document.getElementById('cCT');
var caesarInterval = setInterval(() => {}, 0);


caesarSubmit.addEventListener('click', () => {
    clearInterval(caesarInterval)
    var i = 0;
    caesarResult.textContent = "";

    if (caesarText.value.length && caesarShift.value.length){
        if (caesarBox.offsetHeight)
        document.getElementById('cR').textContent = "Result:"
        var ciphertext = caesarCipher(caesarText.value, Number(caesarShift.value), caesarSwitch);
        
        const cipherArray = ciphertext.split('');
        
        caesarInterval = setInterval(() => {
            if (i < cipherArray.length) {
                caesarResult.textContent += cipherArray[i];
                i++;
            } else {
                clearInterval(caesarInterval);
            }
        }, 80);
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