/*//criando um relogio
const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("relogio");

const data = new Date();

let dia = data.getDate();
dia = dia<10 ? "0"+dia : dia;
let mes = data.getMonth()+1;
mes = mes<10 ? "0"+mes : mes;
const data_r = `${dia}/${mes}/${data.getFullYear()}`;
div_data.innerHTML = data_r
//---------------------------------------
const relogio = () => {
    const data = new Date();

    let hora = data.getHours();
    hora = hora<10 ? "0"+hora : hora;

    let minuto = data.getMinutes();
    minuto = minuto<10 ? "0"+minuto : minuto;

    let segundo = data.getSeconds();
    segundo = segundo<10 ? "0"+segundo : segundo;

    const hora_completa = hora + ":"+minuto+":"+segundo;

    div_relogio.innerHTML= hora_completa;
};

const intervalo=setInterval(relogio,1000);




*/

const dataAtual = new Date();

const ano = dataAtual.getFullYear();

const proximoAno = ano + 1;

console.log(proximoAno);



/*
const hoje = new Date();
const vencimento = new Date('2020-07-02');

hoje.get
let mensagem = "";

if (hoje.getTime() > vencimento.getTime())
 {
    mensagem = "Esta conta já venceu.";
} else {
    mensagem = "Ufa, ainda não venceu.";
}

console.log(mensagem);

*/

/*
const totalAcertos = 4;
const primeiroAcerto = new Date('2020/10/05');

let index = 0;

do
 {
  console.log( primeiroAcerto.toDateString() );

  const dia = primeiroAcerto.getDate();

  primeiroAcerto.setDate(dia+1);

  index++;
} 
while ( index < totalAcertos);

----------------------------------------
const dataUltimoAcesso = new Date('2023/10/16 06:00:00');
const dataAtual = new Date();

const hora = dataAtual.getHours();

const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual = dataAtual.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso;

const milissegundosHora = 1000 * 60 * 60;
const milissegundosDia = milissegundosHora * 24;

let dias = Math.ceil(diferencaTime / milissegundosDia);
let horas = Math.ceil(diferencaTime / milissegundosHora);


let msg = "";

if (hora < 6 || hora >= 18) {
 // boa noite
 msg = `Boa noite`
} else if ( hora > 6 && hora < 12) {
    // bom dia
    msg = `Bom dia`
} else {
    // boa tarde
    msg = `Boa tarde`
};

if (diferencaTime > milissegundosDia) {
    msg += ` voce esta ausente a ${dias} dias!!`
} else if (diferencaTime > milissegundosHora) { 
    msg += ` voce esta ausente a ${horas} horas!`
}else {
    msg += " que bom que ainda está aqui!";
};

console.log(msg);
*/

