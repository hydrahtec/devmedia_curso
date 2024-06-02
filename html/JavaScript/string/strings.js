const chuvas_meteoros = [
    { nome: "Alfa Centaurídeos",            pico: "Fev 8",   velocidade: "56 km/s"},
    { nome: "Gama Normídeos",                pico: "Mar 14",  velocidade: "56 km/s"},
    { nome: "Pi Pupídeos",                               pico: "Abr 23",  velocidade: "18 km/s"},
    { nome: "Eta Aquáridas",                       pico: "Mai 5",   velocidade: "66 km/s"},
    { nome: "Alfa Capricornídeos",          pico: "Jul 30",  velocidade: "23 km/s"},
    { nome: "Delta Aquáridas do Sul",       pico: "Jul 28",  velocidade: "41 km/s"},
    { nome: "Piscis Austrinídeos",                         pico: "Jul 28",  velocidade: "35 km/s"},
    { nome: "Fenícidas",                    pico: "Dez 6",   velocidade: "18 km/s"},
    { nome: "Pupidas-Velidas",                   pico: "Dez 12",  velocidade: "40 km/s"}
];

let titulo = "=== chuvas de meteoros - hemisfério sul ===";

console.log(titulo.toUpperCase());
console.log("\n");

for (const chuva of chuvas_meteoros) {
    
    let nome_chuva = chuva.nome;
    let pico_chuva = chuva.pico;
    let velocidade_chuva = chuva.velocidade;

    let pico_mes_dia = pico_chuva.split(" ");

    let pico_dia = pico_mes_dia[1];
    let pico_mes = pico_mes_dia[0];

    let pico_mes_nome = "";

    switch(pico_mes) {
        case "Jan": pico_mes_nome = "Janeiro"; break;
        case "Fev":     pico_mes_nome = "Fevereiro";     break;
        case "Mar":     pico_mes_nome = "Março";     break;
        case "Abr":     pico_mes_nome = "Abril";     break;
        case "Mai":     pico_mes_nome = "Maio";     break;
        case "Jun":     pico_mes_nome = "Junho";     break;
        case "Jul":     pico_mes_nome = "Julho";     break;
        case "Ago":     pico_mes_nome = "Agosto";     break;
        case "Set":     pico_mes_nome = "Setembro";     break;
        case "Out":     pico_mes_nome = "Outubro";     break;
        case "Nov":     pico_mes_nome = "Novembro";     break;
        case "Dez":     pico_mes_nome = "Dezembro";     break;

        default: pico_mes_nome = "Mês invalido"; break;
    };
    
    let pico_data_chuva_formatada = pico_dia + " de " + pico_mes_nome;
    
    let velocidade_formatada  = velocidade_chuva.replace("km/s", " quilometros por hora");

     console.log("Nome: ".padEnd(20, "_")+nome_chuva);
     console.log("Pico: ".padEnd(20, "_")+pico_data_chuva_formatada);
     console.log("Velocidade: ".padEnd(20, "_") + velocidade_formatada);
     console.log("\n");
};
/*
template string

let linguagem = "JavaScript";
let stack = "mobile";

switch (stack) {
  case "back-end":
    console.log(`Estude Node.js para programação ${ stack } em ${ linguagem }`);
    break;

  case "front-end":
    console.log(`Estude React para programação ${ stack } em ${ linguagem }`);
    break;

  case "mobile":
    console.log(`Estude React Native para programação ${ stack } em ${ linguagem }`);
    break;

  default:
    console.log(`Tecnologia indisponível para ${ stack }`);
    break;
}

-------------------
length retorna a quantidade de caracteres

let nome = "Isabela";
let frase = nome + " está aprendendo Javascript";

let tamanho_nome = nome.length;
let frase_nome = frase.length;

console.log(tamanho_nome); // 7
console.log(frase_nome); // 34

*****
let nome = "Isabela";
let frase = nome + " está aprendendo Javascript";

let tamanho_nome = nome.length;
let frase_nome = frase.length;

console.log(tamanho_nome); // 7
console.log(frase_nome); // 34

----------------------
toUpperCase() - transforma todas as letras em mainculas
toLowerCase() - transforma todas as letras em mainculas

let programador_1 = "Flávia";
let programador_2 = "Rogério";

console.log(programador_1.toUpperCase()); // FLÁVIA

console.log(programador_2.toLowerCase()); // rogério

****************
let programador_1 = "Flávia";
let programador_2 = "flávia";

if ( programador_1 == programador_2 ){
    console.log("iguais");
} else {
    console.log("diferentes");
}

----------------------
trim() tira espaços desnessarios

let nome = "   Diego     ";

let resultado = nome.trim();

console.log(resultado); // Diego

------------------------
padStart(n, "") - preenche as strings n vezes com o valor espaço vazio nesse caso.
padEnd(n, ".") - preenche as strings n vezes com o valor ponto nesse caso.

let label_aluno = "Aluno";
let valor_aluno = "Edmilson";

let label_grau = "Grau de escolaridade"
let valor_grau = "Ensino Médio Completo";

console.log(label_aluno.padStart(20, " ") + ": " + valor_aluno);

console.log(label_grau.padStart(20, " ") + ": " + valor_grau);

//                Aluno: Edmilson
// Grau de escolaridade: Ensino Médio Completo
*************

let label_nome = "Nome:";
let valor_nome = "Jorge Luiz";

let label_profissao = "Profissão:";
let valor_profissao = "Professor";

let label_endereco = "Endereço:";
let valor_endereco = "Rua Cruzeiro do Sul";

console.log( label_nome.padEnd(25, '.') + valor_nome );
console.log( label_profissao.padEnd(25, '.') + valor_profissao );
console.log( label_endereco.padEnd(25, '.') + valor_endereco );

// Nome:....................Jorge Luiz
// Profissão:...............Professor
// Endereço:................Rua Cruzeiro do Sul

-------------------------
replace(um, outro) troca um termo pelo outro

let texto = "A linguagem PHP é muito poderosa";
let resultado = texto.replace("PHP", "JavaScript");

console.log(resultado); // A linguagem JavaScript é muito poderosa

--------------------
substg(inicio, quantidade de letras) extrair uma substring de uma string maior
substring(inicio, fim) extrair uma substring de uma string maior


let frase = "Estou aprendendo JavaScript na DevMedia";

let resultado = frase.substr(17, 10);

console.log(resultado); // JavaScript

*******************
let frase = "Eu sou programador JavaScript";

let resultado = frase.substring(7, 18);

console.log(resultado); // programador

---------------------------
indexOf("palavra") retorna a posição inicial da palavra, se não encontrar retorna -1

let frase = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";

let posicao = frase.indexOf("sonho");

console.log(posicao); // 14

*****************************
let expressao_proibida = "passaporte falso";

let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();

if ( comentario.indexOf(expressao_proibida) > -1 ){

    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");

} else {

    console.log("Seu comentário foi aprovado");

}

console.log(comentario); // venda de passaporte falso

-----------------------------------
split("") - quebra um string maior em varias pequenas usando certos elementos de referencia, seja um espaço ou uma virgula.

let nome_completo = "Ana Mendes da Silva";

let array = nome_completo.split(" ");

let nome = array[0];

console.log("Olá " + nome + ", seja bem vindo(a)"); // Olá Ana, seja bem vindo(a)

-----------------
*/
