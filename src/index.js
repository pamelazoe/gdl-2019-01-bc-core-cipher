//Función para refrescar la página
function reload() {
  location.reload();
}
document.getElementById("index").addEventListener("click", reload);
//Limpia los campos para dar paso a una tarea nueva
function clear() {
  document.getElementById("input").value = "";
  document.getElementById("offset").value = "";
  document.getElementById("output").value = "";
}
document.getElementById("clear").addEventListener("click", clear);
//Selecciona y copia el texto depositado en output mediante el botón de copiado
let output = document.getElementById("output");
let btnCopy = document.getElementById("btnCopy");
btnCopy.onclick = function() {
  output.select();
  document.execCommand("Copy");
};
//Función para botón codificar
function encode() {
  let string = document.getElementById("input").value;
  let offset = Number(document.getElementById("offset").value);
  let output = window.cipher.encode(offset, string);
  document.getElementById("output").innerHTML = output;
}
document.getElementById("encode").addEventListener("click", encode);
//Función para botón decodificar
function decode() {
  let string = document.getElementById("input").value;
  let offset = Number(document.getElementById("offset").value);
  let output = window.cipher.decode(offset, string);
  document.getElementById("output").innerHTML = output;
}
document.getElementById("decode").addEventListener("click", decode);

function start() {
  document.getElementById("root").style.display = "block";
  document.getElementById("container").style.display = "block";
  document.getElementById("face").style.display = "none";
}
document.getElementById("start").addEventListener("click", start);