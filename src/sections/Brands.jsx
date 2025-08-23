import React from 'react'
import BrandTag from '../ui/BrandTag'

function Brands() {

    const brands = [
        {title: "Manforce"},
        {title: "kamasutra"},
        {title: "durex"},
        {title: "NottyBoy"},
        {title: "Playgard"},
    ]


  return (
    <div className='flex w-[90%] mt-16 flex-col justify-center items-center gap-4'>

        <div>
            <p>Brands Example -:</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-12 overflow-x-auto max-w-screen'>
            {
                brands.map(({title}, index)=>{
                    return <BrandTag key={index} title={title}/>
                })
            }
        </div>
      
    </div>
  )
}

export default Brands
