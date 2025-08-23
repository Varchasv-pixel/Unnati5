import React from 'react'
import Primarybtn from '../ui/Primarybtn'
import { GlassWater } from 'lucide-react'
import Glassbox from '../ui/Glassbox'
import GlassScreen from '../ui/GlassScreen'

function Hero() {

  const tabs = [
    {
      title: "Projects",
      description: "an integrated project spaces for tasks, docs, and communitc.",
    },
    {
      title: "Projects",
      description: "an integrated project spaces for tasks, docs, and communitc.",
    },
    {
      title: "Projects",
      description: "an integrated project spaces for tasks, docs, and communitc.",
    },
    {
      title: "Projects",
      description: "an integrated project spaces for tasks, docs, and communitc.",
    },
  ]

  return (
    <div className='flex flex-col justify-center items-center gap-y-20 sm:mt-32 lg:mt-72 max-w-[95vw]'>
      <div className='flex flex-col justify-center items-center text-center text-white gap-y-8'>
        <p className='font-family-primary font-extrabold text-[clamp(1.5rem,6.1vw,4rem)] '>The all-in-one <br /> workspace you'll love</p>
        <p className='leading-0 text-[1rem] '>Think it. Plan it. Build it. while switching apps</p>
        
        <Primarybtn/>
      </div>
      <div className='flex flex-col justify-center w-full items-center gap-6'>
        <div className='flex flex-row w-full gap-4 px-4 max-w-screen overflow-x-auto'>
          {
            tabs.map(({title, description, key})=>{
              return <Glassbox title={title} description={description} key={key} />
            })
          }
        </div>
        <div className=' w-full overflow-x-auto px-2'>
          <GlassScreen/>
        </div>
      </div>
    </div>
  )
}

export default Hero