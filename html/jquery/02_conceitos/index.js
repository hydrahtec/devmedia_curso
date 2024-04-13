// forma JS

let btn_somarjs = document.querySelector('#btn_somarjs')
.addEventListener('click', () => {
    let v1 = document.querySelector('#v1').value; // valor do input 1
    let v2 = document.querySelector('#v2').value; // valor do input 2
    let soma = parseInt(v1) + parseInt(v2); // converte as strings para numero e soma

    let res = document.querySelector('#res').value = soma; // insere o valor em res
});

let limpar = document.querySelector('#limpar').addEventListener('click', () => {
    let v1 = document.querySelector('#v1').value = '';
    let v2 = document.querySelector('#v2').value = '';

    let res = document.querySelector('#res').value = ''; // insere o valor 0 em res
});

/* forma JQ */

$('#btn_somarjq').click(() => {
    let v1 = parseInt($('#v1').val());
    let v2 = parseInt($('#v2').val());
    let soma = v1 + v2;
    let res = $('#res').val(soma); 
});

$('#limpar').click(() => {
    let v1 = $('#v1').val('');
    let v2 = $('#v2').val('');
    let res = $('#res').val('');
});