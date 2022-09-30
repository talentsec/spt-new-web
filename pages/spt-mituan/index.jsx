import React from 'react'
import Image from 'next/image'
import { Button, Tabs } from 'antd'
import Layout from '@/components/common/Layout'
import MainImg from '@/assets/img/product/mituanMain.png'
import Title from '@/components/common/Title'
import AdvantageImg from '@/assets/img/product/advantage.svg'
import {mituanApplication, riskCoverList, mituanfunctionList, mituanTabList} from '@/constant/info.js'
import ApplicationCard from '@/components/product/mituan/ApplicationCard.jsx'
import RiskPannel from '@/components/product/mituan/RiskPannel.jsx'
import FunctionPannel from '@/components/product/mituan/FunctionPannel.jsx'
import Training from '@/components/product/mituan/Training.jsx'

export default function index() {
  return (
    <Layout>
      <div className='min-w-max'>
        <section className='w-screen sm:min-w-main-width relative'>
          <Image src={MainImg} alt='' layout='responsive'></Image>
          <div className='absolute top-1/4 text-center text-5xl text-white w-full'>谜团·网络攻防靶场</div>
          <div className='absolute top-1/2 w-full px-auto -mt-5'>
            <div className='text-center text-xl text-white w-4/5 mx-auto leading-8 tracking-new-widest font-light'>谜团网络靶场平台是对实网靶场的有效补充与拓展，在螣龙安全大脑的极智赋能下，结合云平台、虚拟化、攻防技术等手段，打造现实网络系统的平行仿真系统，用于学习与培训、测试与验证、评估与演练。</div>
          </div>
          <div className='absolute top-3/4 mx-auto px-auto w-full flex justify-center'>
            <Button size='large' type='primary' onClick={() => location.href = 'https://mituan.zone'}>免费试用谜团靶场</Button>
          </div>
        </section>
        <section className='sm:max-w-7xl sm:mx-auto mt-20'>
          <section>
            <Title title="谜团靶场·应用场景" subTitle='Application scenarios'></Title>
            <div className='sm:flex justify-center gap-4 mb-20'>
              {
                mituanApplication.map((item, key) => {
                  return <ApplicationCard key={key} data={item}></ApplicationCard>
                })
              }
            </div>
          </section>
          <section>
            <Title title="漏洞涵盖" subTitle='Vulnerability Coverage'></Title>
            <div className='flex justify-center gap-5 flex-wrap mb-20'>
              {
                riskCoverList.map((item, key) => {
                  return <RiskPannel key={key} data={item}></RiskPannel>
                })
              }
            </div>
          </section>
          <section>
            <Title title="核心功能" subTitle='Core functions'></Title>
            <div className='sm:flex flex-wrap justify-center gap-2 mb-20'>
              {
                mituanfunctionList.map((item, key) => {
                  return <FunctionPannel key={key} data={item}></FunctionPannel>
                })
              }
            </div>
          </section>
          <section>
            <Title title="靶场配套安全培训" subTitle='Safety Training'></Title>
            <div className='mb-20'>
              <Training></Training>
            </div>
          </section>
          <section>
            <Title title="亮点优势" subTitle='Highlights'></Title>
            <div className='mb-20 flex justify-between p-4'>
              <section className='w-1/2'>
                <h3 className='text-3xl'>我们的优势与亮点</h3>
                <h4 className='text-xl font-normal'>
                  <span className='inline-block w-1.5 h-1.5 rounded bg-blue-500 mr-3'></span>
                  超逼真模拟技术
                </h4>
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
          </section>
          <section>
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
          </section>
        </section>
      </div>
    </Layout>
  )
}
