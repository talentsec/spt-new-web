import React from 'react'
import Image from 'next/image'

export default function ApplicationCard({ data }) {
  return (
    <div className='sm:w-96 shadow-card p-6 sm:p-8 rounded-xl transition-all sm:hover:-translate-y-3 transform-all mb-4 sm:mb-0'>
      <div className='flex justify-center sm:justify-start'>
        <Image src={data.icon} alt='' />
      </div>
      <section className='sm:text-xl font-bold leading-7 my-2 sm:my-4 text-center sm:text-left'>
        {data.title}
      </section>
      <section className='text-slate-400 text-xs sm:text-sm sm:leading-6 text-center sm:text-left'>
        {data.content}
      </section>
    </div>
  )
}
