class Movie {
    constructor( title, director, genre, releaseYear, rating ) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }
    get overview() {
      return this.getOverview()
    }
    getOverview() {
      return `
      ${this.title}, a ${this.genre} film directed by ${this.director} was
       released in ${this.releaseYear}. It received a rating of ${this.rating} Stars.
      `
    } 
}

const Spiderman = new Movie("SpiderMan","Sam Raimi","Action","2002",5);
const Batman = new Movie("Batman","Christopher Nolam","Action","2008",4);
console.log(`${Spiderman.overview}`);
console.log(`${Batman.overview}`);