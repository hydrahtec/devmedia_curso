//Arreys metodos nativos de manipulçao

// .push(); adiciona elementos

// .splice(n1, n2); retira elementos
/*
const diasDaSemana = [
    "domingo", "segunda-feira", "terça-feira",
    "quarta-feira", "quinta-feira", "sexta-feira", "sábado"
];

diasDaSemana.splice(2,1);
// removendo "terça-feira"

diasDaSemana.splice(1,3);
// removendo "segunda-feira", "terça-feira", "quarta-feira"
*/

// .pop() retira o ultimo elemento

// .shift(); retira o primeiro elemento da colessão

/*
const produto = {
    nome: 'New Super Mario Bros.', qnt: 1, valor: 250
};

const carrinho = [
    {  nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
    {  nome: 'Super Mario Kart 8', qnt: 1, valor: 300 },
];

// Insere o produto no carrinho
carrinho.push(produto);

// Remove o item "Super Mario Kart 8"
carrinho.splice(1,1);

// Remove todos os elementos do carrinho
const totalElementos = carrinho.length;
carrinho.splice(0,totalElementos);
*/

// .forEach() Percorre todos os elementos da coleção e exuculta uma função.,
/*
const produtos = [
    { id: 1, nome: 'Açucar', estoque: 100, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', estoque: 50, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', estoque: 1000, valor: 2.50 },
  ];
  
  function imprimirProduto (produto, index) {
    console.log( index + ' - ' + produto.nome );
  }
  
  produtos.forEach(imprimirProduto);

--------------------------


  const carrinho = [
    {  nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
    {  nome: 'Super Mario Kart 8', qnt: 1, valor: 300 },
    {  nome: 'New Super Mario Bros.', qnt: 1, valor: 250 }
  ];
  // nome da variavel, e o index dela.
  function imprimirItem( produto, index ) {
    let texto = index + ' - ';
    texto += produto.qnt + ' UN - ';
    texto += produto.nome + ' - ';
    texto += 'R$ ' + produto.valor + ' - ';
    texto += 'R$ ' + produto.qnt * produto.valor;
  
    console.log( texto );
  }
  
  carrinho.forEach(imprimirItem);
  */

  // .map()  
  
  /*

  let el = document.getElementsByTagName("div");
  el=[...el]; // recebe um arrey do tipo spred, recebendo os dados da coleção el espalhados e posibilitando iteração dos metodos arrey.
  
  el.map((e,i) => {
    e.innerHTML = "Qualquer coisa" // altera o conteudo das tags
    console.log(e.innerHTML); // vai trazer somente o conteudo dentro das tags
  });

***
  const cursos = ['HTML', 'JavaScript', 'PHP', 'React'];
 let c_arrey_novo = cursos.map((elementos, indice) => {
    return "<div class='teste'>"+elementos+"</div>"
  });
  console.log(c_arrey_novo);
  ****
  const cursos = ['HTML', 'JavaScript', 'PHP', 'React'];
  cursos.map((elementos, indice) => {
    console.log(`Curso: ${elementos} - posição de numero: ${indice + 1}`)
  });

------------------------------------
const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];

function retornaCarro (carro) {
    return carro.marca + ' ' + carro.modelo + ' ano: ' + carro.anoFabricacao;
};

const novosCarros = carros.map(retornaCarro);

console.log(novosCarros);
*/

/*
const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  function abreviar(mes) {
    return mes.substr(0,3)
  }

  const mesesAbreviados = meses.map(abreviar);

  console.log(mesesAbreviados);


   * Vai imprimir
    [
      'Jan', 'Fev', 'Mar',
      'Abr', 'Mai', 'Jun',
      'Jul', 'Ago', 'Set',
      'Out', 'Nov', 'Dez'
    ]
*/
/*
const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
  ];

  function retornarCarroFiat(carro) {
    return (carro.marca == 'Fiat');
  }

  const carrosFiat = carros.filter( retornarCarroFiat );

  console.log(carrosFiat);

  /*
  * vai imprimir:
  [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 }
  ]
*/

/*
const numeros = [10,1,2];

console.log("\nArray antes da ordenação:\n");
console.info(numeros);

function ordenaNumeros(a, b){
    return a - b;
}

numeros.sort(ordenaNumeros);

console.log("\nArray depois da ordenação:\n");
console.info(numeros);
console.log("\n");
*/

/*
let tabela = [
    {equipe: 'Time Azul', pontos: 25 },
    {equipe: 'Time Verde', pontos: 47 },
    {equipe: 'Time Amarelo', pontos: 39 },
    {equipe: 'Time Vermelho', pontos: 16 },
];

function ordenaMaisPontos(a, b){
    return b.pontos - a.pontos;
}

tabela.sort(ordenaMaisPontos);

for(let i = 0; i < tabela.length; i++)
{
    let posicao = i+1;
    console.log(posicao+" | "+tabela[i].equipe+" - "+tabela[i].pontos+" pts");
};
*/

/*
const chuvaDeMeteoros = [
   { nome: 'Alfa Centaurídeos',     declinacao: -59 },
   { nome: 'Gama Normídeos',         declinacao:         -50 },
   { nome: 'Pi Pupídeos',                    declinacao:       -45 },
   { nome: 'Líridas',                     declinacao:   34  },
   { nome: 'Eta Aquáridas',               declinacao:         -1  },
   { nome: 'Eta Líridas',           declinacao:       44  },
   { nome: 'Bootídeos de Junho',             declinacao: 48  },
   { nome: 'Alfa Capricornídeos',    declinacao:          -10 },
   { nome: 'Delta Aquáridas do Sul', declinacao:        -16 },
   { nome: 'Piscis Austrinídeos',             declinacao:   -30 },
   { nome: 'Perseidas',              declinacao:     58  },
 ];

 const chuvasNoNorte = chuvaDeMeteoros.filter(
   (chuva) => chuva.declinacao >= 0
 );

 const chuvasNoSul = chuvaDeMeteoros.filter(
   (chuva) => chuva.declinacao < 0
 );

 const imprimirChuva = function(chuva) {
   console.log(chuva);
 };

 console.log("\nChuvas no hemisfério Norte:");
 chuvasNoNorte.forEach( imprimirChuva );

 console.log("\nChuvas no hemisfério Sul:");
 chuvasNoSul.forEach( imprimirChuva );
*/
/*
const itensCarrinho = [
    { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
    { id: 4, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
  ];
  
  function somarValor (total, itemCarrinho) {
    const valorTotal = itemCarrinho.qnt * itemCarrinho.valor;
  
    return total + valorTotal;
  }
  
  const valorAPagar = itensCarrinho.reduce(somarValor, 0);
  
  console.log(valorAPagar);
****
const names = ["Daniel","Maria","Marta","Juca","João","Jéssica"];

const namesCount = names.reduce((contador, nomeAtual) => {
  const primeiraLetra = nomeAtual[0].toLowerCase()

  if (contador[primeiraLetra]) {
    contador[primeiraLetra]++
  } else {
    contador[primeiraLetra] = 1
  }
  return contador;
}, {});

console.log(namesCount);


*/