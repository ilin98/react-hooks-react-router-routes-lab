import React from "react";
import { actors } from "../data";

function Actors() {
  const actorList = actors.map((actor, index) => {
    const movieList = actor.movies.map((movie) => <li>{movie}</li>)
    return (
      <div key={index}>
        <h2>Name: {actor.name}</h2>
        <p>Movies:</p>
        <ul>
          {movieList}
        </ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Actors Page</h1>
    {actorList}
  </div>
  )
}

export default Actors;
