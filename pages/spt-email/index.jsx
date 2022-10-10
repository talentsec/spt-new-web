import React, { useState } from 'react'
import Layout from '@/components/common/Layout'
import Image from 'next/image'
import Title from '@/components/common/Title'
import { Button, Tabs } from 'antd'
import valueIcon from '@/assets/img/service/redBlueValueIcon.svg'
import MainImg from '@/assets/img/service/emailMain.png'
import classIcon1 from '@/assets/img/product/user1.svg'
import classIcon2 from '@/assets/img/service/contentIcon.svg'
import contentIcon from '@/assets/img/service/redBlueValueIcon.svg'
import Footer from '@/components/common/Footer'
import Card from '@/components/service/email/Card'
import HoverCard from '@/components/common/HoverCard'
import SelectedCard from '@/components/common/SelectedCard'
import ProgressScrollCard from '@/components/service/email/ProgressScrollCard'
import Link from 'next/link'
import appImg1 from '@/assets/img/service/emailApplication1.png'
import appImg2 from '@/assets/img/service/emailApplication2.png'
import appImg3 from '@/assets/img/service/emailApplication3.png'
import AnimationWrapper from '@/components/common/AnimationWrapper'


const Toplist = [
  {
    title: '70%',
    text: '数据泄露案件与电子邮件有关'
  },
  {
    title: '50%',
    text: '企业遭受过邮件攻击'
  },
  {
    title: '94%',
    text: '企业意识到“邮件危机”，但仍未采取有效的防护措施'
  }
]
const serviceList = [
  [
    {
      title: '邮件注入',
      items: [
        'Cc/Bcc注入',
        '参数注入',
        '邮件主题注入',
        '邮件主体注入',
      ]
    }
  ],
  [
    {
      title: '邮件携带 恶意程序',
      items: [
        '自解压处理的恶意程序',
        '快捷方式恶意执行',
        '加壳及伪造签名的恶意程序',
        '恶意捆绑程序',
        'hta格式的恶意程序',
      ]
    },

  ],
  [
    {
      title: '邮件调用 恶意代码',
      items: [
        '恶意模板远程调用',
        'EvilClippy伪装',
        'Mht文件解析',
        '宏启动函数审查',
        '恶意的Sct远程调用',
        'CHM文件内编译内容解析',
        '邮件附件携带恶意数据',
        '恶意的Vbscript远程调用',
      ]
    }
  ],
  [
    {
      title: '邮件携带 恶意链接',
      items: [
        '被编码伪造的恶意链接',
        '被缩短处理的恶意链接',
        '特定恶意网页的链接'
      ]
    }
  ],
  [
    {
      title: '邮件伪造',
      items: [
        '发件人真实性核实',
        '邮件头部解析规则审查',
        '邮件体格式标识检测',
      ]
    }
  ],
  [
    {
      title: '邮件服务器配置检测',
      items: [
        'SPF配置检测',
        'DMARC配置检测',
        '恶意程序审查',
        'VBA宏审查',
      ]
    }
  ]
]

const solutionList = [
  {
    icon: classIcon1,
    hoverIcon: classIcon2,
    title: '邮件传输协议',
    color: '#F7F8FA',
    hoverColor: '#165DFF',
    height: '300px',
    hoverHeight: '400px',
    info: [
      {
        list: [
          '攻击者可以使用与电子邮件传递相关的应用层协议进行通信，以通过与现有流量混合来避免检测/网络过滤',
        ]
      }
    ]
  },
  {
    icon: classIcon1,
    hoverIcon: classIcon2,
    title: '电子邮件内容',
    color: '#F2F3F5',
    hoverColor: '#165DFF',
    height: '300px',
    hoverHeight: '400px',
    info: [
      {
        list: [
          '攻击者可能会向受害者发送包含恶意附件或链接的电子邮件，通常是为了在受害者系统上执行恶意代码，其中涉及社会工程技术，例如冒充可信来源',
        ]
      }
    ]
  },
  {
    icon: classIcon1,
    hoverIcon: classIcon2,
    title: '邮件收发规则',
    color: '#F7F8FA',
    hoverColor: '#165DFF',
    height: '300px',
    hoverHeight: '400px',
    info: [
      {
        list: [
          '攻击者可能会使用电子邮件规则将入站电子邮件隐藏在受感染用户的邮箱中，以规避安全警报、隐藏C2通信或对从受感染帐户发送的内部鱼叉式网络钓鱼电子邮件进行响应',
        ]
      }
    ]
  },
]


