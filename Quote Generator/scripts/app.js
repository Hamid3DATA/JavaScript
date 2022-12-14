var quoteList = [
    "Don’t let yesterday take up too much of today.",
    "Every man dies. Not every man lives.",
    "Life shrinks or expands in proportion to one’s courage.",
    "Nothing is impossible. The word itself says “I’m possible!",
    "We need much less than we think we need.",
    "If things go wrong, don’t go with them.",
    "Everything has beauty, but not everyone sees it.",
    "Simplicity is the ultimate sophistication.",
    "Be yourself; everyone else is already taken.",
    "The only real mistake is the one from which we learn nothing.",
    "Creativity is intelligence having fun."
]

var quoteAuthor = [
    "Will Rogers",
    "William Wallace",
    "Anais Nin",
    "Audrey Hepburn",
    "Maya Angelou",
    "Roger Babson",
    "Confucius",
    "Leonardo da Vinci",
    "Oscar Wilde",
    "Henry Ford",
    "Albert Einstein"
]

var links = [
    "https://en.wikipedia.org/wiki/Will_Rogers",
    "https://en.wikipedia.org/wiki/William_Wallace",
    "https://en.wikipedia.org/wiki/Ana%C3%AFs_Nin",
    "https://en.wikipedia.org/wiki/Audrey_Hepburn",
    "https://en.wikipedia.org/wiki/Maya_Angelou",
    "https://en.wikipedia.org/wiki/Roger_Babson",
    "https://en.wikipedia.org/wiki/Confucius",
    "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
    "https://en.wikipedia.org/wiki/Oscar_Wilde",
    "https://en.wikipedia.org/wiki/Henry_Ford",
    "https://en.wikipedia.org/wiki/Albert_Einstein"
]

function generateQuote() {
    var randomQuote = quoteList[Math.floor(Math.random()*quoteList.length)]
    var quotesAuthor = quoteAuthor[quoteList.indexOf(randomQuote)]
    var link = links[quoteList.indexOf(randomQuote)]

    document.getElementById("quote").innerHTML = randomQuote
    document.getElementById("quote_author").innerHTML = quotesAuthor
    document.getElementById("quote_author").setAttribute("href", link)
}

document.getElementById("quote").innerHTML = quoteList[0]
document.getElementById("quote_author").innerHTML = quoteAuthor[0]
document.getElementById("quote_author").setAttribute("href", links[0])