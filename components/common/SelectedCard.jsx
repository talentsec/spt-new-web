import Image from 'next/image'
import React, { useState } from 'react'

export default function SelectedCard({ list }) {
  const [curItem, setCurItem] = useState(list[0])
  return (
    <div className='flex w-full gap-4'>
      <div className='w-2/5 flex-col justify-between flex-shrink-0' >
        {
          list.map((item, key) => {
            return (
              <div key={key} className="p-7 pr-16 grow-0 text-white cursor-pointer mb-4" style={{
                backgroundColor: curItem.title === item.title ? '#165DFF' : '#282C32',
              }}
                onClick={() => setCurItem(item)}>
                <section className='text-xl mb-2'>
                  {item.title}
                </section>
                <section className='text-sm leading-6 font-light h-12'>
                  {item.text}
                </section>
              </div>
            )
          })
        }
      </div>
      <div className='p-5 flex-6 w-3/5 mb-4' style={{ backgroundColor: '#282C32', }}>
        <div>
          <Image src={curItem.img} alt='' layout='responsive'></Image>
        </div>
      </div>
    </div>
  )
}
