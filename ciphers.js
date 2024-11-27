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
        if (window.innerWidth < 901) caesarBox.style.height = "480px";
        else caesarBox.style.height = "530px";
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






const polySubmit = document.getElementById('polybutton');
const polySwitch = document.getElementById('polyswitch');
const polyShift = document.getElementById('polyshift');
const polyText = document.getElementById('polytext');
const polyBox = document.getElementById('polybox');
const polyResult = document.getElementById('pCT');
var polyInterval = setInterval(() => {}, 0);

polySubmit.addEventListener('click', () => {
    clearInterval(polyInterval)
    var i = 0;
    polyResult.textContent = "";
    console.log("here");

    if (polyText.value.length && polyShift.value.length){
        polyBox.style.height = "530px";
        document.getElementById('pR').textContent = "Result:"
        
        if (polySwitch.checked) {
            var ciphertext = polyDecipher(polyText.value, polyShift.value);
        }
        else {
            var ciphertext = polyCipher(polyText.value, polyShift.value)
        }

        const cipherArray = ciphertext.split('');
        
        polyInterval = setInterval(() => {
            if (i < cipherArray.length) {
                polyResult.textContent += cipherArray[i];
                i++;
            } else {
                clearInterval(polyInterval);
            }
        }, 80);
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





const affSubmit = document.getElementById('affbutton');
const affSwitch = document.getElementById('affswitch');
const affKeyA = document.getElementById('affkeya');
const affKeyB = document.getElementById('affkeyb');
const affText = document.getElementById('afftext');
const affBox = document.getElementById('affbox');
const affResult = document.getElementById('aCT');
var affInterval = setInterval(() => {}, 0);


affSubmit.addEventListener('click', () => {
    clearInterval(affInterval)
    var i = 0;
    affResult.textContent = "";

    if (affText.value.length && affKeyA.value.length && affKeyB.value.length){
        if (window.innerWidth < 901) affBox.style.height = "500px";
        else affBox.style.height = "520px";
        document.getElementById('aR').textContent = "Result:";
        var ciphertext = affineCipher(affText.value, Number(affKeyA.value), Number(affKeyB.value), affSwitch);
        
        const cipherArray = ciphertext.split('');
        
        affInterval = setInterval(() => {
            if (i < cipherArray.length) {
                affResult.textContent += cipherArray[i];
                i++;
            } else {
                clearInterval(affInterval);
            }
        }, 80);
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