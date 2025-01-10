import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[10%] px-12 absolute w-screen aspect-video place-items-baseline align-bottom bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/3 text-white">{overview}</p>
      <div>
        <button className="bg-white p-4 px-10 text-lg rounded-lg"> ▶ play</button>
        <button className="bg-white p-4 px-10 mx-6 text-lg rounded-lg">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
