const cipher = {
  encode: function (offset, mensagem) {
    const mensagemParaCifrar = mensagem.toUpperCase().replace(/\s+/g, "");

    let resultadoCifra = "";
    let letraCifradaEVoltaAlfabeto = "";

    for (var i = 0; i < mensagemParaCifrar.length; i++) {
      let novoIndexLetraCifrada =
        parseInt(mensagemParaCifrar.charCodeAt(i)) + offset;

      // lógica do if abaixo:
      //s = 83 + 33 = 116 = 116 - 65 = 51 % 26 = 25 + 65 = 90
      //z = 90 + 300 = 390 - 65 = 325 % 26 = 13 + 65 = 78 = letra N
      // 325 letras para percorrer no alfabeto que só tem 26 letras.
      /* O resultado do módulo sao quantas letras tenho que correr depois da volta / 
      o resultado do modulo é a quantidade de letras que passou de 26 */
      if (novoIndexLetraCifrada > 90) {
        letraCifradaEVoltaAlfabeto = String.fromCharCode(
          ((novoIndexLetraCifrada - 65) % 26) + 65
        );
      } else {
        letraCifradaEVoltaAlfabeto = String.fromCharCode(novoIndexLetraCifrada);
      }
      resultadoCifra = resultadoCifra + letraCifradaEVoltaAlfabeto;
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

      // a = 1 - 65 = - 64 + 65 = 1 % 26 -> 91 - 1 = 90
      // a = 33 - 65 = - 32 + 65 = 33 % 26 = 7 -> 91 -7= 84  (91 para contar a volta do Z para o )
      //a = 65 - 33 = 32 - 90 = - 58 % 26 = - 6 + 90 = 84  //
      //esse - 58 negativo faz o módulo assim -(58 % 26)= - 6 // assim subtrai de 90. +6 somaria e passaria de 90 novamente
      if (novoIndexLetraDecifrada < 65) {
        letraDecifradaEVoltaAlfabeto = String.fromCharCode(
          ((novoIndexLetraDecifrada - 90) % 26) + 90
        );
      } else {
        letraDecifradaEVoltaAlfabeto = String.fromCharCode(
          novoIndexLetraDecifrada
        );
      }

      resultadoDecifrar = resultadoDecifrar + letraDecifradaEVoltaAlfabeto;
    }
    return resultadoDecifrar;
  },
};

export default cipher;
