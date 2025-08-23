import React from 'react'

function Glassbox({title = "Projects", description = "an integrated project spaces for tasks, docs, and communitc."}) {
  return (
    <div className='flex flex-col min-w-[180px] w-[180px] lg:w-[245px] p-4 rounded-xl  bg-[rgba(15,1,26,.12)] text-[#d6d3d3aa]'>
        <div>
            {/* ek icon chahiey */}
            <p className='text-sm'>{title}</p>
        </div>
        <div>
            <p className='text-xs'>{description}</p>
        </div>
        <div className='w-[100%] bg-[rgba(43,43,44,0.24)] mt-2 h-1 rounded-full'>
            <div className='w-[30%] bg-[rgb(80,230,203)] h-1 rounded-full'></div>
        </div>
      
    </div>
  )
}

export default Glassbox
