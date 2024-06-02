let inicio = 1 
let fim = 10
let passo = 2

for (let cont=inicio;cont<=fim;cont=cont + passo) {
    console.log(cont)
}


let num = [5,8,2,9,3]

num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} Posições`)
console.log(`O primeiro elemento é ${num[0]}`)

for (let pos=0;pos<num.length;pos++) {
    console.log(`O elemento na posição ${pos} é ${num[pos]}`)
}
console.log('')
// forma mais simplificada do ECMA script
for (let pos in num) {
    console.log(`O elemento na posição ${pos} é ${num[pos]}`)
}

let valor= num.indexOf(10)

if (valor== -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`A posição desse elemento dentro do arrey num é ${valor}`)
}