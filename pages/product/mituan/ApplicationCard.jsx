import React from 'react'
import Image from 'next/image'

export default function ApplicationCard({data}) {
  return (
    <div className='sm:w-96 sm:shadow-card px-8 h-60 pt-8 rounded-xl'>
      <Image src={data.icon} alt=''></Image>
      <section className='sm:text-xl font-bold leading-7 mb-2'>
        {data.title}
      </section>
      <section className='text-slate-400 text-sm leading-6'>
        {data.content}
      </section>
    </div>
  )
}
