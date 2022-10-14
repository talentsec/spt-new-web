import Image from 'next/image'
import React, { useState } from 'react'

export default function SelectedCard({ list }) {
  const [curItem, setCurItem] = useState(list[0])
  return (
    <div className='flex w-full gap-4'>
      <div className='w-screen sm:w-2/5 flex-col justify-between flex-shrink-0 px-4 sm:p-0'>
        {
          list.map((item, key) => {
            return (
              <div
                key={key}
                className='p-7 sm:pr-16 grow-0 text-white cursor-pointer mb-4 rounded-lg sm:rounded-none'
                style={{
                  backgroundColor: curItem.title === item.title ? '#165DFF' : '#282C32',
                }}
                onClick={() => setCurItem(item)}
              >
                <section className='text-base sm:text-xl mb-2'>
                  {item.title}
                </section>
                <section className='text-xs sm:text-sm leading-6 font-light h-12'>
                  {item.text}
                </section>
              </div>
            )
          })
        }
      </div>
      <div className='hidden sm:block p-5 flex-6 sm:w-3/5 mb-4' style={{ backgroundColor: '#282C32', }}>
        <div>
          <Image src={curItem.img} alt='' layout='responsive' />
        </div>
      </div>
    </div>
  )
}
