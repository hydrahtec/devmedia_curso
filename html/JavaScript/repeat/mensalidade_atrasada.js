let valor_mensalidade = 100;
let taxa_multa = 0.02;
let total_dias = 10;
let contador = 1;

//essa estrutura fara o codigo ser execultado pelomenos 1 vez
do { 
    let dias_atraso = contador;
    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;
    let novo_valor_mensalidade = valor_mensalidade + valor_multa;

    console.log("Dia(s) de atraso: "+dias_atraso+" - mensalidade atualizada: "+novo_valor_mensalidade)

    contador++// se não fizer o incremento o sistema entrará em looping infinito

} while (contador <= total_dias);
