const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.getElementById('cipherButton').addEventListener('click', cifrarTexto);
document.getElementById('decipherButton').addEventListener('click', descifrarTexto);

function cifrarTexto() {
    const inputOriginal = document.getElementById('inputOriginalText');
    const result = document.getElementById('result');
    let originalMessage = inputOriginal.value.toLowerCase();
    let mensajeEncriptado = '';

    for (let i = 0; i < originalMessage.length; i++) {
        let letra = originalMessage[i];
        let index = alfabeto.indexOf(letra);

        if (index !== -1) {
            let newLetterIndex = (index + 5) % alfabeto.length;
            mensajeEncriptado += alfabeto[newLetterIndex];
        } else {
            mensajeEncriptado += letra;
        }
    }

    result.value = mensajeEncriptado;
}

function descifrarTexto() {
    const inputEncrypted = document.getElementById('inputEncryptedText');
    const result = document.getElementById('result');
    let mensajeEncriptado = inputEncrypted.value.toLowerCase();
    let mensajeDesencriptado = '';

    for (let i = 0; i < mensajeEncriptado.length; i++) {
        let letra = mensajeEncriptado[i];
        let index = alfabeto.indexOf(letra);

        if (index !== -1) {
            let newLetterIndex = (index - 5 + alfabeto.length) % alfabeto.length;
            mensajeDesencriptado += alfabeto[newLetterIndex];
        } else {
            mensajeDesencriptado += letra;
        }
    }

    result.value = mensajeDesencriptado;
}

    