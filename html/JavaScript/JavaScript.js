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
==> XMLHttpRequest
*/
//=================================================
/*// Laços e iterações
    
==> for_
==> do...while_
==> while_
==> label_
==> break_
==> continue_
==> for...in_
==> for...of_
***
function howMany(selectObject) {
    let numeroSelecionadas = 0;
    let musicas = [];

    for (let op of selectObject) {

        if (op.selected) {
            numeroSelecionadas++;
            musicas.push(` ${op.innerHTML}`)
        };
    };
    console.log(musicas);

    return ` ${numeroSelecionadas} \n musicas escolhidas: ${musicas}.`;
};

  
const lista = document.getElementById("tipoMusica");

const btn = document.getElementById('btn');
btn.addEventListener("click", () => {
    alert("Total de musicas selecionadas: " + howMany(lista))
});
*/
//=================================================
/*// Funções

==> Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

==> Um método é uma função invocada por um objeto. Leia mais sobre objetos e métodos em Trabalhando com Objetos (en-US).

==> fatorial
function fatorial(n) {
    if(n==0 || n==1) return 1;
    else return n * fatorial(n -1);
};

console.log(fatorial(10))

==> As variáveis definidas no interior de uma função não podem ser acessadas de nenhum lugar fora da função, porque a variável está definida apenas no escopo da função.

==>  hacks.mozilla.org

Funções pré-definidas
JavaScript tem várias funções pré-definidas:

eval()
O método eval() execulta código JavaScript passado como uma string. Seu uso não é recomendado por que pode abrir brechas para codigos mal intencionados.

uneval() Non-standard
O método uneval() cria uma representação de string do código-fonte de um Object.

isFinite() retorna true or false se a variavel for ou numeor finito ou não.
A função global isFinite() determina se o valor passado é um número finito. Se necessário, o parâmetro é primeiro convertido para um número.

isNaN() verifica se não é um numero .
A função isNaN() determina se um valor é NaN ou não. Nota: coerção dentro da função isNaN tem regras interessantes; você pode, alternativamente, querer usar Number.isNaN(), como definido no ECMAScript 6, ou você pode usar typeof para determinar se o valor não é um número.

parseFloat()
A função parseFloat() analisa um argumento do tipo string e retorna um número de ponto flutuante.

parseInt()
A função parseInt() analisa um argumento do tipo string e retorna um inteiro da base especificada (base do sistema numérico).

decodeURI()
A função decodeURI() decodifica uma Uniform Resource Identifier (URI) criada anteriormente por encodeURI ou por uma rotina similar.

decodeURIComponent()
O método decodeURIComponent() decodifica um componente Uniform Resource Identifier (URI) criado anteriormente por encodeURIComponent ou por uma rotina similar.

encodeURI()
O método encodeURI() codifica um Uniform Resource Identifier (URI), substituindo cada ocorrência de determinados caracteres por um, dois, três, ou quatro sequências de escape que representa a codificação UTF-8 do caractere (só serão quatro sequências de escape para caracteres compostos de dois caracteres "substitutos").

encodeURIComponent()
O método encodeURIComponent() codifica um componente Uniform Resource Identifier (URI), substituindo cada ocorrência de determinados caracteres por um, dois, três, ou quatro sequências de escape que representa a codificação UTF-8 do caractere (só serão quatro sequências de escape para caracteres compostos de dois caracteres "substitutos").

escape() Deprecated
O método obsoleto escape() calcula uma nova string na qual certos caracteres foram substituídos por uma sequência de escape hexadecimal. Use encodeURI ou encodeURIComponent em vez disso.

unescape() Deprecated
O método obsoleto unescape() calcula uma nova string na qual sequências de escape hexadecimais são substituídas pelo caractere que ela representa. As sequências de escape podem ser introduzidas por uma função como escape. Por unescape() estar obsoleto, use decodeURI() ou decodeURIComponent ao invés dele.
super

*/
//=================================================
/*// expressões e operadores

==> in
O operador in retorna verdadeiro se a propriedade especificada estiver no objeto especificado. A sintaxe é:

JS
Copy to Clipboard

nomePropriedadeOuNumero in nomeObjeto;
onde nomePropriedadeOuNumero é uma string ou uma expressão numérica que representa um nome de propriedade ou um índice de um array, e nomeObjeto é o nome de um objeto.

==> this (valide):
faz referencia ao proprio elemento onde foi chamado.
criando propriedades, atribuido valores a elas e invocando as mesmas para passar eses valores.
* usar arrow functions para contornar problemas de escopo.
(pessoa.prototype.novometodo = () => {};)
declarar o metodo diretamento no prototype da função contrutora ou de um objeto pai de onde sairam novas instancias pode economizar uso de memoria e otimização da performace principalmente em dispositivos moveis.

==> new
Você pode utilizar o operador new para criar uma instância de um tipo de objeto definido pelo usuário ou de um dos tipos de objeto predefinidos: Array, Boolean, Date, Function, Image, Number, Object, Option, RegExp ou String. No servidor, você pode também utilizar DbPool, Lock, File ou SendMail.
** [... new set(number)] : cria uma arrey retirando todos os numeros ou palavras repetidas do arrei original.

==> super
A palavra reservada super é utilizada para chamar a função pai de um objeto. dentro da instancia de u, objeto ao usar super eu defino que a função a ser usada esta dentro do elemento pai de onde foram erdadas as propriedades e metodos.

==> spread (...) cria um arrey com mutiplas posições.

==> extends

==> https://github.com/mdn/interactive-examples

*/
//=================================================
/*// Math() classe com metodos e propriedades matematicas já pre definidos.

==> abs()	Valor absoluto, tras somente o valor sem sinal.

==> floor(arredonda para baixo independente do valor da casa decimal), ceil(arredonda para cima independente do valor da casa decimal)	Retorna o maior/menor inteiro que é menor/maior inteiro que ou igual ao argumento.

==> min(menor valor), max(maximo valor)	Retorna menor ou maior (respectivamente) de uma lista separada por vírgula de argumentos numéricos

==> random()	Retorna um número aleatório entre 0 e 1.

==> round(arredonda para cima ou para baixo dependendo do seu valor), fround(), trunc(),	Funções de arredondamento e truncamento.

==> pow(eleva o numero a qualquer numero)
*/
//=================================================
/*//Formatando texto
"\xA9"; // "©"

==> charAt, charCodeAt, codePointAt	Retorna o código do caractere ou o caractere em uma posição específica na string.

==> indexOf, lastIndexOf	Retorna a posição de uma substring específica na string ou a última posição da substring específica, respectivamente.

==> startsWith, endsWith, includes
Retorna se uma string começa, termina ou contém uma outra string específica.

==> concat	Concatena o texto de duas strings e retorna uma nova string.

==> fromCharCode, fromCodePoint	Cria uma string a partir de uma sequência específica de valores Unicode. Esse é um método da classe String, não de uma instância do tipo String.

==> split	Separa um objeto String em um array de strings, separando a string em substrings.

==> slice	Extrai uma seção de uma string e retorna uma nova string.

==> substring, substr	Retorna um subconjunto específico de uma string, definindo os índices inicial e final, ou definindo um índice e um tamanho.

==> match
replace
search

"quote",
"toLowerCase",
"toUpperCase",
"charCodeAt",
"indexOf",
"lastIndexOf",
"trim",
"trimLeft",
"trimRight",
"toLocaleLowerCase",
"toLocaleUpperCase",
"localeCompare",
"match",
"search",
"replace",
"split",
*/
//=================================================
/*// Expressão Regular
estudar sobre

==> RegExp - O objeto RegExp é usado para corresponder texto com um padrão.
https://www.youtube.com/watch?v=31FgxWsRRMw

https://www.youtube.com/watch?v=z0EnAoH09oU

(i) ignora o padrao de busca sensitive
(g) faz uma operacao global em toda a cadeia de caracteres. seja busca ou troca.

*/
//=================================================
/*// Arrey 

==> "join",

==> "reverse",

==> "sort",

==> "push",

==> "pop",

==> "shift",

==> "unshift",

==> "splice",

==> "concat",

==> "slice",

==> "indexOf",

==> "lastIndexOf",

==> "forEach",

==> "map",

==> "reduce",

==> "reduceRight",

==> "filter",

==> "some",

==> "every",

==> "isArray",

*/
//=================================================
/*// Coleções chaveadas

==> colecao map

*/
//=================================================
/*// Objeto
Em JavaScript, quase tudo é um objeto. Todos os tipos primitivos - com exceção de null e undefined - são tratados como objetos. Eles podem receber propriedades (propriedades atribuídas de alguns tipos não são persistentes), e possuem todas as características de objetos.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames


Constructor
==> Object() constructor

==> Object.assign()

==> Methods

==> Object.create()

==> Object.defineProperties()

==> Object.defineProperty()

==> Object.entries()

==> Object.freeze()

==> Object.fromEntries()

==> Object.getOwnPropertyDescriptor()

==> Object.getOwnPropertyDescriptors()

==> Object.getOwnPropertyNames()

==> Object.getOwnPropertySymbols()

==> Object.getPrototypeOf()

==> Object.groupBy()

==> Object.hasOwn()

==> Object.prototype.hasOwnProperty()

==> Object.is()

==> Object.isExtensible()

==> Object.isFrozen()

==> Object.prototype.isPrototypeOf()

==> Object.isSealed()

==> Object.keys()

==> Object.preventExtensions()

==> Object.prototype.propertyIsEnumerable()

==> Object.seal()

==> Object.setPrototypeOf()

==> Object.prototype.toLocaleString()

==> Object.prototype.toString()

==> Object.prototype.valueOf()

==> Object.values()

*/
//=================================================
/*// função construtora de objetos
topico dedicado para o estudo de funcoes construtoras

==> lazys

==> metodos()

==> this()

==> getters()

==> setters()

==> injeção de dependencias

==> feactures
*/
//=================================================
/*// Classes
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/extends

==> Overview

==> constructor

==> extends

==> Private class features

==> Public class fields

==> static

==> heranca

==> extensoes

==> Static initialization blocks

*/
//=================================================
/*// Usando promises
Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Como a maioria das pessoas consomem promises já criadas, este guia explicará o consumo de promises devolvidas antes de explicar como criá-las.

==> Garantias

==> Encadeamento

==> Propagação de erros

==> Criando uma Promise em torno de uma callback API 
antiga
==> Composição

==> Cronometragem


*/
//=================================================
/*// Arrays tipados no JavaScript

==> Buffers e views: a arquitetura dos arrays tipados

==> Web APIs que utilizam arrays tipados

==> Exemplos

==> Especificações

*/
//=================================================
/*// Meta programação

==> Proxies

==> Handlers e traps

==> Proxy Revogável


*/
//=================================================
/*// Módulos JavaScript

==> export

==> import

==> aside

*/
//=================================================
/*// APIs web

*/
//=================================================
/*// Accessibility
https://developer.mozilla.org/pt-BR/docs/Learn/Accessibility

*/
//=================================================
/*// Closures
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures

*/
//=================================================
/*// Gerenciamento de Memória
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Memory_management

*/
//=================================================
/*// Modelo de Concorrência e Event Loop


*/
//=================================================
/*// Strict mode


*/
//=================================================
/*// temporizadores

==> setInterval

==> setTimeout

*/
//=================================================
/*// storage

==> setstorege

==> getstorage

*/
//=================================================
/*// fech

*/
//=================================================
/*// desestruturação

*/