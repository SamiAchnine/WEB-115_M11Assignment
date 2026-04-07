class Movie {

  constructor(title, cast, description, rating) {
    this.title = title;
    this.cast = cast;
    this.description = description;
    this.rating = rating;
  }
  

  updateRating(newRating) {
    this.rating = newRating;
  }

  displayInfo() {
    let output = document.getElementById("movie-info");
    // doesnt have spaces normally, this is expected in the assignment for the output so i added this for loop
    let castCleaned = "";
    for (let i = 0; i < this.cast.length; i++) {
      castCleaned += this.cast[i] + ", ";
    }

    console.log(castCleaned);
    output.innerHTML = "Title: " + this.title + "<br>" + "Cast: " + castCleaned + "<br>" + "Description: " + this.description + "<br>" + "Rating: " + this.rating;
  }
};

let movie1 = new Movie("The Shawshank Redemption", ["Tim Robbins", "Morgan Freeman"], "Two imprisoned men bond over a number of years, finding eventual redemption through acts of common decency.", 9.3);
let movie2 = new Movie("Sonic the Hedgehog 3", ["Ben Schwartz", "Jim Carrey", "Colleen O'Shaughnessey", "Idris Elba", "Keanu Reeves"], "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched, Team Sonic must seek out an unlikely alliance.", 4.6);

let movies = [movie1, movie2];

function updateMovieRanking(title, newRanking) {
  for (let i = 0; i < movies.length; i++) {
    if (title == movies[i].title) {
      console.log("i cant stop winning!");
      movies[i].updateRating(newRanking);
      movies[i].displayInfo();
    }
    else {
      console.log("aw dang it");
    } 
  }
}

updateMovieRanking("Sonic the Hedgehog 3", 6.9);