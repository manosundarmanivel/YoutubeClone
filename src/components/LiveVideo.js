import React from 'react'

const LiveVideo = ({info}) => {
    const {snippet} = info
//  console.log(info)
   



  return (
   <div className='w-64 p-5 m-5 shadow-lg'>
    <img src={snippet.thumbnails.medium.url} />
 <h1 className='font-bold'>{snippet.channelTitle}</h1>
 <h1>{snippet.description}</h1>
   </div>
  )
}

export default LiveVideo