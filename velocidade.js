function calcularvelocidade() {
    var txtvel = document.getElementById("txtvel").value;
    var res = document.getElementById("res");
    var vel = parseFloat(txtvel);
    res.innerHTML = `<p>Sua velocidade atual é de <b>${vel}</b></p>`;
    if (vel > 80) {
      res.innerHTML += `Voce está <b>MULTADO</b> por excesso de velocidade`;
    }
    res.innerHTML += `<p>Dirija sempre com o cinto de segurança</p>`;
  }