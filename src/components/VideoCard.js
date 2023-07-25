import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  return (
    <div className="p-2 m-1 max-w-sm rounded  shadow-lg">
      <img className="w-full" src={snippet.thumbnails.medium.url} />
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2 font-sans text-sm">{snippet.title}</h1>
        {/* <p className="text-gray-700 text-base">{statistics.viewCount} views </p> */}
      </div>
    </div>
  );
};

export default VideoCard;
