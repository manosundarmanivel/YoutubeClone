import React, { useEffect, useState } from "react";
import { RELATED_VIDEOD_API } from "../utils/Constant";

import { Link } from "react-router-dom";
import SearchShimmer from "./SearchShimmer";

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
    relatedVideo.length == 0 ? <SearchShimmer/> :
<div className="p-2 w-[500px]">
    {
    relatedVideo.map((relatedVideo ,index)=>{
        return( 
       <Link to={"/watchlive?v=" + relatedVideo.id.videoId} >
        <div key={index} className="p-2 flex flex">
          <img className="w-[200px] m-3 rounded-lg" src={relatedVideo.snippet.thumbnails.medium.url} />
          <div className="p-3">
            <h1 className="font-semibold text-white">{relatedVideo.snippet.title}</h1>
            <h4 className="text-white">{relatedVideo.snippet.channelTitle}</h4>
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
