function tabuada() {
    var num = window.document.getElementById('txttab')
    var tab = window.document.getElementById('tabu')

    if (num.value.length == 0) {
        window.alert('Erro, Insira um numero e tente novamente')
    } else {
        var n = Number(num.value)
        var c = 0
        tab.innerHTML= ''
        while (c<=10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}