/**- Teste -  */

//Sum
function somar(a, b) {
    return a + b;
}


//Mult
function multiplicar(a, b) {
    return a * b;
}


//Sub
function subtrair(a, b) {
    return a - b;
}

//Div
function dividir(a, b) {
    return a / b;
}

/*console.log("Resultado Soma: ", somar(12, 13));
console.log("Resultado Multiplicação: ", multiplicar(12, 13));
console.log("Resultado Subtração: ", subtrair(12, 13));
console.log("Resultado Divisão: ", dividir(12, 13));

*/

//Conversor de Cº p/ Fº
function toCelsius(fahrenheith) {
    return (5/9) * (fahrenheith - 32);
}

let valor_em_celsius = toCelsius(101)
console.log("Temperatura em Celsius: ", valor_em_celsius.toFixed(0) + "ºC");