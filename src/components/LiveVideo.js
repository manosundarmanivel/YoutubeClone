import React from 'react'

const LiveVideo = ({info}) => {
    const {snippet} = info
//  console.log(info)
   



  return (
   <div className='w-96 p-3 m-3 shadow-lg'>
    <img src={snippet.thumbnails.medium.url} />
 <h1 className='font-bold text-white'>{snippet.channelTitle}</h1>
 <h1 className='text-white'>{snippet.description}</h1>
   </div>
  )
}

export default LiveVideo