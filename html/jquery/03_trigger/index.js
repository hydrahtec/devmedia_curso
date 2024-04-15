$('#bloco1').on ({
    click: () => {$('#texto').text('Foi clicado!')},
    mouseenter: () => {$('#texto').text('Mouse entrou!')},
    mouseleave: () => {$('#texto').text('Mouse saiu!')},
    dblclick: () => {$('#texto').text('duplo click!')},
});

$('#bloco2').click(() => {
    $('#bloco1').trigger('click'); // aciona o metodo sem disparar
});

