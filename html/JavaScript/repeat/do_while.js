/*
let contador = 0;

do{
    console.log(contador)
    
    contador++
} while (contador < 0);

let contador = 0;

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

do {//execulta o codigo polomenos 1 vez
    console.log(meses[contador])
    
    contador++
} while (contador < meses.length);
*/

let valor_mensalidade = 100;
let taxa_multa = 0.02;
let total_dias = 10;
let contador = 1;

do {
    let dias_atraso = contador

    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;

    let valor_atualizado = valor_mensalidade + valor_multa;

    console.log("Dia(s) de atraso: "+dias_atraso+", o valor atualizado da mensalidade é: R$ "+valor_atualizado+",00")
    contador++
} while (contador <= total_dias);