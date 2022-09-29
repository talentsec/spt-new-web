import React, { useState } from 'react'
import Layout from '@/components/common/Layout'
import Image from 'next/image'
import Title from '@/components/common/Title'
import { Button, Tabs } from 'antd'
import contentIcon from '@/assets/img/service/redBlueValueIcon.svg'
import MainImg from '@/assets/img/service/serviceMain.png'
import icon1 from '@/assets/img/about/contectIcon1.svg'
import icon2 from '@/assets/img/about/contectIcon2.svg'
import icon3 from '@/assets/img/about/contectIcon3.svg'
import targetIcon1 from '@/assets/img/service/serviceTargetIcon1.svg'
import targetIcon2 from '@/assets/img/service/serviceTargetIcon2.svg'
import targetIcon3 from '@/assets/img/service/serviceTargetIcon3.svg'
import targetIcon4 from '@/assets/img/service/serviceTargetIcon4.svg'
import targetIcon5 from '@/assets/img/service/serviceTargetIcon5.svg'
import targetIcon6 from '@/assets/img/service/serviceTargetIcon6.svg'
import webIcon from '@/assets/img/service/serviceWeb.svg'
import meaningImg from '@/assets/img/service/meaning.svg'
import contentImg from '@/assets/img/service/serviceContent.png'
import Footer from '@/components/common/Footer'
import TestCard from '@/components/service/service/TestCard'
import ProgressScrollCard from '@/components/service/service/ProgressScrollCard'

const list = [
  {
    title: '系统分析',
    content: '对系统弱点、技术缺陷进行主动分析',
    icon: icon1,
  },
  {
    title: '测试报告',
    content: '撰写渗透测试报告，将其提供给客户',
    icon: icon2,
  },
  {
    title: '漏洞修补',
    content: '根据提供的报告对系统漏洞进行修补',
    icon: icon3,
  },
]

const redPartList = [
  {
    button: '无限渗透测试',
    title: '无限渗透测试（IPT)',
    text: '可控无限渗透测试(IPT)：对组织进行技术渗透测试，以攻击进入组织内部、获取敏感数据或某个制定目标为目的'
  },
  {
    button: '内网漫游',
    title: '内网漫游(IRT)',
    text: '成功进入组织内部后，进行内网整体漫游，以获取多、高权限、敏感数据或某个目标。'
  },
  {
    button: '物理攻击尝试',
    title: '物理攻击尝试(PAT)',
    text: '使用物理手段，尝试进行攻击获取敏感数据。'
  },
  {
    button: '社交攻击尝试',
    title: '社交攻击尝试(SAT)',
    text: '使用社交手段，例如电话、微信、企业QQ、人肉搜索、社工库等方式进行社会工程学攻击尝试，同时获取敏感信息或数据。'
  },
]

const bluePartList = [
  {
    button: '仿真环境搭建',
    title: '仿真环境搭建(CSE)',
    text: '可控无限渗透测试(IPT)：对组织进行技术渗透测试，以攻击进入组织内部、获取敏感数据或某个制定目标为目的'
  },
  {
    button: '应急策略制定',
    title: '应急策略制定(ERR)',
    text: '与相关部门人员制定应急策略，并规范工作流程'
  },
  {
    button: '风险检测',
    title: '风险检测(RCM)',
    text: '对被攻击环境进行风险评估、检测与监测'
  },
  {
    button: '日志威胁分析',
    title: '日志威胁分析(LTA)',
    text: '在对抗演习期间，对网络、安全设备、主机、中间件等系统日志进行综合安全分析'
  },
]

const targetList = [
  {
    icon: targetIcon4,
    text: '主机系统'
  },
  {
    icon: targetIcon1,
    text: '移动应用'
  },
  {
    icon: targetIcon6,
    text: '微信服务号'
  },
  {
    icon: targetIcon5,
    text: '微信小程序'
  },
  {
    icon: targetIcon2,
    text: 'Web应用'
  },
  {
    icon: targetIcon3,
    text: '工控安全测试'
  },
]

