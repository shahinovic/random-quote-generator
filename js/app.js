// main application variables

var quote = document.getElementById("quote");
var author = document.getElementById("author");
var newQuote = document.getElementById("new-quote");
var copy = document.getElementById("copy");

// quotes array

var quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
];

var previousNumber = null;

function getRandomNumber(max) {
  var randomNumber = Math.floor(Math.random() * (max + 1));

  while (randomNumber === previousNumber) {
    randomNumber = Math.floor(Math.random() * (max + 1));
  }

  previousNumber = randomNumber;
  return randomNumber;
}

function getQuote() {
  var randomNumber = getRandomNumber(quotes.length - 1);
  quote.innerHTML = quotes[randomNumber].quote;
  author.innerHTML = quotes[randomNumber].author;
}

function copyQuote() {
  if (quote && author) {
    var text = quote.textContent || quote.innerText;
    var authorText = author.textContent || author.innerText;

    var quoteText =
      text + " - " + authorText + "- copy from " + window.location.href;

    navigator.clipboard
      .writeText(quoteText)
      .then(() => {
        console.log("Text successfully copied to clipboard");
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard", err);
      });
  } else {
    console.error("Quote element not found");
  }
}

window.onload = getQuote;

newQuote.addEventListener("click", getQuote);
copy.addEventListener("click", copyQuote);
