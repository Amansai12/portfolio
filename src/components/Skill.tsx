import React from 'react'

function Skill({title,percentage}:{title : string,percentage : number}) {
  return (
    <div className='w-full flex flex-col gap-2'>
        <div className='flex justify-between text-white'>
            <h2 className=''>{title}</h2>
            <h2>{percentage}%</h2>
        </div>
        <div className='w-full bg-gray-600 rounded-2xl'>
            <div style={{width:`${percentage}%`}} className='h-1 rounded-3xl bg-gray-300'></div>
        </div>
    </div>
  )
}

export default Skill