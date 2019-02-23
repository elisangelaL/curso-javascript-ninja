/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.

- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/

var $visor = document.querySelector('[data-js="visor"]');
var $buttonsNumber = document.querySelectorAll('[data-js = "button-number"]');
var $buttonCE = document.querySelector('[data-js ="button-ce"]');
var $buttonsOperation = document.querySelectorAll('[data-js ="button-operation"]');
var $buttonEqual = document.querySelector('[data-js = "button-equal"]');


function initialize(){
   initEvents();
}


function  initEvents(){
      Array.prototype.forEach.call($buttonsNumber, function(button){

       button.addEventListener('click', handleClickNumber, false);

    });

    Array.prototype.forEach.call($buttonsOperation , function(button){

       button.addEventListener('click', handleClickOperation, false);

    });

    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);

}


function handleClickNumber(){
   $visor.value += this.value;
}


function handleClickOperation(){
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
   
}

function handleClickCE(){
    $visor.value = 0;
}

function isLastItemAnOperation(number){

        var operations =['+', '-', '*', '÷'];
        var lastItem = number.split('').pop();
        return operations.some(function(operator){
          return operator === lastItem ;
    });
}

function removeLastItemIfItIsAnOperator(string){
    if(isLastItemAnOperation(string)){
	  return string.slice(0, -1);
    }
    return string;
    
    }

function  handleClickEqual(){
	$visor.value = removeLastItemIfItIsAnOperator($visor.value);
	var allValues = $visor.value.match(/\d+[+*÷-]?/g);
	$visor.value =allValues.reduce( calculateAllValues);
}

function calculateAllValues(accumulated, actual){
	var firstValue = accumulated.slice(0, -1);
	var operator = accumulated.split('').pop();
	var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
return doOperation(operator, firstValue, lastValue) + lastOperator;
    
}

function doOperation(operator, firstValue, lastValue){
	switch(operator){
	  case '+':
		return Number(firstValue) + Number(lastValue);
      case '-':
		return Number(firstValue) - Number(lastValue);

      case '*':
		return Number(firstValue) * Number(lastValue);
      case '÷':
		return Number(firstValue) / Number(lastValue);
    }
}
    
    initialize();

//O JS COM HTML ESTÁ NO BRACKETS, PASTA DACIUK, CHALLENGE-23
