import React from 'react'

const SectionTitle = ({ title }) => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-8 mb-20'>
      <h2 className='text-center font-bold text-2xl md:text-3xl'>{title}</h2>
      <div className='h-[4px] w-[110px] md:w-[140px] bg-brand-main'></div>
    </div>
  )
}

export default SectionTitle