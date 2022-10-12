import React from 'react'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ data }) {

  return (
    <div>
      <div className='sm:w-96 flex-grow-0 flex-shrink-0 rounded-lg shadow-card mb-5 cursor-pointer pb-1 sm:hover:scale-105 transition-all sm:h-80'>
        <div className='p-9'>
          <div className='hidden sm:flex justify-center mb-6'>
            <Image src={data.icon} alt="" width={50} height={50} />
          </div>
          <div className='mx-auto w-full sm:text-center leading-7 mb-2 text-base sm:text-xl font-bold'>{data.title}</div>
          <div className='text-xs leading-6 text-slate-500 sm:text-center'>{data.content}</div>
        </div>
        {data.button ? <div className='flex justify-around sm:mb-12'>
          <Link href={String(data.link)}>
            <Button type='primary'>{data.button}</Button>
          </Link>
        </div> : null}
      </div>
    </div>
  )
}
