function idade() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'crianca-h.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'joven-h.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'adulto-h.png')
            } else {
                // idoso
                img.setAttribute('src', 'idoso-h.png')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'joven-m.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        }
        res.innerHTML= `Detectamos ${genero} com ${idade} anos!`
        res.style.textAlign= 'center'
        res.appendChild(img)
        img.style.display= 'block'
        img.style.margin= 'auto'
    }
}