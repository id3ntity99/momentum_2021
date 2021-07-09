const quotes = [
  {
    quotes:
      "Together we can change the world, just one random act of kindness at a time.",
    author: "Ron Hall",
  },
  {
    quotes:
      "We can all fight against loneliness by engaging in random acts of kindness.",
    author: "Gail Honeyman",
  },
  {
    quotes:
      "Beware of missing chances; otherwise it may be altogether too late some day.",
    author: "Franz Liszt",
  },
  {
    quotes:
      "Beware of missing chances; otherwise it may be altogether too late some day.",
    author: "Franz Liszt",
  },
  {
    quotes:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quotes:
      "Truth is like the sun. You can shut it out for a time, but it ain't goin' away.",
    author: "Elvis Presley",
  },
  {
    quotes: "Time and tide wait for no man.",
    author: "Geoffrey Chaucer",
  },
  {
    quotes:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quotes:
      "Logic will get you from A to B. Imagination will take you everywhere.",
    author: "Albert Einstein",
  },
  {
    quotes:
      "You will never do anything in this world without courage. It is the greatest quality of the mind next to honor.",
    author: "Aristotle",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = `-${todaysQuote.author}-`;
