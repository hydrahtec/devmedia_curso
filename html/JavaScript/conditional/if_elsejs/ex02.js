//0 =  domingo, sábado = 6

let data = new Date();

let dia_semana = data.getDay();

if (dia_semana == 0 || dia_semana == 6) {
    console.log(`A loja só funciona em dias de semana!!`);
} else {
    console.log(`A loja está aberta!!`);
};