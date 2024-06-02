function carregar() {
    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('imagem')
    var cump=window.document.getElementById('cump')

    var agora= new Date()
    var hora= agora.getHours()
    
    if (hora>=0 && hora<12) {
        //bom dia
        document.body.style.backgroundColor= '#B8C5C5'
        img.src='manha.png'
        msg.innerHTML= `Agora são exatamente <strong>${hora}</strong> horas!!`
        cump.innerHTML= 'Um ótimo <strong>dia</strong> para você!!'
    } else if (hora<18) {
        //boa tarde
        document.body.style.backgroundColor= '#ECBA77'
        img.src='tarde.png'
        msg.innerHTML= `Agora são exatamente <strong>${hora}</strong> horas!!`
        cump.innerHTML= 'Uma ótima <strong>tarde</strong> para você!!'
    } else {
        //boa noite
        document.body.style.backgroundColor= '#1E2D58'
        img.src= 'noite.png'
        msg.innerHTML= `Agora são exatamente <strong>${hora}</strong> horas!!`
        cump.innerHTML= 'Uma ótima <strong>noite</strong> para você!!'
    }
}