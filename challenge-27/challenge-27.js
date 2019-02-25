
(function(){
  'use strict';
  
  
  //O HTML ESTÁ NA PASTA COMPUTADOR - DACIUK - CHALLENGE-27
/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/
function DOM(elements){
    this.element = document.querySelectorAll(elements);
    
}




DOM.prototype.on = function on(eventType, callback){
  Array.prototype.forEach.call(this.element, function(element){
     element.addEventListener(eventType, callback, false);
});
};


DOM.prototype.off = function off(eventType, callback){
  Array.prototype.forEach.call(this.element, function(element){
     element.removeEventListener(eventType, callback, false);
});
};

DOM.prototype.get = function get(){
    return this.element;
}

var $a = new DOM('[data-js="link"]');
$a.on('click', function handleClick(e) {
  e.preventDefault();
  $a.off('click', handleClick);
  console.log('clicou');
});

console.log('Elementos selecionados:', $a.get());
console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

DOM.prototype.forEach = function forEach(){ // metódo forEach
  return Array.prototype.forEach.apply(this.element, arguments);
};

DOM.prototype.map = function map(){ // método map
  return Array.prototype.map.apply(this.element, arguments);
};

DOM.prototype.filter = function filter(){
  return Array.prototype.filter.apply(this.element, arguments);
};

DOM.prototype.reduce= function reduce(){ //método reduce
  return Array.prototype.reduce.apply(this.element, arguments);
    
};


DOM.prototype.reduceRight = function reduceRight(){
  return Array.prototype.reduceRight.apply(this.element, arguments);
};

DOM.prototype.every = function every(){
  return Array.prototype.every.apply(this.element, arguments);
};




DOM.prototype.some = function some(){
  return Array.prototype.some.apply(this.element, arguments);
};

var $a = new DOM('[data-js="link"]'); //teste do metódo forEach
console.log($a);
$a.forEach(function(item){
	console.log(item.firstChild.nodeValue);
    });

var dataJs = $a.map(function(item){ //teste do metódo map
  return item.getAttribute('data-js');
});

var dJs= $a.reduce(function(acumulado, item, index){ //teste do metódo reduce
  return acumulado + ' ' + item.getAttribute('data-js') + index;
}, 0);



console.log(dataJs);
console.log(dJs);


DOM.prototype.isArray = function isArray(parametro){
   return Object.prototype.toString.call(parametro) ==='[object Array]';
};

console.log(DOM.prototype.isArray([1,2,3]));

// isObject, isFunction, isNumber, isString, isBoolean, isNull.

DOM.prototype.isFunction = function isFunction(parametro){
   return Object.prototype.toString.call(parametro) ==='[object Function]';
};

DOM.prototype.isNumber = function isNumber(parametro){
   return Object.prototype.toString.call(parametro) ==='[object Number]';
};
DOM.prototype.isString = function isString(parametro){
   return Object.prototype.toString.call(parametro) ==='[object String]';
};
DOM.prototype.isBoolean = function isBoolean(parametro){
   return Object.prototype.toString.call(parametro) ==='[object Boolean]';
};
DOM.prototype.isNull= function isNull(parametro){
   return Object.prototype.toString.call(parametro) ==='[object Null]' ||
     Object.prototype.toString.call(parametro) ==='[object Undefined]';
};

var dom = new DOM();
console.log(dom.isFunction(function(){})); //teste método se é função
console.log(dom.isNumber('d'));//teste método de numero
  
  })(); //fechamento da IIFE
