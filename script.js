//Variaveis

//declaração automatica
num1 = 5;
num2 = 10;

//a, b e c são variaveis nao definidas
// São usadas automaticamente qnd declaradas
//a = b + c;

//Usando 'var' (Usada de 1995 a 2015)
var a1 = 5.0;
var b1 = 6;
var c1 = a1 + b1;


// Usando 'let' e 'const' (Adicionadas no js em 2015)
let a2 = 5;
let b2 = 6;
let c2 = a2 + b2;

//const
const a3 = 5;
const b3 = 6;
const c3 = a3 + b3;

//Exemplo misturando const/let
const price1 = 5;
const price2 = 10;

let total = price1 + price2;


//Quando usar qual?
/**
 * - Sempre declare variaveis
 * - Sempre usar const se o valor não deve alterar
 * - Sempre usar const se o tipo não deve ser alterado (Arrays e Objetos)
 * - Somente use 'let' se você não puder usar const
 * - Somente use var se você deve dar suporte para navegadores antigos
 */


//Testando

let nomeCarro;

nomeCarro =  "Honda fit";

//altera o conteudo da div para o valor de nomeCarro
document.getElementById("carro").innerHTML = nomeCarro;

//Você pode re-declarar uma variavel usando o 'var'( e só o var)

var carName = "Honda Civic"

var carName;
// a segunda variavel é declarada com o valor da anterior o/


//String contatenaçao
//podemos concatenar string com numeros, porem, serao somente unidos

let x1 = "5" + 2 + 3;//523
//console.log(x)

//Js Dollar Sign $

//Desde que js trata um simbolo do dollar como uma letra, identificadores contendo '$' são nomes de variaveis validos.

let $ = "Hello Mundao!";
let $$ = 2;
let $myMoney = 5;


//Operadores aritmeticos

let x2 = 5; 

x2--; //decremento
let decrementado = x2;

x2++; //incremento
let incrementado = x2;


//console.log(decrementado,incrementado)

//Exponenciação

let a4 = 5;
let b4 = a4 ** 2;//25

//alternativa utilizando funcao da lib Math:
let r2 = Math.pow(a4, 2);

//Precedence matematica(pode ser controlada atraves do '()' ):
let x = 100 + 50 * 3;

//console.log(x)

//Tipos de Dados em JS
/*
 * - String
 * - Number
 * - Bigint
 * - Boolean
 * - Undefined
 * - Null 
 * - Symbol
 * - Object
 */

/**
 * - Tipos objetos nativos podem ser:
 * - Objects
 * - Arrays
 * - Dates
 * - Maps
 * - Sets
 * - Intarrays
 * - Floatarrays
 * - Promises e mais;

*/

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x11 = true;
let y = false;

//Object
const pessoa = {firstName: "Peter", lastName: "Ferreira", age: 27, eyeColor: "green"};

//Array Object
const cars = ["Saab", "Volvo", "BMW"];

//Date Object
const date = new Date("2022-03-25");

console.log(pessoa.firstName)