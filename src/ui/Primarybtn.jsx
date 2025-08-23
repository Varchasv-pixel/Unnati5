import React from 'react'
import { ArrowRight } from "lucide-react";


function Primarybtn({label = "Register Now",}) {
  return (
    <div className='bg-white'>
        <p className='text-black text-lg'>{label}</p>
        <div><ArrowRight/></div>
    </div>
  )
}

export default Primarybtn