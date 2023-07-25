import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_VIDEO_BY_KEYWORD_API } from "../utils/Constant";
import Shimmer from "./Shimmer";


const Results = () => {
  const [searchParams] = useSearchParams();
  const search_query = searchParams.get("search_query");
  const [videos, setVideos] = useState([]);

  const getByKeyWord = async (query) => {
    const data = await fetch(SEARCH_VIDEO_BY_KEYWORD_API + query);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items[0]
        );
  };

  useEffect(() => {
    getByKeyWord(search_query);
  }, []);

  return (
    
    videos.length==0?<Shimmer/>:
    //video.snippet.thumbnails.medium.url

            <div>
                <div className="flex flex-wrap">
                    <ul>
                        {
                            videos.map((video)=>{
                                return(
                                    <Link to={"/watchlive?v="+video.id.videoId} >
                                    <li>
                                        <div className="flex p-5 ">
                                            <div>
                                                <img className="rounded-lg" src={video.snippet.thumbnails.medium.url}/>
                                            </div>
                                            <div className="pl-4">
                                            <h1 className="font-semibold">{video.snippet.title}</h1> 
                                            <h1>{video.snippet.channelTitle
}</h1>
                                            <h1>{video.snippet.publishTime}</h1>
                                            </div>
                                            
                                        </div>
                                    </li>
                                    </Link>
                    
                                )
                            })
                        }
                    
                    </ul>
               
                </div>
                
       
            </div>
        
        )
    
  

    

   

    
   
//   );
};

export default Results;
