import React from 'react'
import Layout from '@/components/common/Layout'
import MainImg from '@/assets/img/product/tide.png'
import Image from 'next/image'
import Title from '@/components/common/Title'
import { Button } from 'antd'
import { tideFunctionList } from '@/constant/info.js'
import FunctionCard from '@/components/product/tide-open/FunctionCard.jsx'
import DeveloperCard from '@/components/product/tide-open/DeveloperCard.jsx'
import UserCard from '@/components/product/tide-open/UserCard.jsx'
import Problem from '@/components/product/tide-open/Problem'
import Link from 'next/link'

export default function Tide() {
  return (
    <Layout>
      <div className='min-w-max'>
        <section className='w-screen sm:min-w-main-width relative'>
          <Image src={MainImg} alt='' layout='responsive'></Image>
          <div className='absolute top-1/4 text-center text-5xl text-white w-full'>潮汐·开源社区</div>
          <div className='absolute top-1/2 w-full px-auto -mt-5 font-light'>
            <div className='text-center text-xl text-white w-4/5 mx-auto leading-8 tracking-new-widest'>新一代主动安全基础设施，在这里，您可以得到强大的技术支持，通过便捷的方式轻松完成工具编排与开发，成为安全技术的贡献者！</div>
          </div>
          <div className='absolute top-3/4 mx-auto px-auto w-full flex justify-center gap-6'>
            <Button size='large' type='primary' shape="round" onClick={() => location.href = 'https://lev.zone/'}>立即体验</Button>
            <Link href='/spt-contact'>
              <Button size='large' shape="round" ghost>在线咨询</Button>
            </Link>
          </div>
        </section>
        <section className='sm:max-w-7xl sm:mx-auto mt-20'>
          <section>
            <Title title="平台功能介绍" subTitle='Platform function introduction'></Title>
            <div className='sm:flex justify-center gap-6 mb-20 '>
              {
                tideFunctionList.map((item, key) => {
                  return <FunctionCard key={key} data={item}></FunctionCard>
                })
              }
            </div>
          </section>
          <section>
            <Title title="对于使用者" subTitle='for developers'></Title>
            <div className='tracking-new-widest w-full text-center -translate-y-8 text-lg'>通过以下功能告别重复的服务属性工作，大幅度提高工作效率</div>
            <UserCard></UserCard>
          </section>
          <section>
            <Title title="对于开发者" subTitle='For users'></Title>
            <div className='tracking-new-widest w-full text-center -translate-y-8 text-lg'>直接调用平台的自动化安全能力，创造您自己的安全工具或编排</div>
            <DeveloperCard></DeveloperCard>
          </section>
          <section>
            <Title title="社区指南以及常见问题" subTitle='Community Guidelines'></Title>
            <Problem></Problem>
          </section>
        </section>
      </div>
    </Layout>
  )
}
