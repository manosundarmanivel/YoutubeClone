import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/AppSlice";
import {
  COMMENT_LIST_API,
  YOUTUBE_LIVE_COMMENT,
  YOUTUBE_LIVE_DETAILS,
  initalData,
} from "../utils/Constant";
import RelatedVideoList from "./RelatedVideoList";
import Comment from "./Comment";

const WatchLive = () => {
  const [liveDetails, SetLiveDetails] = useState(initalData);
  const [searchParams] = useSearchParams();
  const videoID = searchParams.get("v");

  const [livecomments, SetLiveComments] = useState("");
  const [commentsList , SetCommentsList] = useState([])

  const getStreamingDetails = async () => {
    const data = await fetch(YOUTUBE_LIVE_DETAILS + videoID);
    const json = await data.json();

    SetLiveDetails(json.items[0]);
  };

  // const getLiveComments = async () => {
  //   const data = await fetch(
  //     YOUTUBE_LIVE_COMMENT + liveDetails.liveStreamingDetails.activeLiveChatId
  //   );
  //   const json = await data.json();
  //   SetLiveComments(json.items);
  // };

  const getCommentsList= async()=>{
    const data = await fetch(COMMENT_LIST_API+videoID);
    const json = await data.json();
    SetCommentsList(json.items)
    console.log(json.items[0].snippet.topLevelComment.snippet)

  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getStreamingDetails();
    getCommentsList();
    // getLiveComments();
  }, [videoID]);

  // console.log(livecomments);
  // console.log(liveDetails)

  return (
    <div className="flex flex-wrap">
      <div>
        <div className="p-8">
          <iframe
            width="840"
            height="515"
            src={"https://www.youtube.com/embed/" + videoID}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1 className="font-bold text-lg pt-3">
            {liveDetails.snippet.title}
          </h1>
        </div>
        <div className="w-[600px]">
          {
            commentsList.map((commentsList)=>{
              return(<Comment name={commentsList.snippet.topLevelComment.snippet.authorDisplayName} comment={commentsList.snippet.topLevelComment.snippet.textDisplay} url ={commentsList.snippet.topLevelComment.snippet.authorProfileImageUrl}/>)
            })
          }
          
        </div>
      </div>
      <div className="pt-5">
        <RelatedVideoList videoId={videoID} />
      </div>
    </div>
  );
};

export default WatchLive;
