import React, { useState } from 'react'
import Image from 'next/image'

export default function ContentCard ({ data, rounded }) {
  const [isHover, setIsHover] = useState(false)
  return (
    <div
      className='text-gray-800 hover:text-white p-4 sm:p-10 pb-9 transition-all'
      style={{
        borderRadius: rounded ? '8px' : '0',
        backgroundColor: isHover ? data.hoverColor : data.color,
        height: isHover ? (data.hoverHeight || '100%') : (data.height || '100%')
        // marginBottom: isHover ? '80px' : '40px'
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <section className='hidden sm:block'>
        <Image src={isHover ? data.hoverIcon : data.icon} alt='' />
      </section>
      <section className='my-4 font-medium text-sm sm:text-xl'>
        {data.title}
      </section>
      <section>
        {
          data.info.map((item, key) => {
            return (
              <div key={key}>
                <div className='mb-3'>
                  {
                    item.title
                      ?
                        <div className='text-base flex items-center gap-3'>
                          <span
                            className='inline-block rounded-full h-4 w-1' style={{
                            backgroundColor: isHover ? '#fff' : '#165DFF'
                            }}
                          />
                          <span className='text-xs sm:text-base'>
                            {item.title}
                          </span>
                        </div>
                      : null
                  }
                </div>
                {
                  item.list.map((text, index) => {
                    return (
                      <div key={index} className='sm:leading-6 leading-5 font-light mb-3 text-xs sm:text-sm'>
                        {text}
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </section>
    </div>
  )
}
