  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
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

var $formCEP = new DOM('[data-js="form-cep"]');
var $inputCEP = new DOM('[data-js = "input-cep"]');
var ajax = new XMLHttpRequest();
var $status = new DOM('[data-js = "status"]');
var $logradouro = new DOM('[data-js = "logradouro"]');
var $bairro = new DOM('[data-js = "bairro"]');
var $estado = new DOM('[data-js = "estado"]');
var $cidade = new DOM('[data-js = "cidade"]');
var $cep = new DOM('[data-js = "cep"]');
$formCEP.on('submit', handleSubmitFormCEP);


function handleSubmitFormCEP(event){
   
  event.preventDefault();
  
  var url = getUrl();

   ajax.open('GET', url);
   ajax.send();
   getMessage('loading');
   ajax.addEventListener('readystatechange', handleReadyStateChange);
}

function handleReadyStateChange(){
	if(isRequestOK())
	   fillCEPFields();
       getMessage('ok');
}

function isRequestOK(){
	return ajax.readyState === 4 && ajax.status ===200;
}

function fillCEPFields(){
    
    
  var data = parseData();
    if(!data){
        getMessage('error');
        clearData();
        data = clearData();
    }
      
   
  
  $bairro.get()[0].textContent = data.bairro;
  $logradouro.get()[0].textContent = data.logradouro;
  $cidade.get()[0].textContent = data.localidade;
  $estado.get()[0].textContent = data.uf;
  $cep.get()[0].textContent = data.cep
    

}


function clearData(){
return {
   logradouro: '-',
   bairro: '-',
   uf: '-',
  cep: '-'
}
}
function parseData(){
      var result;
      try{
        result = JSON.parse(ajax.responseText);;
      }
      catch(e){
        result = null;
      }
 return result;
}

function getMessage(type){

var messges = {
  loading: replaceCEP('Buscando informações para o CEP [CEP]...'),
  ok: replaceCEP('Endereço referente ao CEP [CEP]:'),
  error: replaceCEP( 'Não encontramos o endereço para o CEP [CEP].')
};
 $status.get()[0].textContent = messages[type];
}

function replaceCEP(message){
    
  return message.replace('[CEP]', clearCEP());
}

function getUrl(){
  return replaceCEP('http://apps.widenet.com.br/busca-cep/api-de-consulta');
}

function clearCEP(){
    return $inputCEP.get()[0].value.replace(/\D/g, '');
}

function handleReadyStateChange(){
	if(ajax.readyState === 4 && ajax.status ===200){
            console.log('popular formulario', ajax.responseText);
        }

}
console.log('carregando...');

 
//DESISTI PQ A URL DO CEP NAO ESTÁ FUNCIONANDO.. Dar UMA OLHADINHA NAS PERGUNTAS E REPOSTAS DO UDEMY OU NA ISSUES DO GITHUB

