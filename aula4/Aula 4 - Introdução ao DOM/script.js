let titulo = document.querySelector('.titulo');
// retorna o primeiro elemento html com a classe 'titulo' 

let marca = document.getElementById('marca');
//retorna o elemento correspondenyte ao id marca

// Propriedade Style 

titulo.style.color = 'cyan';
titulo.style.fontFamily = 'Helvetica';

// Template Strings 

`minha Variavel vale ${minhaVariavel}`; //sintaxe

const nome = 'Mauro';
const meuTemplate = `meu nome é ${nome}`; 

console.log(meuTemplate);

const meuTemplate2 = `2*3 é ${2*3}`;
console.log(meuTemplate2);

