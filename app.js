// Minha aplicação vai dar ao utilizador, escolher quatro moedas diferentes para converter o valor que foi inserido em real

document.getElementById('valor').addEventListener('input', function(e) {
    var input = e.target;
    if (input.value < 0) input.value = '';
  });
// Validação para que o utilizador, não digite números negativos  

function converter() {
    var valor = document.getElementById("valor").value;
    var moeda = document.getElementById("moeda").value;
    var apiURL = 'https://economia.awesomeapi.com.br/json/last/GBP-BRL,USD-BRL,EUR-BRL';

    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        var taxa 
        console.log(data)
        if (moeda === "GBP" )
        {
          taxa = data.GBPBRL.high;
        }
        else if (moeda === "USD")
        {
          taxa = data.USDBRL.high;
        }
        else if (moeda === "EUR")
        {
          taxa = data.EURBRL.high;
        }
        var reais = valor * taxa;
        document.getElementById("resultado").innerHTML =
          valor + " " + moeda + " equivalem a " + reais.toFixed(2) + " reais.";
      })
      .catch(error => console.error('Erro:', error));
}

  