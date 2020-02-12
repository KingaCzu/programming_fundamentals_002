// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  return catalogue.length;
  //return total number of books
}

function checkBook(bookTitle){
for(let i = 0; i < catalogue.length; i++) {
  const book = catalogue[i];
  console.log(book);
  if (book === bookTitle) {
    return true;
  }
}
return false;
}


function countBooksByFirstLetter(letter) {
  let count = 0;
  for(let i =0; i < catalogue.length; i++ ) {
    // when viewing each book
    // check the title 
  if (catalogue[i][0] === letter)
  {
      // add one to the number of books by the given title 
      count++;
    }
  }
  // until we reach end
  // return the number of books by the given title
  return count;
}


function countBooksByKeyword(keyword) {
  // check all titles for a given keyword
let count = 0
for(let i =0; i < catalogue.length; i++ ){
if (catalogue.contains === keyword);
  //return a count (Number) of how many book titles match a given keyword
  return count;
  }
}

function getBooksByAuthor(author) {
  // Your code here
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};