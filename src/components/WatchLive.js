import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/AppSlice";
import {
  YOUTUBE_LIVE_COMMENT,
  YOUTUBE_LIVE_DETAILS,
  initalData,
} from "../utils/Constant";

const WatchLive = () => {
  const [liveDetails, SetLiveDetails] = useState(initalData);
  const [searchParams] = useSearchParams();
  const videoID = searchParams.get("v");

  const [livecomments, SetLiveComments] = useState("");

  const getStreamingDetails = async () => {
    const data = await fetch(YOUTUBE_LIVE_DETAILS + videoID);
    const json = await data.json();

    SetLiveDetails(json.items[0]);
  };

  const getLiveComments = async () => {
    const data = await fetch(
      YOUTUBE_LIVE_COMMENT + "Cg0KC0wwUmt0U0lNOTgwKicKGFVDdW10WXBDWTI2RjZKcjNzYXRVZ012QRILTDBSa3RTSU05ODA"
    );
    const json = await data.json();
    SetLiveComments(json.items);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getStreamingDetails();
    getLiveComments();
  }, []);

  

  console.log(livecomments)

  return (
    <div className="p-3 m-3 w-[560px] h-[560px]">
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + videoID}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h1 className=" font-bold">{liveDetails.snippet.title}</h1>
 
      <div>
        
      </div>
    </div>
  );
};

export default WatchLive;
