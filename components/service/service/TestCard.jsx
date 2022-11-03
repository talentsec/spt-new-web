import React from 'react'
import Image from 'next/image'
import { RightOutlined } from '@ant-design/icons'
import icon1 from '@/assets/img/product/user1.svg'
import icon2 from '@/assets/img/service/contentIcon.svg'


export default function TestCard() {
  return (
    <div className='p-4 sm:p-6 sm:flex w-full items-center mb-20 sm:h-80'>
      <section className='bg-black p-5 sm:p-8 sm:w-1/3 text-white sm:h-60 hover:h-80 flex items-center transition-all rounded-lg sm:rounded-none mb-3 sm:mb-0'>
        <div>
          <span className='hidden sm:block'>
            <Image src={icon2} alt='' />
          </span>
          <section className='text-xl sm:font-bold sm:mt-7 mb-4'>
            黑盒测试
          </section>
          <section className='leading-6 text-sm  font-light sm:font-normal'>
            在对被测试目标一无所知的情况下进行挖掘与渗透
          </section>
        </div>
      </section>
      <section className='bg-gray-200 p-5 sm:p-8 sm:w-1/3 sm:h-60 hover:h-80 flex items-center transition-all rounded-lg sm:rounded-none mb-3 sm:mb-0'>
        <div>
          <span className='hidden sm:block'>
            <Image src={icon1} alt='' />
          </span>
          <section className='text-xl sm:font-bold sm:mt-7 mb-4'>
            灰盒测试
          </section>
          <section className='text-gray-400 leading-6 text-sm  font-light sm:font-normal'>
            介于黑白盒测试之间，在捕获机构资料或系统账号等信息后进行渗透
          </section>
        </div>
      </section>
      <section className='p-5 sm:p-8 sm:w-1/3 sm:h-60 bg-blue-700  text-white hover:h-80 flex items-center transition-all rounded-lg sm:rounded-none'>
        <div>
          <span className='hidden sm:block'>
            <Image src={icon2} alt='' />
          </span>
          <section className='text-xl sm:font-bold sm:mt-7 mb-4'>
            白盒测试
          </section>
          <section className='leading-6 text-sm font-light sm:font-normal'>
            拿到授权，获得被测目标的资料、应用源代码、数据库结构等，接入内网进行渗透
          </section>
        </div>
      </section>
      {/* <section className='bg-blue-700 px-8 h-60 hover:h-80 text-white w-1/3'>
        <Image src={icon2} alt=''></Image>
        <section className='text-xl font-bold mt-7 mb-4'>
          白盒测试
        </section>
        <section className=' leading-6 text-sm'>
          授权获得被测目标的资料、应用源代码、数据库结构，并且接入内网进行渗透；进行代码审计
        </section>
      </section> */}
    </div>
  )
}
