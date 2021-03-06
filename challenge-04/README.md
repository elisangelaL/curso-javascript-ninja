# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function( a ){
    return a? true : false
};

//ou

var isTruthy = function(a) {
return !!a;
};
// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

isTruthy(undefined) // false
isTruthy(false) // false
isTruthy(null) // false
isTruthy('') // false
isTruthy(0) // false
isTruthy(-0) // false
isTruthy(NaN) // false
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTrisTruthy(1) // true
isTruthy('amor') // true
isTruthy([]) // true
isTruthy({ }) // true
isTruthy(function(){ }) // true

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = { marca: 'Gol', modelo: 'Gol2', placa: 'XYZ1234', ano: 2018, cor: 'vermelho', quantasPortas: 4, 
              assentos: 5, quantidadedePessoas:0};     

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
var mudaCor = function(x){
  return carro.cor = x;

};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
var obterCor= function(){
  return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
var obterModelo= function(){
  return carro.modelo;
};


/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
var obterMarca= function(){
  return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
var obterMarcaModelo = function(){
    return ' Esse carro é um ' +  obterMarca()  + ' moedelo ' +  obterModelo() ;
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
?

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor// "amarelo"

// Mude a cor do carro para vermelho.
mudaCor("vermelho")

// E agora, qual a cor do carro?
carro.cor// "vermelho"


// Mude a cor do carro para verde musgo.
mudaCor("verde musgo")


// E agora, qual a cor do carro?
?

// Qual a marca e modelo do carro?
obterMarcaModelo() //"Esse carro é um Gol moedelo Gol2"

// Adicione 2 pessoas no carro.
?

// Adicione mais 4 pessoas no carro.
?

// Faça o carro encher.
?

// Tire 4 pessoas do carro.
?

// Adicione 10 pessoas no carro.
?

// Quantas pessoas temos no carro?
?
```
