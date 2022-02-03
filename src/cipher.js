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
const cipher = {
  encode: function (offset, mensagem) {
    const mensagemParaCifrar = mensagem.toUpperCase().replace(/\s+/g, "");

    let resultadoCifra = "";

    for (var i = 0; i < mensagemParaCifrar.length; i++) {
      let novoIndexLetraCifrada =
        parseInt(alfabeto.indexOf(mensagemParaCifrar[i])) + offset;

      let letraCifradaEVoltaAlfabeto = alfabeto[novoIndexLetraCifrada % 26];

      if (resultadoCifra == "") {
        resultadoCifra = letraCifradaEVoltaAlfabeto;
      } else {
        resultadoCifra = resultadoCifra + letraCifradaEVoltaAlfabeto;
      }
    }
    
   return resultadoCifra;
  },

  decode: function (offset, mensagem) {
    let mensagemParaDecifrar = mensagem.toUpperCase().replace(/\s+/g, ""); //prompt("Digite seu nome:");

    let resultadoDecifrar = "";
    let novoIndexLetraDecifrada;
    let letraDecifradaEVoltaAlfabeto;

    for (var i = 0; i < mensagemParaDecifrar.length; i++) {
      novoIndexLetraDecifrada =
        parseInt(alfabeto.indexOf(mensagemParaDecifrar[i])) - offset;

      if (novoIndexLetraDecifrada >= 0) {
        letraDecifradaEVoltaAlfabeto = alfabeto[novoIndexLetraDecifrada];
      } else {
        letraDecifradaEVoltaAlfabeto = alfabeto[novoIndexLetraDecifrada + 26];
      }

      if (resultadoDecifrar == "") {
        resultadoDecifrar = letraDecifradaEVoltaAlfabeto;
      } else {
        resultadoDecifrar = resultadoDecifrar + letraDecifradaEVoltaAlfabeto;
      }
    }
    return resultadoDecifrar;
  },
};

export default cipher;


