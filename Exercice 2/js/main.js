/* CONST */

const colorSquares = document.querySelectorAll('.square');
const identifySquare = document.querySelector("#result");
const resetBtn = document.querySelector('#btn');

/* FUNCTIONS */

colorSquares.forEach(square => { // For each square we add an event listener on the square when clicked
    square.addEventListener('click', () => {

        const bgColor = window.getComputedStyle(square).backgroundColor; // We retrieve the color of the clicked square

        identifySquare.style.backgroundColor = bgColor; // Which we then apply on the background of the bottom square
        identifySquare.textContent = bgColor; // Then we display the rgb code by replacing the text content inside the square

    });
});

resetBtn.addEventListener('click', resetColors);

function resetColors () {
    const bgColor = ""; // We set the value to "" so that we erase the value it has been given previously

    identifySquare.style.backgroundColor = bgColor;
    identifySquare.textContent = bgColor;
};