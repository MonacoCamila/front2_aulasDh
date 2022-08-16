/* Construa um formulário usando javascript com no mínimo três campos de input, 
e esses campos terão comportamentos a decorrer de algumas condições. 
Construa esses inputs de uma forma que, quando forem preenchidos com algum conteúdo, 
receberão a propriedade “disabled”, mas quando o mouse estiver acima desse campo, 
ele vai perder essa propriedade possibilitando a modificação do conteúdo pelo usuário. 
Quando o mouse sair do input e o mesmo estiver preenchido, ele receberá a propriedade disabled novamente.
*/


let input1 = document.getElementById("urlImagem1");
let input2 = document.getElementById("urlImagem2");
let input3 = document.getElementById("urlImagem3");
let divGaleria = document.getElementById("galeria");



function cliqueiEnviar (){ 
    //console.log('input1.value, input2.value, input3.value');//
    
    ganhouFocoInput1();

    let image = document.createElement("img")
    image.src = input1.value;

    divGaleria.appendChild(img);

    
    }

    function perdeuFocoInput1(){
        input1.setAttribute('disabled', true);
    
    }

    function ganhouFocoInput1(){
        input1.removeAttribute('disabled');
    
    }

    

