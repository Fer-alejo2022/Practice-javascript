function avisoLluvia(estaLloviendo) {
      let llueve = estaLloviendo;
      let bolean = llueve == true ? "Esta Lloviendo" : "No esta Lloviendo";
      return bolean;             
}
let yes_no = true;
alert(avisoLluvia(yes_no));