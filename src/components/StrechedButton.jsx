import React from 'react'
import Description from './Description'

function StrechedButton({ name, icons , des }) {
  return (
    <button className='relative w-full h-full max-w-none px-4 py-4 rounded-xl glass-card glass-card-hover flex flex-col items-center gap-4  text-center cursor-pointer hover:z-10'>
      <div className='flex items-center gap-2 gap-y-4'>
        {icons.map((IconComponent, index) => (
          <IconComponent key={index} className='h-5 w-5 text-primary shadow-sm' />
        ))}
        <span className='font-heading text-theme-primary font-bold'>{name}</span>
      </div>
      {des && <Description className="text-[12px]">{des}</Description>}
    </button>
  )
}

export default StrechedButton
