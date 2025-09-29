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

}
    }







})