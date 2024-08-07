export const FORM_TYPE = {
  SIGNIN: "signin",
  SIGNUP: "signup",
};

export const ERROR_CODES = {
  VALID_EMAIL: "Enter valid email",
  VALID_PASSWORD: "Enter valid password",
  FULLNAME: "Enter a full name",
  VALID_FULLNAME: "Enter valid full name",
  INVALID_CREDENTIALS: "Invalid Credentials",
};

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDBjMzRlNmIxNzNmMzgwZGUxMDBiZTZlYjRjYTUwZiIsIm5iZiI6MTcyMjg1MDQ2Ni40NTI5ODksInN1YiI6IjY2YjA5NmVkODRhMThlOGIyZjIxZmMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ggr8hDwi-phipNOSViSpfWxK51T4PCcHvDg9arGAuuE",
  },
};

export const IMAGE_URL = "https://image.tmdb.org/t/p/w300/";

export const MOVIE_TV_LIST_API = {
  MOVIE_LIST: "https://api.themoviedb.org/3/movie/now_playing?page=1",
  TV_LIST: "https://api.themoviedb.org/3/tv/now_playing?page=1",
};

const MOVIE_TYPE = {
  UPCOMING: "upcoming",
  NOW_PLAYING: "now_playing",
};

const TV_SERIES_TYPE = {
  AIRING_TODAY: "airing_today",
  ON_THE_AIR: "on_the_air",
};
export const MOVIE_TV_LIST_TYPE = {
  COMMON: {
    POPULAR: "popular",
    TOP_RATED: "top_rated",
  },
  MOVIE_TYPE,
  TV_SERIES_TYPE,
};
