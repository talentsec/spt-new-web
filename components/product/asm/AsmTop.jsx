import React from 'react'
import Image from 'next/image'
import icon1 from '@/assets/img/product/asmTopIcon1.svg'
import icon2 from '@/assets/img/product/asmTopIcon2.svg'
import icon3 from '@/assets/img/product/asmTopIcon3.svg'
import icon4 from '@/assets/img/product/asmTopIcon4.svg'

const infoList = [
  {
    icon: icon1,
    title: '探测资产',
    text: '针对海量资产的快速资产探测发现'
  },
  {
    icon: icon2,
    title: '搜索功能',
    text: '接近自然语言的资产数据搜索功能'
  },
  {
    icon: icon3,
    title: '可视化展示',
    text: '沉浸式资产数据可视化拖拽及展示'
  },
  {
    icon: icon4,
    title: '数据审核',
    text: '持续性数据审核'
  },
]


export default function AsmTop() {
  return (
    <div className='sm:w-full mx-4 sm:mx-0 sm:min-w-main-width rounded-lg shadow-card'>
      <div className='sm:max-w-7xl sm:mx-auto sm:flex justify-between items-center px-6 sm:px-0'>
        {
          infoList.map((item, key) => {
            return (
              <React.Fragment key={key}>
                <div className='py-4 sm:py-6 flex justify-between sm:block flex-row-reverse items-center'>
                  <section className='flex justify-center sm:mb-4 '>
                    <Image src={item.icon} alt='' />
                  </section>
                  <div>
                    <section className='sm:text-center text-base mb-1'>{item.title}</section>
                    <section className='sm:text-center font-light sm:font-normal text-gray-500 mt-2 sm:mt-0'>{item.text}</section>
                  </div>
                </div>
                {
                  key === infoList.length - 1 ? null : <div className='border-b sm:border-r sm:h-10 flex-shrink-0' />
                }
              </React.Fragment>
            )
          })
        }
      </div>
    </div>
  )
}
