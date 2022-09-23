import React from 'react'
import Image from 'next/image'
import icon1 from '../../../assets/img/product/user1.svg'
import icon2 from '../../../assets/img/product/user2.svg'
import icon3 from '../../../assets/img/product/user3.svg'


export default function UserCard({data}) {
  return (
    <div className=' p-6 w-64 '>
      <section>
        <Image src={icon1} alt=''></Image>
        <section className='text-xl font-bold mt-7 mb-4'>
          平台组件&AI引擎
        </section>
        <section className='text-gray-400 leading-6'>
          为在线信息系统提供有效且便捷的持久化安全测试环境，有效解决生产系统无法实时针对新的安全事件进行测试的问题
        </section>
      </section>
    </div>
  )
}
