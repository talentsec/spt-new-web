import React from 'react'
import Image from 'next/image'

export default function FunctionCard({ data }) {
  return (
    <div className='p-6 hover:shadow-card rounded-2xl py-10 pb-10 sm:pb-20 shadow-card sm:shadow-none'>
      <section className='flex justify-center'>
        <Image src={data.icon} alt=''></Image>
      </section>
      <section className='text-sm sm:text-xl font-bold text-center mt-7 mb-4'>
        {data.title}
      </section>
      <section className='text-gray-400 leading-6'>
        {data.content}
      </section>
    </div>
  )
}
