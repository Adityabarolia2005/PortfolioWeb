import React from 'react'
import Description from './Description'

function StrechedButton({ name, icons , des }) {
  return (
    <button className='w-full h-full max-w-[240px] px-4 py-4 rounded-xl bg-white/10 text-white shadow-lg transition duration-200 ease-in-out hover:bg-black hover:scale-105 hover:shadow-2xl flex flex-col items-center gap-3 text-center'>
      <div className='flex items-center gap-2'>
        {icons.map((IconComponent, index) => (
          <IconComponent key={index} className='h-5 w-5' />
        ))}
        <span className='font-heading'>{name}</span>
      </div>
      {des && <Description>{des}</Description>}
    </button>
  )
}

export default StrechedButton