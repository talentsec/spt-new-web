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
              <div key={key} className='px-4 py-2 cursor-pointer' style={{
                backgroundColor: selectedItem === item ? '#E8F3FF' : '#fff',
                color: selectedItem === item ? '#165DFF' : '#1D2129',
              }}
                onClick={() => setSelectedItem(item)}>{item.title}</div>
            )
          })
        }
      </section>
      <section className='h-48 mb-4 pr-6'>
        <h1 className='mt-6 mb-4 text-2xl font-normal text-gray-700'>{selectedItem.title}</h1>
        <section>
          {
            selectedItem.content.map((item, key) => {
              return (
                <div key={key} className="flex items-center mb-3">
                  <span className='inline-block w-2 h-2 rounded-lg bg-blue-700 mr-2'></span>
                  <span className='text-gray-500 font-light'>
                    {item}
                  </span>
                </div>
              )
            })
          }
        </section>
      </section>
      <Link href='/spt-contact'>
        <Button type='primary'>立即咨询</Button>
      </Link>
    </div>
  )
}
