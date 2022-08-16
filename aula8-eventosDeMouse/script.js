
window.addEventListener('load', function() {
    
    let btMudaCor = document.querySelectorAll('.botao-muda-cor')

    for(let i = 0; i < btMudaCor.length; i++) {
        btMudaCor[i].addEventListener('click', function() {
            this.style.color=prompt('escolha a cor do texto')
        })
    }

})

