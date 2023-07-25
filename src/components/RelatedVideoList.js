import React, { useEffect, useState } from "react";
import { RELATED_VIDEOD_API } from "../utils/Constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const RelatedVideoList = ({ videoId }) => {
  const [relatedVideo, SetRelatedVideo] = useState([]);

  const getRelatedVideo = async () => {
    const data = await fetch(RELATED_VIDEOD_API + videoId);
    const json = await data.json();
    SetRelatedVideo(json.items);
  };

  useEffect(() => {
    getRelatedVideo();
  }, [videoId]);



  return (
    relatedVideo.length == 0 ? <Shimmer/> :
<div className="p-2 w-[500px]">
    {
    relatedVideo.map((relatedVideo)=>{
        return( 
       <Link to={"/watchlive?v=" + relatedVideo.id.videoId} >
        <div className="p-2 flex flex">
          <img className="w-[200px] m-3 rounded-lg" src={relatedVideo.snippet.thumbnails.medium.url} />
          <div className="p-3">
            <h1 className="font-semibold">{relatedVideo.snippet.title}</h1>
            <h4>{relatedVideo.snippet.channelTitle}</h4>
            <div>
              <h4></h4>
            </div>
          </div>
        </div>
       </Link>
       
      )
    })
}
    </div>

   
  );
};

export default RelatedVideoList;
