const aluno_academia = {
    id: 10,
    nome: 'Gerson Silva Campos',
    altura: '1.75',
    peso: 130
}

const aluno_nome = aluno_academia.nome;
const aluno_peso = aluno_academia.peso;
const aluno_altura = aluno_academia.altura;

const imc_aluno = aluno_peso / (aluno_altura * aluno_altura)

console.log(`O IMC do aluno é ${imc_aluno.toFixed(1)}`)

if (imc_aluno < 18.5) {
    console.log(`O aluno ${aluno_nome} está abaixo do peso`);
} else if (imc_aluno >= 18.5 && imc_aluno <= 24.99) {
    console.log(`O aluno ${aluno_nome} está com p peso normal`);
} else {
    console.log(`O aluno ${aluno_nome} está acima do peso`);
};
