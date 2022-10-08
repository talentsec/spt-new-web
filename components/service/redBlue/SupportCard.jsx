import React from 'react'
import Image from 'next/image'

export default function SupportCard({ data }) {
  return (
    <div className='p-8 sm:shadow-card rounded-lg sm:hover:scale-105 transition-all'>
      <section className='flex justify-center'>
        <Image src={data.icon} alt=''></Image>
      </section>
      <section className='text-xl font-bold mb-4 mt-2 text-center' style={{ color: data.color }}>
        {data.title}
      </section>
      <section className='border-b mb-7'></section>
      <section>
        {
          data.list.map((item, key) => {
            return (
              <section key={key} className="flex gap-4 text-gray-500 font-light leading-6 mb-3">
                <div className='w-2 h-2 mt-2 rounded flex-shrink-0 flex-grow-0' style={{ backgroundColor: data.color }}></div>
                <div>{item}</div>
              </section>
            )
          })
        }
      </section>
    </div>
  )
}
