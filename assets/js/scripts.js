// Pegar o elemento carousel do componente main-carousel
// Criar variável para controlar a direção do carrossel
const carousel = document.querySelector('.main-carousel .carousel');
let position = 0;



// Pegar o botão seta para direita
// Adicionar um ouvinte no evento de click
// Criar função para movimentar o elemento carrosel do componente main-carousel para a direita
const btnNext = document.querySelector('.button-arrow.-next');
btnNext.addEventListener('click', function() {
    position+= 20;
    carousel.style = `transform: translateX(${position}px)`
});



// Pegar o botão seta para esquerda
// Adicionar um ouvinte no evento de click
// Criar função para movimentar o elemento carrosel do componente main-carousel para a esquerda
const btnPreview = document.querySelector('.button-arrow.-preview');
btnPreview.addEventListener('click', function() {
    position-= 20;
    carousel.style = `transform: translateX(${position}px)`
});
