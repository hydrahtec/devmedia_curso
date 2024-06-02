let num = 10
let valores = []

function isnumero(n) {
        if (n >0 && n <= 100) {
            return 'true'
        } else {
            return 'false'
        }
}

function inlista(n,l) {
        if (l.indexOf(n) != -1) {
            return 'false'
        } else {
            return 'true'
        }
}


if (isnumero(num) && !inlista(num, valores)) {
        console.log(isnumero(num))
        console.log(inlista(num, valores))
        console.log('Tudo Ok!!')
    } else {
        console.log('Erro, o numero que você escolheu não pode ser aceito ou já esta na lista!, verifique e tente novamente.')
        console.log(isnumero(num))
        console.log(inlista(num, valores))
}
