import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({data}) {
  const handleJump = () => {
    location.href = data.link
  }
  return (
    <div className='rounded-xl sm:rounded border-white border sm:bc-linner py-4 px-4 sm:shadow-lg bg-slate-100 mb-4 cursor-pointer sm:hover:-translate-y-0.5 ' onClick={handleJump}>
      <section className='flex items-center pb-1'>
        <Image src={data.icon} alt=''/>
        <span className='text-lg font-semibold ml-2 mr-9'>{data.title}</span>
      </section>
      <section className='text-xs text-slate-400'>
        {data.content}
      </section>
    </div>
  )
}
