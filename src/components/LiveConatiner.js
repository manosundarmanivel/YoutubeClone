import React, { useEffect, useState } from 'react'
import { YOUTUBE_LIVE_API } from '../utils/Constant'
import LiveVideo from './LiveVideo'
import { Link } from 'react-router-dom'

const LiveConatiner = () => {
    const [liveVideo , SetLiveVideo] = useState([])

    const getLiveVideo = async ()=>{
        const data = await fetch(YOUTUBE_LIVE_API)
        const json = await data.json()
        SetLiveVideo(json.items)
    }
    console.log(liveVideo)

    useEffect(()=>{
        getLiveVideo()
    },[])

    return(
    <div className='flex flex-wrap'>
     {
        liveVideo.map((video)=>{
            return(<Link to={"/livewatch?v="+ video.id.videoId} ><LiveVideo info={video}/></Link> )
        })
     }
    </div>
    )
 
}

export default LiveConatiner