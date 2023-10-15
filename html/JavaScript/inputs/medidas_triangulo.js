import entradaDados from 'readline-sync';

console.log("Área do triângulo: \n");

let base = entradaDados.question("Informe a base: ");
let altura = entradaDados.question("Informe a altura: ");

let area = (base * altura) / 2 // por ser multiplicação o JS já faz a conversão de type

console.log("A area do triangulo é de: "+area"\n")

