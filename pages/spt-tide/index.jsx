import React from 'react'
import Layout from '@/components/common/Layout'
import Link from 'next/link'
import Image from 'next/image'
import Title from '@/components/common/Title'
import { Button } from 'antd'
import { companySafeList } from '@/constant/info.js'
import ValueSlider from '@/components/product/tide/ValueSlider'
import ApplicationCard from '@/components/product/mituan/ApplicationCard.jsx'
import Occasion from '@/components/product/tide/Occasion'
import Footer from '@/components/common/Footer'
import coreImg1 from '@/assets/img/product/coreFunction1.png'
import coreImg2 from '@/assets/img/product/coreFunction2.png'
import coreImg3 from '@/assets/img/product/coreFunction3.png'
import MainImg from '@/assets/img/product/tide2.png'
import AnimationWrapper from '@/components/common/AnimationWrapper'
import phoneMain from '@/assets/img/home/phoneMain.png'

export default function Tide() {
  return (
    <Layout>
      <div className='sm:min-w-max mb-8'>
        <section className='w-full sm:min-w-main-width relative'>
          <div className='sm:min-w-main-width hidden sm:block'>
            <Image src={MainImg} alt='' layout='responsive' />
          </div>
          <div className='sm:min-w-main-width block sm:hidden'>
            <Image src={phoneMain} alt='' layout='responsive' />
          </div>
          <div className='absolute top-1/4 text-xl sm:text-5xl sm:text-white text-center w-full'>潮汐·模拟攻击系统</div>
          <div className='absolute top-1/2 w-full px-auto -mt-5'>
            <div className='text-center text-sm sm:text-xl sm:text-white w-4/5 mx-auto sm:leading-8 tracking-new-widest font-light'>通过对特定安全过程进行全生命周期地、持续化地、自动化地覆盖式检测，潮汐BAS平台能帮助企业及政府机构有效地识别安全缺陷、发现安全建设不足并且进行数据驱动下的指向性优化建设。</div>
          </div>
          <div className='absolute top-3/4 mx-auto px-auto w-full flex justify-center gap-6'>
            {/* <Button size='large' type='primary' shape='round' onClick={() => location.href = 'https://lev.zone/'}>立即体验</Button> */}
            <div className='hidden sm:block'>
              <Link href='/spt-contact'>
                <Button size='large' shape='round' ghost>立即咨询</Button>
              </Link>
            </div>
            <div className='block sm:hidden mt-14'>
              <Link href='/spt-contact'>
                <Button size='large' shape='round' type='primary'>立即咨询</Button>
              </Link>
            </div>

          </div>
        </section>
        <section className='sm:max-w-7xl mx-4 sm:mx-auto mt-20'>
          <section>
            <Title title='企业安全' subTitle='Enterprise security status' />
            <AnimationWrapper>
              <div className='sm:flex justify-center gap-6 mb-20 '>
                {
                  companySafeList.map((item, key) => {
                    return <ApplicationCard key={key} data={item} />
                  })
                }
              </div>
            </AnimationWrapper>
          </section>
          <section>
            <Title title='核心功能' subTitle='Core functions' />
            <div className='sm:flex justify-center gap-16 mb-4 sm:mb-20 items-center py-10 border-b shadow-card sm:shadow-none rounded-lg sm:rounded-none p-4 sm:p-0'>
              <section className='sm:w-2/5 text-left'>
                <h1 className='text-xl sm:text-2xl font-bolder sm:mb-8'>持续的模拟攻击</h1>
                <h1 className='text-base sm:text-xl font-light sm:font-normal mb-6'>来验证企业目前的防御体系是否奏效</h1>
                <section className='mb-2 font-light leading-6 text-gray-500 mt-4 flex justify-start gap-3'>
                  <span className='inline-block w-2 h-2 rounded bg-blue-700 flex-grow-0 flex-shrink-0 mt-2' />
                  <span>
                    使用攻击模拟技术，对整个安全基础架构进行连续、自动化的攻击检测
                  </span>
                </section>
                <section className='mb-2 font-light leading-6 text-gray-500 mt-4 flex justify-start gap-3'>
                  <span className='inline-block w-2 h-2 rounded bg-blue-700 flex-grow-0 flex-shrink-0 mt-2' />
                  <span>
                    支持多资产（网页、主机）全生命周期安全性模拟检测，覆盖多种安全攻击场景，以及5个企业业务场景
                  </span>
                </section>
              </section>
              <section className='sm:w-1/2 flex-shrink-0 flex-grow-0 mt-8 sm:mt-0'>
                <Image src={coreImg1} alt='' />
              </section>
            </div>
            <div className='sm:flex flex-row-reverse justify-center gap-16 mb-4 sm:mb-20 items-center py-10 border-b shadow-card sm:shadow-none rounded-lg sm:rounded-none p-4 sm:p-0'>
              <section className='sm:w-2/5 text-left'>
                <h1 className='text-xl sm:text-2xl font-bolder sm:mb-8'>帮助企业优先排序</h1>
                <h1 className='text-base sm:text-xl font-light sm:font-normal mb-6'>先解决亟待处理的安全短板</h1>
                <section className='mb-2 font-light leading-6 text-gray-500 mt-4 flex justify-start gap-3'>
                  <span className='inline-block w-2 h-2 rounded bg-blue-700 flex-grow-0 flex-shrink-0 mt-2' />
                  <span>
                    持续的模拟攻击可以定位企业漏洞、定位企业安全短板，全面负责企业安全信息
                  </span>
                </section>
                <section className='mb-2 font-light leading-6 text-gray-500 mt-4 flex justify-start gap-3'>
                  <span className='inline-block w-2 h-2 rounded bg-blue-700 flex-grow-0 flex-shrink-0 mt-2' />
                  <span>
                    帮助企业分清：哪些安全漏洞是当前亟待处理的，解决哪些安全漏洞才能尽可能地提升整体安全性、降低安全风险
                  </span>
                </section>
              </section>
              <section className='sm:w-1/2 flex-shrink-0 flex-grow-0 mt-8 sm:mt-0'>
                <Image src={coreImg2} alt='' />
              </section>

            </div>
            <div className='sm:flex justify-center gap-16 mb-20 items-center py-10 border-b shadow-card sm:shadow-none rounded-lg sm:rounded-none p-4 sm:p-0'>
              <section className='sm:w-2/5 text-left'>
                <h1 className='text-xl sm:text-2xl font-bolder sm:mb-8'>修复并消除安全漏洞</h1>
                <section className='mb-2 font-light leading-6 text-gray-500 mt-4 flex justify-start gap-3'>
                  <span className='inline-block w-2 h-2 rounded bg-blue-700 flex-grow-0 flex-shrink-0 mt-2' />
                  <span>
                    提供有关如何改进安全防御系统、纠正安全方面漏洞/问题的可行性指南
                  </span>
                </section>
                <section className='mb-2 font-light leading-6 text-gray-500 mt-4 flex justify-start gap-3'>
                  <span className='inline-block w-2 h-2 rounded bg-blue-700 flex-grow-0 flex-shrink-0 mt-2' />
                  <span>
                    提供高端的订阅式网络安全年度防御服务，确保企业可以在不断变化的外部环境威胁面前保持防御能力
                  </span>
                </section>
              </section>
              <section className='sm:w-1/2 flex-shrink-0 flex-grow-0 mt-8 sm:mt-0'>
                <Image src={coreImg3} alt='' />
              </section>
            </div>
          </section>
          <section>
            <Title title='应用价值' subTitle='Application value' />
            <AnimationWrapper>
              <ValueSlider />
            </AnimationWrapper>
          </section>
          <section>
            <Title title='应用场景' subTitle='Application scenario' />
            <AnimationWrapper>
              <Occasion />
            </AnimationWrapper>
          </section>
        </section>
      </div>
      <Footer />
    </Layout>
  )
}
