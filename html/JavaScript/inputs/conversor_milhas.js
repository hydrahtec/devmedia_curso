import entradaDados from 'readline-sync';
// importa o pluging dando o apelido entradaDados para o objeto

console.log("Conversor de Milhas para Quilômetros: \n");
// imprime n atela o texto e oula uma linha

let mi = entradaDados.question("Informe o valor em milhas: ");
// cria um obejeto de ligação com o objeto entradaDados acessando um de seus methodos e implementando a função de entrada de dados direto na linha de comando

let km = mi / 0.62137;
// como se trata de uma divisão, não é necessario passar o valor numerico pela função Number(), o JS já faz a conversão de type

console.log(mi+"mi equilavem a "+km.toFixed(2)+"km")
