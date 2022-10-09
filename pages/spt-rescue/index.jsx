import React from 'react'
import Layout from '@/components/common/Layout'
import Image from 'next/image'
import Title from '@/components/common/Title'
import { Button, Tabs } from 'antd'
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
import { motion, useScroll, useTransform } from "framer-motion";

const list = [
  {
    text: '应急处理办法',
    herf: '#solution'
  },
  {
    text: '企业应急处理办法',
    herf: '#company'
  },
  {
    text: '服务内容',
    herf: '#content'
  },
  {
    text: '服务流程',
    herf: '#progress'
  }
]

const solutionTabList = [
  {
    icon: rescueIcon1,
    text: '每10家企业就有1家遭受病毒勒索'
  },
  {
    icon: rescueIcon2,
    text: '每次勒索发生后，企业平均遭受的经济损失'
  },
  {
    icon: rescueIcon3,
    text: '每次勒索发生后，企业进行安全加固的费用'
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
    title: '报价并开始清楚病毒及解密',
    text: '解密过程全程托管，螣龙安科工程师会通宵达旦、尽快解密数据，在完成解密后第一时间进行交付验证，尽量减少企业损失'
  },
  {
    title: '防御建议',
    text: '解密成功后，螣龙安科的专业工程师会提出相应的防御建议，协助企业修补系统漏洞，防止再次被入侵'
  },
  {
    title: '进行安全培训',
    text: '通过安全培训的方式，防止人为原因被钓鱼或者打开不明邮件感染病毒的情况出现，并给出防御方案以预防病毒再次入侵。'
  }
]

export default function Rescue() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.04, 0.16], [0.8, 1]);

  const handleTabChange = (key) => {
    const target = list[Number(key)]
    const element = document.querySelector(target.herf)
    document.documentElement.scrollTo({
      top: element.offsetTop - 40,
      behavior: 'smooth'
    })
  }
  return (
    <Layout>
      <div className='sm:min-w-max'>
        <section className='w-screen sm:min-w-main-width relative'>
          <Image src={MainImg} alt='' layout='responsive'></Image>
          <div className='sm:max-w-7xl mx-auto'>
            <div className='absolute top-1/4 text-5xl text-white'>勒索病毒解密救援</div>
            <div className='absolute top-1/2 w-3/5 -mt-5 font-light'>
              <div className='text-xl text-white w-full leading-8 tracking-new-widest'>处理勒索病毒，破解加密文件，协助客户摆脱黑客控制</div>
            </div>
            <div className='absolute top-3/4 px-auto gap-6'>
              <Button size='large' type='primary' shape="round">立即体验</Button>
            </div>
          </div>
        </section>
        <section className='sm:max-w-7xl sm:mx-auto mt-14'>
          <Tabs
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
          />
        </section>
        <section className='sm:max-w-7xl sm:mx-auto mt-10' id='solution'>
          <section >
            <Title title="应急处理办法" subTitle='Emergency response measures'></Title>
            <motion.div
              style={{
                scale,
              }}>
              <div className='sm:flex justify-center gap-16 mb-20'>
                <section>
                  <h1 className='text-3xl'>我们面对的勒索病毒的威胁</h1>
                  <section className='mb-10 text-xl mt-4'>巨额利益驱使，勒索病毒成为企业安全最大威胁之一</section>
                  <div className='flex gap-6'>
                    {
                      solutionTabList.map((item, key) => {
                        return (
                          <div key={key} className="w-36">
                            <Image src={item.icon} alt=''></Image>
                            <section className='font-light text-gray-600 mt-2'>
                              {item.text}
                            </section>
                          </div>
                        )
                      })
                    }
                  </div>
                  <section className='mt-6'>
                    <Button type='primary'>服务咨询</Button>
                  </section>
                </section>
                <section>
                  <Image src={solution} alt=''></Image>
                </section>
              </div>
            </motion.div>

          </section>
          <section id="company">
            <Title title="企业应急处理办法" subTitle='Enterprise emergency response measures'></Title>
            <div className='flex gap-5 w-full justify-between mb-20'>
              {
                solutionList.map((item, key) => {
                  return (
                    <React.Fragment key={key}>
                      <div className='w-96 p-6 shadow-card rounded-lg sm:hover:-translate-y-1 transition-all'>
                        <Image src={item.icon} alt=''></Image>
                        <div className='text-xl font-medium my-4'>{item.title}</div>
                        <div className='text-gray-400 text-sm mb-6'>{item.text}</div>
                      </div>
                      {(key === solutionList.length - 1) ? null : <Image src={arrow} alt=''></Image>}
                    </React.Fragment>
                  )
                })
              }
            </div>
          </section>
          <section id='content'>
            <Title title="服务内容" subTitle='Service Content'></Title>
            <ServiceCard></ServiceCard>
          </section>
        </section>
        <section className='bg-gray-50 w-screen py-8 sm:min-w-max' id="progress">
          <Title title="服务流程" subTitle='Service Process'></Title>
          <Progress list={progressList}></Progress>
        </section>
        <Footer></Footer>
      </div>
    </Layout>
  )
}
