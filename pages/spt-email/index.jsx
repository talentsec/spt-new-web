import React, { useState } from 'react'
import Layout from '@/components/common/Layout'
import Image from 'next/image'
import Title from '@/components/common/Title'
import { Button, Tabs } from 'antd'
import introImg from '@/assets/img/service/redBlueIntro.svg'
import valueIcon from '@/assets/img/service/redBlueValueIcon.svg'
import MainImg from '@/assets/img/service/redBlueMain.png'
import blueImg from '@/assets/img/service/bluePart.png'
import redImg from '@/assets/img/service/redPart.png'
import redIcon from '@/assets/img/service/redPartIcon.svg'
import Footer from '@/components/common/Footer'
import SupportCard from '@/components/service/redBlue/SupportCard'
import { redBlueSupportList } from '@/constant/info'
import Link from 'next/link'

const list = [
  {
    text: '服务介绍',
    herf: '#intro'
  },
  {
    text: '服务支持',
    herf: '#support'
  },
  {
    text: '服务内容',
    herf: '#content'
  },
  {
    text: '服务价值',
    herf: '#value'
  }
]

const valueList = [
  {
    icon: valueIcon,
    title: '提升团队能力',
    text: '防守方通过内部多部门协同作战，实践大规模攻击情况下的防护流程及运营状态，提升应急处置效率和实战能力'
  },
  {
    icon: valueIcon,
    title: '高层视角评估安全体系',
    text: '查看系统内部加密情况，不做过多操作，保持系统原状（非专业人员不建议自行使用各类解密工具，以防破坏原始文件数据）'
  },
  {
    icon: valueIcon,
    title: '威胁可视化',
    text: '红蓝对抗中发现客户资产的攻击面，以结果为导向深入扩展，展示出模拟真实入侵的后果和影响面'
  },
  {
    icon: valueIcon,
    title: '解决木桶效应',
    text: '企业传统安全防护与安全运营易堆积未修复漏洞，对抗中攻击方通过尝试任何可利用的风险点，提出修复建议，解决木桶效应'
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
            <div className='absolute top-1/4 text-5xl text-white'>邮件安全</div>
            <div className='absolute top-1/2 w-3/5 -mt-5 font-light'>
              <div className='text-xl text-white leading-8 tracking-new-widest'>
                企业需要主动检测邮箱安全，预先处理风险
              </div>
            </div>
            <div className='absolute top-2/3 px-auto gap-6'>
              <Link href='/'>
                <Button size='large' type='primary' shape="round">立即咨询</Button>
              </Link>
            </div>
          </div>
          <div className=' top-3/4 mx-auto px-auto  flex  bg-white rounded-lg sm:max-w-7xl -translate-y-12 shadow-card justify-between px-8'>
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
        <section className='sm:max-w-7xl sm:mx-auto mt-10' id='intro'>
          <section >
            <Title title="服务介绍" subTitle='Service Introduction'></Title>
            <div className='sm:flex justify-center gap-16 mb-20'>
              <section>
                <Image src={introImg} alt=''></Image>
              </section>
              <section className='w-2/5'>
                <h1 className='text-2xl font-normal'>详细介绍</h1>
                <section className='mb-2 font-light leading-6 text-gray-500 mt-4 flex justify-between gap-3'>
                  <span className='inline-block w-2 h-2 rounded bg-blue-700 flex-grow-0 flex-shrink-0 mt-2'></span>
                  <span>
                    安全是一个整体，正如木桶定律，最短的木板是评估木桶品质的标准，安全最薄弱环节也是决定系统好坏的关键。现今企业面临的网络安全威胁日益复杂，攻击者行动策略、工具武器日益更新，令传统防御方法威力不再。
                  </span>
                </section>
                <section className='mb-2 font-light leading-6 text-gray-500 mt-4 flex justify-between gap-3'>
                  <span className='inline-block w-2 h-2 rounded bg-blue-700 flex-grow-0 flex-shrink-0 mt-2'></span>
                  <span>
                    网络红蓝军对抗的目的就是用来评估企业安全性，高仿真的攻防演练可以帮助企业在更大范围内发现安全隐患，并通过综合利用多漏洞直观展示负面后，有助于找出企业安全中最脆弱的环节，提升企业安全能力的建设。
                  </span>
                </section>
                <section className='mb-4 font-light leading-6 text-gray-500 mt-4 flex justify-between gap-3'>
                  <span className='inline-block w-2 h-2 rounded bg-blue-700 flex-grow-0 flex-shrink-0 mt-2'></span>
                  <span>
                    螣龙安科攻防演练服务是通过多种攻击手段的实战，来检测客户业务系统的安全状态与整体安全防御能力，有效地发现客户的互联网及内网的安全问题，从而帮助客户更好地完善安全防护体系。引入外部专业服务团队的高水平攻防演练不仅是一次宝贵的练兵机会，而且能够体现安全价值，助于推进整改落地。
                  </span>
                </section>
              </section>
            </div>
          </section>
          <section id="support">
            <Title title="服务支持" subTitle='service support'></Title>
            <div className='flex gap-8 w-full justify-between mb-20'>
              {
                redBlueSupportList.map((item, key) => {
                  return (
                    <SupportCard key={key} data={item}></SupportCard>
                  )
                })
              }
            </div>
          </section>
          <section id='content'>
            <Title title="服务内容" subTitle='Service Content'></Title>
            <section className='flex gap-6 items-center border-b pb-10 mb-20 w-full justify-center'>
              <section className='w-1/2 px-6'>
                <h1 className='text-3xl mb-6'>红队服务综述</h1>
                <div className='flex items-start gap-3'>
                  <section className='pt-1'>
                    <Image src={redIcon} alt=''></Image>
                  </section>
                  <div>
                    <h2 className='text-xl font-normal mb-4'>主要类型</h2>
                    <section>
                      {
                        redPartList.map((item, key) => {
                          return (
                            <span key={key} className='border-red-500 border-2 text-red-500 font-light px-4 py-1 rounded-2xl mr-3 cursor-pointer' style={{
                              backgroundColor: selectedRedItem.button === item.button ? 'rgb(239 68 68)' : '#fff',
                              color: selectedRedItem.button !== item.button ? 'rgb(239 68 68)' : '#fff',
                            }}
                            onClick={() => setSelectedRedItem(item)}>
                              {item.button}
                            </span>
                          )
                        })
                      }
                    </section>
                  </div>
                </div>
                <div className='flex items-start gap-3 mt-8'>
                  <section className='pt-1 flex-shrink-0'>
                    <Image src={redIcon} alt=''></Image>
                  </section>
                  <div>
                    <h2 className='text-xl font-normal'>{selectedRedItem.title}</h2>
                    <section className='text-gray-500 font-light text-sm leading-6 h-14'>
                      {selectedRedItem.text}
                    </section>
                  </div>
                </div>
              </section>
              <section>
                <Image src={redImg} alt=''></Image>
              </section>
            </section>
            <section className='flex gap-6 items-center border-b mb-10 w-full justify-center'>
              <section>
                <Image src={blueImg} alt=''></Image>
              </section>
              <section className='w-1/2 px-6'>
                <h1 className='text-3xl mb-6'>蓝队服务综述</h1>
                <div className='flex items-start gap-3'>
                  <section className='pt-1 flex-shrink-0 w-6'>
                    <Image src={redIcon} alt=''></Image>
                  </section>
                  <div>
                    <h2 className='text-xl font-normal mb-4'>主要类型</h2>
                    <section>
                      {
                        bluePartList.map((item, key) => {
                          return (
                            <span key={key} className='border-blue-700 border-2 text-blue-700 font-light px-4 py-1 rounded-2xl mr-3 cursor-pointer' style={{
                              backgroundColor: selectedBlueItem.button === item.button ? 'rgb(29 78 216)' : '#fff',
                              color: selectedBlueItem.button !== item.button ? 'rgb(29 78 216)' : '#fff',
                            }}
                            onClick={() => setSelectedBlueItem(item)}>
                              {item.button}
                            </span>
                          )
                        })
                      }
                    </section>
                  </div>
                </div>
                <div className='flex items-start gap-3 mt-8'>
                  <section className='pt-1 flex-shrink-0'>
                    <Image src={redIcon} alt=''></Image>
                  </section>
                  <div>
                    <h2 className='text-xl font-normal'>{selectedBlueItem.title}</h2>
                    <section className='text-gray-500 font-light text-sm leading-6 h-14'>
                      {selectedBlueItem.text}
                    </section>
                  </div>
                </div>
              </section>
            </section>
          </section>
        </section>
        <section className='py-8 sm:min-w-max' id="value">
          <Title title="服务价值" subTitle='service value'></Title>
          <section className='flex flex-wrap sm:max-w-7xl justify-center mx-auto gap-8'>
            {
              valueList.map((item,key) => {
                return (
                  <div key={key} className="flex p-8 sm:w-2/5 hover:shadow-card rounded-2xl gap-4">
                    <section className='flex-shrink-0'>
                      <Image src={item.icon} alt=''></Image>
                    </section>
                    <section>
                      <div className='text-xl font-semibold mb-4'>
                        {item.title}
                      </div>
                      <div className='text-sm leading-7 text-gray-500'>
                        {item.text}
                      </div>
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
