import cipher from './cipher.js';

var button = document.querySelector("button");

const alfabeto = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// ao apertar o botao - os eventos dentro da function sao disparados

var cifrar = document.getElementById("btn-cifrar"); 
    cifrar.addEventListener("click", cifrarTexto);


function cifrarTexto() {
  let mensagemParaCifrar = document.getElementById("cifrar").value.toUpperCase().replace(/\s+/g, '');
   //   mensagemParaCifrar.replace(/\s+/g, '');
  // mensagemParaCifrar.toUpperCas
       // tentando remover os espacos - estao virando a letra relativa ao offset (ex:offset 3 - letra C)
  var offsetCifra = document.getElementById("offset").value; //prompt("Escolha o deslocamento:");
  var resultadoCifra = "";

  for (var i = 0; i < mensagemParaCifrar.length; i++) {
    var novoIndexLetraCifrada =
      parseInt(alfabeto.indexOf(mensagemParaCifrar[i])) + parseInt(offsetCifra);

    var letraCifradaEVoltaAlfabeto = alfabeto[novoIndexLetraCifrada % 26];
    // resultadoCifra = letraCifradaEVoltaAlfabeto;

    if (resultadoCifra == "") {
      resultadoCifra = letraCifradaEVoltaAlfabeto;
    } else {
      resultadoCifra = resultadoCifra + letraCifradaEVoltaAlfabeto;

      //alert(resultadoCifra)
    }
  }
  alert(resultadoCifra);
}

var decifrar = document.getElementById("btn-decifrar");
decifrar.addEventListener("click", decifrarTexto);

function decifrarTexto() {
  var mensagemParaDecifrar = document.getElementById("decifrar").value; //prompt("Digite seu nome:");
  var offsetDecifrar = document.getElementById("decifra-offset").value; //prompt("Escolha o deslocamento:");
  var resultadoDecifrar = "";
  var novoIndexLetraDecifrada;
  var letraDecifradaEVoltaAlfabeto;

  for (var i = 0; i < mensagemParaDecifrar.length; i++) {
    novoIndexLetraDecifrada =
      parseInt(alfabeto.indexOf(mensagemParaDecifrar[i])) -
      parseInt(offsetDecifrar);

    if (novoIndexLetraDecifrada >= 0) {
      letraDecifradaEVoltaAlfabeto = alfabeto[novoIndexLetraDecifrada];

      // alert(novoIndexLetraDecifrada); // isso mostra a posição
      //  alert(letraDecifradaEVoltaAlfabeto);
    } else {
      letraDecifradaEVoltaAlfabeto = alfabeto[novoIndexLetraDecifrada + 26];
      // alert(alfabetoReverso); isso mostra a posição

      // var letraAlfabetoReverso = alfabeto[alfabetoReverso];

      //   alert(letraAlfabetoReverso);
    }

    if (resultadoDecifrar == "") {
      resultadoDecifrar = letraDecifradaEVoltaAlfabeto;
    } else {
      resultadoDecifrar = resultadoDecifrar + letraDecifradaEVoltaAlfabeto;

    }
  } 
  alert(resultadoDecifrar);
}