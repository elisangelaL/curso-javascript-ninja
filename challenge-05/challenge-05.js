/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrai = [ 23, 'manga', {pesto: 'manjericao', cor: 'azul'}, 1998, function(){}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// function recebeArray(args){
    return args;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// console.log(recebeArray(arrai)[1]); // manga

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrai2(arg1, arg2){
    return arg1 [arg2];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var myVar = [1, 'Ada', function(){}, {cor: 'azul', food: 'pizza'}, 1998];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arrai2(myVar,0));// 1
console.log(arrai2(myVar,1));// Ada 
console.log(arrai2(myVar,2));// ƒ (){}
console.log(arrai2(myVar,3));// {cor: "azul", food: "pizza"}
console.log(arrai2(myVar,4));//1998

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome){
    var recebeObjeto = { 
      'Fisica Moderna': {quantidadePaginas: 220, autor: 'Elisa', editora: 'DoisEditora'}, 
      'Venci': {quantidadePaginas: 520, autor: 'Lima', editora: 'TresEditora'}, 
      'Sou fera': {quantidadePaginas: 723, autor: 'Angela', editora: 'QuatroEditora'}
    }
    
    return !nome ? recebeObjeto: recebeObjeto[nome];
    
    };
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Venci tem ' + book('Venci').quantidadePaginas + ' paginas '); //O livro Venci tem 520 paginas 
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var recebeObjeto = 'Fisica Moderna';
console.log('A autora do livro ' + recebeObjeto +  ' é '  +  book(recebeObjeto).autor);//A autora do livro Fisica Moderna é Elisa
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var recebeObjeto = 'Venci';
console.log('O livro ' + recebeObjeto +  ' foi publicado pela editora '  +  book(recebeObjeto).editora);// O livro Venci foi publicado pela editora TresEditora
