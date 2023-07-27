import React from 'react'

const SearchShimmer = () => {
  return (
    <div className='flex flex-wrap'>
    {

Array(20).fill("").map((index)=>{
return(

  <div className='p-3 flex animate-pulse' key={index}>
    <div className='w-96 h-56  bg-[#1D1C1C] rounded-xl'>

</div>
<div>
<div className='flex pt-2 pb-3'>
  
  <div className='p-2'>
    <div className='h-5 w-[700px] m-2 bg-[#1D1C1C] rounded-sm'></div>
    <div className='h-5 w-[300px] m-2 bg-[#1D1C1C] rounded-sm'></div>
    <div className='w-10 h-10 ml-2 mt-5 rounded-full bg-[#1D1C1C]'></div>
    
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

export default SearchShimmer