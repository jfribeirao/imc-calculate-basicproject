function start() {
  console.log('start');
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#iput-weight');
  var inputHeight = document.querySelector('#iput-height');

  inputWeight.addEventListener('input', 'handleButtonClick');
  inputHeight.addEventListener('input', 'handleButtonClick');

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcFaixa = document.querySelector('#imc-faixa');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  console.log(imc);

  if (imc >= 16 && imc <= 16.99) {
    imcFaixa.textContent = 'Muito abaixo do peso';
  } else if (imc >= 17 && imc <= 18.49) {
    imcFaixa.textContent = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc <= 24.99) {
    imcFaixa.textContent = 'Peso normal';
  } else if (imc >= 25 && imc <= 29.99) {
    imcFaixa.textContent = 'Acima do peso';
  } else if (imc >= 30 && imc <= 34.9) {
    imcFaixa.textContent = 'Obesidade grau I';
  } else if (imc >= 35 && imc <= 40) {
    imcFaixa.textContent = 'Obesidade grau II';
  } else if (imc > 40) {
    imcFaixa.textContent = 'Obesidade grau III';
  } else {
    imcFaixa.textContent = 'Inválido';
  }

  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;
}

start();
