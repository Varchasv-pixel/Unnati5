import React, { useEffect, useRef } from 'react'
import Primarybtn from '../ui/Primarybtn'
import { GlassWater } from 'lucide-react'
import Glassbox from '../ui/Glassbox'
import GlassScreen from '../ui/GlassScreen'
import './Hero.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';

function Hero() {

  const divRef = useRef(null);
  

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger); 
    
    gsap.to(divRef.current,{
      borderTopLeftRadius: '0px',
      borderTopRightRadius: '0px',
      width: '100%',
      scrollTrigger:{
        trigger: divRef.current,
        markers: true,
        scrub: 3,
        start: 'top 30%',
        end: '+=800',
      },
      
    })
  },{})


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
    <div className='flex bganimation flex-col justify-center items-center gap-y-20 sm:mt-12 lg:mt-70 lg:pt-37   pb-8 ' ref={divRef} style={{borderTopLeftRadius: '100%', borderTopRightRadius: '100%', width: '85%'}}>
      <div className='flex flex-col justify-center items-center text-center text-white gap-y-8'>
        <p className='font-family-primary font-extrabold text-[clamp(1.5rem,6.1vw,4rem)] '>The all-in-one <br /> workspace you'll love</p>
        <p className='leading-0 text-[1rem] '>Think it. Plan it. Build it. while switching apps</p>
        
        <Primarybtn/>
      </div>
      <div className='flex flex-col justify-center w-full items-center gap-6'>
        <div className='flex flex-row w-full gap-4 justify-center items-center px-4 max-w-screen overflow-x-auto'>
          {
            tabs.map(({title, description}, index)=>{
              return <Glassbox title={title} description={description} key={index} />
            })
          }
        </div>
        <div className=' w-full flex justify-center items-center overflow-x-auto px-2'>
          <GlassScreen/>
        </div>
      </div>
    </div>
  )
}

export default Hero