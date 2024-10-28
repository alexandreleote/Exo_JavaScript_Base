/* DESCRIPTION OF THE CSS */

const carreBtn = document.querySelector('.carre'); // target the form in order to click on it

carreBtn.addEventListener('click', carreDescription); // add the description when clicked

var classDescription = `Class : ${carreBtn.className}`;

/* FUNCTIONS */

function carreDescription () {
    alert(classDescription);
}