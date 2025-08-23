import React from 'react'
import { ArrowRight } from "lucide-react";


function Primarybtn({label = "Register Now",}) {
  return (
    <div className='flex flex-row justify-center items-center bg-white pl-4 px-2 py-2 rounded-xl gap-x-4 shadow-xl'>
        <p className='text-black text-base'>{label}</p>
        <div className='bg-black p-2 rounded-lg'><ArrowRight width={21} height={18} color='white'/></div>
    </div>
  )
}

export default Primarybtn