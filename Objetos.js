//muda titulo
document.getElementById("t1").innerText = "Exemplo Objeto Carro: ";

//cria img exemplo
const exemplo_objeto = document.createElement("img");
exemplo_objeto.src = "assets/exemplo_carro.png";
exemplo_objeto.alt  = "Exemplo objeto js carro";
exemplo_objeto.width = 500;
exemplo_objeto.height = 250;

document.getElementById("img-tabela-container").appendChild(exemplo_objeto)

//Objeto literal funciona com conjuntos chave-valor

pessoa = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
}

//Objeto vazio e atribuição depois
const pessoa1 = {};

pessoa1.firstName = "Peterson";
pessoa1.lastName = "Ferreira";
pessoa1.age = 27;
pessoa1.eyeColor = "verde";

//console.log(typeof(pessoa1))

//Exemplo usando new
const pessoa2 = new Object();

pessoa2.firstName = "OLivia";
pessoa2.lastName = "Marques";
pessoa2.age = 32;
pessoa2.eyeColor = "marrom";

// Ambos tem o mesmo resultado, porem o mais utilizado(e clean) é o metodo de objeto literal

//Propriedades(atributos) de objetos
//Os valores nomeados (seria o nome das variaveis do objeto), nos objetos js são chamados 'properties';

//Metodos de objeto
const pessoa3 = {
    firstName: "John",
    lastName: " Doe",
    id : 555,
    fullName: function() {
        return this.firstName + this.lastName;
    }
};

//console.log(pessoa3.fullName())

//Propriedades podem ser valores primitivos, funcoes, ou até outros objetos

/**
 * EM js, quase tudo é um objeto
 * - Objects são objetos
 * - Maths são objetos
 * - Funções são objetos
 * - Dates são objetos
 * - Arrays são objetos
 * - Maps são objetos
 * - Sets são objetos
 * - OU SEJA,
 *  TODOS OS TIPOS EM JAVASCRIPT, EXCETO OS PRIMITIVOS, SÃO OBJETOS.
 */

//Tipos Primitivos em JS
/**
 * Um tipo primitivo é um valor que nao tem propriedades ou metodos
 * Javascript tem 7 tipos primitivos
 * - string
 * - number
 * - boolean
 * - null
 * - undefined
 * - symbol
 * - bigint
 */

//Imutaveis
/**
 * Tipos primitivos são imutaveis,Exemplo: x = 3.14;
 * Você pode alterar o valor de x, mas você não pode alterar o valor de 3.14
 */

//muda titulo
titulo = document.createElement("h2").innerText = "TIPOS PRIMITIVOS SÃO IMUTAVEIS: ";

//cria img exemplo
const tipo_primitivo = document.createElement("img");
tipo_primitivo.src = "assets/tipo_primitivo.png";
tipo_primitivo.alt  = "Primitivos imutaveis";
tipo_primitivo.width = 500;
tipo_primitivo.height = 250;

document.getElementById("img-tabela-container").append(titulo);
document.getElementById("img-tabela-container").appendChild(tipo_primitivo);


//Objetos em Javascript são MUTAVEIS

//OBJETOS SÃO REFERENCIADOS POR REFERENCIA
//EX:
const x = pessoa1;

/**O objeto x não é uma copia de pessoa1.
 * O objeto x é pessoa1
 * O objeto x e o objeto pessoa1 compartilham o mesmo endereço de memoria
 * Qualquer mudança em x, também altera pessoa1.
 * 
 * x.age = 10; ALTERA IDADE DE pessoa1
 */

