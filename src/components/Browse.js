import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchMoviesData from "../hooks/useFetchMoviesData";
import useFetchTvSeries from "../hooks/useFetchTvSeries";

const Browse = () => {
  useFetchMoviesData();
  useFetchTvSeries();
  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
