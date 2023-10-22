//=================================================
/*// JavaScript (documentação pessoal - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
==> JavaScript (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe(Isso significa que a linguagem suporta a passagem de funções como argumentos para outras funções, retornando-as como valores de outras funções e atribuindo-as a variáveis ou armazenando-as em estruturas de dados, os nomes das funções não têm qualquer estatuto especial).

==> Linguagem Multi-paradigima - Suporta estilos de orientação a objeto, imperativos e declarativos(como programação funcional).
*/
//=================================================
/*// Introdução

==> "use strict" obriga o programador a escrever o codigo de forma limpa. declarando todas as variaveis e usando a semantica coreta.

==> JavaScript tem uma biblioteca padrão de objetos, como: Array, Date, e Math, e um conjunto de elementos que formam o núcleo da linguagem, tais como: operadores, estruturas de controle e declarações.

==> O lado cliente do JavaScript estende-se do núcleo linguagem, fornecendo objetos para controlar um navegador web e seu Document Object Model (DOM).

==> O lado do servidor do JavaScript estende-se do núcleo da linguagem, fornecendo objetos relevantes à execução do JavaScript em um servidor. 

==> Orientada a objeto. Sem distinção entre tipos e objetos. A herança é feita através do protótipo e as propriedades e métodos podem ser adicionadas a qualquer objeto dinamicamente.

==> Os tipos de dados das variáveis não precisam ser declarados (tipagem dinâmica, vagamente tipado)	

==> Não pode escrever automaticamente no disco rigído.	

==> Se você segurar Shift enquanto pressiona Enter, o console tratará isso como uma quebra de linha e permitirá que você digite outra linha.
*/
//=================================================
/*// Sintaxe

==> JavaScript é case-sensitive e usa o conjunto de caracteres Unicode. a variável früh não é a mesma que Früh.

==> var - Declara uma variável, opcionalmente, inicializando-a com um valor.

==> let - Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

==> const - Declara uma constante de escopo de bloco, apenas de leitura.

==> Um identificador JavaScript deve começar com uma letra, underline (_), ou cifrão ($); os caracteres subsequentes podem também ser números (0-9). Devido JavaScript ser case-sensitive, letras incluem caracteres de "A" a "Z" (maiúsculos) e caracteres de "a" a "z" (minúsculos).

==> Declarando variáveis
Você pode declarar uma variável de três formas:

---Com a palavra chave var. Por exemplo, var x = 42. Esta sintaxe pode ser usada para declarar tanto variáveis locais como variáveis globais.
---Por simples adição de valor. Por exemplo, x = 42. Isso declara uma variável global. Essa declaração gera um aviso de advertência no JavaScript. Você não deve usar essa variante.
---Com a palavra chave let. Por exemplo, let y = 13. Essa sintaxe pode ser usada para declarar uma variável local de escopo de bloco. Veja escopo de variável abaixo.

==> O valor undefined se comporta como falso (false), quando usado em um contexto booleano.

O valor undefined converte-se para NaN quando usado no contexto numérico.

==> Quando você avalia uma variável nula, o valor nulo se comporta como 0 em contextos numéricos e como falso em contextos booleanos.

==> declarar variavel com var é perigoso pois vaza escopo. o recomendado é utilizar let.

==> declarar todas as variaveis no inicio do programa. não usar o mesmo nome para variaveis e constantes. não nomear variaves com o mesmo nome das funções.
*/
//=================================================
/*// Estrutura de dados e tipos

==> Seis tipos de dados são os chamados primitivos (Um primitivo (valor primitivo, tipo de dados primitivo) é um dado que não é representado através de um Objeto e, por consequência, não possui métodos.):

--- Boolean: true ou false.

--- null: Uma palavra-chave que indica valor nulo. Devido JavaScript ser case-sensitive, null não é o mesmo que Null, NULL, ou ainda outra variação.

--- undefined. Uma propriedade superior cujo valor é indefinido.

--- Number. 42 ou 3.14159.

--- String. "Howdy"

Symbol (novo em ECMAScript 6). Um tipo de dado cuja as instâncias são únicas e imutáveis.

e Object (refere-se a uma estrutura de dados contendo dados e instruções para se trabalhar com estes dados.).

==> Embora esses tipos de dados sejam uma quantidade relativamente pequena, eles permitem realizar funções úteis em suas aplicações. Objetos e funções são outros elementos fundamentais na linguagem. Você pode pensar em objetos como recipientes para os valores, e funções como métodos que suas aplicações podem executar.

==> Em expressões envolvendo valores numérico e string com o operador +, JavaScript converte valores numérico para strings.

No caso de um valor que representa um número está armazenado na memória como uma string, existem métodos para a conversão: 

==> o operador + pode representar tanto adição quanto concatenação, ele faz conversão de tipo diferente de outros operadores.

==> Literais
Você usa literais para representar valores em JavaScript. Estes são valores fixados, não variáveis, que você literalmente insere em seu script.

==> Array literal
--- Um array literal é uma lista de zero ou mais expressões, onde cada uma delas representam um elemento do array, inseridas entre colchetes ([]).
--- Um array literal é um tipo de inicializador de objetos.
--- Array literal são também um array de objetos.
--- Você não precisa especificar todos os elementos em um array literal. var fish = ["Lion", , "Angel"]; será salvo como undefined.
--- Vírgulas à direita podem criar erros em algumas versões de navegadores web antigos, é recomendável removê-las var myList = ["home", , "school", ];

==> Literais boolean
--- O tipo Boolean tem dois valores literal: true e false. pesquisar mais sobre*

==> Literais de ponto flutuante (pesquisar mais sobre*)

==> Inteiros (pesquisar mais sobre*)

==> Objeto literal
Um objeto literal é uma lista de zero ou mais pares de nomes de propriedades e valores associados de um objeto, colocado entre chaves ({}).
--- é possivel colocar um obejeto dentro de outros objetos e depois acessalos de forma dinamica.
---var carro = { carros: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(carro.carros.b); // Jeep
console.log(carro[7]); // Mazda

--- como saber qual ocasião usar .ponto ou [] para acesar a propriedade de um objeto??

==> String literal

--- Uma string literal são zero ou mais caracteres dispostos em aspas duplas (") ou aspas simples ('). Uma sequência de caracteres deve ser delimitada por aspas do mesmo tipo; ou seja, as duas aspas simples ou ambas aspas duplas. A seguir um exemplo de strings literais.
--- Você pode chamar qualquer um dos métodos do objeto string em uma string literal

console.log("John's cat".length);
// Irá exibir a quantidade de caracteres na string incluindo o espaço em branco.
// Nesse caso, 10 caracteres.

==> Expressão Regex Literal
Um regex literal é um padrão entre barras. A seguir um exemplo de regex literal.

var re = /ab+c/;
*/ 
//=================================================
/*// Controle de Fluxo e Manipulação de Erro

==> o caractere ponto e vírgula (;) é utilizado para separar declarações.

==> Declaração em bloco: Uma declaração em bloco é utilizada para agrupar declarações. O bloco é delimitado por um par de chaves: {}

==> Declarações condicionais: O JavaScript suporta duas declarações condicionais: if...else e switch.
--- Os seguintes valores são avaliados como falsos:
false / undefined / null / 0 / NaN / string vazia ("").

==> Se nenhuma cláusula default é encontrada, o programa continua a execução a partir da declaracao seguinte ao switch. Por convenção, a cláusula default é a última, mas não é necessário que seja assim.
 
==> Declaração throw
Use a declaração throw para lançar uma exceção. Quando você lança uma exceção, você especifica a expressão contendo o valor a ser lançado. quando houver alguma parte do codigo sucetiveu a erro por qualquer motivo é bom criar essa delatação de erro. meio que informa ao programa que se aquele tipo de erro ocorre deve mpstrar uma mensagem  na tela ou no console e continuar a execução do programa ao inves de quebrar a aplicação interronpendo a execulção do programa.
--- Você pode chamar uma exceção usando a declaração throw e manipulá-la usando a declaração try...catch.

==> Promise (O objeto Promise representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante).

--- são como promessas no mundo real, ela fica esperanco algum retorno; seja ela de sucesso ou de erro e apartir delas tomar alguma ação. 
Para crialas instanciamos a classe promise; que recebe dois argumentos 1 - resolve (solução) e 2 reject (erro); 
Para encadear mais processos utilizamos o metodo then;
Alguns recursos do JS (Fetch API) e algumas bibliotecas já retornam promises;


---Uma Promise assume um destes estados:

pending: estado inicial, não fulfilled, ou rejected.
fulfilled: operação bem sucedida.
rejected: operação falha.
settled: A Promise é fulfilled ou rejected, mas não pending.

const mypromise = new Promise((resolve, reject) => {
    const nome = 'Jose';

    if (nome === 'Matheus') {
        resolve('Usuario matheus encontrado');
    } else {
        reject('Usuario não encontrado')
    };
});

mypromise.then((data) => {
    return data.toLowerCase()
}).then((stringModify) => {
    console.log(stringModify)    
}).catch((err) => {
    console.log(`Aconteceu um erro na aplicação. Erro: ${err}`)
});
**********
const userName = 'matheusbattisti';

fetch(`https://api.github.com/users/${userName} ` , {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    }
}).then((response) => {
    console.log(typeof response);
    console.log(response);
    return response.json();
}).then((data) => {
    console.log(`O nome do usuario é ${data.name}`);
}).catch((err) => {
    conosole.log(`Houve um erro: ${err}`);
});
****
==> Estudar sobre callback

==> 
==> 
==> 
==> 
==> 

*/
//=================================================







/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================
/*//

*/
//=================================================

/*//

*/
//=================================================