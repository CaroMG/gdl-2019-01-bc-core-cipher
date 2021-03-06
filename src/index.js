const encodeButton = (event) => {
    event.preventDefault();
    const string = (document.getElementById("mensaje").value).toUpperCase();
    const offset = parseInt(document.getElementById("llave").value);
    let result = window.cipher.encode(offset, string);
    document.getElementById("textResult").value = result;
};

const cifrar = document.getElementById("encodeButton");
cifrar.addEventListener("click", encodeButton);

const decodeButton = (event) => { 
    event.preventDefault();
    const string = (document.getElementById("mensaje").value).toUpperCase();
    const offset = parseInt(document.getElementById("llave").value);
    let result = window.cipher.decode(offset, string);
    document.getElementById("textResult").value = result;
};

const descifrar = document.getElementById("decodeButton");
descifrar.addEventListener("click", decodeButton);

