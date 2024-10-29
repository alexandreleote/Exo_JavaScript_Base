/* CONST */

const squareSpin = document.querySelectorAll('.square');

/* FUNCTIONS */

squareSpin.forEach(square => {
    square.addEventListener('click', () => {
        square.classList.toggle('active');
    });
});