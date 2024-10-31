import quotes from './quotes.js';

// Targeting the container in which we create the divs needed
const textContainer = document.querySelector('#container');

// Loading the liked quotes from previous visit
let favoriteStatus = JSON.parse(localStorage.getItem('favoriteStatus') || "[]");

// Console.log details of all quotes to see that we get the right values
/* quotes.forEach((quote) => console.log(quote)); */

// Create a button to erase all the likes in a click
textContainer.innerHTML = `
<button id="clear-btn">Clear all likes</button>
`
// Targeting the button created so we can add a function to it
const clearBtn = textContainer.querySelector('#clear-btn');

clearBtn.addEventListener('click', () => { 

    localStorage.clear();

    favoriteStatus = [];

    document.querySelectorAll('.fa-heart').forEach( iconClass => {
        iconClass.classList.remove('fa-solid');
        iconClass.classList.add('fa-regular');
    });
});

// Browsing every object in the array to display them
quotes.forEach((quote) => {

    var newDiv = document.createElement('div');

    newDiv.classList.add('text');

    let isFavorite = favoriteStatus.includes(quote.id);
    let iconClass = isFavorite ? "fa-solid" : "fa-regular" ;

    // Adding them to the container to display them
    textContainer.appendChild(newDiv);

    newDiv.innerHTML = `
    <h2 class="title">${quote.title}</h2>
    <p class="content">"${quote.content}"</p>
    <p class="author">${quote.author}</p>
    <button class="favorite-btn"><i class="${iconClass} fa-heart"></i></button>
    `;

    const favoriteBtn = newDiv.querySelector('.fa-heart');

    favoriteBtn.addEventListener('click', () => {
        checkStatus(quote.id); 
    });

    // Checking the button's status
    function checkStatus(id) { 
    
        if (favoriteStatus.includes(id)) {
            favoriteStatus = favoriteStatus.filter(id => id != quote.id);
            favoriteBtn.classList.add('fa-regular'); 
            favoriteBtn.classList.remove('fa-solid');
            
        } else {
            favoriteBtn.classList.remove('fa-regular'); 
            favoriteBtn.classList.add('fa-solid'); 
            favoriteStatus.push(quote.id);
        }

        // Save the status of the button for the next visit
        localStorage.setItem('favoriteStatus', JSON.stringify(favoriteStatus));
    };
});