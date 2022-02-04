const cipher = {
  encode: function (offset, mensagem) {
    const mensagemParaCifrar = mensagem.toUpperCase().replace(/\s+/g, "");

    let resultadoCifra = "";
    let letraCifradaEVoltaAlfabeto = "";
    //let indexCalculado = 0; pro while

    for (var i = 0; i < mensagemParaCifrar.length; i++) {
      let novoIndexLetraCifrada =
        parseInt(mensagemParaCifrar.charCodeAt(i)) + offset;

      //t = 84 -> offset 33 = 84 + 33 = 117 -> 117 - 90 = 27 -> 65 + 27 -> 92
      //a = 65 -> offset 33 = 65 + 33 = 98 -> 98 - 90 = 8 + 65 = 73
      //z = 90 -> offset 1 = 90 + 1 = 91 -> 91 - 90 = 1 + 65 = 66
      //indexCalculado = novoIndexLetraCifrada; //pro while

      /*while (indexCalculado > 90){
        indexCalculado = (indexCalculado - 90 + 64); //27 + 65 = 92
      }*/
      //alert(indexCalculado);

      //letraCifradaEVoltaAlfabeto = String.fromCharCode(indexCalculado);//pro while

      // lógica do if abaixo:
      //s = 83 + 33 = 116 = 116 - 90 = 26 + 65 = 91 = 90 = 1 + 65
      //s = 83 + 33 = 116 = 116 - 65 = 51 % 26 = 25 + 65 = 90
      //z = 90 + 300 = 390 - 65 = 325 % 26 = 13 + 65 = 78 = letra N

      if (novoIndexLetraCifrada > 90) {
        letraCifradaEVoltaAlfabeto = String.fromCharCode(
          ((novoIndexLetraCifrada - 65) % 26) + 65 
        ); //SÓ LETRA CIFRADA - TENDO VOLTA OU NAO
      } else {
        letraCifradaEVoltaAlfabeto = String.fromCharCode(novoIndexLetraCifrada);
      }
      //alert((novoIndexLetraCifrada - 90) % 26 + 65)

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
        parseInt(mensagemParaDecifrar.charCodeAt(i)) - offset;

      // S = 83 - 33 = 50 % 26 = 24 + 65 = 89
      // a = 1 - 65 = - 64 + 65 = 1 % 26 -> 91 - 1 = 90
      // a = 33 - 65 = - 32 + 65 = 33 % 26 = 7 -> 91 -7= 84  (91 para contar a volta do Z para o )
      //a = 65 - 33 = 32 - 90 = - 58 % 26 = - 6 + 90 = 84  // 
      //esse - 58 negativo faz o módulo assim -(58 % 26)= - 6 // assim subtrai de 90. +6 somaria e passaria de 90 novamente 

      if (novoIndexLetraDecifrada < 65) {
        //letraDecifradaEVoltaAlfabeto = String.fromCharCode(91 - ((65 - novoIndexLetraDecifrada) % 26));
        letraDecifradaEVoltaAlfabeto = String.fromCharCode(((novoIndexLetraDecifrada - 90) % 26) + 90); 
      } else {
        //letraDecifradaEVoltaAlfabeto = alfabeto[(novoIndexLetraDecifrada) + 26];
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
    // alert(resultadoDecifrar);
    return resultadoDecifrar;
  },
};

export default cipher;
