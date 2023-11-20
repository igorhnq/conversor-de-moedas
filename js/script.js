const converterButton = document.getElementById('converter');

converterButton.onclick = function() {
   
    let valorEmDolar = document.getElementById('dolar').value;

    let valorEmReais = valorEmDolar * 4.86;

    let resultado = document.getElementById('result');
    resultado.innerHTML = 'R$' + valorEmReais.toFixed(2);

};
