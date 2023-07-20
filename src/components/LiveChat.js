import React, { useEffect, useState } from 'react'
import LiveComments from './LiveComments'
import { useDispatch, useSelector } from 'react-redux'
import { setComments } from '../utils/LiveChatSlice';
import store from '../utils/Store';
import { generateName, generateString } from '../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const CommentsData = useSelector((store)=>store.live.comments)

    const[text , setText] = useState("")


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
<form onSubmit={(e)=>{
    e.preventDefault()
dispatch(setComments({
    name: "mano",
    message: text
}))
}} >
    <input type='text' value={text} onChange={(e)=>{ setText(e.target.value)}}/>
</form>
    </div>
  )
}

export default LiveChat