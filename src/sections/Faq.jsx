import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import './Faq.css'

function Faq() {
  const containerRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: "What is Whimsical and how does it work?",
      answer: "Whimsical is a collaborative workspace for thinking and planning. It helps teams create flowcharts, wireframes, mind maps, and more to visualize ideas and processes."
    },
    {
      question: "Can I collaborate with my team in real-time?",
      answer: "Yes! Whimsical supports real-time collaboration, allowing multiple team members to work on the same document simultaneously with live cursors and instant updates."
    },
    {
      question: "What types of diagrams can I create?",
      answer: "You can create flowcharts, wireframes, mind maps, organizational charts, user flows, system diagrams, and many other types of visual documents."
    },
    {
      question: "Is there a free plan available?",
      answer: "Yes, we offer a free plan that includes basic features and a limited number of documents. Paid plans unlock unlimited documents and advanced features."
    },
    {
      question: "How do I share my work with others?",
      answer: "You can share documents via direct links, invite collaborators by email, or export your work in various formats including PNG, PDF, and SVG."
    },
  ]

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const faqItems = gsap.utils.toArray('.faq-item')
    faqItems.forEach((item, index) => {
      gsap.fromTo(item, 
        {
          opacity: 0,
          y: 20,
          scale: 0.99
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            end: 'bottom 20%',
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    gsap.fromTo('.right-content',
      {
        opacity: 0,
        x: 30,
        scale: 0.98
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.right-content',
          start: 'top 85%',
          toggleActions: "play none none reverse"
        }
      }
    )

    gsap.to('.floating-element', {
      y: -10,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    })

    gsap.fromTo('.faderbg',
      {
        opacity: 0,
      },
      {
        opacity: 0.9,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.faderbg',
          start: 'top 80%',
          end: 'bottom 60%',
        }
      }
    )

    gsap.fromTo('.faq-header',
      {
        opacity: 0,
        y: -15
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.faq-header',
          start: 'top 90%',
          toggleActions: "play none none reverse"
        }
      }
    )

  }, { scope: containerRef })

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div ref={containerRef} className='py-20 px-4 min-h-screen overflow-x-hidden'>
      <div className='max-w-7xl mx-auto'>
        
        <div className='faq-header text-center mb-16'>
          <h2 className='font-primary font-bold text-[#250835] text-[clamp(40px,8vw,4rem)] leading-[95%] mb-4'>
            Frequently Asked <br /> Questions
          </h2>
          <p className='font-secondary text-[#6a5b72] text-xl max-w-2xl mx-auto'>
            Everything you need to know about Whimsical and how it can help your team think better together.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-6 lg:gap-12 items-start'>
          
          {/* Left Side - FAQ */}
          <div ref={leftRef} className='space-y-6 bg-[#f0eef2] p-4 md:p-8 rounded-3xl overflow-hidden z-0 relative'>
            <div className='absolute w-full h-full top-0 left-0 faqbg faderbg -z-10'></div>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                  openFaq === index 
                    ? 'ring-2 ring-purple-300 border-2 border-purple-300' 
                    : 'border border-purple-100 hover:border-purple-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className='w-full p-4 md:p-6 text-left flex justify-between items-center focus:outline-none rounded-2xl group'
                >
                  <span className='font-semibold text-[#250835] text-base md:text-lg pr-4 group-hover:text-purple-700 transition-colors duration-200'>
                    {faq.question}
                  </span>
                  <div className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : 'rotate-0'}`}>
                    {openFaq === index ? (
                      <ChevronUpIcon className='w-5 h-5 md:w-6 md:h-6 text-purple-600 flex-shrink-0' />
                    ) : (
                      <ChevronDownIcon className='w-5 h-5 md:w-6 md:h-6 text-purple-600 flex-shrink-0' />
                    )}
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${
                  openFaq === index 
                    ? 'max-h-[500px] opacity-100 pb-4 md:pb-6' 
                    : 'max-h-0 opacity-0 pb-0'
                }`}>
                  <div className='px-4 md:px-6'>
                    <div className='bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-xl p-4 md:p-5 border-l-4 border-purple-400 shadow-sm'>
                      <p className='text-[#4a5568] leading-relaxed text-sm md:text-base font-medium'>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Complementary Content */}
          <div ref={rightRef} className='right-content w-full'>
            <div className='bg-[#f0eef2] rounded-3xl z-0 p-6 md:p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl bgstill w-full max-w-full'> 
              <div className='absolute top-0 left-0 bg-black w-full h-full opacity-25 -z-10'></div>
              
              <div className='relative z-10 text-center w-full'>
                <div className='floating-element w-full'>
                  
                  <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r bg-clip-text text-white'>
                    Still have questions?
                  </h3>
                  
                  <p className='text-white font-secondary font-medium mb-6 md:mb-8 lg:mb-10 leading-relaxed text-base md:text-lg lg:text-xl max-w-md mx-auto px-2'>
                    Can't find the answer you're looking for? Our support team is here to help you get the most out of Whimsical.
                  </p>
                  
                  <button className='bg-white text-purple-700 font-semibold px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-base md:text-lg'>
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq