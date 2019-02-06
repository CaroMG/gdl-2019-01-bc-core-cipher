const encodeButton = () => {
    const string = document.getElementById("mensaje").value;
    const offset = parseInt(document.getElementById("llave").value);
    let result = window.cipher.encode(offset, string);
    document.getElementById("textResult").value = result;
};

const cifrar = document.getElementById("encodeButton");
cifrar.addEventListener("click", encodeButton);

const decodeButton = () => {
    const string = document.getElementById("mensaje").value;
    const offset = parseInt(document.getElementById("llave").value);
    let result = window.cipher.decode(offset, string);
    document.getElementById("textResult").value = result;
};

const descifrar = document.getElementById("decodeButton");
descifrar.addEventListener("click", decodeButton);