import React from 'react'
import Image from 'next/image'
import progress from '@/assets/img/service/progress.svg'
import progressIcon from '@/assets/img/service/progressIcon.png'
import progressBar from '@/assets/img/service/progressBar.svg'


export default function Progress({ list }) {
  return (
    <>
      <div className='hidden sm:block relative sm:min-w-max'>
        <div className='flex justify-center gap-5 '>
          {
          list.map((item, key) => {
            return (
              <div key={key} className='w-40 '>
                <section className='flex gap-3 h-20'>
                  <section className='flex-shrink-0'>
                    <Image src={progressIcon} alt='' />
                  </section>
                  <section className='text-xl'>
                    {item.title}
                  </section>
                </section>
                <section className='mb-10'>
                  <Image src={progressBar} alt='' />
                </section>
                <section className='text-sm text-gray-500 leading-7 w-34'>
                  {item.text}
                </section>
              </div>
            )
          })
        }
        </div>
        <div className='absolute top-16 w-full'>
          <div className='flex justify-center w-full'>
            <Image src={progress} alt='' />
          </div>
        </div>
      </div>
      <div className='block sm:hidden mx-7'>
        {
          list.map((item, key) => {
            return (
              <div key={key} className='mb-4'>
                <section className='flex font-bold text-base gap-2'>
                  <section className='flex-shrink-0'>
                    <Image src={progressIcon} alt='' />
                  </section>
                  {item.title}
                </section>
                <section className='ml-5 rounded-lg bg-gray-100 p-3'>
                  {item.text}
                </section>
              </div>
            )
          })
        }
      </div>
    </>

  )
}
