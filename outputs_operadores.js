//Acessando tag pelo id e usando propriedade innerHTML do dom, para add titulo
document.getElementById("hi").innerHTML = "<h2>Hello World!</h2>";

//innerText para mudar conteudo de texto de uma tag
document.getElementById("hi").innerText = "Olá Mundo!";

/**
 * OBS:
 * - Use innerHTML when you want to change an HTML element.
 * - Use innerText when you only want to change the plain text.
 */

//Teste com write()
//document.writeln(5 * 6)

/* window objeto é o objeto de escopo global, significa que variaveis, propriedades e metodos,
  por padrão pertencem ao objeto 'window'
  - Ex: Quando usamos console.log() ou document.getElementById()
  Estamos na verdade, dizendo implicitamente:
  window.console.log() e window.document.getElementById()*/

//output com log padrao
//console.log("Multiplicação: ", 34 * 45);

/*js Não tem objeto ou metodo print
  O que podemos fazer é chamar o 'print' de 'window' para printar a janela atual
*/

//Operadores Aritmeticos e Operadores de atribuição 

//Adicionando img da tabela dos operadores de atribuição
const ref_img_table = document.createElement("img");
ref_img_table.src = "assets/tabela_operadores.png";
ref_img_table.alt = "Tabela de Operadores de atribuição vanilla JS";
ref_img_table.width = 700;
ref_img_table.height = 360;

document.getElementById("img-tabela-container").appendChild(ref_img_table);

//Mult
let num_m = 5.0;
let num2_m = 15.1;
const result_mult = num_m * num2_m;
console.log("Multiplicação: ", result_mult, "Atribuição mult: ", num_m *= num2_m); //operador de atribuição p/ multiplicação


//Div
let num_d = 15;
let num2_d = 7;
const result_div = num_d / num2_d;
console.log("Divisão: ",result_div, "Atribuição div: ", num_d /= num2_d); //operador de atribuição p/ divisão

//Sum
let num_sum = 15;
let num2_sum = 7;
const result_sum = num_sum + num2_sum;
console.log("Soma: ",result_sum,"Atribuição soma: ", num_sum += num2_sum); //operador de atribuição p/ soma

//Sub
let num_sub = 15;
let num2_sub = 7;
const result_sub = num_sub - num2_sub;
console.log("Subtração: ",result_sub,"Atribuição subtração: ", num_sub -= num2_sub); //operador de atribuição p/ soma

//Operadores de comparação
//Adicionando img da tabela dos operadores de comparação

//titulo
const titulo_comp = document.createElement("h2");
titulo_comp.innerText = "Tabela de Operadores de comparação (Ref W3Schools): ";
document.getElementById("img-tabela-container").append(titulo_comp);

//criar tag img
const comp_img_table = document.createElement("img");
comp_img_table.src = "assets/comp_operadores.png";
comp_img_table.alt = "Tabela de Operadores de comparação JS";
comp_img_table.width = 700;
comp_img_table.height = 360;

document.getElementById("img-tabela-container").appendChild(comp_img_table);


//Igual à
let x = 5;
console.log("is x equals 8? ", x == 8); // == verifica valor igual/ return false

console.log("is x equals 5? ", x == "5"); // == verifica valor igual(mesmo que o tipo seja string,em js por padrao  verifica o valor de dentro da string, retornando true)/ return  true

console.log("is x equals 5? ", x === "5"); // === verifica valor e o tipo/ return false

console.log("is x equals 5? ", x != "5"); // verifica valor diferente/ return true

console.log("is x equals 5? ", x !== "5"); // verifica se o valor e o tipo sao diferente/ return true

console.log("is x equals 5? ", x >= "5"); // verifica valor maior ou igual a 5/ return true

console.log("is x equals 5? ", x < "5"); // verifica se o valor menor que 5/ return false



//Operadores Logicos
//Adicionando img da tabela dos operadores Logicos

//titulo
const titulo_op_logico = document.createElement("h2");
titulo_op_logico.innerText = "Tabela de Operadores Logicos (Ref W3Schools): ";
document.getElementById("img-tabela-container").append(titulo_op_logico);

//criar tag img
const logico_img_table = document.createElement("img");
logico_img_table.src = "assets/op_logico.png";
logico_img_table.alt = "Tabela de Operadores Logicos JS";
logico_img_table.width = 700;
logico_img_table.height = 250;

document.getElementById("img-tabela-container").appendChild(logico_img_table);


let x1 = 6;
let y1 = 3;

console.log(x1 < 10 && y1 > 1);// true

console.log(x1 == 5 || y1 ==  5);// falso

console.log("6 e 3 não são iguais? ",!(x1 == y1));// true

