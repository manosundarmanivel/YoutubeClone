import React from 'react'

const Shimmer = () => {

  return (
    <div className='flex flex-wrap'>
      {

Array(20).fill("").map((index)=>{
  return(
  
    <div className='p-3 animate-pulse' key={index}>
      <div className='w-96 h-56  bg-[#1D1C1C] rounded-xl'>

</div>
<div>
  <div className='flex pt-2 pb-3'>
    <div className='w-9 h-9 mt-5 rounded-full bg-[#1D1C1C]'></div>
    <div className='p-2'>
      <div className='h-5 w-80 m-2 bg-[#1D1C1C] rounded-sm'></div>
      <div className='h-5 w-52 m-2 bg-[#1D1C1C] rounded-sm'></div>
      
    </div>
  </div>
</div>
    </div>
  )
        
  
}
)
      }
    </div>

 
  )
  
}

export default Shimmer