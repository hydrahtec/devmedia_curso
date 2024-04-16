let pmx = 0;
let pmy = 0;

$(document).mousemove((event) => {
    pmx = event.pageX;
    pmy = event.pageY;

    if(pmx > 500) {
        console.log("Posição x maior que 500px")
    }

    $('#text').text(`A posição do x é: ${pmx} px 
    e a posição do y é: ${pmy} px`);
});

$(document).click((event) => {
    $('#res').text(`O item clicado foi: ${event.target.tagName}`);
    if (event.target.id == "res") {
        alert('Não pode ser clicado!')
    };
});