import { Button } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Tab({ list }) {
  const [selectedItem, setSelectedItem] = useState(list[0])

  return (
    <div>
      <section className='flex gap-4'>
        {
          list.map((item, key) => {
            return (
              <div
                key={key}
                className='flex-1 sm:flex-none px-4 py-2 cursor-pointer flex justify-center rounded'
                style={{
                  backgroundColor: selectedItem === item ? '#E8F3FF' : '#fff',
                  color: selectedItem === item ? '#165DFF' : '#1D2129',
                }}
                onClick={() => setSelectedItem(item)}
              >{item.title}
              </div>
            )
          })
        }
      </section>
      <section className='sm:h-48 mb-4 pr-6'>
        <h1 className='mt-6 mb-4 font-bold sm:font-normal text-lg sm:text-2xl text-gray-700'>{selectedItem.title}</h1>
        <section>
          {
            selectedItem.content.map((item, key) => {
              return (
                <div key={key} className='flex items-start mb-3'>
                  <span className='inline-block w-2 h-2 rounded-lg bg-blue-700 mr-2 shrink-0 mt-1' />
                  <span className='text-gray-500 font-light text-xs sm:text-sm'>
                    {item}
                  </span>
                </div>
              )
            })
          }
        </section>
      </section>
      {/* <Link href='/spt-contact'>
        <Button type='primary'>立即咨询</Button>
      </Link> */}
    </div>
  )
}
