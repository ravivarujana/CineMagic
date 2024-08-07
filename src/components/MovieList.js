import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, data }) => {
  if (!data) return;

  return (
    <div className="px-2 ">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {data.map((card) => (
            <MovieCard key={card.id} posterPath={card.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
