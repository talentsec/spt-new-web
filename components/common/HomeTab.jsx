import React from 'react'
import Image from 'next/image'
import { Button } from 'antd'
import Link from 'next/link'

export default function HomeTab({ data }) {
  return (
    <div className='max-w-4xl mx-auto rounded-lg bg-slate-50 sm:bg-white p-4 h-60 '>
      <section className='sm:float-left sm:w-96 sm:pt-24'>
        <div className='sm:text-xl font-medium mb-5'>{data.title}</div>
        <div className='text-xs sm:text-sm text-slate-500 mb-4 leading-5 h-20 pr-2'>{data.content}</div>
        <Link href={data.link}>
          <Button type='primary'>{data.button}</Button>
        </Link>
      </section>
      <section className='sm:float-right hidden sm:block'>
        <Image src={data.img} alt='' width={400} height={400}></Image>
      </section>
    </div>
  )
}
