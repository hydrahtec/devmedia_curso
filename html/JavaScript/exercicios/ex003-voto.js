var idade = 66

if (idade<16) {
    console.log('Você não vota')
} else if (idade<18 || idade>=65) {
    console.log('Você vota se quiser')
} else if (idade>=18) {
    console.log('Seu voto é obrigatório')
}