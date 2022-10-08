import React from 'react'
import Image from 'next/image'

export default function RiskPannel({ data }) {
  return (
    <div className='sm:w-56 sm:h-56 bg-gray-100 rounded-xl flex-shrink-0 sm:hover:scale-95 transition-all'>
      <section className='mt-16 ml-20'>
        <Image src={data.icon} alt=""></Image>
      </section>
      <section className='text-center text-xs mt-2 text-gray-400'>{data.title}</section>
    </div>
  )
}
