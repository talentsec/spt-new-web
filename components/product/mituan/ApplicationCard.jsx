import React from 'react'
import Image from 'next/image'

export default function ApplicationCard({data}) {
  return (
    <div className='sm:w-96 sm:shadow-card  p-8 rounded-xl hover:-translate-y-3 transition-all sm:hover:-translate-y-1 transform-all'>
      <Image src={data.icon} alt=''></Image>
      <section className='sm:text-xl font-bold leading-7 my-4'>
        {data.title}
      </section>
      <section className='text-slate-400 text-sm leading-6'>
        {data.content}
      </section>
    </div>
  )
}
