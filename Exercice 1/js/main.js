/* DESCRIPTION OF THE CSS */

const carreBtn = document.querySelector('.carre'); // target the form in order to click on it

carreBtn.addEventListener('click', carreDescription); // add the description when clicked
carreStyle = getComputedStyle(carreBtn);

/* description displayed in the alert */
var classDescription = `Class : ${carreBtn.className}`;
classDescription += `\n - Background color : `+ carreStyle.backgroundColor;
classDescription += `\n - Color : ` + carreStyle.color;
classDescription += `\n - Height : `+ carreStyle.height;
classDescription += `\n - Width : `+ carreStyle.width;
classDescription += `\n - Display : ` + carreStyle.display;
classDescription += `\n - Font : `+ carreStyle.fontFamily +" ("+ carreStyle.fontSize + ")";

/* FUNCTIONS */

function carreDescription () {
    alert(classDescription);
}