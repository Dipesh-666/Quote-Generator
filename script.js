const newQuote = document.getElementById('new-quote')
const quoteContainer = document.getElementById('quote-container')
const authorName = document.getElementById('author')
const quoteText = document.getElementById('text')
const loader = document.getElementById('loader')
fetchQuotes();
function loading()
{
    loader.hidden = false;
    quoteContainer.hidden = true;
}
function complete()
{
    loader.hidden = true;
    quoteContainer.hidden = false;
}
function tweetQuote()
{
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text.textContent} -${author.textContent}`;
    window.open(twitterUrl,'_blank');
}
async function fetchQuotes()
{
    loading();
    try{
        const response = await fetch("https://thequoteshub.com/api/");
        if(!response.ok){
            throw new Error("could not fetch from API.");

        }
        const data = await response.json();
        
        authorName.textContent = data.author;
        quoteText.textContent = data.text;
        complete();

    }
    catch(error)
    {
        console.error(error);
    }
    
       
}

newQuote.addEventListener('click', fetchQuotes);
tweet.addEventListener('click', tweetQuote);