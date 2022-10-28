import booksList from './list.json' assert {type: 'json'};

const book = {
  image: document.querySelector('.container__image img'),
  title: document.querySelector('.texts__title'),
  subtitle: document.querySelector('.texts__subtitle'),
  author: document.querySelector('.author'),
  length: document.querySelector('.length'),
  date: document.querySelector('.date'),
  amazon_link: document.querySelector('.amazon_link'),
  synopsis: document.querySelector('.synopsis'), 
}

function setRandomNumber(list) {
  const randomBook = Math.floor(Math.random() * list.books.length);

  book.image.setAttribute("src", list.books[randomBook].img);

  book.title.innerText = list.books[randomBook].name;
  book.subtitle.innerText = list.books[randomBook].subtitle;

  book.author.innerText = list.books[randomBook].author;
  book.length.innerText = list.books[randomBook].length;

  book.date.innerText = list.books[randomBook].date;

  book.amazon_link.innerText = list.books[randomBook].amazon_link;
  book.synopsis.innerText = list.books[randomBook].synopsis;
}

setRandomNumber(booksList);