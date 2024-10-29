import quotes from './quotes.js';

const quoteText = document.querySelector('.text');

// Console.log details
Object.entries(quotes).forEach(([key, value]) => console.log(value));


// Display it inside one div
Object.entries(quotes).forEach(([key, value]) => {
    quoteText.textContent += value.title + " ";
    quoteText.textContent += value.content + " ";
    quoteText.textContent += value.author;
    
    for (i = 0 ; i <= quotes.id.length ; i++) {
        
    }
})
