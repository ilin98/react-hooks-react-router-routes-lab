import React from "react";
import { directors } from "../data";

function Directors() {
  const directorList = directors.map(director => {
    const movieList = director.movies.map(movie => <li>{movie}</li>)
    return (
      <div>
        <h2>Name: {director.name}</h2>
        <p>Movies:</p>
        <ul>
          {movieList}
        </ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Directors Page</h1>
    {directorList}
  </div>
  )
}

export default Directors;
