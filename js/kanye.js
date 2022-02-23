const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(rest => rest.json())
    .then(data => displayQuote(data));
}

function displayQuote(data){
    const quoteContainer = document.getElementById('quote');
    quoteContainer.innerText = `"${data.quote}"`;
}