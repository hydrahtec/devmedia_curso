/*
let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: false},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false}
];

let contador = 0;
let encontrouHabilitado = false;

while (contador < funcionarios.length) {
    
    let funcionario = funcionarios[contador];
    
    if (funcionario.habilitado == true) {
        
        console.log("Funcionario habilitado encontrado: "+funcionario.nome)
        break
    }
    
    contador++
};

if (!encontrouHabilitado) {
    console.log("Não foi encontrado funcionario Habilitado.")
};

*/
// exemplo de aplicação do continue

let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

let contador = 0;

while (contador < alunos.length) {

    let aluno = alunos[contador]

    contador++

    if (aluno.media < 6) {
        continue;
    };

    console.log("Id: "+aluno.id)
    console.log("Nome: "+aluno.nome)
    console.log("Media: "+aluno.media)
    console.log("\n")
};