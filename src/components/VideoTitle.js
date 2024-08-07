import { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [string, setString] = useState(false);

  return (
    <div className=" space-y-4 pl-24 w-full aspect-video absolute text-white bg-gradient-to-tr from-black flex flex-col justify-center">
      <h1 className="text-4xl  font-bold">{title}</h1>
      <p className="w-4/12">
        {!string ? overview.slice(1, 150) + "..." : overview}
        <button
          className="text-emerald-500 hover:text-red-500 "
          onClick={() => {
            setString(!string);
          }}
        >
          {string ? "Show Less" : "More"}
        </button>
      </p>
      <div className="flex">
        <button className="bg-white py-4 px-8 text-black font-medium rounded hover:bg-opacity-90">
          <img
            className="h-5 inline-block"
            src={`${process.env.PUBLIC_URL}/play.png`}
          />{" "}
          Play
        </button>
        <button className="bg-gray-500 py-4 px-4 font-medium rounded ml-4 flex items-center hover:bg-opacity-95">
          <span className="bg-white text-black w-8 h-8 flex font-bold items-center justify-center rounded-full  mr-2">
            i
          </span>
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
