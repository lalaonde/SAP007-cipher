import cipher from "./cipher.js";

let cifrar = document.getElementById("btn-cifrar");
cifrar.addEventListener("click", function () {
  let mensagemParaCifrar = document.getElementById("cifrar").value;
  let offset = document.getElementById("offset").valueAsNumber;
  document.getElementById("decifrar").value=cipher.encode(offset, mensagemParaCifrar);
  
});

let decifrar = document.getElementById("btn-decifrar");
decifrar.addEventListener("click", function () {
  let mensagemParaCifrar = document.getElementById("decifrar").value;
  let offset = document.getElementById("decifra-offset").valueAsNumber;
  document.getElementById("cifrar").value=cipher.decode(offset, mensagemParaCifrar);
});
