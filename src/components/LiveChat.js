import React, { useEffect } from 'react'
import LiveComments from './LiveComments'
import { useDispatch, useSelector } from 'react-redux'
import { setComments } from '../utils/LiveChatSlice';
import store from '../utils/Store';
import { generateName, generateString } from '../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const CommentsData = useSelector((store)=>store.live.comments)


    useEffect(()=>{
        const time = setInterval(()=>{
            dispatch(setComments({
                name:generateName(),
                message: generateString(10)
            }))
        },200)
        return()=>clearInterval(time)
    },[])

  return (
    <div className=' w-[500px] h-[500px] overflow-y-scroll bg-slate-400 flex flex-col-reverse '>
{
    CommentsData.map((comment)=>
        (<LiveComments name={comment.name} message={comment.message} />  )
    )
}
    </div>
  )
}

export default LiveChat