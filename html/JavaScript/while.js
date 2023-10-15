// exercicios com laço de repetição while
// 
//

/* 
let contador = 0; // contador iniciado em 0

while (contador < 10) { // enquanto contrador menor que 5 faça:
    console.log("O valor da variavel contador é: "+contador); // imprima o conteudo da varial contador.
    contador++ // incremente a variavel a cada inteiração.
} // apos executar o bloco de comandos ele retorna ao inicio
let numero = 5;
let contador = 0;

console.log("Tabuada de multiplicação - Nº "+ numero);

while (contador <= 10) {
    let resultado = numero * contador;
    console.log(numero+" x "+ contador + " = "+ resultado);
    contador++
};
*/
let capital_emprestado = 3000;
let taxa_juros = 0.02; // 2%

let contador = 1;
let parcelas_totais = 5;

while (contador <= parcelas_totais) { // enquanto tiver parcelas:
    let numero_parcela = contador
    let juros_emprestimo = capital_emprestado * taxa_juros * numero_parcela;

    console.log("A taxa de juros no periodo de "+numero_parcela+" mes(es) é de R$"+juros_emprestimo+",00")

    contador++ // incrementa o loop
}