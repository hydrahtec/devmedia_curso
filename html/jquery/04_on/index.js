$('#bloco').on ({
    click: () => {$('#texto').text('Foi clicado!')},
    mouseenter: () => {$('#texto').text('Mouse entrou!')},
    mouseleave: () => {$('#texto').text('Mouse saiu!')},
    dblclick: () => {$('#texto').text('duplo click!')},
});