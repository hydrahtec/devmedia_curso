/*
let emails_alunos = [
    "danilo@email.com",
    "jessica@email.com",
    "luana@email.com",
    "gustavo@email.com"
];

for ( let email of emails_alunos ) {
    
    console.log("Email: " + email);
    
};

let clientes_array = [
    {id: 1, nome: "Mônica", telefone: "99999-6565"},
    {id: 2, nome: "Tânia", telefone: "99999-0778"},
    {id: 3, nome: "Carlos", telefone: "99999-0551"}
];

for ( let cliente of clientes_array ) {
    
    let nome = cliente.nome;
    let telefone = cliente.telefone;
    
    console.log("Nome: " + nome + " - Telefone: " + telefone);
    
}

let notas_trimestrais = [9, 7, 6, 7];

let total_notas = notas_trimestrais.length;
let soma_notas = 0;

for ( let nota of notas_trimestrais ) {

    soma_notas = soma_notas + nota;

}

let media = soma_notas / total_notas;

console.log("Média: " + media);

if ( media >= 7 ) {

    console.log("Aprovado");

} else if ( media >= 6 && media < 7 ) {

    console.log("Recuperação");

} else {

    console.log("Reprovado");

};

let cursos_idiomas = [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }
];

for ( let curso of cursos_idiomas ) {

    let nome_curso = curso.nome;
    let preco_curso = curso.preco;
    let carga_horaria_curso = curso.carga_horaria;

    let preco_hora_curso = preco_curso / carga_horaria_curso;

    console.log("Nome do curso: " + nome_curso);
    console.log("Carga horária do curso: " + carga_horaria_curso + " horas");
    console.log("Preço do curso: R$" + preco_curso + ",00");

    if ( preco_hora_curso >= 15) {
        console.log("Hora/aula superior ou igual a R$15,00");
    } else {
        console.log("Hora/aula inferior a R$15,00");
    }

    console.log("\n");

};
*/

let produtos_array = [
    { id: 1, nome: "mouse", preco: 50 },
    { id: 2, nome: "teclado", preco: 90 },
    { id: 3, nome: "monitor", preco: 350 },
    { id: 4, nome: "nobreak", preco: 600 },
];

let percentual_desconto = 10;

for ( let produto of produtos_array ) {

    let nome = produto.nome;
    let preco = produto.preco;

    let valor_desconto = (preco * percentual_desconto) / 100;
    let novo_preco = preco - valor_desconto;

    console.log("Novo valor do produto " + nome + ": R$" + novo_preco + ",00");

};