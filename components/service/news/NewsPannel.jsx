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
    <div className='shadow-card p-8 pb-2 mb-4 rounded-lg hover:translate-x-2'>
      <section
        className='text-lg font-medium mb-3 hover:text-blue-700 cursor-pointer'
        onClick={() => handleJump(data.link)}
      >
        {data.title}
      </section>
      <section className='flex gap-4'>
        {data.img ?
          <div className='flex-shrink-0'>
            <Image src={data.img} alt='' />
          </div> : null}
        <div className='py-4 pb-8 flex flex-col justify-between w-full'>
          <section className='bg-gray-100 p-3 rounded-lg text-gray-500 leading-6'>
            {data.summary}
          </section>
          {data.tag ?
            <section className='inline bg-orange-400 w-fit text-white p-1 rounded text-xs mt-3'>
              {data.tag}
            </section> : null}
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
