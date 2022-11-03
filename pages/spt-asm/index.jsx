import React, { useEffect } from 'react'
import Layout from '@/components/common/Layout'
import MainImg from '@/assets/img/product/asmMain.png'
import backImg from '@/assets/img/product/asmBack.svg'
import Image from 'next/image'
import Link from 'next/link'
import Title from '@/components/common/Title'
import { Button } from 'antd'
import { nowInfoList } from '@/constant/info.js'
import ApplicationCard from '@/components/product/mituan/ApplicationCard'
import AsmTop from '@/components/product/asm/AsmTop'
import AsmCarousel from '@/components/product/asm/AsmCarousel'
import ValueSlider from '@/components/product/asm/ValueSlider'
import Footer from '@/components/common/Footer'
import { motion, useScroll, useTransform } from "framer-motion";
import phoneMain from '@/assets/img/home/phoneMain.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import functionImg1 from '@/assets/img/product/asmCoreImg1.png'
import functionImg2 from '@/assets/img/product/asmCoreImg2.png'
import functionImg3 from '@/assets/img/product/asmCoreImg3.png'
import functionIcon1 from '@/assets/img/product/asmCoreFunctionIcon1.svg'
import functionIcon2 from '@/assets/img/product/asmCoreFunctionIcon2.svg'
import functionIcon3 from '@/assets/img/product/asmCoreFunctionIcon3.svg'


const functionsList = [
  {
    title: '海量协议、设备、指纹库',
    content: '从指纹数量来看，潮汐ASM平台支持多种协议类型的指纹；从单个指纹信息量来看，潮汐ASM平台已收录的设备指纹信息层次丰富、范围较广；从协议支持领域来看，潮汐平台ASM系统可支持数十种工业控制协议的识别，满足企业资产攻击面管理需求。',
    img: functionImg1,
    icon: functionIcon1
  },
  {
    title: '基于知识图谱的资产拓扑管理',
    content: '潮汐ASM平台能够为客户提供更高效、更原生的数据查询体验；在用户交互层面，考虑到网络空间资产数量庞大、种类繁多、实时性强，潮汐ASM平台为客户提供了基于知识图谱的图形化交互式方案。',
    img: functionImg2,
    icon: functionIcon2
  },
  {
    title: '基于近百个全球数据源的智能化资产挖掘能力',
    content: '潮汐ASM平台接入了全球近百个网络资产数据源，通过对其持续的处理和分析，潮汐ASM平台具备高级的自动化能力与智能化能力，使得用户可以仅仅通过设置Seed（种子值）的方式直接将潮汐ASM平台投入生产，大幅降低用户的学习成本、使用成本。',
    img: functionImg3,
    icon: functionIcon3
  },
]

export default function Tide() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.04, 0.2], [1, 1]);
  const bottomScale = useTransform(scrollYProgress, [0.9, 1], [0.6, 0.8]);

  return (
    <Layout>
      <div className='sm:min-w-max'>
        <section className='w-full sm:min-w-main-width relative'>
          <div className='sm:min-w-main-width hidden sm:block'>
            <Image src={MainImg} alt='' layout='responsive' />
          </div>
          <div className='sm:min-w-main-width block sm:hidden'>
            <Image src={phoneMain} alt='' layout='responsive' />
          </div>
          <div className='absolute top-1/4 text-center text-xl sm:text-5xl sm:text-white w-full'>潮汐·攻击面管理平台</div>
          <div className='absolute top-1/2 w-full px-auto -mt-5'>
            <div className='text-center text-sm sm:text-xl sm:text-white w-4/5 mx-auto sm:leading-8 tracking-new-widest font-light'>潮汐ASM平台是一个网络空间资产攻击面管理系统，通过录入简单的种子信息，潮汐ASM平台以种子为核心，在智能引擎以及近百个全球化数据源的加持下，可为企业客户自动化地拓展出完整的网络空间资产。</div>
          </div>
          <div className='absolute top-3/4 mx-auto px-auto w-full flex justify-center gap-6'>
            {/* <Button size='large' type='primary' shape='round' onClick={() => location.href = 'https://lev.zone/'}>立即体验</Button> */}
            <div className='hidden sm:block'>
              <Link href='/spt-contact'>
                <Button size='large' shape='round' ghost>立即咨询</Button>
              </Link>
            </div>
            <div className='block sm:hidden mt-4'>
              <Link href='/spt-contact'>
                <Button size='large' shape='round' type='primary'>立即咨询</Button>
              </Link>
            </div>
          </div>
        </section>
        <AsmTop />
        <section className='sm:max-w-7xl mt-20 mx-4 sm:mx-auto'>
          <section>
            <Title title='企业安全现状' subTitle='Enterprise security status' />
            <motion.div
              layout
              initial={{
                opacity: 0.3,
                scale: 0.92
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2
                }
              }}
              viewport={{
                once: true,
                margin: '-120px'
              }}
            >
              <div className='sm:flex justify-between gap-6 mb-20 '>
                {
                  nowInfoList.map((item, key) => {
                    return <ApplicationCard key={key} data={item} />
                  })
                }
              </div>
            </motion.div>
          </section>
        </section>
        <section className='hidden sm:block w-full sm:min-w-main-width bg-gray-800 relative'>
          <Image src={backImg} alt='' layout='responsive' />
          <div className='absolute top-12 w-full mt-4'>
            <Title title='核心功能' subTitle='Core Functions' dark />
            <div className='sm:max-w-7xl sm:mx-auto mt-4'>
              <AsmCarousel />
            </div>
          </div>
        </section>
        <section className='block sm:hidden w-full sm:min-w-main-width bg-gray-800 py-6'>
          <div className='top-12 w-full mt-4'>
            <Title title='核心功能' subTitle='Core Functions' dark />
            <div className='sm:max-w-7xl sm:mx-auto mt-4'>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className='mySwiper'
              >
                {
                  functionsList.map((item, key) => {
                    return (
                      <SwiperSlide key={key}>
                        <div className='bg-white rounded-lg p-5 mb-10 mx-6'>
                          <section>
                            <Image src={item.icon} alt='' />
                          </section>
                          <section className='text-base py-2'>
                            {item.title}
                          </section>
                          <section className='h-40 text-xs font-light leading-7'>
                            {item.content}
                          </section>
                          <section>
                            <Image src={item.img} alt='' />
                          </section>
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
          </div>
        </section>
        <section className='sm:max-w-7xl sm:mx-auto mt-20 mb-4'>
          <Title title='应用价值' subTitle='Application value' />
          <motion.div
            layout
            initial={{
              opacity: 0.3,
              scale: 0.92
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }}
            viewport={{
              once: true,
              margin: '-120px'
            }}
          >
            <ValueSlider />
          </motion.div>
        </section>
        <Footer />
      </div>
    </Layout>
  )
}
