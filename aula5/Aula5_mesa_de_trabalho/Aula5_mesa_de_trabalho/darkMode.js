//Capturando os elementos, através dos seletores do DOM
//let buttonDarkMode = document.getElementById('buttonDarkMode');
let body = document.body;
let barraMenu = document.getElementById('barra-menu');
let cardList = document.querySelectorAll('.item');

/* Função que é chamada pelo onChanged ao clicar no Botao ToggleSwitch */
function mudarModoDesign() {
    body.classList.toggle('dark-body')
    barraMenu.classList.toggle('dark-barra-menu')

   // for (const item of cardList){
   //     item.classList.toggle('dark-card')
   //     item.classList.toggle('dark-card-text')
    //}

    for (let i = 0; i < cardList.length; i++) {
        cardList[i].classList.toggle('dark-card')
        cardList[i].classList.toggle('dark-card-text')
    }   
}