import React from 'react';
import trophy from '../assets/2trophy.svg'

function Prizes() {
  return (
    <div className='flex flex-col py-16 px-4 md:gap-y-18 w-screen bg-[#11001b] relative overflow-hidden'>
      <div className='absolute top-10 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute top-20 right-20 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse delay-700'></div>
      <div className='absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
      <div className='absolute bottom-10 right-10 w-64 h-64 bg-blue-500/25 rounded-full blur-2xl animate-pulse delay-300'></div>
      
      <div className='absolute inset-0' style={{
        backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className='flex flex-col text-left gap-y-3 w-[90vw] md:px-20 mb-12 relative z-10'>
        <p className='font-primary font-bold text-nowrap text-white text-[clamp(50px,13.5vw,11.25rem)] leading-[95%] drop-shadow-2xl'>
          Great minds <br /> think here
        </p>
        <p className='font-secondary ml-3 md:ml-24 lg:ml-41 text-[1.5rem] text-white font-medium'>
          Winning teams run <br /> on <span className='text-cyan-300 font-bold'>Unnati</span>.
        </p>
      </div>

      {/* PRIZES Section */}
      <div className='flex flex-col items-center justify-center mb-16 relative z-10'>
        <div className='text-center mb-12'>
          <h2 className='text-6xl md:text-8xl font-black text-white tracking-wider drop-shadow-2xl'>
            PRIZES
          </h2>
        </div>

        <div className='flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6 md:gap-8 w-full max-w-6xl px-4'>
          
          <div className='relative group hover:scale-105 transition-all duration-300 mx-auto lg:mx-0'>
            <div className='absolute -inset-1 bg-blue-500/40 rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-500'></div>
            <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-sm opacity-30 group-hover:opacity-60 transition duration-500'></div>
            
            <div className='relative bg-[#11001b]/90 backdrop-blur-md border-2 border-blue-400/60 rounded-3xl p-8 text-center shadow-2xl w-80 h-96' 
                 style={{
                   boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1), inset 0 0 20px rgba(59, 130, 246, 0.05)'
                 }}>
              
              <div className='bg-gray-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block'>
                WINNER
              </div>
              
              <div className='mb-6'>
                <img src={trophy} alt="Second Place Trophy" className='w-20 h-20 mx-auto filter brightness-75 contrast-125' />
              </div>
              
              <h3 className='text-3xl font-black text-white mb-4 tracking-wide'>
                2ND PLACE
              </h3>
              
              <p className='text-4xl md:text-5xl font-black text-yellow-400 mb-6'>
                ₹5,000
              </p>
              
              <p className='text-gray-300 text-sm leading-relaxed'>
                Cash Prize + Certificate +<br />
                Goodies
              </p>
            </div>
          </div>

          <div className='relative group hover:scale-105 transition-all duration-300 mx-auto lg:mx-0 lg:-mt-8 order-first lg:order-none'>
            <div className='absolute -inset-2 bg-blue-500/50 rounded-3xl blur-lg opacity-80 group-hover:opacity-100 transition duration-500 animate-pulse'></div>
            <div className='absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-3xl blur opacity-50 group-hover:opacity-80 transition duration-500'></div>
            
            <div className='relative bg-[#11001b]/90 backdrop-blur-md border-3 border-blue-400/80 rounded-3xl p-8 text-center shadow-2xl w-80 h-[28rem]'
                 style={{
                   boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.2), inset 0 0 30px rgba(59, 130, 246, 0.1)'
                 }}>
              
              <div className='bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block'>
                WINNER
              </div>
              
              <div className='mb-6'>
                <img src={trophy} alt="First Place Trophy" className='w-24 h-24 mx-auto filter brightness-110 contrast-125' />
              </div>
              
              <h3 className='text-4xl font-black text-white mb-4 tracking-wide'>
                1ST PLACE
              </h3>
              
              <p className='text-5xl md:text-6xl font-black text-yellow-300 mb-6 drop-shadow-lg'>
                ₹7,000
              </p>
              
              <p className='text-yellow-100 text-sm leading-relaxed font-medium'>
                Cash Prize + Certificate +<br />
                Goodies + Special Recognition
              </p>
            </div>
          </div>

          <div className='relative group hover:scale-105 transition-all duration-300 mx-auto lg:mx-0'>
            <div className='absolute -inset-1 bg-blue-500/40 rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-500'></div>
            <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-sm opacity-30 group-hover:opacity-60 transition duration-500'></div>
            
            <div className='relative bg-[#11001b]/90 backdrop-blur-md border-2 border-blue-400/60 rounded-3xl p-8 text-center shadow-2xl w-80 h-96'
                 style={{
                   boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1), inset 0 0 20px rgba(59, 130, 246, 0.05)'
                 }}>
              
              <div className='bg-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block'>
                WINNER
              </div>
              
              <div className='mb-6'>
                <img src={trophy} alt="Third Place Trophy" className='w-20 h-20 mx-auto filter brightness-90 contrast-125' />
              </div>
              
              <h3 className='text-3xl font-black text-white mb-4 tracking-wide'>
                3RD PLACE
              </h3>
              
              <p className='text-4xl md:text-5xl font-black text-yellow-400 mb-6'>
                ₹3,000
              </p>
              
              <p className='text-gray-300 text-sm leading-relaxed'>
                Cash Prize + Certificate +<br />
                Goodies
              </p>
            </div>
          </div>

        </div>

        <div className="text-center mt-12 md:mt-16" style={{opacity: 1}}>
          <p className="text-sm sm:text-base text-white/50 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'var(--hackquest-font-primary)'}}>
            Winners will receive their prizes along with certificates and mentorship opportunities. Additional sponsor prizes and swag will be announced during the event.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-6 mt-12 w-full max-w-4xl px-4'>
          
          <div className='flex-1 bg-[#11001b]/90 backdrop-blur-md border border-blue-400/40 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300'
               style={{
                 boxShadow: '0 0 15px rgba(59, 130, 246, 0.2), inset 0 0 15px rgba(59, 130, 246, 0.05)'
               }}>
            <div className='w-12 h-12 bg-blue-400/80 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-xl'>🏆</span>
            </div>
            <h3 className='text-xl font-bold text-blue-100 mb-2'>Certificates</h3>
            <p className='text-blue-200 text-sm'>Digital certificates for all participants and special recognition for winners</p>
          </div>

          <div className='flex-1 bg-[#11001b]/90 backdrop-blur-md border border-blue-400/40 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300'
               style={{
                 boxShadow: '0 0 15px rgba(59, 130, 246, 0.2), inset 0 0 15px rgba(59, 130, 246, 0.05)'
               }}>
            <div className='w-12 h-12 bg-purple-400/80 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-xl'>🎯</span>
            </div>
            <h3 className='text-xl font-bold text-purple-100 mb-2'>Mentorship</h3>
            <p className='text-purple-200 text-sm'>One-on-one guidance sessions with industry experts and professionals</p>
          </div>

          <div className='flex-1 bg-[#11001b]/90 backdrop-blur-md border border-blue-400/40 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300'
               style={{
                 boxShadow: '0 0 15px rgba(59, 130, 246, 0.2), inset 0 0 15px rgba(59, 130, 246, 0.05)'
               }}>
            <div className='w-12 h-12 bg-green-400/80 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-xl'>🎁</span>
            </div>
            <h3 className='text-xl font-bold text-green-100 mb-2'>Exclusive Swag</h3>
            <p className='text-green-200 text-sm'>Limited edition merchandise, tech accessories, and surprise goodies</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Prizes
