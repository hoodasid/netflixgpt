import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6">
      <div>
        <h1 className="text-4xl py-6 text-white">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll">
      {Array.isArray(movies) && movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))
      ) : (
        <p>No movies available</p>
      )}
      </div>
    </div>
  );
};

export default MovieList;
