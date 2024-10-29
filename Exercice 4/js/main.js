/* CONST */

const mediaTargeted = document.querySelectorAll('.media');
const backgroundSite = document.querySelector('body');

/* FUNCTIONS */

mediaTargeted.forEach(media => { // browse the different element 'media'
    media.addEventListener('click', () => { // Event listener on 'click
        media.classList.toggle('active');

        const textMedia = media.querySelector('.text'); // We target the 'text' from the 'media' when clicked
        const bgColor = window.getComputedStyle(media).backgroundColor; // We retrieve the color of the clicked square


        if (media.classList.contains('active')) { // We chceck if the 'media' contains the 'active' class
            textMedia.classList.add('display') // Then we add the 'display' class to the 'text'
            backgroundSite.style.backgroundColor = bgColor; // Which we then apply on the background of the bottom square
        } else {
            textMedia.classList.remove('display') // Or we remove it otherwise
            backgroundSite.style.backgroundColor = ""; // Which we then apply on the background of the bottom square
        }

    });
});

