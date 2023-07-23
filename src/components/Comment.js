import React from 'react'

const Comment = ({name , comment , url}) => {
    console.log(url)
  return (
    <div className='flex flex-wrap p-2 m-2'>
        <div className='p-2 m-2'>
        <img className='rounded-full' src={url} alt='profile'/>
        </div>
       
        <div className='p-2 m-2'>
            <h1>{name}</h1>
            <h1>{comment}</h1>
        </div>
    </div>
  )
}

export default Comment