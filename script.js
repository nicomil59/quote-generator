const body = document.querySelector('body');
const api = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';
const loader = `<div class="loader"></div>`;

const formatQuote = data => {
    const { quoteText, quoteAuthor } = data.quote;
    const html = `<div class="quote__container">
    <div class="quote__content">
        <p class="quote__text"><i class="fas fa-quote-left"></i> ${quoteText}</p>
        <p class="quote__author">${quoteAuthor}</p>
    </div>
    <div class="quote__buttons">
        <a href="https://twitter.com/intent/tweet?text=${quoteText} - ${quoteAuthor}" target="_blank" class="quote__button quote__button--twitter"><i class="fab fa-twitter"></i></a>
        <a class="quote__button quote__button--new-quote">New Quote</a>
    </div>
</div>`;
    return html;
}

// const showQuote = () => {
//     body.innerHTML = loader;
//     fetch(api)
//         .then(response => response.json())
//         .then(data => {
//             body.innerHTML = formatQuote(data);
//             const newQuoteButton = document.querySelector('.quote__button--new-quote');
//             const tweetButton = document.querySelector('.quote__button--twitter');
//             newQuoteButton.addEventListener('click', showQuote);
//         })
//         .catch(err => console.log(err))
// }

const showQuote = async () => {
    body.innerHTML = loader;
    try {
        const resp = await fetch(api);
        const data = await resp.json();
        body.innerHTML = formatQuote(data);
        const newQuoteButton = document.querySelector('.quote__button--new-quote');
        const tweetButton = document.querySelector('.quote__button--twitter');
        newQuoteButton.addEventListener('click', showQuote);
    } catch (error) {
        console.log("ooops !", error)
    }
}

showQuote();
