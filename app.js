const button = document.querySelector('.button');
const circle = document.querySelectorAll('.main div');

button.addEventListener('click', () => {

    circle.forEach((cir, i) => {
        cir.style.animation = `bol 2s infinite ${i*+0.66}s`;
    })

});