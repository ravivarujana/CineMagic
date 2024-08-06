import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const movieTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const jsonData = await response.json();

    const filteredData = jsonData.results.filter(
      (data) => data.type === "Trailer"
    );

    //if by any chance trailer data is not present
    const trailer = filteredData.length ? filteredData[1] : jsonData[1];

    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    movieTrailer();
  }, []);
};

export default useMovieTrailer;
