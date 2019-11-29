// let paragrafo = document.querySelector('#paragrafo');

// //classList é um ojbeto que possui metodos
// paragrafo.classList.add("style1")


let botao = document.querySelector('#button');
let paragrafo = document.querySelector('#paragrafo');

botao.addEventListener('click', function(event){
    paragrafo.classList.toggle("buttonHide");// pega a classe criada no css com estilizaçao
});

paragrafo.addEventListener('mouseover', function(event){
    paragrafo.classList.toggle("button");// pega a classe criada no css com estilizaçao
});//toggle se tiver escondido o texto ele mostra se tiver mostrando ele esconde