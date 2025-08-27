import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'
import './NewWay.css'

function NewWay() {

    const newwaypoints = [
        
        {title : 'Cross-platform accessibility'},
        {title : 'Enterprise-grade security'},
        {title : 'Enterprise-grade security'},
        {title : 'Enterprise-grade security'},
        {title : 'Enterprise-grade security'},
    ]

    const togrowRef = useRef(null);
    const containerRef = useRef(null);
    const iconsRef = useRef(null);
    const textRef = useRef(null);
    const newpointRef = useRef(null);
    
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Create timeline for better sequencing
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                pin: containerRef.current,
                start: 'top top',
                end: '+=400%',
                scrub: 1,
                
                anticipatePin: 1,
                pinSpacing: true,
            }
        });

        // Phase 1: Fade out icons (0-25%)
        
        // Phase 2: Expand the pill (25-75%)
        // tl.to(togrowRef.current, {
        //     width: '80vw',
        //     height: '60vh',
        //     borderTopLeftRadius: '10px',
        //     borderTopRightRadius: '40px',
        //     borderBottomLeftRadius: '40px',
        //     borderBottomRightRadius: '40px',
        //     duration: 0.4,
        //     ease: "power2.inOut"
        // })
        
        // Phase 3: Full screen expansion (75-100%)
        tl.to(togrowRef.current, {
            width: '100vw',
            height: '100vh',
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
            duration: 0.3,
            ease: "power2.out"
        })
        
        // Phase 4: Hide initial content
        .to(textRef.current, {
            opacity: 0,
            duration: 0.2
        }, "-=0.1")
        
        // Phase 5: Show new content container
        .fromTo('.new-content', {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        })
        
        // Phase 7: Animate points one by one with stagger
        .fromTo('.point-item', {
            opacity: 0,
            x: 30,
            scale: 0.9
        }, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.1, // Each point appears 0.1s after the previous one
            ease: "power2.out"
        }, "-=0.2");

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className='h-screen w-full flex items-center justify-center relative overflow-hidden'>
            {/* Main morphing element */}
            <div 
                ref={togrowRef} 
                className='relative growbg flex flex-col items-center justify-center border-0 shadow-2xl overflow-hidden w-[300px] md:w-[370px] h-[70vw] md:h-[85vw]'
                style={{
                    borderTopLeftRadius: '350px',
                    borderTopRightRadius: '350px',
                    borderBottomLeftRadius: '40px',
                    borderBottomRightRadius: '40px',
                }}
            >
                {/* Initial content */}
                <div ref={textRef} className='relative z-10 text-center'>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>
                        Escape the clutter
                    </h2>
                </div>
                
                {/* New content that appears after expansion */}
                <div className='new-content absolute inset-0 flex flex-col lg:flex-row items-start  md:justify-around md:items-center justify-center text-center z-10 opacity-0 px-12'>
                    <div className='md:flex-1   flex items-center justify-center'>
                        <h1 className='main-title text-left text-5xl md:text-7xl   font-bold text-gray-800 mb-8 '>
                            The <br /> Unnati <br /> Way
                        </h1>
                    </div>
                    
                    <div className='md:flex-1 space-y-2'>
                        {
                            newwaypoints.map((point, index) => {
                                return (
                                    <div 
                                        key={index}
                                        className='point-item flex flex-row gap-4 justify-start items-center opacity-0'
                                    >
                                        {/* Icon */}
                                        <div className='w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg className='w-3 h-3 text-white text-bold' fill='currentColor' viewBox='0 0 20 20'>
                                                <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                            </svg>
                                        </div>
                                        
                                        {/* Text */}
                                        <p className='text-lg  text-black lg:text-gray-700 text-left text-wrap'>
                                            {point.title}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewWay
