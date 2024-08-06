import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/movieSlice";

const useFetchMoviesData = () => {
  const dispatch = useDispatch();

  const getMoviesList = async () => {
    const urls = [
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      "https://api.themoviedb.org/3/movie/popular?page=1",
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
    ];

    try {
      const responses = await Promise.all(
        urls.map((url) =>
          fetch(url, API_OPTIONS).then((response) => response.json())
        )
      );

      const [nowPlaying, popular, topRated, upcoming] = responses;

      dispatch(addNowPlayingMovies(nowPlaying.results));
      dispatch(addPopularMovies(popular.results));
      dispatch(addTopRatedMovies(topRated.results));
      dispatch(addUpcomingMovies(upcoming.results));
    } catch (err) {
      console.error("Failed to fetch movies data:", err);
    }
  };

  useEffect(() => {
    getMoviesList();
  }, []);
};

export default useFetchMoviesData;
