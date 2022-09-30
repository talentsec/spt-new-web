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


export default function Tide() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.04, 0.2], [0.8, 1]);
  const bottomScale = useTransform(scrollYProgress, [0.9, 1], [0.6, 0.8]);

  return (
    <Layout>
      <div className='min-w-max'>
        <section className='w-screen sm:min-w-main-width relative'>
          <Image src={MainImg} alt='' layout='responsive'></Image>
          <div className='absolute top-1/4 text-center text-5xl text-white w-full'>潮汐·攻击面管理平台</div>
          <div className='absolute top-1/2 w-full px-auto -mt-5'>
            <div className='text-center text-xl text-white w-4/5 mx-auto leading-8 tracking-new-widest font-light'>潮汐ASM平台是一个网络空间资产攻击面管理系统，通过录入简单的种子信息，潮汐ASM平台以种子为核心，在智能引擎以及近百个全球化数据源的加持下，可为企业客户自动化地拓展出完整的网络空间资产。</div>
          </div>
          <div className='absolute top-3/4 mx-auto px-auto w-full flex justify-center gap-6'>
            <Button size='large' type='primary' shape="round" onClick={() => location.href = 'https://lev.zone/'}>立即体验</Button>
            <Link href="spt-contact">
              <Button size='large' shape="round" ghost>在线咨询</Button>
            </Link>
          </div>
        </section>
        <AsmTop></AsmTop>
        <section className='sm:max-w-7xl sm:mx-auto mt-20'>
          <section>
            <Title title="企业安全现状" subTitle='Enterprise security status'></Title>
            <motion.div
              style={{
                scale,
              }}>
              <div className='sm:flex justify-between gap-6 mb-20 '>
                {
                  nowInfoList.map((item, key) => {
                    return <ApplicationCard key={key} data={item}></ApplicationCard>
                  })
                }
              </div>
            </motion.div>
          </section>
          {/* <section>
            <Title title="对于开发者" subTitle='For users'></Title>
            <div className='tracking-new-widest w-full text-center -translate-y-8 text-lg'>直接调用平台的自动化安全能力，创造您自己的安全工具或编排</div>
            <DeveloperCard></DeveloperCard>
          </section>
          <section>
            <Title title="社区指南以及常见问题" subTitle='Community Guidelines'></Title>
            <Problem></Problem>
          </section> */}
        </section>
        <section className='w-screen sm:min-w-main-width bg-gray-800 relative'>
          <Image src={backImg} alt='' layout='responsive'></Image>
          <div className='absolute top-12 w-full'>
            <Title title="核心功能" subTitle='Core Functions' dark={true}></Title>
            <div className='sm:max-w-7xl sm:mx-auto'>
              <AsmCarousel></AsmCarousel>
            </div>
          </div>
        </section>
        <section className='sm:max-w-7xl sm:mx-auto mt-20 mb-4'>
          <Title title="应用价值" subTitle='Application value'></Title>
          <motion.div
            style={{
              bottomScale
            }}>
            <ValueSlider></ValueSlider>
          </motion.div>
        </section>
        <Footer></Footer>
      </div>
    </Layout>
  )
}
