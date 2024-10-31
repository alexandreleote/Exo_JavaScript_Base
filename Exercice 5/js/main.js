import quotes from './quotes.js';

// We select the parent container in which we will create the div that will receive the content
const textContainer = document.querySelector('#container');

// We load the status of the icon if liked or not that we store in an arry to sort them out
let favoriteStatus = JSON.parse(localStorage.getItem('favoriteStatus') || "[]");

// Console.log details of all quotes to see that we get the right values
/* quotes.forEach((quote) => console.log(quote)); */

// We creat a reset all button for the like
textContainer.innerHTML = `
<button id="clear-btn">Clear all likes</button>
`

// Then add an event listener on click to make the button work
const clearBtn = textContainer.querySelector('#clear-btn');

clearBtn.addEventListener('click', () => {
    // We clear the localStorage
    localStorage.clear();

    // Empty the array in which we saved our likes
    favoriteStatus = [];

    // Target all the hearts on the page on which we remove the like aspect to give back the default aspect
    document.querySelectorAll('.fa-heart').forEach( iconClass => {
        iconClass.classList.remove('fa-solid');
        iconClass.classList.add('fa-regular');
    });
});

// Display each one of the quotes in a separate div inside the container
quotes.forEach((quote) => {

    // We create a div in the DOM
    var newDiv = document.createElement('div');

    // We add a class 'text' to it
    newDiv.classList.add('text');

    // Target the iconClass of the icon to like the quote -> we target our value so we can display it
    let isFavorite = favoriteStatus.includes(quote.id);
    let iconClass = isFavorite ? "fa-solid" : "fa-regular" ;

    // Then assign the created div to the DOM container
    textContainer.appendChild(newDiv);
    
    // We add the content from the value inside the div
    newDiv.innerHTML = `
    <h2 class="title">${quote.title}</h2>
    <p class="content">"${quote.content}"</p>
    <p class="author">${quote.author}</p>
    <button class="favorite-btn"><i class="${iconClass} fa-heart"></i></button>
    `;

    // Favorite button animation on click
        // First we select the button
    const favoriteBtn = newDiv.querySelector('.fa-heart');
    
        // We add an event listener on the button when clicked
    favoriteBtn.addEventListener('click', () => {
        checkStatus(quote.id); // We specify the function to check the status of the id related to each quote
    });
    
    // Our function checking if the button has already been clicked thus expressing the like on the quote
    function checkStatus(id) { // We specify that the id here helps us to toggle the like button
    
        if (favoriteStatus.includes(id)) {
            // If the the quote is liked then we want to empty the heart icon in order to unlike the quote by removing 'fa-solid'
            favoriteStatus = favoriteStatus.filter(id => id != quote.id);
            favoriteBtn.classList.add('fa-regular'); 
            favoriteBtn.classList.remove('fa-solid');
            
        } else { // And if the heart is empty at first, when we click it we make it plain by removing the 'fa-regular'
            favoriteBtn.classList.remove('fa-regular'); 
            favoriteBtn.classList.add('fa-solid'); 
            favoriteStatus.push(quote.id);
        }
            
        // We store in the localStorage the status of the button
        localStorage.setItem('favoriteStatus', JSON.stringify(favoriteStatus));
    };
});