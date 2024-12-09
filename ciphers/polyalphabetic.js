const polySubmit = document.getElementById('polybutton');
const polySwitch = document.getElementById('polyswitch');
const polyShift = document.getElementById('polyshift');
const polyText = document.getElementById('polytext');
const polyBox = document.getElementById('polybox');
const polyResult = document.getElementById('pR')
const polyCipherText = document.getElementById('pCT');
const poHeight = parseFloat(getComputedStyle(document.getElementById('polycontentheight')).height);
var polyCounter = 0;
var polyInterval = setInterval(() => { }, 0);

polyBox.style.height = String(poHeight + 16) + "px";

polySubmit.addEventListener('click', () => {
    clearInterval(polyInterval)
    var i = 0;
    polyCipherText.textContent = "";

    if (polyText.value.length && polyShift.value.length) {
        polyResult.textContent = "Result:"

        if (polySwitch.checked) {
            var ciphertext = polyDecipher(polyText.value, polyShift.value);
        }
        else {
            var ciphertext = polyCipher(polyText.value, polyShift.value)
        }

        const cipherArray = ciphertext.split('');

        polyInterval = setInterval(() => {
            if (i < cipherArray.length) {
                polyCipherText.textContent += cipherArray[i];
                i++;
            } else {
                clearInterval(polyInterval);
            }
        }, 80);

        if (polyCounter == 0) {
            polyBox.style.height = String(poHeight + polyResult.offsetHeight + 75) + "px";
            polyCounter++;
        }
    }
});

function polyCipher(plainText, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    plainText = plainText.toUpperCase();
    key = key.toUpperCase();

    let cipherText = '';
    let keyIndex = 0;

    for (let i = 0; i < plainText.length; i++) {
        const plainChar = plainText[i];

        if (alphabet.includes(plainChar)) {
            const plainIndex = alphabet.indexOf(plainChar);
            const keyChar = key[keyIndex % key.length];
            const keyIndexValue = alphabet.indexOf(keyChar);

            const cipherIndex = (plainIndex + keyIndexValue) % alphabet.length;
            cipherText += alphabet[cipherIndex];

            keyIndex++;
        } else {
            cipherText += plainChar;
        }
    }

    return cipherText;
}

function polyDecipher(cipherText, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    cipherText = cipherText.toUpperCase();
    key = key.toUpperCase();

    let plainText = '';
    let keyIndex = 0;

    for (let i = 0; i < cipherText.length; i++) {
        const cipherChar = cipherText[i];

        if (alphabet.includes(cipherChar)) {
            const cipherIndex = alphabet.indexOf(cipherChar);
            const keyChar = key[keyIndex % key.length];
            const keyIndexValue = alphabet.indexOf(keyChar);

            let plainIndex = (cipherIndex - keyIndexValue);
            if (plainIndex < 0) {
                plainIndex += alphabet.length;
            }
            plainIndex %= alphabet.length;
            plainText += alphabet[plainIndex];

            keyIndex++;
        } else {
            plainText += cipherChar;
        }
    }
    return plainText;
}
