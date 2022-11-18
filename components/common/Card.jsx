import React from 'react'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Card ({ data }) {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

  return (
    <motion.div
      style={{
        // scale
      }}
    >
      <div className='sm:w-96 flex-grow-0 flex-shrink-0 rounded-lg shadow-card mb-5 cursor-pointer pb-1 sm:hover:scale-105 transition-all'>
        <div className='p-9'>
          <div className='flex justify-center'>
            <Image src={data.icon} alt='' />
          </div>
          {data.img}
          <div className='mx-auto w-full text-center leading-7 mb-2 text-xl font-bold'>{data.title}</div>
          <div className='text-xs leading-6 text-slate-500 text-center'>{data.content}</div>
        </div>
        <div className='flex justify-around mb-12'>
          <Link href={String(data.link)}>
            <Button type='primary'>{data.button}</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
