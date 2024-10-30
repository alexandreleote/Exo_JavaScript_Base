import quotes from './quotes.js';

// We select the parent container in which we will create the div that will receive the content
const textContainer = document.querySelector('#container');

// Console.log details
Object.entries(quotes).forEach(([key, value]) => console.log(value));


// Display it inside one div
Object.entries(quotes).forEach(([key, value]) => {

    // We create a div in the DOM
    var newDiv = document.createElement('div');

    // We add a class 'text' to it
    newDiv.classList.add('text');

    // Then assign the created div to the DOM container
    textContainer.appendChild(newDiv);
    
    // We add the content from the value inside the div
    newDiv.innerHTML = `
    <h2 class="title">${value.title}</h2>
    <p class="content">"${value.content}"</p>
    <p class="author">${value.author}</p>
    `
})
