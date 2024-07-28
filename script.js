function aparece() {

let link = window.document.getElementById('link')
let seta = window.document.getElementById('setab')

if(link.style.top === '-38%' || link.style.top === '') {link.style.top = '88%'
seta.src = 'imagens/seta-para-cima.png'
    link.style.transition = 'top 1s ease'
} else {link.style.top = '-38%'
    seta.src = 'imagens/seta-para-baixo-2.png'
}
}