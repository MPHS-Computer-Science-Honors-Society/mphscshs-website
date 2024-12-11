const secretSubmit = document.getElementById('secretbutton');
const secretSwitch = document.getElementById('secretswitch');
const secretKey = document.getElementById('secretkey');
const secretText = document.getElementById('secrettext');
const secretBox = document.getElementById('secretbox');
const secretCipherText = document.getElementById('sCT');
const secretResult = document.getElementById('sR');

// original height of the content in the box
const soHeight = parseFloat(getComputedStyle(document.getElementById('secretcontentheight')).height);
let secretCount = 0;
var secretInterval = setInterval(() => { }, 0);

secretBox.style.height = String(soHeight + 16) + "px";

secretSubmit.addEventListener('click', () => {
    clearInterval(secretInterval)
    var i = 0;
    secretCipherText.textContent = "";

    if (secretText.value.length && secretKey.value.length) {
        secretResult.textContent = "Result:";
        var ciphertext = secretCipher(secretText.value, secretKey.value, secretSwitch);

        const cipherArray = ciphertext.split('');

        secretInterval = setInterval(() => {
            if (i < cipherArray.length) {
                secretCipherText.textContent += cipherArray[i];
                i++;
            } else {
                clearInterval(secretInterval);
            }
        }, 80);

        if (secretCount == 0) { 
            secretBox.style.height = String(soHeight + secretResult.clientHeight + 75) + "px";
            secretCount++;
        }
    }
});

function secretCipher(text, key, mode) {
    if (mode.checked) {
        return "club/secret";
    }
    let index = 0;
    let tempKey = "";
    while (tempKey.length < text.length) {
        if (index >= key.length) {
            index = 0;
        }
        tempKey += key[index];
        index++;
    }
    key = tempKey;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    text = text.toUpperCase();
    key = key.toUpperCase();
    let resultText = '';
    let keyCount = 0;
    for (let i = 0; i < text.length; i++) {
        const textChar = text[i];
        const keyChar = key[keyCount];
        if (alphabet.includes(textChar)) {
            const textIndex = alphabet.indexOf(textChar);
            const keyIndex = alphabet.indexOf(keyChar);

            let newIndex;
            newIndex = (Math.pow(textIndex, 2) + Math.pow(keyIndex, 2)) % 26;
            resultText += alphabet[newIndex];
            keyCount++;
        } else {
            resultText += textChar;
        }

    }

    return resultText === "HBILAHMFROAI" ? "tinyurl.com/" + resultText : resultText;
}