const demandList = [
  {
    icon: contentIcon,
    title: '诱导受害者',
    content: '电子邮件是勒索软件、木马病毒的主要传播工具。恶意攻击者通过邮件诱导受害者点击含有恶意程序的木马病毒，从而入侵企业内部，“潜伏”至邮件系统或其他服务器中，窃取企业重要数据。'
  },
  {
    icon: contentIcon,
    title: '渗透重要信息',
    content: '邮箱系统和系统验证、客户关系、工作内容有着千丝万缕的联系，黑客可通过泄露的邮箱渗透到内部实施攻击。'
  },
  {
    icon: contentIcon,
    title: '窃取隐私&机密',
    content: '企业经常要发送合同、招标资料等机密性较高的邮件，电子邮件在网络中多以明文形式传输储存的，个人隐私和公司机密随时存在被截获、篡改和浏览的风险，如果被窃取，后果将不堪设想。'
  },
]

const applicationList = [
  {
    img: appImg1,
    title: '主动测试邮箱安全性',
    text: '根据测评情况出具整改清单，并提供邮箱安全技术指导服务，完成漏洞修复和安全配置。'
  },
  {
    img: appImg2,
    title: '验证当前保护措施',
    text: '对已经完成邮箱保护建设的企业进行安全测评，来验证其邮件系统的安全性。'
  },
  {
    img: appImg3,
    title: '信息安全防护需求',
    text: '依照国家信息安全管理规范和技术标准，开展检测工作；提供整改技术指导服务，保障顺利通过测评。'
  },
]

export default function Email() {

  return (
    <Layout>
      <div className='sm:min-w-main-width'>
        <section className='w-screen sm:min-w-main-width relative'>
          <div className='sm:min-w-main-width'>
            <Image src={MainImg} alt='' layout='responsive'></Image>
          </div>
          <div className='sm:max-w-7xl sm:min-w-max mx-auto'>
            <div className='absolute top-1/3 -mt-8'>
              <div className='text-5xl text-white mb-3 '>
                邮件安全
              </div>
              <div className='text-xl text-white leading-8 tracking-new-widest font-light'>
                企业需要主动检测邮箱安全，预先处理风险
              </div>
            </div>
            <div className='absolute top-1/2 px-auto pt-2'>
              <Link href='/spt-contact'>
                <Button size='large' type='primary' shape="round">立即咨询</Button>
              </Link>
            </div>
          </div>
          <div className=' top-3/4 mx-auto px-auto  flex  bg-white rounded-lg sm:max-w-7xl -translate-y-12 shadow-card justify-between px-8'>
            {
              Toplist.map((item, key) => {
                return (
                  <div key={key} className="flex my-8 justify-center items-center w-full" style={{
                    borderRight: key === Toplist.length - 1 ? '0 solid rgba(0,0,0,0.4) ' : '1px solid rgba(0,0,0,0.1) '
                  }}>
                    <section className='flex-shrink-0 w-64 pl-6'>
                      <section className='font-din-bold text-blue-700 text-3xl text-center mb-2'>{item.title}</section>
                      <section className='text-gray-600 leading-6 flex-shrink-0 text-center text-base h-12'>{item.text}</section>
                    </section>
                  </div>
                )
              })
            }
          </div>
        </section>
        <section className='sm:max-w-7xl sm:mx-auto mt-10' id='intro'>
          <section >
            <Title title="行业痛点及需求" subTitle='industry analysis'></Title>
            <div className='tracking-new-widest w-full text-center -translate-y-8 text-lg'>通过以下功能告别重复的服务属性工作，大幅度提高工作效率</div>
            <AnimationWrapper>
              <div className='sm:flex justify-center gap-6 mb-20 '>
                {
                  demandList.map((item, key) => {
                    return <Card key={key} data={item}></Card>
                  })
                }
              </div>
            </AnimationWrapper>
          </section>
          <section id="support">
            <Title title="解决方案" subTitle='SOLUTIONS'></Title>
            <div className='tracking-new-widest w-full text-center -translate-y-8 text-lg'>全链条检验邮箱安全性，实现主动安全</div>
            <div className='flex w-full justify-between mb-28 h-96'>
              {
                solutionList.map((item, key) => {
                  return (
                    <div key={key} className="w-1/3 shrink-0 flex items-center">
                      <HoverCard data={item}></HoverCard>
                    </div>
                  )
                })
              }
            </div>
          </section>
        </section>
        <section className='w-screen bg-gray-100 py-20'>
          <section className='flex flex-wrap sm:max-w-7xl justify-center mx-auto gap-8 mb-12'>
            <Title title="功能测试项" subTitle='functional test items'></Title>
            <div className='tracking-new-widest w-full text-center -translate-y-8 text-lg'>六类/二十余项检测，全方位覆盖邮箱安全漏洞</div>
            <ProgressScrollCard infoList={serviceList}></ProgressScrollCard>
          </section>
        </section>
        <section className='w-screen pt-20 pb-24' style={{ backgroundColor: '#1D2129' }}>
          <section className=' flex-wrap sm:max-w-7xl sm:min-w-main-width justify-center mx-auto gap-8 mb-2'>
            <Title title="应用场景" subTitle='application scenarios' dark></Title>
            <SelectedCard list={applicationList}></SelectedCard>
          </section>
        </section>
        <Footer></Footer>
      </div>
    </Layout>
  )
}
