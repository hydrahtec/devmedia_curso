
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores= [1]


    function isnumero(n) {
        if (Number(n) >0 && Number(n) <= 100) {
            return 'true'
        } else {
            return 'false'
        }
    }
function isNumero(n) {
    if (Number(n)>= 1 && Number(n)<= 100) {
        return true
    } else {
        return false
    }
}

    function inlista(n,l) {
        if (l.indexOf(Number(n)) != -1) {
            return 'true'
        } else {
            return 'false'
        }
    }
function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
               
        let item = document.createElement('option')
        item.text = `Numero ${num.value}`
        lista.appendChild(item)
        res.innerHTML= ''
    }
}
    if (isnumero(num.value) && !inlista(num.value, valores)) {
        window.alert('Tudo Ok!!')
    } else {
        window.alert('Erro, o numero que você escolheu não pode ser aceito ou já esta na lista!, verifique e tente novamente.')
    }
    num.value= ''
    num.focus()

function finalizar() {
    
    if (valores.length == 0) {
        window.alert= 'Adicione os numeros antes de finalizar!!'
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0 
        let media = 0

        for (let pos in valores) {

            soma += valores[pos]

            if (valores[pos] > maior)
            maior = valores[pos]

            if (valores[pos] < menor)
            menor = valores[pos]
        }

        media = soma/tot

        res.innerHTML= ''
        res.innerHTML += `<p>Ao todo existem ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p>O menor numero entre eles é ${menor}</p>`
        res.innerHTML += `<p>O maior é ${maior}</p>`
        res.innerHTML += `<p>A soma entre todos é ${soma}</p>`
        res.innerHTML += `<p>E a media é ${media}</p>`
    }
}