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
import phoneMain from '@/assets/img/home/phoneMain.png'
import AnimationWrapper from '@/components/common/AnimationWrapper'

const problemList = [
  {
    title: '潮汐开源社区是什么？',
    text: '潮汐开源社区是一个构建于网络安全领域的相关社区，该社区秉持开源共享的精神，致力于将网络安全检测及渗透测试任务专业化、在线化、自动化与一体化。潮汐开源社区为广大安全从业人员提供了一个网络安全工具及基础测试任务的聚合平台，任何人或者组织都可以使用潮汐开源平台，直观地调用一些工具直接在线对安全资产进行探测，或者加入社区作为安全工具的开发者，上传自己创建的工具与编排供其他社区用户使用，潮汐开源社区的用户甚至可以将自己整套的网络渗透任务全部基于潮汐开源社区的平台实现。'
  },
  {
    title: '潮汐开源社区能为网络安全从业人员带来什么？',
    text: '对于使用者而言，可以通过潮汐平台组件&AI引擎、工具开源市场和订阅式安全应用告别重复的服务属性工作，大幅度提高工作效率；对于开发者而言，能直接调用平台的自动化安全能力，创造属于自己的安全工具或编排。'
  },
  {
    title: '我的数据安全吗？它们被保存在哪里？',
    text: '安全。潮汐平台将底层的存储引擎设计为 NoSQL，即非关系型数据库，技术选型是 MongoDB。潮汐平台基于 MongoDB 的命名空间 设计了一个针对性的存储协议，基于这个协议，每个任务的数据存储相互之间都是独立的，并且可以根据协议被停止。'
  },
]


export default function Tide() {
  return (
    <Layout>
      <div className='sm:min-w-max'>
        <section className='w-full sm:min-w-main-width relative'>
          <div className='hidden sm:block'>
            <Image src={MainImg} alt='' layout='responsive'></Image>
          </div>
          <div className='block sm:hidden'>
            <Image src={phoneMain} alt='' layout='responsive'></Image>
          </div>
          <div className='absolute top-1/4 text-center text-xl font-medium sm:font-normal sm:text-5xl sm:text-white w-full'>潮汐·开源社区</div>
          <div className='absolute top-1/2 w-full px-auto -mt-5 font-light'>
            <div className='text-center text-sm sm:text-xl sm:text-white w-4/5 mx-auto sm:leading-8 tracking-new-widest'>新一代主动安全基础设施，在这里，您可以得到强大的技术支持，通过便捷的方式轻松完成工具编排与开发，成为安全技术的贡献者！</div>
          </div>
          <div className='absolute top-3/4 mx-auto px-auto w-full justify-center gap-6 hidden sm:flex'>
            <Button size='large' type='primary' shape="round" onClick={() => location.href = 'https://lev.zone/'}>立即体验</Button>
            <Link href='/spt-contact'>
              <Button size='large' shape="round" ghost>在线咨询</Button>
            </Link>
          </div>
          <div className='absolute top-3/4 mt-8 mx-auto px-auto w-full justify-center gap-6 flex sm:hidden'>
            <Button size='large' type='primary' onClick={() => location.href = 'https://lev.zone/'}>立即体验</Button>
            <Link href='/spt-contact'>
              <Button size='large'>在线咨询</Button>
            </Link>
          </div>
        </section>
        <section className='sm:max-w-7xl sm:mx-auto mt-10 sm:mt-20'>
          <section>
            <Title title="平台功能介绍" subTitle='Platform function introduction'></Title>
            <AnimationWrapper>
              <div className='sm:flex justify-center gap-6 mb-6 sm:mb-20 w-full px-4 sm:px-0 -mt-8 sm:mt-0'>
                {
                  tideFunctionList.map((item, key) => {
                    return (
                      <div key={key} className='sm:w-1/4'>
                        <FunctionCard data={item}></FunctionCard>
                      </div>
                    )
                  })
                }
              </div>
            </AnimationWrapper>
          </section>
          <section>
            <Title title="对于使用者" subTitle='for users'></Title>
            <div className='tracking-new-widest w-full text-center -translate-y-8 text-xs sm:text-lg px-8'>通过以下功能告别重复的服务属性工作，大幅度提高工作效率</div>
            <AnimationWrapper>
              <UserCard></UserCard>
            </AnimationWrapper>
          </section>
          <section>
            <Title title="对于开发者" subTitle='For developers'></Title>
            <div className='tracking-new-widest w-full text-center -translate-y-8 text-xs sm:text-lg px-8'>直接调用平台的自动化安全能力，创造您自己的安全工具或编排</div>
            <AnimationWrapper>
              <DeveloperCard></DeveloperCard>
            </AnimationWrapper>
          </section>
          <section className='mb-16'>
            <Title title="社区指南以及常见问题" subTitle='Community Guidelines'></Title>
            <Problem list={problemList} expandIndex={0}></Problem>
          </section>
        </section>
      </div>
    </Layout>
  )
}
