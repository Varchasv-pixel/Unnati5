import React from 'react'

function CommentCard({
  profileImage,
  name,
  handle,
  verifiedIcon,
  comment,
  className = ""
}) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-md ${className}`}>
      <div className='flex items-center gap-3 mb-4'>
        <img 
          src={profileImage} 
          alt={`${name} profile`}
          className='w-12 h-12 rounded-full object-cover'
        />
        <div className='flex items-center gap-2'>
          <span className='font-semibold text-gray-900 text-sm'>{name}</span>
          {verifiedIcon && (
            <svg className='w-4 h-4 text-blue-500' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/>
            </svg>
          )}
          <span className='text-blue-500 text-sm'>{handle}</span>
        </div>
      </div>
      <p className='text-gray-800 text-sm leading-relaxed'>
        {comment}
      </p>
    </div>
  )
}

export default CommentCard
