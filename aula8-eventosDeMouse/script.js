
window.addEventListener('load', function() {
    
    let btMudaCor = document.querySelectorAll('.botao-muda-cor')

    for(let i = 0; i < btMudaCor.length; i++) {
        btMudaCor[i].addEventListener('click', function() {
            this.style.color=prompt('escolha a cor do texto')
        })
    }

})

//EVENTOS DE TECLADO

// usuario aperta uma tecla - evento de teclado (keydown) com uma funcao

document.addEventListener('keydown', function(apertar) {
    if(apertar.key === 'c'){
        console.log('apertou a letra c');
    }
})

// soltar a tecla (keyup) com uma funcao 




