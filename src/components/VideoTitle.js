import { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [string, setString] = useState(false);

  return (
    <div className="px-24 space-y-4  w-screen  aspect-video   absolute text-white bg-gradient-to-tr from-black flex flex-col justify-center">
      <h1 className="text-4xl  font-bold">{title}</h1>
      <p className="w-4/12">
        {!string ? overview.slice(1, 150) + "..." : overview}
        <button
          className="text-emerald-500 hover:text-red-500 "
          onClick={() => {
            setString(!string);
          }}
        >
          {string ? 'Show Less' : 'More'}
        </button>
      </p>
      <div className="">
        <button className="bg-white py-3 px-10 text-black font-medium rounded hover:bg-opacity-90">
          {`>`} Play
        </button>
        <button className="bg-gray-500 py-3 px-10 font-medium rounded ml-4 hover:bg-opacity-95">
          ! More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
