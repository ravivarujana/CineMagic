import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerData = useSelector((store) => store.movies?.movieTrailer);

  return (
    <div className="">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${trailerData?.key}?autoplay=1&mute=1&modestbranding=1&showinfo=0&controls=0&rel=0`}
        title="Deadpool &amp; Wolverine | Final Trailer | In Theaters July 26"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        // referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
