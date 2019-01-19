console.log('connected!');
const quoteSpan = document.querySelector('#text');
const authorSpan = document.querySelector('.author');
const btn = document.querySelector('.btn');
const h1 = document.createElement('h1');
const h3 = document.createElement('h3');
const endpoint =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

async function fetchRandomQuotes() {
  let request = await fetch(endpoint);
  let response = request.json();
  return response;
}

function getRandomQuote() {
  return fetchRandomQuotes().then(({ quotes }) => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    return random;
  });
}
function addQuoteToDOM() {
  return getRandomQuote().then(({ quote, author }) => {
    h1.textContent = quote;
    h3.textContent = `Author: ${author}`;
    quoteSpan.appendChild(h1);
    authorSpan.appendChild(h3);
  });
}
btn.addEventListener('click', addQuoteToDOM);
