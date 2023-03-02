import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map(movie => {
    const genreList = movie.genres.map(genre => <li>{genre}</li>)
    return (
    <div>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>
        {genreList}
      </ul>
    </div>
    )
  })

  return (
  <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>
  )
}

export default Movies;
