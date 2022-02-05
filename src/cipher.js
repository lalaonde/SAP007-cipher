const cipher = {
  encode: function (offset, mensagem) {
    const mensagemParaCifrar = mensagem.toUpperCase().replace(/\s+/g, "");

    let resultadoCifra = "";
    let letraCifradaEVoltaAlfabeto = "";

    for (var i = 0; i < mensagemParaCifrar.length; i++) {
      let novoIndexLetraCifrada =
        parseInt(mensagemParaCifrar.charCodeAt(i)) + offset;

      if (novoIndexLetraCifrada > 90) {
        letraCifradaEVoltaAlfabeto = String.fromCharCode(
          ((novoIndexLetraCifrada - 65) % 26) + 65
        );
      } else {
        letraCifradaEVoltaAlfabeto = String.fromCharCode(novoIndexLetraCifrada);
      }

      if (resultadoCifra == "") {
        resultadoCifra = letraCifradaEVoltaAlfabeto;
      } else {
        resultadoCifra = resultadoCifra + letraCifradaEVoltaAlfabeto;
      }
    }

    return resultadoCifra;
  },

  decode: function (offset, mensagem) {
    let mensagemParaDecifrar = mensagem.toUpperCase().replace(/\s+/g, "");

    let resultadoDecifrar = "";
    let novoIndexLetraDecifrada;
    let letraDecifradaEVoltaAlfabeto;

    for (var i = 0; i < mensagemParaDecifrar.length; i++) {
      novoIndexLetraDecifrada =
        parseInt(mensagemParaDecifrar.charCodeAt(i)) - offset;

      if (novoIndexLetraDecifrada < 65) {
        letraDecifradaEVoltaAlfabeto = String.fromCharCode(
          ((novoIndexLetraDecifrada - 90) % 26) + 90
        );
      } else {
        letraDecifradaEVoltaAlfabeto = String.fromCharCode(
          novoIndexLetraDecifrada
        );
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
