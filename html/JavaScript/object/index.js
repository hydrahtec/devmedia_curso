// chave / valor
// obj.propriedade - acesso por chave válida  
// obj['propriedade'] - acesso por chave inválida

let produto = {
    id: 9,
    nome: 'Cafeteira Elétrica',
    valor: 99.00
}

console.log(produto.id) // 9
console.log(produto.nome) // Cafeteira Elétrica
console.log(produto.valor) // 99.00

let cliente = {
    id: 40,
    nome: 'Jorge Silva',
    telefone: '(21) 99999-9999'
}

console.log(cliente.id) // 40
console.log(cliente.nome) // Jorge Silva
console.log(cliente.telefone) // (21) 99999-9999
