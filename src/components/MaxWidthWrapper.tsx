import React from 'react'

function MaxWidthWrapper({children}: {children: React.ReactNode}) {
  return (
    <div className='w-full bg-black'>
        <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 '>
        {children}
        </div>
    </div>
  )
}

export default MaxWidthWrapper