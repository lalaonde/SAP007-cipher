const cipher = {
  encode: function (offset, mensagem) {
    const mensagemParaCifrar = mensagem.toUpperCase()
      .replace(/\s+/g, "");
    
    let resultadoCifra = "";
    let letraCifradaEVoltaAlfabeto = "";

    for (var i = 0; i < mensagemParaCifrar.length; i++) {
      let novoIndexLetraCifrada =
        parseInt(mensagemParaCifrar.charCodeAt(i)) + offset;

      if (novoIndexLetraCifrada > 90) {
        letraCifradaEVoltaAlfabeto = String.fromCharCode(novoIndexLetraCifrada - 26); //SÓ LETRA CIFRADA - TENDO VOLTA OU NAO
      } else {
        letraCifradaEVoltaAlfabeto = String.fromCharCode(novoIndexLetraCifrada);
      }

      if (resultadoCifra == "") {
        resultadoCifra = letraCifradaEVoltaAlfabeto;
      } else {
        resultadoCifra = resultadoCifra + letraCifradaEVoltaAlfabeto;
    }
  }

 /* ABC
  BCD

  RESULTADO = BCD

  RESULTADO = ""

  RESTAULDO = RESULTADO + LETRACIFRADA
  ˜˜ = ˜~+ B
  ˜˜B

  RESULTADO = RESULTADO + LETRACIFRADA
  ˜˜B = ˜˜B + C
  ˜˜BC

  RESULTAD = LETRACIFRADA
  ˜~= B
  RESULTADO = B

  RESULTADO = RESULTADO + LETRACIFRADA
  B = B + C  */




    //alert(resultadoCifra);
    return resultadoCifra;
  },

  decode: function (offset, mensagem) {
    let mensagemParaDecifrar = mensagem.toUpperCase()
      .replace(/\s+/g, ""); //prompt("Digite seu nome:");
  
    let resultadoDecifrar = "";
    let novoIndexLetraDecifrada;
    let letraDecifradaEVoltaAlfabeto;

    for (var i = 0; i < mensagemParaDecifrar.length; i++) {
      novoIndexLetraDecifrada =
        parseInt(mensagemParaDecifrar.charCodeAt(i)) - offset;

      if (novoIndexLetraDecifrada < 65) {
        letraDecifradaEVoltaAlfabeto = String.fromCharCode(novoIndexLetraDecifrada + 26);
      } else {
        //letraDecifradaEVoltaAlfabeto = alfabeto[(novoIndexLetraDecifrada) + 26];
        letraDecifradaEVoltaAlfabeto = String.fromCharCode(novoIndexLetraDecifrada);
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

