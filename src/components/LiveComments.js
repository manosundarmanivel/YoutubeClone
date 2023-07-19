import React from 'react'

const LiveComments = ({name , message}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{message}</h2>
    </div>
  )
}

export default LiveComments