document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputText');
    const keyInput = document.getElementById('key');
    const encryptButton = document.getElementById('encryptButton');
    const decryptButton = document.getElementById('decryptButton');
    const outputField = document.getElementById('outputText');
    const langItButton = document.getElementById('lang-it');
    const langEnButton = document.getElementById('lang-en');

    const translations = {
        it: {
            mainTitle: "Cifrario di Vigenère",
            descriptionText: "Cifra o decifra il testo inserendo una chiave.",
            inputLabel: "Testo:",
            inputPlaceholder: "Inserisci il testo da cifrare o decifrare",
            keyLabel: "Chiave:",
            keyPlaceholder: "Inserisci la chiave",
            encryptButton: "Cifra",
            decryptButton: "Decifra",
            outputLabel: "Risultato:",
            alertMessage: "Per favore, inserici sia il testo che la chiave."
        },
        en: {
            mainTitle: "Vigenère Cipher",
            descriptionText: "Encrypt or decrypt text by entering a key.",
            inputLabel: "Text:",
            inputPlaceholder: "Enter text to encrypt or decrypt",
            keyLabel: "Key:",
            keyPlaceholder: "Enter the key",
            encryptButton: "Encrypt",
            decryptButton: "Decrypt",
            outputLabel: "Result:",
            alertMessage: "Please enter both text and key."
        }
    };

    let currentLang = 'it';

    function updateUI() {
        const t = translations[currentLang];
        document.getElementById('mainTitle').innerText = t.mainTitle;
        document.getElementById('descriptionText').innerText = t.descriptionText;
        document.getElementById('inputLabel').innerText = t.inputLabel;
        document.getElementById('keyLabel').innerText = t.keyLabel;
        document.getElementById('encryptButton').innerText = t.encryptButton;
        document.getElementById('decryptButton').innerText = t.decryptButton;
        document.getElementById('outputLabel').innerText = t.outputLabel;
        inputField.placeholder = t.inputPlaceholder;
        keyInput.placeholder = t.keyPlaceholder;
    }

    langItButton.addEventlistener('click', () => {
        currentLang = 'it';
        updateUI();
    });

    langEnButton.addEventlistener('click', () => {
        currentLang = 'en';
        updateUI();
    });

    function vigenereCipher(text, key, isEncrypting) {
        let result = '';
        let keyIndex = 0;
        const alphabetLenght = 26;

        const cleanKey = key.toUpperCase().replace(/[^A-Z]/g, '');

        if (cleanKey.length === 0) {
            return text;
        }

        for (let i = 0; i < text.length; i++) {
            const char = text[i].toUpperCase();

            if (char >= 'A' && char <= 'Z') {
                const textCharValue = char.charCodeAt(0) - 'A'.charCodeAt(0);
                const keyCharValue = cleanKey[keyIndex % cleanKey.length].charCodeAt(0) - 'A'.charCodeAt(0);
                let newCharValue;

                if (isEncrypting) {
                    newCharValue = (textCharValue + keyCharValue) % alphabetLength;
                } else {
                    newCharValue = (textCharValue - keyCharValue + alphabetLength) % alphabetLength;
                }

                result += String.fromCharCode(newCharValue + 'A'.charCodeAt(0));

                keyIndex++;
                } else {
                    result += char;
                }
            }
            return result;
        }

        encryptButton.addEventListener('click', () => {
            const text = inputField.value;
            const key = keyInput.value;

            if (!text || !key) {
                alert(translations[currentLang].alertMessage);
                return;
            }

            outputField.value = vigenereCipher(text, key, true);
        });

        decryptButton.addEventListener('click', () => {
            const text = inputField.value;
            const key = keyInput.value;

            if (!text || !key) {
                alert(translations[currentLang].alertMessage);
                return;
            }

            outputField.value = vigenereCipher(text, key, false);
        });

        updateUI();
    });