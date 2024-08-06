import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {
  addAiringToday,
  addOnTheAir,
  addPopular,
  addTopRated,
} from "../utils/tvSeriesSlice";

const useFetchTvSeries = () => {
  const dispatch = useDispatch();

  const getMoviesList = async () => {
    const urls = [
      "https://api.themoviedb.org/3/tv/airing_today?page=1",
      "https://api.themoviedb.org/3/tv/on_the_air?page=1",
      "https://api.themoviedb.org/3/tv/popular?page=1",
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
    ];

    try {
      const responses = await Promise.all(
        urls.map((url) =>
          fetch(url, API_OPTIONS).then((response) => response.json())
        )
      );

      const [airingToday, onTheAir, popular, topRated] = responses;

      dispatch(addAiringToday(airingToday.results));
      dispatch(addOnTheAir(onTheAir.results));
      dispatch(addPopular(popular.results));
      dispatch(addTopRated(topRated.results));
    } catch (err) {
      console.error("Failed to fetch movies data:", err);
    }
  };

  useEffect(() => {
    getMoviesList();
  }, []);
};

export default useFetchTvSeries;
