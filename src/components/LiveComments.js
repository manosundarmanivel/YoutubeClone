import React from 'react'

const LiveComments = ({name , message , profileUrl}) => {
  return (
    <div>
      <img  src={profileUrl}/>
       <div>
       <h1>{name}</h1>
        <h2>{message}</h2>
       </div>
        
    </div>
  )
}

export default LiveComments