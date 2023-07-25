import React, { useEffect, useState } from "react";
import { SEARCH_VIDEO_BY_KEYWORD_API, YOUTUBE_VIDEO_API } from "../utils/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoConatiner = () => {


  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  
  // const searchQuery = useSelector((store) => store.query.queryValue);
 

  // const getByKeyWord = async(query) =>{
  //   const data = await fetch(SEARCH_VIDEO_BY_KEYWORD_API+query)
  //   const json = await data.json();
  //   setVideos(json.items)
  //   console.log(json.items)
  // }
  
  // useEffect(() => {
  //   getByKeyWord(searchQuery)
  // }, [searchQuery]);


 console.log(videos)
  return (
    <div className="flex  flex-wrap">

      
      {videos.map((video) => {
        return (
          <Link to={"/watchlive?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoConatiner;
