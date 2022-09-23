import React from 'react'
import Layout from '../../../components/Layout'
import MainImg from '../../../assets/img/product/tide.png'
import Image from 'next/image'
import Title from '../../../components/Title'
import { Button } from 'antd'
import {tideFunctionList} from '../../../constant/info.js'
import FunctionCard from './FunctionCard'
import UserCard from './UserCard'

export default function Tide() {
  return (
    <Layout>
      <div className='min-w-max'>
        <section className='w-screen sm:min-w-main-width relative'>
          <Image src={MainImg} alt='' layout='responsive'></Image>
          <div className='absolute top-1/4 text-center text-5xl text-white w-full'>潮汐·开源社区</div>
          <div className='absolute top-1/2 w-full px-auto'>
            <div className='text-center text-xl text-white w-4/5 mx-auto leading-8 tracking-new-widest'>新一代主动安全基础设施，在这里，您可以得到强大的技术支持，通过便捷的方式轻松完成工具编排与开发，成为安全技术的贡献者！</div>
          </div>
          <div className='absolute top-3/4 mx-auto px-auto w-full flex justify-center gap-6'>
            <Button size='large' type='primary' shape="round">立即体验</Button>
            <Button size='large' shape="round" ghost>在线咨询</Button>
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
            <Title title="对于使用者" subTitle='For users'></Title>
            <div className='tracking-new-widest w-full text-center -translate-y-8 text-lg'>通过以下功能告别重复的服务属性工作，大幅度提高工作效率</div>
            <UserCard></UserCard>
          </section>
          {/* <section>
            <Title title="核心功能" subTitle='Core functions'></Title>
            <div className='sm:flex flex-wrap justify-center gap-2 mb-20'>
              {
                mituanfunctionList.map((item, key) => {
                  return <FunctionPannel key={key} data={item}></FunctionPannel>
                })
              }
            </div>
          </section> */}
          {/* <section>
            <Title title="靶场配套安全培训" subTitle='Application scenarios'></Title>
            <div className='mb-20'>
              <Training></Training>
            </div>
          </section> */}
          {/* <section>
            <Title title="亮点优势" subTitle='Highlights'></Title>
            <div className='mb-20 flex justify-between p-4'>
              <section className='w-1/2'>
                <h3 className='text-3xl'>我们的优势与亮点</h3>
                <h4 className='text-xl font-normal'>
                  <span className='inline-block w-1.5 h-1.5 rounded bg-blue-500 mr-3'></span>
                  超逼真模拟技术</h4>
                <section className='font-light text-gray-400 leading-6 pl-4 mb-5'>谜团靶场模拟了一个真实的 SOC，包括一个虚拟企业网络。它可以准确地模拟攻击场景，提供身临其境的体验，帮助学员们有效应对攻击。</section>
                <h4 className='text-xl font-normal'>
                  <span className='inline-block w-1.5 h-1.5 rounded bg-blue-500 mr-3'></span>
                  完整的训练和学习体系</h4>
                <section className='font-light text-gray-400 leading-6 pl-4 mb-5'>谜团靶场提供了丰富的训练场景，讲师可以借助品类繁多的工具在几分钟内设置并开始一个课程，其中包括汇报、会议记录、受训生排名和场景管理。</section>
                <h4 className='text-xl font-normal'>
                  <span className='inline-block w-1.5 h-1.5 rounded bg-blue-500 mr-3'></span>
                  使用专业工具构建自己的环境</h4>
                <section className='font-light text-gray-400 leading-6 pl-4 mb-5'>使用高级的拖放自定义工具设计自己的网络并创建自定义训练场景，并且能够根据特定的需求调整范围。</section>
              </section>
              <section>
                <Image src={AdvantageImg} alt=''></Image>
              </section>
            </div>
          </section> */}
          {/* <section>
            <Title title="页面展示" subTitle='page display'></Title>
            <div className='mb-20'>
              <Tabs
                  defaultActiveKey="1"
                  centered
                  tabBarGutter={160}
                  items={mituanTabList.map((item,key)=> {
                    return ({
                      label:item.category,
                      key,
                      children: <div>
                        <section className='sm:w-3/5 mx-auto mt-7 mb-2 rounded-xl overflow-hidden' >
                          <Image src={item.img} alt=''></Image>
                        </section>
                        <section className='text-center text-gray-400'>
                          {item.content}
                        </section>
                      </div>
                    })
                  })}
                />
            </div>
          </section> */}
        </section>
      </div>
    </Layout>
  )
}
