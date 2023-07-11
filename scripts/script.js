
let adultoBoi = 0.350;
let adultoPorco = 0.200;
let adultoFrango = 0.250;
let adultoLing = 0.300;
let adultoCerveja = 5;
let adultoBe = 1.5;
let criancaBe = 2.0;
let criancaBoi = 0.175;
let criancaFrango = 0.125;
let criancaPorco = 0.100;
let criancaLing = 0.150;

let botao = document.getElementsByTagName("button")[0];
botao.addEventListener("click", calculo)




function calculo() {
  let adulto = document.getElementsByClassName("inputs")[0];
  let adultosNaoBE = document.getElementsByClassName("inputs")[1];
  let crianca = document.getElementsByClassName("inputs")[2];
  let duracao = document.getElementsByClassName("inputs")[3];

  if (duracao.value >= 6) {
    adultoBoi = 0.500;
    adultoPorco = 0.300;
    adultoFrango = 0.400;
    adultoLing = 0.400;
    adultoCerveja = 8;
    adultoBe = 2.0;
    criancaBe = 2.5;
    criancaBoi = 0.350;
    criancaFrango = 0.250;
    criancaPorco = 0.200;
    criancaLing = 0.300;
  }

  else {
    adultoBoi = 0.350;
    adultoPorco = 0.200;
    adultoFrango = 0.250;
    adultoLing = 0.300;
    adultoCerveja = 5;
    adultoBe = 1.5;
    criancaBe = 2.0;
    criancaBoi = 0.175;
    criancaFrango = 0.125;
    criancaPorco = 0.100;
    criancaLing = 0.150;
  }


  let calculoCarneBoi = (adultoBoi * adulto.value) + (adultosNaoBE.value * adultoBoi) + (criancaBoi * crianca.value);
  let calculoCarnePorco = (adultoPorco * adulto.value) + (adultosNaoBE.value * adultoPorco) + (criancaPorco * crianca.value);
  let calculoCarneFrango = (adultoFrango * adulto.value) + (adultosNaoBE.value * adultoFrango) + (criancaFrango * crianca.value);
  let calculoCarneLingui = (adultoLing * adulto.value) + (adultosNaoBE.value * adultoLing) + (criancaLing * crianca.value);
  let calculoCerveja = (adultoCerveja * adulto.value);
  let calculoBebidas = (criancaBe * crianca.value) + (adultoBe * adultosNaoBE.value);


  let novo = document.getElementById("novo");
  novo.innerHTML = `<div id='boi'> <p>${calculoCarneBoi.toFixed(1)} kg de carne de boi</p> </div>`
  novo.innerHTML += `<div id='porco'> <p>${calculoCarnePorco.toFixed(1)} kg de carne de porco</p></div> `
  novo.innerHTML += `<div id='frango'> <p>${calculoCarneFrango.toFixed(1)} kg de carne de frango</p></div> `
  novo.innerHTML += `<div id='lingui'> <p>${calculoCarneLingui.toFixed(1)} kg de linguiça</p></div> `
  novo.innerHTML += `<div id='cerveja'><p>${calculoCerveja.toFixed(0)} latas cerveja </p></div> `
  novo.innerHTML += `<div id='refri'> <p>${calculoBebidas.toFixed(1)} litros de refrigerante</p></div>`
}





