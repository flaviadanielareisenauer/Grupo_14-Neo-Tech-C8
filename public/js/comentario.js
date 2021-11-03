function comentar(text) {
    var text
    text = txtIdcomentar.value

    txtIdResultado.value = (text)

    txtIdcomentar.style.display = "none"

    txtmostrar.style.visibility = 'hidden'

    let h = document.querySelector('.mensajedecomentario')
    
    h.style.display="block"
   
    let comentariosESP = document.querySelector('.seccioncomentariosESP')

    comentariosESP.style.display = "block"

    setTimeout(() => {
        h.style.display="none"
    }, 2000)

}
