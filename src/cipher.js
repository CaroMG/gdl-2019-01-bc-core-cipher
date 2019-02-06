window.cipher = {

  encode: function (offset, string) {

    let encryption = "";

    for (let i = 0; i < string.length; i++) {
      let codeASCII = (string.charCodeAt(i) - 65 + offset) % 26 + 65;
      if (string[i] == " ") encryption = encryption + " ";
      else encryption = encryption + String.fromCharCode(codeASCII);
    }
    return encryption;
  },

  decode: function (offset, string) {

    let decryption = "";

    for (let i = 0; i < string.length; i++) {
      let codeASCII = (string.charCodeAt(i) + 65 - offset) % 26 + 65;
      if (string[i] == " ") decryption = decryption + " ";
      else decryption = decryption + String.fromCharCode(codeASCII);
    }
    return decryption;

  }
};
