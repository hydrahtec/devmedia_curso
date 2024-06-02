let data = new Date();

const tipo_mes = {
    month: 'long'
};

let mes = data.toLocaleString('pt-br', tipo_mes);

switch (mes) {
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log('Estamos na estação do Verão');
        break;
    case "abril":
    case "Maio":
    case "Junho":
        console.log('Estamos na estação do Outono');
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log('Estamos na estação do Inverno');
        break;
    case "Outubro":
    case "Novembro":
    case "dezembro":
        console.log('Estamos na estação do Primavera');
        break;
    default:
        console.log('Mês inválido, não foi possivel encontar a estação');
        break;
};  

