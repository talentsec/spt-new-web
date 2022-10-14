import React from 'react'
import Image from 'next/image'

export default function RiskPannel({ data }) {
  return (
    <div className='w-24 h-24 sm:w-56 sm:h-56 bg-gray-100 rounded sm:rounded-xl sm:flex-shrink-0 hover:scale-95 transition-all'>
      <section className='mt-4 sm:mt-16 ml-8 sm:ml-20 w-9 sm:w-20'>
        <Image src={data.icon} alt='' />
      </section>
      <section className='text-center text-xs mt-2 text-gray-400'>{data.title}</section>
    </div>
  )
}
