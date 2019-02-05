function reload(){
  location.reload();
}
document.getElementById("nuevo").addEventListener("click", reload);

let output = document.getElementById("output");
let btnCopy = document.getElementById("btnCopy");
btnCopy.onclick = function (){
  output.select();
  document.execCommand("Copy");
};

function inputView(){
  let input = document.getElementById("input");
  let inputView = document.getElementById("inputView");
  inputView.value = input.value;
}
document.getElementById("inputView").addEventListener("click",inputView);

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
  
  