import React from 'react'
import Image from 'next/image'
import { RightOutlined } from '@ant-design/icons'
import icon1 from '@/assets/img/product/user1.svg'
import icon2 from '@/assets/img/product/user2.svg'
import icon3 from '@/assets/img/product/user3.svg'

const list = [
  {
    title: '平台组件&AI引擎',
    text: '为在线信息系统提供有效且便捷的持久化安全测试环境，有效解决生产系统无法实时针对新的安全事件进行测试的问题'
  },
  {
    title: '工具开源市场',
    text: ' 潮汐为安全从业人员搭建的开源市场中提供了大量原子级别工具/编排/模组/应用，为您增效赋能，实现工作效率大幅提升'
  },
  {
    title: '订阅式安全应用',
    text: '潮汐还提供了由官方/高安全能力企业/优秀个人搭建的自动化主动安全订阅式服务/应用，支持您完成全生命周期的安全弱点主动发现'
  },
]

export default function UserCard({ data }) {
  return (
    <div>
      <div className='p-6 w-full items-center mb-20 h-96 hidden sm:flex'>
        <section className='bg-gray-100 p-8 h-72 flex items-center hover:h-96 transition-all'>
          <div>
            <Image src={icon1} alt=''></Image>
            <section className='text-xl font-bold mt-7 mb-4'>
              平台组件&AI引擎
            </section>
            <section className='text-gray-400 leading-6'>
              为在线信息系统提供有效且便捷的持久化安全测试环境，有效解决生产系统无法实时针对新的安全事件进行测试的问题
            </section>
            <section className='h-8'></section>
          </div>
        </section>
        <section className='bg-gray-200 p-8 h-72 flex items-center hover:h-96 transition-all'>
          <div>
            <Image src={icon3} alt=''></Image>
            <section className='text-xl font-bold mt-7 mb-4'>
              工具开源市场
            </section>
            <section className='text-gray-400 leading-6'>
              潮汐为安全从业人员搭建的开源市场中提供了大量原子级别工具/编排/模组/应用，为您增效赋能，实现工作效率大幅提升
            </section>
            <section className='h-8'></section>
          </div>
        </section>
        <section className='bg-blue-700 p-8 text-white h-72 flex items-center hover:h-96 transition-all'>
          <div>
            <Image src={icon2} alt=''></Image>
            <section className='text-xl font-bold mt-7 mb-4'>
              订阅式安全应用
            </section>
            <section className=' leading-6'>
              潮汐还提供了由官方/高安全能力企业/优秀个人搭建的自动化主动安全订阅式服务/应用，支持您完成全生命周期的安全弱点主动发现
            </section>
            <section className='mt-4 flex items-center cursor-pointer hover:text-blue-200' onClick={() => location.href = '/'}>
              <span>了解详情</span>
              <span className='scale-75 pb-2'>
                <RightOutlined /><RightOutlined />
              </span>
            </section>
          </div>
        </section>
      </div>
      <div className='p-4 mb-20 h-96 sm:hidden'>
        {
          list.map((item, key) => {
            return (
              <div key={key} className='rounded-lg p-6 bg-gray-50 mb-2'>
                <section className='text-sm'>
                  {item.title}
                </section>
                <section className='text-xs leading-5 mt-1 text-gray-400'>
                  {item.text}
                </section>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}
