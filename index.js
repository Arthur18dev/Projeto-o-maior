var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [valor1, valor2, valor3] = lines[0].split(" ").map(Number);


function calculo(valor1, valor2, valor3) {
    return (valor1 + valor2 + Math.abs(valor1 - valor2)) / 2;
} 

let maiorAB = calculo(valor1, valor2);
let maior = calculo(maiorAB, valor3)

console.log(maior + " eh o maior");