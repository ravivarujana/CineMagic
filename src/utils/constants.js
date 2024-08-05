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

export const MOVIE_LIST_API = {
  NOW_PLAYING:
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
};
