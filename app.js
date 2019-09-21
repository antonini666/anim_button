const button = document.querySelector('.button');
const circle = document.querySelectorAll('.main div');

button.addEventListener('click', () => {
    circle.forEach((cir, i) => {
        if (cir.style.animation == ''){
            cir.style.animation = `bol 3s infinite ${i*+0.75}s`;
        } else {
            cir.style.animation = '';
        }
    });
});