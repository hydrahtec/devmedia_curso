const pessoa = {
    nome: 23,
    profissão: "mecanico",
    salario: "R$ 2000.00"
}

const objson = JSON.stringify(pessoa);

console.log(objson);

const objs = JSON.parse(objson);
console.log(objs);