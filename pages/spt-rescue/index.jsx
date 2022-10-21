import React, { useState } from 'react'
import Layout from '@/components/common/Layout'
import Image from 'next/image'
import Title from '@/components/common/Title'
import { Button, Tabs, Anchor } from 'antd'
import solution from '@/assets/img/service/solution.svg'
import rescueIcon1 from '@/assets/img/service/rescueIcon1.svg'
import rescueIcon2 from '@/assets/img/service/rescueIcon2.svg'
import rescueIcon3 from '@/assets/img/service/rescueIcon3.svg'
import solutionIcon from '@/assets/img/service/solutionIcon.svg'
import MainImg from '@/assets/img/service/rescue.png'
import arrow from '@/assets/img/service/arrow.svg'
import ServiceCard from '@/components/service/rescue/ServiceCard'
import Progress from '@/components/service/rescue/Progress'
import Footer from '@/components/common/Footer'
import phoneMain from '@/assets/img/home/phoneMain.png'
import { motion, useScroll, useTransform } from "framer-motion";
const { Link } = Anchor;

const list = [
  {
    text: '勒索病毒威胁',
    href: '#solution'
  },
  {
    text: '企业应急处理办法',
    href: '#company'
  },
  {
    text: '服务内容',
    href: '#content'
  },
  {
    text: '服务流程',
    href: '#progress'
  }
]

const solutionTabList = [
  {
    icon: rescueIcon1,
    text: '每11秒将发生一次勒索攻击'
  },
  {
    icon: rescueIcon2,
    text: '带来的直接经济损失超过300亿美元'
  },
  {
    icon: rescueIcon3,
    text: '自2018年以来，勒索软件攻击数量猛增了350%'
  },
]

const solutionList = [
  {
    icon: solutionIcon,
    title: '01 隔离网络',
    text: '拔掉网线或禁用网络，防止病毒扩散，避免数据二次加密'
  },
  {
    icon: solutionIcon,
    title: '02 情况摸排',
    text: '查看系统内部加密情况，不做过多操作，保持系统原状（非专业人员不建议自行使用各类解密工具，以防破坏原始文件数据）'
  },
  {
    icon: solutionIcon,
    title: '03 专业恢复',
    text: '联系螣龙安科安全团队（021-62241157）进行数据和系统恢复'
  },
]

const progressList = [
  {
    title: '应急响应',
    text: '对于已经感染的系统进行应急处置，捕获病毒样本并进行分析'
  },
  {
    title: '搜索病毒样本',
    text: '传送1-3个样本文件（文件大小越小越好）'
  },
  {
    title: '注意事项',
    text: '确认合作后，视情况安排工程师上门检查中毒情况，同时会对勒索病毒解密前一些关系到解密的成功率和解密出来的数据留存程度的事项进行讲解'
  },
  {
    title: '报价并开始清除病毒及解密',
    text: '解密过程全程托管，螣龙安科工程师会通宵达旦、尽快解密数据，在完成解密后第一时间进行交付验证，尽量减少企业损失'
  },
  {
    title: '防御建议',
    text: '解密成功后，螣龙安科的专业工程师会提出相应的防御建议，协助企业修补系统漏洞，防止再次被入侵'
  },
  {
    title: '进行安全培训',
    text: '通过安全培训的方式，防止人为原因被钓鱼或者打开不明邮件感染病毒的情况出现，并给出防御方案以预防病毒再次入侵'
  }
]

