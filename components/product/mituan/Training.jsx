import React from 'react'
import Image from 'next/image'
import line1 from '@/assets/img/product/line1.svg'
import line2 from '@/assets/img/product/line2.svg'
import icon1 from '@/assets/img/product/training-1.svg'
import icon2 from '@/assets/img/product/training-2.svg'
import icon3 from '@/assets/img/product/training-3.svg'
import icon4 from '@/assets/img/product/training-4.svg'
import icon5 from '@/assets/img/product/training-5.svg'
import icon6 from '@/assets/img/product/training-6.svg'

const infoList = [
  {
    icon: icon4,
    title: 'Web安全',
    content: '全面系统地学习web安全架构、web安全审计等核心内容（适用于高校以及网络安全研究型人员）'
  },
  {
    icon: icon2,
    title: '网络攻防',
    content: '包含网络攻击的应急响应与电子取证、攻击溯源与黑客驱离、勒索病毒防御以及取证三大内容（适用于企业、网络安全研究型人员）'
  },
  {
    icon: icon1,
    title: '安全运维',
    content: '讲解企业安全运维及安全加固等内容，课程包含但不限于系统安全排查、实战应急响应、Linux安全运维、SSH服务运维与安全实战等（适用于网络安全研究型人员）'
  },
  {
    icon: icon3,
    title: '渗透测试技术',
    content: '主要分为四个模块，内容包含Kali Linux、SQL注入、Metasploit的使用方法以及EXP开发（适用于网络安全研究型人员）'
  },
]

const Part = ({ data }) => {
  return (
    <div className='flex gap-4 p-b-10 w-2/5 h-44 px-5 mr-28'>
      <section className='flex-shrink-0'>
        <Image src={data.icon} alt='' width={80} height={80} />
      </section>
      <section>
        <section className='font-extrabold text-xl leading-7 mb-3'>{data.title}</section>
        <section className='text-sx text-gray-400 leading-7'>{data.content}</section>
      </section>
    </div>
  )
}

export default function Training() {
  return (
    <div>
      <div className='relative rounded-xl shadow-card pt-20 hidden sm:block'>
        <section className='absolute left-20 top-15'>
          <Image src={line1} alt='' />
        </section>
        <section className='absolute left-20 top-15'>
          <Image src={line2} alt='' />
        </section>
        <section className='sm:flex flex-wrap justify-between px-6 mb-16  '>
          {
            infoList.map((item, key) => {
              return <Part key={key} data={item} />
            })
          }
        </section>
        <section
          className='h-40 relative' style={{
          background: 'linear-gradient(90deg, #165DFF 0%, #6AA1FF 100%)'
          }}
        >
          <section className='w-4/5 flex p-7 gap-6'>
            <section className='flex-shrink-0'>
              <Image src={icon5} alt='' />
            </section>
            <section>
              <section className='text-white text-xl mb-4'>安全培训</section>
              <section className='text-white font-light pr-12'>在教学实训功能中，设置了多种类型的安全课程，并按照内容难度进行分类，用户可以依照能力层级进行自主学习。
                教师可以灵活选取各类资源组建课程，满足个性化的课程教学要求。
              </section>
            </section>
          </section>
          <section className='absolute right-0 -top-14'>
            <Image src={icon6} alt='' />
          </section>
        </section>
      </div>
      <div className='block sm:hidden'>
        {
          infoList.map((item, key) => {
            return (
              <div key={key} className='shadow-card p-6 mb-3 rounded-xl'>
                <section>
                  {item.title}
                </section>
                <section className='text-gray-400 mt-2 text-xs leading-5'>
                  {item.content}
                </section>
              </div>
            )
          })
        }
        <div
          className='shadow-card p-6 mb-3 rounded-xl text-white relative'
          style={{
            background: 'linear-gradient(90deg, #165DFF 0%, #6AA1FF 100%)'
          }}
        >
          <section className=''>
            安全培训
          </section>
          <section className='mt-2 text-xs leading-5'>
            在教学实训功能中，设置了多种类型的安全课程，并按照内容难度进行分类，用户可以依照能力层级进行自主学习。
            教师可以灵活选取各类资源组建课程，满足个性化的课程教学要求。
          </section>
          <section className='absolute w-24 h-24 -bottom-16 right-0'>
            <Image src={icon6} alt='' />
          </section>
        </div>
      </div>
    </div>
  )
}
