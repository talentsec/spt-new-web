import Image from 'next/image'
import React, { useState } from 'react'
import { Modal } from 'antd'

export default function NewsPannel({ data }) {
  const [modalDisplay, setModalDisplay] = useState(false)
  
  const handleJump = (link) => {
    if (data.detail) {
      setModalDisplay(true)
    } else if (link) {
      window.open(link)
    }
  }

  return (
    <div className='bg-white w-screen sm:w-full sm:shadow-card p-4 sm:p-8 pb-4 sm:pb-2 mb-4 sm:rounded-lg sm:hover:translate-x-2'>
      <section
        className='text-base sm:text-lg font-medium mb-3 hover:text-blue-700 cursor-pointer'
        onClick={() => handleJump(data.link)}
      >
        {data.title}
      </section>
      <section className='flex gap-2 sm:gap-4 relative'>
        {data.img ?
          <div className='flex-shrink-0'>
            <div className='hidden sm:block'>
              <Image src={data.img} alt='' width={180} height={126} />
            </div>
            <div className='block sm:hidden'>
              <Image src={data.img} alt='' width={94} height={64} />
            </div>
          </div> : null}
        <div className='sm:py-4 sm:pb-8 flex flex-col justify-between w-full'>
          <section className='font-xs sm:font-sm bg-gray-100 p-1 sm:p-3 rounded-lg text-gray-500 leading-6 h-14 sm:h-auto overflow-hidden'>
            {data.summary}
          </section>
          {
            function () {
              if (data.tag && data.img) {
                return (
                  <div>
                    <section className='sm:hidden absolute left-0 top-6 inline bg-orange-400 w-fit text-white p-1 rounded text-xs mt-3 '>
                      {data.tag}
                    </section>
                    <section className='hidden sm:inline-block bg-orange-400 w-fit text-white p-1 rounded text-xs mt-3 '>
                      {data.tag}
                    </section>
                  </div>
                )
              } else if (data.tag) {
                return (
                  <section className='inline bg-orange-400 w-fit text-white p-1 rounded text-xs mt-3 '>
                    {data.tag}
                  </section>
                )
              }
            }()
          }
        </div>
      </section>
      <Modal
        title='潮汐ASM介绍'
        width={800}
        open={modalDisplay}
        footer={null}
        onCancel={() =>setModalDisplay(false)}
      >
        {/* <data.detail></data.detail> */}
        {data.detail && data.detail()}
      </Modal>
    </div>
  )
}
