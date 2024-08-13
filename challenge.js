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

let movieGenre = {};

groupMoviesByGenre = (list) => {
  list.forEach((movie) => {
    if (movieGenre[movie.genre]) {
      movieGenre[movie.genre].push(movie.title);
    } else {
      movieGenre[movie.genre] = [movie.title];
    }
  });
};

groupMoviesByGenre(movies);
console.log(movieGenre);
