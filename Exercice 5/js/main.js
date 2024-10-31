import quotes from './quotes.js';

// We select the parent container in which we will create the div that will receive the content
const textContainer = document.querySelector('#container');

// We load the status of the icon if liked or not that we store in an arry to sort them out
let favoriteStatus = JSON.parse(localStorage.getItem('favoriteStatus') || "[]");

// Console.log details of all quotes to see that we get the right values
/* Object.entries(quotes).forEach(([key, value]) => console.log(value)); */

// We creat a reset all button for the like
textContainer.innerHTML = `
<button id="clear-btn">Clear all likes</button>
`

// Then add an event listener on click to make the button work
const clearBtn = textContainer.querySelector('#clear-btn');

clearBtn.addEventListener('click', () => {
    localStorage.clear();
})

// Display it inside one div
Object.entries(quotes).forEach(([key, value]) => {

    // We create a div in the DOM
    var newDiv = document.createElement('div');

    // We add a class 'text' to it
    newDiv.classList.add('text');

    // Target the iconClass of the icon to like the quote -> we target our value otherwise we won't display it
    let isFavorite = favoriteStatus.includes(value.id);
    let iconClass = isFavorite ? "fa-solid" : "fa-regular" ;

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
    favoriteBtn.addEventListener('click', (checkStatus));
    
    
    function checkStatus(id) {

        // Then we check if the value is false at first => then we have an empty heart with 'fa-regular'
        if (favoriteStatus.includes(value.id)) {
            // First we make the toggle of the iconClass happen by diffencing when the value is true then becoming false and vice versa
            favoriteStatus = favoriteStatus.filter(id => id != value.id);
            favoriteBtn.classList.remove('fa-regular');
            favoriteBtn.classList.add('fa-solid'); 
 
        } else { // And if the heart is whole at first, when we click it we empty it deleting the 'fa-solid'
            favoriteBtn.classList.add('fa-regular');
            favoriteBtn.classList.remove('fa-solid');
            favoriteStatus.push(value.id);
        }
        
        console.log(favoriteBtn);

        // We store in the localStorage the status of the button
        localStorage.setItem('favoriteStatus', JSON.stringify(favoriteStatus));
    };
    
});

