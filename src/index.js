import cipher from './cipher.js';   

// var button = document.querySelector("button");



// ao apertar o botao - os eventos dentro da function sao disparados



let cifrar = document.getElementById("btn-cifrar");
cifrar.addEventListener("click", function(){
  let mensagemParaCifrar = document
      .getElementById("cifrar")
      .value;
  let offset = document.getElementById("offset").valueAsNumber;
  cipher.encode(offset, mensagemParaCifrar)


});

let decifrar = document.getElementById("btn-decifrar");
decifrar.addEventListener("click", function(){
  let mensagemParaCifrar = document
  .getElementById("decifrar")
  .value;
let offset = document.getElementById("decifra-offset").valueAsNumber;
cipher.decode(offset, mensagemParaCifrar)



});

