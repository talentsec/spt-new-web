import React from 'react'
import Image from 'next/image'

export default function FunctionPannel({data}) {
  return (
    <div className='flex gap-3 hover:shadow-card sm:w-2/5 h-44 rounded-xl p-10 flex-shrink-0'>
      <section className='flex-shrink-0'>
        <Image src={data.icon} alt='' width={60} height={60}></Image>
      </section>
      <section>
        <section className='font-extrabold text-xl leading-7 mb-3'>{data.title}</section>
        <section className='text-sm text-gray-400 leading-7'>{data.content}</section>
      </section>
    </div>
  )
}
