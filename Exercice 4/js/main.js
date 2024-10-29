/* CONST */

const mediaTargeted = document.querySelectorAll('.media');
const backgroundSite = document.querySelector('body');

/* FUNCTIONS */

// We create a method which will give a zoom impression
function mediaZoom(event) {

    // We target the 'text' from the 'media' when clicked
    const textMedia = event.currentTarget.querySelector('.text'); 

    // We target all the others 'text'
    const otherText = document.querySelectorAll('.text');
    
    // If the media is active then when we click we remove its class 
    if (event.currentTarget.classList.contains('active')) {

        event.currentTarget.classList.remove('active');

        // And set the bg back to normal
        backgroundSite.style.backgroundColor = "";

        // We remove the text displayed
        textMedia.classList.remove('display')

    } else {

        // Browse the different elements 'media'
        mediaTargeted.forEach(media => {

            // To which we remove the class 'active'
            media.classList.remove('active');

        });

        // Browse the other texts
        otherText.forEach(text => {

            // To which we remove the class 'display'
            text.classList.remove('display');

        });

        // We add the class 'active' to show the details in the media square
        event.currentTarget.classList.add('active');

        // We retrieve the color of the clicked square
        backgroundSite.style.backgroundColor = window.getComputedStyle(event.currentTarget).backgroundColor; 

        // We display the text below the icon
        textMedia.classList.add('display');
    }
}

// We call the function for evey media we target
mediaTargeted.forEach(media => {
    
    media.addEventListener('click', (mediaZoom)); 

});