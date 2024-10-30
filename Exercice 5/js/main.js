import quotes from './quotes.js';

// We select the parent container in which we will create the div that will receive the content
const textContainer = document.querySelector('#container');

// Console.log details of all quotes to see that we get the right values
/* Object.entries(quotes).forEach(([key, value]) => console.log(value)); */


// Display it inside one div
Object.entries(quotes).forEach(([key, value]) => {

    // We create a div in the DOM
    var newDiv = document.createElement('div');

    // We add a class 'text' to it
    newDiv.classList.add('text');

    // Target the iconClass of the icon to like the quote -> we target our value otherwise we won't display it
    const iconClass = value.isFavorite ? "fa-solid" : "fa-regular" ;

    // Then assign the created div to the DOM container
    textContainer.appendChild(newDiv);
    
    // We add the content from the value inside the div
    newDiv.innerHTML = `
    <h2 class="title">${value.title}</h2>
    <p class="content">"${value.content}"</p>
    <p class="author">${value.author}</p>
    <button class="favorite-btn"><i class="${iconClass} fa-heart"></i></button>
    `;

    // Favorite button animation on click

        // First we select the button
    const favoriteBtn = newDiv.querySelector('.fa-heart');
    
        // We add an event listener on the button when clicked
    favoriteBtn.addEventListener('click', () => {

        // First we make the toggle of the iconClass happen by diffencing when the value is true then becoming false and vice versa
        value.isFavorite = !value.isFavorite ;

        // Then we check if the value is false at first => then we have an empty heart with 'fa-regular'
        if (value.isFavorite) {
            favoriteBtn.classList.remove('fa-regular');
            favoriteBtn.classList.add('fa-solid');   
        } else { // And if the heart is whole at first, when we click it we empty it deleting the 'fa-solid'
            favoriteBtn.classList.add('fa-regular');
            favoriteBtn.classList.remove('fa-solid');
        }

    });
})





/*     // Toggle de l'état favori
    value.isFavorite = !value.isFavorite;

    // Mise à jour de la classe de l'icône
    if (value.isFavorite) {
        likeBtn.classList.remove('fa-regular');
        likeBtn.classList.add('fa-solid');
    } else {
        likeBtn.classList.add('fa-regular');
        likeBtn.classList.remove('fa-solid');
    } */