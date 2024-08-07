import React from "react";
import { IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-56 p-4 ">
      <img
        className="cursor-pointer hover:p-4 transition-all"        alt="Movie Card"
        src={`${IMAGE_URL}${posterPath}`}
      />
    </div>
  );
};

export default MovieCard;
