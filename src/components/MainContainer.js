import React, { useEffect, useState } from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  // const [randomIndex, setRandomIndex] = useState(null);
  const movieData = useSelector((store) => store.movies?.nowPlaying);

  // useEffect(() => {
  //   if (movieData && movieData.length > 0) {
  //     const randomIndex = Math.floor(Math.random() * 20);
  //     setRandomIndex(randomIndex);
  //   }
  // }, [movieData]);

  // if (!movieData || randomIndex === null) return;
  if (!movieData) return;
  const randomMovieTrailer = movieData[0];
  const { overview, original_title, id } = randomMovieTrailer;
  return (
    <div className="overflow-hidden">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
