//function soma(numero1, numero2){ Paramêtros que eu quero receber
//var resultado = numero1 + numero2;
// '=' atribui valor '==' verifica se o valor é igual '===' verifica se valor e tipagem são iguais
// '&&' and '||' or '!==' not
//
//
    //var inputElement = document.getElementById(#nome)  //Busca um elemento com o id='sexo no html' retornando um único elemento


    //ATIVIDADE DE EVENTOS 07-06-2019//

//EVENTO 1: ADICIONANDO QUADRADOS
    var btnElement = document.getElementById('novoquadrado');
    var squaresElement = document.getElementById('squares');
    btnElement.onclick = function () {
      var square = document.createElement('div');
      square.style.width = '100px';
      square.style.height = '100px';
      square.style.backgroundColor = '#F00';
      squaresElement.appendChild(square);
    };


//EVENTO 2: MUDANDO A COR DOS QUADRADOS
    var btnElement = document.getElementById('novoquadrado');
    var squaresElement = document.getElementById('squares');
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    btnElement.onclick = function () {
      var square = document.createElement('div');
      square.style.width = '100px';
      square.style.height = '100px';
      square.style.backgroundColor = '#F00';
      square.onmouseover = function () {
        square.style.backgroundColor = getRandomColor();
      }
      squaresElement.appendChild(square);
    };


//EVENTO 3: ADICIONANDO PALAVRAS NOVAS AO DIGITAR NO INPUT
    var nomes = ['Renata', 'Gabriel', 'Lucas'];
    var listElement = document.querySelector('ul');
    var inputElement = document.querySelector('input');
    function addItem(text) {
      var liElement = document.createElement('li');
      var textElement = document.createTextNode(text);
      liElement.appendChild(textElement);
      listElement.appendChild(liElement);
    }
    function adicionar() {
      addItem(inputElement.value);
      inputElement.value = "";
    }
    for (nome of nomes) {
      addItem(nome);
    }

//EVENTO 4: PASSANDO O MOUSE POR CIMA DO TEXTO E MOSTRANDO UM ALERTA
var mouse = document.getElementById('pmouse')
function mostraAlerta(){
    alert('FOI PASSADO O MOUSE');
}