const webList = [
  '输入合法性测试',
  '配置管理测试',
  '身份管理测试',
  '认证测试',
  '权限测试',
  '会话管理测试',
  '错误处理测试',
  '弱加密测试',
  '业务逻辑测试',
  '客户端侧测试',
]

export default function Rescue() {
  const [selectedRedItem, setSelectedRedItem] = useState(redPartList[0])
  const [selectedBlueItem, setSelectedBlueItem] = useState(bluePartList[0])

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
            <div className='absolute top-1/4 text-5xl text-white'>渗透测试</div>
            <div className='absolute top-1/2 w-3/5 -mt-5 font-light'>
              <div className='text-xl text-white w-full leading-8 tracking-new-widest'>
                渗透测试是通过模拟黑客攻击的方式对业务系统进行安全性测试，是一种评估计算机网络系统安全性的方法。
              </div>
            </div>
            <div className='absolute top-3/4 gap-6'>
              <Button size='large' type='primary' shape="round">立即体验</Button>
            </div>
          </div>
        </section>
        <section className='sm:mx-auto mt-32'>
          <div className='mx-auto px-auto flex bg-white rounded-lg sm:max-w-7xl -translate-y-12 shadow-card justify-between px-8'>
            {
              list.map((item, key) => {
                return (
                  <div key={key} className="flex m-8 w-1/3 justify-between">
                    <section className='flex-shrink-0 '>
                      <section>{item.title}</section>
                      <section className='text-gray-400 leading-6 flex-shrink-0'>{item.content}</section>
                    </section>
                    <section className='flex-shrink-0'>
                      <Image src={item.icon} alt=''></Image>
                    </section>
                    {
                      key === list.length - 1 ? null : <span className='h-10 border-l'></span>
                    }
                  </div>
                )
              })
            }
          </div>
        </section>
        <section className='sm:max-w-7xl sm:mx-auto mt-10' id='solution'>
          <section >
            <Title title="渗透测试意义" subTitle='Significance of penetration test'></Title>
            <div className='sm:flex justify-center gap-2 mb-20 items-center'>
              <section className='w-2/5'>
                <h1 className='text-3xl font-normal mb-7'>渗透测试的重要性</h1>
                <section className='mb-2 font-light leading-6 text-gray-500 mt-4 flex  gap-3'>
                  <span className='inline-block w-2 h-2 rounded bg-blue-700 flex-grow-0 flex-shrink-0 mt-2'></span>
                  <span>
                    识别最迫切需要解决的/危害级别最高的漏洞
                  </span>
                </section>
                <section className='mb-2 font-light leading-6 text-gray-500 mt-4 flex gap-3'>
                  <span className='inline-block w-2 h-2 rounded bg-blue-700 flex-grow-0 flex-shrink-0 mt-2'></span>
                  <span>
                    对疑难安全事件进行深入分析，锁定攻击源
                  </span>
                </section>
                <section className='mb-4 font-light leading-6 text-gray-500 mt-4 flex gap-3'>
                  <span className='inline-block w-2 h-2 rounded bg-blue-700 flex-grow-0 flex-shrink-0 mt-2'></span>
                  <span>
                    提升业务逻辑安全性，从根源解决问题
                  </span>
                </section>
                <section className='mb-4 font-light leading-6 text-gray-500 mt-4 flex gap-3'>
                  <span className='inline-block w-2 h-2 rounded bg-blue-700 flex-grow-0 flex-shrink-0 mt-2'></span>
                  <span>
                    弥补通用安全产品的不足
                  </span>
                </section>
              </section>
              <section>
                <Image src={meaningImg} alt=''></Image>
              </section>
            </div>
          </section>
          <section id="company">
            <Title title="渗透测试手段" subTitle='Penetration testing tools'></Title>
            <div className='tracking-new-widest w-full text-center -translate-y-8 text-lg'>螣龙安科可以为客户提供全方位的黑/灰/白盒测试</div>
            <TestCard></TestCard>
          </section>
          <section id='content'>
            <Title title="服务内容" subTitle='Service Content'></Title>
            <section className='flex gap-5 w-full justify-center mb-8'>
              <section className='w-64 relative text-right'>
                <div>
                  <section>
                    <Image src={contentIcon} alt=''></Image>
                  </section>
                  <section className='my-3 text-xl'>
                    黑盒+灰盒结合
                  </section>
                  <section className='text-xs text-gray-500 leading-5'>
                    通过黑盒与灰盒结合的方式，从外部渗透、钓鱼攻击到内网渗透，全方位检测客户的系统安全性强度。定位安全问题之后，协助客户直观体会系统的脆弱性，并给出最佳安全解决方案。
                  </section>
                </div>
                <div className='absolute bottom-0'>
                  <section>
                    <Image src={contentIcon} alt=''></Image>
                  </section>
                  <section className='my-3 text-xl'>
                    安全修复建议
                  </section>
                  <section className='text-xs text-gray-500 leading-5'>
                    渗透测试目的是发现问题并解决问题，故发现漏洞后，关键在于修复漏洞。安全专家会针对漏洞产生的具体原因进行具体分析，为客户提出适合的修复建议，增强客户的网络安全防御系统。
                  </section>
                </div>
              </section>
              <section className='flex-shrink-0'>
                <Image src={contentImg} alt=''></Image>
              </section>
              <section className='w-64 relative'>
                <div>
                  <section>
                    <Image src={contentIcon} alt=''></Image>
                  </section>
                  <section className='my-3 text-xl'>
                    黑盒+灰盒结合
                  </section>
                  <section className='text-xs text-gray-500 leading-5'>
                    通过黑盒与灰盒结合的方式，从外部渗透、钓鱼攻击到内网渗透，全方位检测客户的系统安全性强度。定位安全问题之后，协助客户直观体会系统的脆弱性，并给出最佳安全解决方案。
                  </section>
                </div>
                <div className='absolute bottom-0'>
                  <section>
                    <Image src={contentIcon} alt=''></Image>
                  </section>
                  <section className='my-3 text-xl'>
                    安全修复建议
                  </section>
                  <section className='text-xs text-gray-500 leading-5'>
                    渗透测试目的是发现问题并解决问题，故发现漏洞后，关键在于修复漏洞。安全专家会针对漏洞产生的具体原因进行具体分析，为客户提出适合的修复建议，增强客户的网络安全防御系统。
                  </section>
                </div>
              </section>
            </section>
          </section>
        </section>
        <section className='py-8 sm:min-w-max' id="progress">
          <Title title="服务对象" subTitle='service object'></Title>
          <section className='w-3/4 flex flex-wrap sm:max-w-7xl justify-center mx-auto gap-x-10 gap-y-6 mb-20'>
            {
              targetList.map((item, key) => {
                return (
                  <div key={key} className='w-80 shadow-card flex p-5 items-center gap-4 rounded-2xl flex-shrink-0'>
                    <section>
                      <Image src={item.icon} alt=''></Image>
                    </section>
                    <span className='text-xl font-medium'>{item.text}</span>
                  </div>
                )
              })
            }
          </section>
        </section>
        <section className='py-8 sm:min-w-max' id="progress">
          <Title title="渗透测试流程" subTitle='Penetration test process'></Title>
          <section className='flex flex-wrap sm:max-w-7xl justify-start mx-auto gap-x-10 gap-y-6 mb-20'>
            <ProgressScrollCard></ProgressScrollCard>
          </section>
        </section>
        <section className='py-8 sm:min-w-max' id="progress">
          <Title title="WEB测试检测项" subTitle='Penetrant test items'></Title>
          <div className='tracking-new-widest w-full text-center -translate-y-8 text-lg'>渗透测试的检测深度与检测范围息息相关，渗透测试主要涵盖以下几个纬度：</div>
          <section className='flex flex-wrap sm:max-w-7xl justify-start mx-auto gap-x-10 gap-y-6 mb-20'>
            {
              webList.map((item,index) => {
                return (
                  <div key={index} className="w-56 h-56 bg-gray-100 rounded-2xl pt-16 ">
                    <section className='flex justify-center mb-3'>
                      <Image src={webIcon} alt=''></Image>
                    </section>
                    <section className='text-center text-gray-400'>
                      {item}
                    </section>
                  </div>
                )
              })
            }
          </section>
        </section>
        <Footer></Footer>
      </div>
    </Layout>
  )
}
