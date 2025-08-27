import React from 'react'

function Gallery() {
  return (
    <div className='flex flex-col gap-y-4 w-full justify-center items-center '>
        <div className='flex flex-col gap-4 px-5 text-wrap text-left justify-center items-start '>
            <p className='max-w-[600px] text-[2.2rem] sm:text-[3rem] font-semibold font-primary'>For teams who dare to work differently</p>
            <p className='max-w-[650px] text-[1.1rem] sm:text-[1rem] font-secondary font-medium text-slate-400'>We built Whimsical for teams who strive to work with intention, not interruption, and where productivity flows from focus, not frenzy.</p>
        </div>
        <div>
          {/* images wagera dal dunga yha desingn laga kr  */}
        </div>
      
    </div>
  )
}

export default Gallery
