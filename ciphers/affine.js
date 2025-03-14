const affSubmit = document.getElementById('affbutton');
const affSwitch = document.getElementById('affswitch');
const affKeyA = document.getElementById('affkeya');
const affKeyB = document.getElementById('affkeyb');
const affText = document.getElementById('afftext');
const affBox = document.getElementById('affbox');
const affCipherText = document.getElementById('aCT');
const affResult = document.getElementById('aR')

// original height of the content in the box
const aoHeight = parseFloat(getComputedStyle(document.getElementById('affcontentheight')).height);
let affCounter = 0;
var affInterval = setInterval(() => { }, 0);

affBox.style.height = String(aoHeight + 16) + 'px';

affSubmit.addEventListener('click', () => {
    clearInterval(affInterval)
    var i = 0;
    affCipherText.textContent = "";

    if (affText.value.length && affKeyA.value.length && affKeyB.value.length) {
        affResult.textContent = "Result:";
        var ciphertext = affineCipher(affText.value, Number(affKeyA.value), Number(affKeyB.value), affSwitch);

        const cipherArray = ciphertext.split('');

        affInterval = setInterval(() => {
            if (i < cipherArray.length) {
                affCipherText.textContent += cipherArray[i];
                i++;
            } else {
                clearInterval(affInterval);
            }
        }, 80);

        if (affCounter == 0) { 
            affBox.style.height = String(aoHeight + affResult.clientHeight + 75) + "px";
            affCounter++;
        }
    }
});

function affineCipher(text, a, b, mode) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    text = text.toUpperCase();
    let resultText = '';

    const modInverse = (a, m) => {
        for (let x = 1; x < m; x++) {
            if ((a * x) % m === 1) {
                return x;
            }
        }
        throw new Error('No modular inverse exists for the given value of a.');
    };

    const m = alphabet.length;
    const aInverse = mode.checked ? modInverse(a, m) : null;


    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (alphabet.includes(char)) {
            const index = alphabet.indexOf(char);
            let newIndex;

            if (!mode.checked) {
                newIndex = (a * index + b) % m;
            } else {
                newIndex = (aInverse * (index - b + m)) % m;
            }

            resultText += alphabet[newIndex];
        } else {
            resultText += char;
        }
    }

    return resultText;
}
