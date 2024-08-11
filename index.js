let person = {
  name: "katniss",
  age: 17,
  city: "district 12",
};

person.email = "katniss25@gmail.com";

function hasKey(object, key) {
  if (object[key]) {
    return true;
  } else {
    return false;
  }
}

console.log(hasKey(person, "name"));

//q4

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];

let movieTitle = movies.filter((movie) => {
  return movie.title;
});

console.log(movieTitle);

let movie1994 = 0;

movies.forEach((movie) => {
  if (movie.year === 1994) {
    movie1994 = movie1994 + 1;
  }
});

console.log(movie1994);

function theDarkNight() {
  movies[3].genre = "Action/Drama";
  console.log(movies);
}

theDarkNight();

//challenge

let movieGenre = {};

function groupMoviesByGenre(arrOfMovie) {
  arrOfMovie.filter((movie) => {
    if (movie.genre == "Drama") {
      movieGenre.drama = [];
    } else if (movie.genre == "Crime") {
      movieGenre.crime = [];
    } else if (movie.genre == "Action") {
      movieGenre.action = [];
    }
  });
}
groupMoviesByGenre(movies);
console.log(movieGenre);
