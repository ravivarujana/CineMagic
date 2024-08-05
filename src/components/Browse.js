import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovie";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="">
      <Header />
    </div>
  );
};

export default Browse;
