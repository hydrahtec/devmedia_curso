//0 =  domingo, sábado = 6

let data = new Date();

let dia_semana = data.getDay();

let status_loja = (dia_semana == 0 || dia_semana == 6) ? "Funcionamos apenas de Segunda à Sexta" : "Loja aberta";

console.log(status_loja);