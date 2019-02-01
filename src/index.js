function encode(){
    let string = document.getElementById("input").value;
    let offset = Number(document.getElementById("offset").value);
    let output = window.cipher.encode(offset,string);
    document.getElementById("output").innerHTML = output;
  }
  document.getElementById("encode").addEventListener("click",encode);
  
  function decode(){
    let string = document.getElementById("input").value;
    let offset = Number(document.getElementById("offset").value);
    let output = window.cipher.decode(offset,string);
    document.getElementById("output").innerHTML = output;
  }
  document.getElementById("decode").addEventListener("click",decode);
  
  