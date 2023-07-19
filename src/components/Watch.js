import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const Watch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [searchParams] = useSearchParams();
  const videoID = searchParams.get("v");

 

  

  return (
    <div>
      <div className="flex">
      <iframe
        width="960"
        height="515"
        src={"https://www.youtube.com/embed/" + videoID}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <LiveChat/>
      </div>
      
      <CommentsContainer/>
    </div>
  );
};

export default Watch;
