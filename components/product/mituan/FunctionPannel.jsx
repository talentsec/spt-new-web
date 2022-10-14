import React from 'react'
import Image from 'next/image'

export default function FunctionPannel({ data }) {
  return (
    <div className='flex gap-3 hover:shadow-card sm:w-2/5 sm:h-44 rounded-xl p-6 sm:p-10 flex-shrink-0 shadow-card sm:shadow-none mb-3'>
      <section className='flex-shrink-0 w-12'>
        <Image src={data.icon} alt='' width={60} height={60} />
      </section>
      <section>
        <section className='font-extrabold text-base sm:text-xl leading-7 sm:mb-3'>{data.title}</section>
        <section className='text-xs sm:text-sm text-gray-400 leading-6 sm:leading-7'>{data.content}</section>
      </section>
    </div>
  )
}