/*
---------------------------

// função para formar datas:

const data = new Date();

function formatarData(data) {
    let newData = new Date(data)
    return `${newData.getDate()}/${newData.getMonth()+1}/${newData.getFullYear()} `
};

console.log(formatarData(data))

-----------------
calculando a dif de dias

let diaAtual = new Date();
let diaPassado = new Date("2023/09/30 00:00:00")
let dataMilissegundos = Math.abs(diaAtual.getTime() - diaPassado.getTime());

let dif = Math.ceil(dataMilissegundos / (1000 * 60 * 60 * 24));

console.log(dif)

-------------------------
const hoje = new Date();

// Imprimindo uma string com a data e a hora local
console.log( hoje.toLocaleString() );

// Imprimindo uma string com a data armazenada
console.log( hoje.toString() );

// Imprimindo uma string com a data universal (UTC)
console.log( hoje.toUTCString() );

// Imprimindo timestamp
console.log( hoje.valueOf() );

------------------

const dataAtual = new Date();
const dataPostagem = new Date('2020-11-11T00:00');

// Pegando o timestamp das datas
const timeAtual = dataAtual.getTime();
const timePostagem = dataPostagem.getTime();

// Verifica a diferença em milissegundos
const diferenca = timeAtual - timePostagem;

// Convertendo em horas
const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

// Exibindo a diferença
console.log(horas);

--------------------

const dataAtual = new Date();

console.log( dataAtual.getFullYear() );
console.log( dataAtual.getMonth() ); - 0-11
console.log( dataAtual.getDate() ); * 1-31
console.log( dataAtual.getHours() ); * 0-23
console.log( dataAtual.getMinutes() ); * 0-59
console.log( dataAtual.getSeconds() );
console.log( dataAtual.getMilliseconds() );
console.log( dataAtual.getDay() ); * 0-6

----------------------------------------
metodos utc

console.log( dataAtual.getUTCFullYear() );
console.log( dataAtual.getUTCMonth() );
console.log( dataAtual.getUTCDate() );
console.log( dataAtual.getUTCHours() );
console.log( dataAtual.getUTCMinutes() );
console.log( dataAtual.getUTCSeconds() );
console.log( dataAtual.getUTCMilliseconds() );
console.log( dataAtual.getUTCDay() );

------------------------------

parametros possiveis para o method .toLocaleString()

const personalizandoData =  {
    weekday: 'long', // segunda-feira
    weekday: 'short', // seg.
    weekday: 'narrow', // S

    month: "numeric", // 2
    month: "2-digit", // 02
    month: "long", // Março
    month: "short", // Mar
    month: "narrow", // M

    year: 'numeric', // 2020
    year: '2-digit', // 20

    day: 'numeric', // 1
    day: '2-digit', // 01
  };
  console.log(dataAtual.toLocaleDateString('pt-BR', personalizandoData));

  const personalizandoTempo = {
    hour: 'numeric', // 1
    hour: '2-digit', // 01,

    minute: 'numeric', // 1
    minute: '2-digit', // 01,

    second: 'numeric', // 1
    second: '2-digit', // 01,
  }
  console.log( dataAtual.toLocaleTimeString('pt-BR', personalizandoTempo) );

  const personalizandoDataTempo = {
    dateStyle: "full", // segunda-feira, 9 de novembro de 2020
    dateStyle: "long", // 9 de novembro de 2020
    dateStyle: "medium", // 9 de nov. de 2020
    dateStyle: "short", // 09/11/2020

    timeStyle: "full", // 01:05:09 Horário Padrão de Brasília
    timeStyle: "long", // 01:05:09 BRT
    timeStyle: "medium", // 01:05:09
    timeStyle: "short", // 01:05
  }
  console.log( dataAtual.toLocaleString('pt-BR', personalizandoDataTempo) );

  **************************

  const personalizandoData =  {
    weekday: 'long', // segunda-feira
    month: "2-digit", // 02
    year: '2-digit', // 20
    day: '2-digit', // 01
  };
  console.log(dataAtual.toLocaleDateString('pt-BR', personalizandoData));
  // segunda-feira, 09/11/20

  const personalizandoTempo = {
    hour: 'numeric', // 01
    minute: 'numeric', // 05
    second: 'numeric', // 09
  }
  console.log( dataAtual.toLocaleTimeString('pt-BR', personalizandoTempo) );
  // 01:05:09

  const personalizandoDataTempo = {
    dateStyle: "medium", // 9 de nov. de 2020
    timeStyle: "short", // 01:05
  }
  console.log( dataAtual.toLocaleString('pt-BR', personalizandoDataTempo) );
  // 9 de nov. de 2020 01:05

  const MesAno = {
      month: "numeric",
      year: 'numeric',
  }
  console.log( dataAtual.toLocaleString('pt-BR', MesAno) );
  //  11/2020

  const SemanaHora = {
    weekday: "long",
    hour: 'numeric',
    minute: 'numeric',
  }
  console.log( dataAtual.toLocaleString('pt-BR', SemanaHora) );
  // Wednesday 2:45 PM


----------------------------------
method setters


No Código 1 você pode ver os códigos dos métodos setters que já vimos.

const dataAtual = new Date();

dataAtual.setFullYear(1998);
console.log( dataAtual );

dataAtual.setMonth(1);
console.log( dataAtual );

dataAtual.setDate(20);
console.log( dataAtual );

dataAtual.setHours(11);
console.log( dataAtual );

dataAtual.setMinutes(0);
console.log( dataAtual );

dataAtual.setSeconds(59);
console.log( dataAtual );

dataAtual.setMilliseconds(15);
console.log( dataAtual );

**********************

dataAtual.setUTCFullYear(1998);
dataAtual.setUTCMonth(5);
dataAtual.setUTCDate(20);
dataAtual.setUTCHours(11);
dataAtual.setUTCMinutes(0);
dataAtual.setUTCSeconds(59);
dataAtual.setUTCMilliseconds(15);

****************

uso do método setTime()

const dataAtual = new Date("2020-11-09 01:05:09");
console.log(dataAtual.toDateString());
// Impressão: Mon Nov 09 2020

dataAtual.setTime(886302309000);
console.log(dataAtual.toDateString());
// Impressão: Sun Feb 01 1998

Os métodos setters do objeto Date alteram uma parte específica da data

*/