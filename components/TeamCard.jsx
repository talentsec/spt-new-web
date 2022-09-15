import React from 'react'
import Image from 'next/image'

export default function TeamCard({data}) {
  return (
    <div className='bg-slate-50 sm:bg-white sm:w-64 flex-grow-0 flex-shrink-0 rounded-lg hover:shadow-card mb-5 cursor-pointer'>
      <div className='p-9'>
        <div className='flex justify-center mb-2'>
          <Image src={data.icon} alt=""/>
        </div>
        {data.img}
        <div className='mx-auto w-full text-center leading-7'>{data.title}</div>
        <div className='mx-auto w-full text-center leading-7 mb-2 text-sm text-slate-600'>{data.subTitle}</div>
        <div className='text-xs leading-6 text-slate-500 text-center'>{data.content}</div>
      </div>
      <div>
      </div>
    </div>
  )
}
