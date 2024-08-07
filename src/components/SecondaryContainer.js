import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesData = useSelector((store) => store.movies);
  const tvSeriesData = useSelector((store) => store.tvSeries);
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList title={"Now Playing"} data={moviesData.nowPlaying} />
        <MovieList title={"Popular"} data={moviesData.popular} />
        <MovieList title={"Upcoming Movies"} data={moviesData.upcomingMovies} />
        <MovieList title={"Top Rated"} data={moviesData.topRated} />
        <MovieList title={"Airing Today"} data={tvSeriesData.airingToday} />
        <MovieList title={"On The Air"} data={tvSeriesData.onTheAir} />
        <MovieList title={"Popular TV Series"} data={tvSeriesData.popular} />
        <MovieList title={"Top Rated TV Series"} data={tvSeriesData.topRated} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
