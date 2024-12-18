class Book {
  constructor( title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN  = ISBN;
    this.numCopies = numCopies;
  }
  get availability() {
    return this.getAvailability()
  }
  getAvailability() {
    if(this.numCopies <= 0){
      return "Out of stock"
    } else if (this.numCopies < 10 ){
      return `Low in stock (${this.numCopies} remaining)`
    } 
    return `In stock (${this.numCopies} remaining)`
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  restock(numCopiesStocked=5){
    this.numCopies += numCopiesStocked;
  }
}

 




// Book.prototype.getAvailability = function() {

//   if(this.numCopies <= 0){
//     return "Out of stock"
//   } else if (this.numCopies < 10 ){
//      return "Low in stock"
//   } 
//   return "In stock"
// }

// Book.prototype.sell = function(numCopiesSold = 1) {
//   this.numCopies -= numCopiesSold;
// }

// Book.prototype.restock = function(numCopiesStocked=5){
//   this.numCopies += numCopiesStocked;
// }

const book1 = new Book("Anne of Green Gables","Lucy Maud Montgomery","ISBN123456",12);
const book2 = new Book("Road to Avonlea","Lucy Maud Montgomery","ISBN224477",1);
/*
console.log(book1);
console.log(book1.title);
console.log(book1.numCopies);
console.log(`${book1.title} is now ${Book.prototype.getAvailablility(book1)}`)

console.log("  -----  -----  -----  ----  ")

console.log(book2);
console.log(book2.title);
console.log(book2.numCopies);
console.log(`${book2.title} is now ${Book.prototype.getAvailablility(book2)}`)

console.log("--%%&& actions performed **36^))_)*_8\n")
book1.sell(2);
book1.restock(100);
console.log(`${book1.title} is now ${book1.getAvailablility()}`)
console.log(book1.numCopies);

book2.sell(11);
// restock(book1, 100);
console.log(`${book2.title} is now ${book2.getAvailablility()}`)
console.log(book2.numCopies);
*/
book2.sell();
book1.restock(111);
book2.restock();
console.log(`${book1.title}: ${book1.availability}`)
console.log(`${book2.title}: ${book2.availability}`)
