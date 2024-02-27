import React from 'react'

const SectionTitle = ({text}) => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-8 mb-16'>
      <h2 className='text-center font-bold text-3xl'>{text}</h2>
      <div className='h-[4px] w-[140px] bg-brand-main'></div>
    </div>
  )
}

export default SectionTitle