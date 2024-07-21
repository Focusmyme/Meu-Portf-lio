function aparece() {

let link = window.document.getElementById('link')
let setab = window.document.getElementById('setab')

if(link.style.top === '-38%') {link.style.top = '88%'
setab.src = 'imagens/seta-para-cima.png'
    link.style.transition = 'top 1s ease'
} else {link.style.top = '-38%'
    setab.src = 'imagens/seta-para-baixo-2.png'
}
}