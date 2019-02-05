window.cipher = {
  encode: (offset, string)=> {
    //Variable vacía para contener el string final ya cifrado
    let cipherStr="";
    //Variable en 0 para depositar el string convertido a números ASCII
    let asciiStr = 0;
    //Repasa el string caracter por caracter
    for (let i=0; i<string.length; i++){
      //Convertir caracteres a números ASCII  
      asciiStr=string.charCodeAt(i);
      //Fórmula y condicionales para codificar letras mayúsculas
      if ((asciiStr >= 65) && (asciiStr <= 90)){
        asciiStr = (((asciiStr - 65 + offset) % 26) + 65);
      }
      // Formula y condicionales para codificar letras minúsculas
      else if ((asciiStr >= 97) && (asciiStr <= 122)){
        asciiStr = (((asciiStr - 97 + offset) % 26) + 97);
      }
      // Formula y condicionales para codificar caracteres especiales
      else {
          asciiStr = (((asciiStr - 32 + offset) % 33) + 32);
      }
    //Los resultados del cifrado se depositan en la variable
    //inicial, de numeros ASCII a caracteres
		cipherStr += String.fromCharCode(asciiStr);
    }
    //Devuelve la secuencia de caracteres
    return cipherStr;
  },

  decode: (offset, string)=> {
    //Variable vacía para contener el string final ya descifrado
    let cipherStr="";
    //Variable en 0 para depositar el string convertido a números ASCII
    let asciiStr = 0;
    //Repasa el string caracter por caracter
    for (let i=0; i<string.length; i++){
      //Convertir caracteres a números ASCII
      asciiStr=string.charCodeAt(i);
      //Fórmula y condicionales para codificar letras mayúsculas
      if ((asciiStr >= 65) && (asciiStr <= 90)){
        asciiStr = (((asciiStr - 90 - offset) % 26) + 90);
      }
      // Formula y condicionales para codificar letras minúsculas
      else if ((asciiStr >= 97) && (asciiStr <= 122)){
        asciiStr = (((asciiStr - 122 - offset) % 26) + 122);
      }
      // Formula y condicionales para codificar caracteres especiales
      else {
          asciiStr = (((asciiStr - 64 - offset) % 33) + 64);
      }
    //Los resultados del cifrado se depositan en la variable
    //inicial, de numeros ASCII a caracteres
    cipherStr += String.fromCharCode(asciiStr);
    }
    return cipherStr;
  }  
};
//test encode
let string = "Time and location";
let encStr = window.cipher.encode(2,string);
console.log(encStr);
//test decode
let dcodStr = window.cipher.decode(2,encStr);
console.log(dcodStr);

