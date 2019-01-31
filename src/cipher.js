window.cipher = {

encode:function  (text,offset) {

  let encryption = "";

  for (let i = 0; i <text.length;i ++) {

      let codeASCII = (text.charCodeAt(i) - 65 + offset) % 26 + 65;

      if (text [i] == " ") encryption = encryption + " ";

      else encryption = encryption + String.fromCharCode(codeASCII);

  }

  return encryption;
}

decode:function (text,offset) {

  let decryption = "";

  for (let i = 0; i < text.length; i++) {

      let reveal = (text.charCodeAt(i)+ 65 - offset) % 26 + 65;

      if (text[i] == " ") decryption = decryption +" ";

      else decryption = decryption + String.fromCharCode(reveal);

  }

  return decryption;

}
}