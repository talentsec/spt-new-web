import React from 'react'
import Image from 'next/image'

export default function Card({data}) {
  return (
    <div className='sm:w-96 flex-grow-0 flex-shrink-0 rounded-lg shadow-card mb-5 cursor-pointer'>
      <div className='p-9'>
        <div className='flex justify-center mb-2'>
          <Image src={data.icon} alt=""/>
        </div>
        {data.img}
        <div className='mx-auto w-full text-center leading-7 mb-2'>{data.title}</div>
        <div className='text-xs leading-6 text-slate-500 text-center'>{data.content}</div>
      </div>
      <div>
      </div>
    </div>
  )
}
