import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from "framer-motion";


export default function TeamCard({ data, index }) {
  const { scrollYProgress } = useScroll();
  const isWeb = global.screen?.width > 640
  const scale = useTransform(scrollYProgress, [isWeb ? 0.6 : 0.5 + (isWeb ? 0 : index * 0.1), isWeb ? 0.8 : 0.64 + (isWeb ? 0 : index * 0.1)], [0.7, 1]);

  return (
    <motion.div
      className='container'
      style={{
        scale
      }}
    >
      <div className='bg-slate-50 sm:bg-white sm:w-64 flex-grow-0 flex-shrink-0 rounded-lg hover:shadow-card mb-5 cursor-pointer'>
        <div className='p-9'>
          <div className='flex justify-center mb-2'>
            <Image src={data.icon} alt='' />
          </div>
          {data.img}
          <div className='mx-auto w-full text-center leading-7'>{data.title}</div>
          <div className='mx-auto w-full text-center leading-7 mb-2 text-sm text-slate-600'>{data.subTitle}</div>
          <div className='text-xs leading-6 text-slate-500 text-center'>{data.content}</div>
        </div>
      </div>
    </motion.div>
  )
}
