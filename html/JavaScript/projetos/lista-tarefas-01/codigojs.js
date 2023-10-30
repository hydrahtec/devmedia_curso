
const d= document
const tarefa_campo = d.getElementById("tarefa_campo");
const lista_pai = d.getElementById("lista_pai");
let ArreyDeTarefas = [];

function mostrarNaTela () {
    let novaLista = "";

    ArreyDeTarefas.forEach( (tarefa) => {
        novaLista = novaLista + `
        <li class="item_lista">
            <p>${tarefa}</p>
        </li>
        `
        lista_pai.innerHTML = novaLista
    })
}

function adicionar_tarefa () {
    
    if (tarefa_campo.value.length == 0) {
        return alert("Escreva a tarefa antes de adicionar")
    } else {
    ArreyDeTarefas.push(tarefa_campo.value)
    mostrarNaTela();
    }
}

const botao = d.getElementById("btn")
botao.addEventListener("click", adicionar_tarefa)