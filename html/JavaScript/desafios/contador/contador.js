function contar() {
    var inicio = window.document.getElementById('txtn1')
    var fim = window.document.getElementById('txtn2')
    var passo= window.document.getElementById('txtpas')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0) {
        window.alert('[Erro] ditige os numeros!')
    } else if (Number(passo.value) == 0) {
        window.alert('[Erro] O passo não pode ser igual a 0, escolha outro valor!')
    } else {
        res.innerHTML= 'Contando: <br>'

        if (Number(inicio.value) < Number(fim.value)) {
            for (let cont=Number(inicio.value);cont<=Number(fim.value);cont=cont + Number(passo.value)) {
              res.innerHTML += ` ${cont} \u{1f449}`
            }
        } else {
            for (let cont=Number(inicio.value);cont>=Number(fim.value);cont=cont - Number(passo.value)) {
              res.innerHTML += ` ${cont} \u{1f449}`
            }
        }

    }
}