export default function Rescue() {
  const { scrollYProgress } = useScroll();
  const isWeb = global.screen?.width > 640
  const scale = useTransform(scrollYProgress, [0.04, 0.16], [isWeb ? 0.8 : 1, 1]);

  // const handleTabChange = (key) => {
  //   const target = list[Number(key)]
  //   const element = document.querySelector(target.herf)
  //   document.documentElement.scrollTo({
  //     top: element.offsetTop - 40,
  //     behavior: 'smooth'
  //   })
  // }
  return (
    <Layout>
      <div className='sm:min-w-max'>
        <section className='w-full sm:min-w-main-width relative'>
          <div className='hidden sm:block'>
            <Image src={MainImg} alt='' layout='responsive' />
          </div>
          <div className='sm:min-w-main-width block sm:hidden'>
            <Image src={phoneMain} alt='' layout='responsive' />
          </div>
          <div className='sm:max-w-7xl mx-auto'>
            <div className='w-full absolute top-1/4 text-xl font-medium sm:font-normal sm:text-5xl sm:text-white text-center sm:text-left'>勒索病毒解密救援</div>
            <div className='w-full absolute top-1/2 sm:w-3/5 px-8 sm:px-0 -mt-5 font-light'>
              <div className='text-sm sm:text-xl sm:text-white w-full sm:leading-8 tracking-new-widest text-center sm:text-left'>处理勒索病毒，破解加密文件，协助客户摆脱黑客控制</div>
            </div>
            <div className='absolute top-3/4 px-auto gap-6 w-full sm:w-auto flex justify-center'>
              <Button size='large' type='primary' shape='round'>立即咨询</Button>
            </div>
          </div>
        </section>
        <section className='hidden sm:block sm:w-full sm:mx-auto bg-white'>
          {/* <Tabs
            centered
            defaultActiveKey='0'
            tabBarGutter={80}

            onChange={handleTabChange}
            items={list.map((_, i) => {
              return {
                label: _.text,
                key: i,
              };
            })}
          /> */}
          <Anchor offsetTop={0} targetOffset={120}>
            <div className='mt-14 flex bg-white justify-center text-base gap-12 pt-2'>
              {
                list.map((item, key) => {
                  return <Link key={key} href={item.href} title={item.text} />
                })
              }
            </div>
          </Anchor>
        </section>

        <section className='sm:max-w-7xl sm:mx-auto mt-10' id='solution'>
          <section>
            <Title title='勒索病毒威胁' subTitle='Ransomware Threat' />
            <motion.div
              style={{
                scale,
              }}
            >
              <div className='sm:flex justify-center gap-16 mb-20 px-4 sm:px-0'>
                <section>
                  <h1 className='text-xl sm:text-3xl mt-8'>勒索病毒泛滥</h1>
                  <section className='mb-10 sm:text-xl mt-4'>巨额利益驱使，勒索病毒成为企业安全严重威胁之一</section>
                  <div className='flex gap-6'>
                    {
                      solutionTabList.map((item, key) => {
                        return (
                          <div key={key} className='w-36'>
                            <Image src={item.icon} alt='' />
                            <section className='font-light text-gray-600 mt-2'>
                              {item.text}
                            </section>
                          </div>
                        )
                      })
                    }
                  </div>
                  <section className='text-xs mt-10 text-gray-400 text-right italic'>-- 根据《2021勒索攻击白皮书》</section>
                  <section className='mt-6'>
                    {/* <Button type='primary'>服务咨询</Button> */}
                  </section>
                </section>
                <section>
                  <Image src={solution} alt='' />
                </section>
              </div>
            </motion.div>
          </section>
          <section id='company'>
            <Title title='企业应急处理办法' subTitle='Enterprise emergency response measures' />
            <div className='sm:flex gap-5 sm:w-full justify-between mb-20 mx-3 sm:mx-0'>
              {
                solutionList.map((item, key) => {
                  return (
                    <React.Fragment key={key}>
                      <div className='sm:w-96 p-6 shadow-card rounded-lg sm:hover:-translate-y-1 transition-all'>
                        <Image src={item.icon} alt='' />
                        <div className='text-xl font-medium my-4'>{item.title}</div>
                        <div className='text-gray-400 text-sm mb-6'>{item.text}</div>
                      </div>
                      {(key === solutionList.length - 1 || !isWeb) ? null : <Image src={arrow} alt='' />}
                    </React.Fragment>
                  )
                })
              }
            </div>
          </section>
          <section id='content'>
            <Title title='服务内容' subTitle='Service Content' />
            <ServiceCard />
          </section>
        </section>
        <section className='bg-gray-50 w-full py-14 sm:pb-32 sm:min-w-max' id='progress'>
          <Title title='服务流程' subTitle='Service Process' />
          <Progress list={progressList} />
        </section>
        <Footer />
      </div>
    </Layout>
  )
}
