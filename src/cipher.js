 window.cipher = {
   encode: (offset, string)=> {

     let plainString = [];

     for(let i=0; i < string.length; i++){
         string[i].charCodeAt();
         let positionEncode =(string[i].charCodeAt() - 65 + offset)%26 + 65;
         let asciiString= String.fromCharCode(positionEncode);
         plainString.push(asciiString);

     }
     let cipherString = plainString.join('');
     return cipherString;
   },

   decode: (offset, string)=> {

     let plainString = [];

     for(let i=0; i < string.length; i++){
         string[i].charCodeAt();
         let positionDecode = (string[i].charCodeAt() + 65 - offset)%26 + 65;
         let asciiString= String.fromCharCode(positionDecode);
         plainString.push(asciiString);

     }
     let cipherString = plainString.join('');
     return cipherString;
   }
   
 };

// window.cipher = {
//   encode: (offset, texto)=> {
//     let encrypt="";
//     let temp = 0;
//     

//     //Repasa el string caracter por caracter
//     for (let i=0; i<texto.length; i++){
// 		temp=texto.charCodeAt(i);
// 		if ((temp >= 65) && (temp <= 90)){
// 			temp = (((temp - 65 + offset) % 26) + 65);
// 		}
// 		// Formula para los cambios de posición hacia la derecha de letras minúsculas
// 		else if ((temp >= 97) && (temp <= 122)){
// 			temp = (((temp - 97 + offset) % 26) + 97);
// 		}
//     // Agregar espacio: el caracter 32 en ASCII es equivalente a espacio
// 		else if ((temp >= 33) && (temp <= 64)){
//         temp = (((temp - 33 + offset) % 26) + 33);
// 		}
// 		encrypt += String.fromCharCode(temp);
//     }
//     return encrypt;
//   },

//   decode: (offset, texto)=> {
//     let encrypt="";
//     let temp = 0;
//     
  
//     //Repasa el string caracter por caracter
//     for (let i=0; i<texto.length; i++){
//       temp=texto.charCodeAt(i);
//       if ((temp >= 65) && (temp <= 90)){
//         temp = (((temp - 90 - offset) % 26) + 90);
//       }
//       // Formula para los cambios de posición hacia la derecha de letras minúsculas
//       else if ((temp >= 97) && (temp <= 122)){
//         temp = (((temp - 122 - offset) % 26) + 122);
//       }
//       // Agregar espacio: el caracter 32 en ASCII es equivalente a espacio
//       else if ((temp >= 33) && (temp <= 64)){
//           temp = (((temp - 64 - offset) % 26) + 64);
//       }
//       encrypt += String.fromCharCode(temp);
//       }
//       return encrypt;
//   }
   
// };
/*window.cipher = {
  encode: (offset, string)=> {
    let cipherStr="";
    let asciiStr = 0;
    

    //Repasa el string caracter por caracter
    for (let i=0; i<string.length; i++){
		asciiStr=string.charCodeAt(i);
		if ((asciiStr >= 65) && (asciiStr <= 90)){
			asciiStr = (((asciiStr - 65 + offset) % 26) + 65);
		}
		// Formula para los cambios de posición hacia la derecha de letras minúsculas
		else if ((asciiStr >= 97) && (asciiStr <= 122)){
			asciiStr = (((asciiStr - 97 + offset) % 26) + 97);
		}
    // Agregar espacio: el caracter 32 en ASCII es equivalente a espacio
		else if ((asciiStr >= 32) && (asciiStr <= 64)){
        asciiStr = (((asciiStr - 32 + offset) % 26) + 3);
		}
		cipherStr += String.fromCharCode(asciiStr);
    }
    return cipherStr;
  },

  decode: (offset, string)=> {
    let cipherStr="";
    let asciiStr = 0;
    
  
    //Repasa el string caracter por caracter
    for (let i=0; i<string.length; i++){
      asciiStr=string.charCodeAt(i);
      if ((asciiStr >= 65) && (asciiStr <= 90)){
        asciiStr = (((asciiStr - 90 - offset) % 26) + 90);
      }
      // Formula para los cambios de posición hacia la derecha de letras minúsculas
      else if ((asciiStr >= 97) && (asciiStr <= 122)){
        asciiStr = (((asciiStr - 122 - offset) % 26) + 122);
      }
      // Agregar espacio: el caracter 32 en ASCII es equivalente a espacio
      else if ((asciiStr >= 33) && (asciiStr <= 64)){
          asciiStr = (((asciiStr - 64 - offset) % 26) + 64);
      }
      cipherStr += String.fromCharCode(asciiStr);
      }
      return cipherStr;
  }
   
};
*/

