





/*
let series = [
    {nome: 'Loki', servico: 'Disney+'},
	{nome: 'Friends', servico: 'HBO'},
	{nome: 'Superman & Lois', servico: 'HBO'},
	{nome: 'WandaVision', servico: 'Disney+'},
];

export default series;

series.js


function retornaSeriesDisney(serie)
{
	return (serie.servico == 'Disney+');
}

function retornaSeriesHBO(serie)
{
	return (serie.servico == 'HBO');
}

export {retornaSeriesDisney, retornaSeriesHBO};

retornaSeries.js


import series from './series.js';
import {retornaSeriesDisney, retornaSeriesHBO} from 'retornaSeries.js';

let servico = 'Disney';
let retornaSeries = [];

switch(servico)
{
    case 'Disney':
        retornaSeries = series.nome;
        break;
    case 'HBO':
        retornaSeries = series.nome;    
        break;
}

retornaSeries.forEach(serie => {
	console.log(serie.nome);
});
*/
/*
// funções geradoras tem o seu funcionamento adiado até ela ser chamada que vai retornando coisas ao longo da execução.

function* cores () {
    yield 'Vermelho'
    yield 'Azul'
    yield 'Amarelo'
    yield 'Verde'
};

const itc = cores();
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
*/

/*
// arrow function
const soma= (v1, v2) => {
    let res = v1 + v2;
    return res;
} ;
console.log(soma(10,5));

// construsão mais simples se só houver apenas uma linha de codigo.
const nome = n => n; 
console.log(nome("Eliel"));

const add = n => n+10;
console.log(add(10));
*/

/*
const f = function () { // funçaõ anonima

};

const g = new Fanction ("v1","v2", "return v1+v2"); // funcção construtor anonima
*/

/*
function soma(...valores) {
    let tam = valores.length;
    let res = 0;

    for (let i = 0; i < tam; i++) {
        res += valores[i];

    };
    
    return res;
};

console.log(soma(10,5,3,8,2,2))

--------------

function soma(...valores) {
    let res = 0;

    for (let v of valores) {
        res += v;

    };
    
    return res;
};

console.log(soma(10,5,3,8,2,2))
*/

/*
--------------------------------------------------
let colecao_signos = [
    {nome: "Aquarios", DataInicio: "01-20", DataFim: "02-18"},
    {nome: "Peixes", DataInicio: "02-19", DataFim: "03-20"},
    {nome: "Aries", DataInicio: "03-21", DataFim: "04-19"},
    {nome: "Touro", DataInicio: "04-20", DataFim: "05-20"},
    {nome: "Gêmeos", DataInicio: "05-21", DataFim: "06-21"},
    {nome: "Câncer", DataInicio: "06-22", DataFim: "07-23"},
    {nome: "Leão", DataInicio: "07-24", DataFim: "08-22"},
    {nome: "Virgem", DataInicio: "08-23", DataFim: "09-22"},
    {nome: "Libra", DataInicio: "09-23", DataFim: "10-22"},
    {nome: "Escorpião", DataInicio: "10-23", DataFim: "11-21"},
    {nome: "Sagitário", DataInicio: "11-22", DataFim: "12-21"},
    {nome: "Capricórnio", DataInicio: "12-22", DataFim: "01-19"}
];

const retorna_range = (data, data_inicio_signo, data_fim_signo, tipo_comparacao) => {

    if (tipo_comparacao == "and") {
        return (data >= data_inicio_signo && data <= data_fim_signo);
    } else {
        return (data >= data_inicio_signo || data <= data_fim_signo);
    };
};

const retorna_signo = (signos, data) => {

    let ano = data.getFullYear();

    for (const signo of signos) {

        let data_inicio_signo = new Date(ano+"-"+signo["DataInicio"]+" 00:00:00");

        let data_fim_signo = new Date(ano+"-"+signo["DataFim"]+" 00:00:00");
        
        let tipo_comparacao = (signo["DataInicio"]=="12-22") ? "or": "and";

        if (retorna_range(data, data_inicio_signo, data_fim_signo, tipo_comparacao)) {
            return signo["nome"];
        };
    };

};

let data_app = new Date("2020-01-05 00:00:00");

let nome_signo = retorna_signo(colecao_signos, data_app);

console.log(nome_signo);
*/