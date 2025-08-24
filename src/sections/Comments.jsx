import React from 'react'
import CommentCard from '../ui/CommentCard'

function Comments() {
  const testimonials = [
    {
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      name: "Jeff Weinstein",
      handle: "@jeff_weinstein",
      verifiedIcon: true,
      comment: "@Whimsical makes thinking hard, easier."
    },
    {
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      name: "Jake Mor",
      handle: "@jakemor",
      verifiedIcon: true,
      comment: "Can't get over how excellent @Whimsical is. We use it religiously for wireframing and thought-vomit. I'm not sure I can think without it— a true bicycle for the mind. Nice work."
    },
    {
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b766?w=100&h=100&fit=crop&crop=face",
      name: "Max Ogles",
      handle: "@maxogles",
      verifiedIcon: true,
      comment: "@BobBodily and I are HUGE fans of @Whimsical. We play around with wireframes to . Whimsical for wireframes"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      name: "Design papa",
      handle: "@designpapa",
      verifiedIcon: true,
      comment: "After using @Whimsical for a few days, I have to say I'm totally addicted. The features are so smart, so magical. Thank you!"
    },
    {
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      name: "Josh Johnson",
      handle: "@secondfret",
      verifiedIcon: true,
      comment: "Dang. @Whimsical is beyond good. It might turn into my favorite tool as a PM."
    },
    {
      profileImage: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
      name: "Mark Johnson CC",
      handle: "@markjohnsoncc",
      verifiedIcon: true,
      comment: "Man, @Whimsical is one of the best products I've stumbled upon in a minute. Such a delight to use."
    },
    {
      profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      name: "Shahed Khan",
      handle: "@_shahedk",
      verifiedIcon: false,
      comment: "@Whimsical is such an underrated product. Great design. Built for collaboration. Highly recommend it to anyone who creates flowcharts, mind maps, etc."
    },
    {
      profileImage: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
      name: "Danny Trinh",
      handle: "@dtrinh",
      verifiedIcon: false,
      comment: "Pro-tip: Use @Whimsical"
    }
  ]

  const mobileTestimonials = testimonials.slice(0, 3)
  const tabletColumn1 = testimonials.slice(0, 3)
  const tabletColumn2 = testimonials.slice(3, 6)
  const desktopColumn1 = testimonials.slice(0, 3)
  const desktopColumn2 = testimonials.slice(3, 6)
  const desktopColumn3 = [testimonials[6], testimonials[7], testimonials[0]] 

  return (
    <div className='flex flex-col py-16 px-4 md:gap-y-18'>
      <div className='flex flex-col text-left gap-y-3 w-[90vw] md:px-20 mb-12'>
        <p className='font-primary font-bold text-nowrap  text-[#250835] text-[clamp(50px,13.5vw,11.25rem)] leading-[95%]'>Great minds <br /> think here</p>
        <p className='font-secondary ml-3 md:ml-24 lg:ml-41 text-[1.5rem] text-[#6a5b72] font-medium'>Winning teams run <br /> on Whimsical.</p>  
      </div>
      
      {/* mobile wala */}
      <div className='block md:hidden max-w-sm mx-auto space-y-4'>
        {mobileTestimonials.map((testimonial, index) => (
          <CommentCard
            key={`mobile-${index}`}
            profileImage={testimonial.profileImage}
            name={testimonial.name}
            handle={testimonial.handle}
            verifiedIcon={testimonial.verifiedIcon}
            comment={testimonial.comment}
          />
        ))}
      </div>

        {/* bich wala */}
      <div className='hidden md:block lg:hidden max-w-4xl mx-auto'>
        <div className='grid grid-cols-2 gap-6'>
          <div className='space-y-4'>
            {tabletColumn1.map((testimonial, index) => (
              <CommentCard
                key={`tablet-col1-${index}`}
                profileImage={testimonial.profileImage}
                name={testimonial.name}
                handle={testimonial.handle}
                verifiedIcon={testimonial.verifiedIcon}
                comment={testimonial.comment}
              />
            ))}
          </div>
          
          <div className='space-y-4 -mt-30'>
            {tabletColumn2.map((testimonial, index) => (
              <CommentCard
                key={`tablet-col2-${index}`}
                profileImage={testimonial.profileImage}
                name={testimonial.name}
                handle={testimonial.handle}
                verifiedIcon={testimonial.verifiedIcon}
                comment={testimonial.comment}
              />
            ))}
          </div>
        </div>
      </div>

      {/* laptop wala */}

      <div className='hidden lg:block max-w-6xl mx-auto'>
        <div className='grid grid-cols-3 gap-6'>
          <div className='space-y-4'>
            {desktopColumn1.map((testimonial, index) => (
              <CommentCard
                key={`desktop-col1-${index}`}
                profileImage={testimonial.profileImage}
                name={testimonial.name}
                handle={testimonial.handle}
                verifiedIcon={testimonial.verifiedIcon}
                comment={testimonial.comment}
              />
            ))}
          </div>
          
          <div className='space-y-4 -mt-24'>
            {desktopColumn2.map((testimonial, index) => (
              <CommentCard
                key={`desktop-col2-${index}`}
                profileImage={testimonial.profileImage}
                name={testimonial.name}
                handle={testimonial.handle}
                verifiedIcon={testimonial.verifiedIcon}
                comment={testimonial.comment}
              />
            ))}
          </div>
          
          <div className='space-y-4 -mt-42'>
            {desktopColumn3.map((testimonial, index) => (
              <CommentCard
                key={`desktop-col3-${index}`}
                profileImage={testimonial.profileImage}
                name={testimonial.name}
                handle={testimonial.handle}
                verifiedIcon={testimonial.verifiedIcon}
                comment={testimonial.comment}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
