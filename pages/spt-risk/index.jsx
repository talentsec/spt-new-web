import React from 'react'
import Layout from '@/components/common/Layout'
import Image from 'next/image'
import Title from '@/components/common/Title'
import { Button, Tabs } from 'antd'
import valueIcon from '@/assets/img/service/riskValueIcon.svg'
import MainImg from '@/assets/img/service/riskMain.png'
import Link from 'next/link'
import ApplicationCard from '@/components/product/mituan/ApplicationCard'
import contentImg from '@/assets/img/service/riskContent.svg'
import RiskTab from '@/components/service/risk/Tab.jsx'
import Progress from '@/components/service/rescue/Progress'
import SelectedCard from '@/components/common/SelectedCard'
import appImg1 from '@/assets/img/service/riskAppImg1.png'
import appImg2 from '@/assets/img/service/riskAppImg2.png'
import appImg3 from '@/assets/img/service/riskAppImg3.png'
import Footer from '@/components/common/Footer'
import AnimationWrapper from '@/components/common/AnimationWrapper'


const list = [
  {
    text: '服务内容',
    herf: '#content'
  },
  {
    text: '服务价值',
    herf: '#value'
  },
  {
    text: '服务流程',
    herf: '#process'
  },
  {
    text: '应用场景',
    herf: '#application'
  }
]

const contentList = [
  {
    title: '安全赋值',
    content: [
      '对资产进行识别，并对资产的价值进行赋值；',
      '对资产进行识别，并对资产的价值进行赋值；',
      '对脆弱性进行识别，并对具体资产的脆弱性的严重程度赋值；'
    ]
  },
  {
    title: '风险判断',
    content: [
      '根据威胁及威胁利用脆弱性的难易程度判断安全事件发生的可能性；',
      '根据脆弱性的严重程度及安全事件所作用的资产的价值计算安全事件造成的损失；',
      '根据安全事件发生的可能性以及安全事件出现后的损失，计算安全事件一旦发生对组织的影响，即风险值；'
    ]
  }
]

const valueList = [
  {
    icon: valueIcon,
    title: '风险识别',
    content: '全面了解服务器操作系统、数据库系统、应用服务、网络、安全设备运行状况和安全状况'
  },
  {
    icon: valueIcon,
    title: '风险分析',
    content: '帮助企业系统分析资产所面临的威胁及其脆弱性，评估潜在安全事件的危害程度'
  },
  {
    icon: valueIcon,
    title: '落地修复建议',
    content: '就发现的问题提出防护对策、整改措施，解决在安全评估中发现的技术性安全问题，所有的被评估对象应不再存在高风险漏洞和中风险漏洞'
  },
]

const progressList = [
  {
    title: '前期沟通',
    text: '与客户沟通，确定评估目标、范围以及预期'
  },
  {
    title: '准备工作',
    text: '建立评估方案'
  },
  {
    title: '资产识别',
    text: '确定资产定义、分类以及赋值'
  },
  {
    title: '威胁识别',
    text: '确定威胁定义、分类以及赋值'
  },
  {
    title: '脆弱性识别',
    text: '确定脆弱性定义、分类以及赋值'
  },
  {
    title: '形成报告',
    text: '划分风险等级，确定控制措施并形成风险'
  }
]

const applicationList = [
  {
    img: appImg1,
    title: '企业安全建设',
    text: '对企业网络系统进行全面的安全检查，掌握自身安全现状'
  },
  {
    img: appImg2,
    title: '辅助管理决策',
    text: '通过对组织的安全现状进行评估，可给予企业高层及信息安全管理者对自身安全状况的宏观视角，以便制定更合理、有效的安全规划'
  },
  {
    img: appImg3,
    title: '满足合规检查',
    text: '对标国家标准和相关规范要求，协助企业对自身安全问题进行发现及修复，从容应对监管部门的合规性检查'
  },
]


export default function Code() {

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
        <section className='w-full sm:min-w-main-width relative'>
          <Image src={MainImg} alt='' layout='responsive'></Image>
          <div className='sm:max-w-7xl mx-auto'>
            <div className='absolute top-1/4 text-5xl text-white'>风险评估</div>
            <div className='absolute top-1/2 w-3/5 -mt-5 font-light'>
              <div className='text-xl text-white leading-8 tracking-new-widest'>
                从安全管理的角度，明晰企业所面临的安全威胁及其安全弱点
              </div>
            </div>
            <div className='absolute top-1/2 px-auto gap-6 pt-16'>
              <Link href='/spt-contact'>
                <Button size='large' type='primary' shape="round">立即咨询</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className='sm:max-w-7xl sm:min-w-main-width sm:mx-auto mt-14'>
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
        <section className='sm:max-w-7xl sm:min-w-main-width sm:mx-auto mt-10 items-center' id='content'>
          <section>
            <Title title="服务内容" subTitle='Service Content'></Title>
            <div className='sm:flex justify-center mb-12'>
              <section className='w-2/5 flex-shrink-0 justify-center'>
                <Image src={contentImg} alt=''></Image>
              </section>
              <section className='w-2/5 flex-shrink-0'>
                <RiskTab list={contentList}></RiskTab>
              </section>
            </div>
          </section>
          <section id="value">
            <Title title="服务价值" subTitle='service value'></Title>
            <AnimationWrapper>
              <div className='sm:flex justify-center gap-4 mb-20'>
                {
                  valueList.map((item, key) => {
                    return <ApplicationCard key={key} data={item}></ApplicationCard>
                  })
                }
              </div>
            </AnimationWrapper>
          </section>
        </section>
        <section className='w-full bg-gray-100 sm:min-w-main-width py-14'>
          <section id='process' className='mb-40 mt-4'>
            <Title title="服务流程" subTitle='Service Process'></Title>
            <Progress list={progressList}></Progress>
          </section>
        </section>
        <section className='w-full bg-gray-700 sm:min-w-main-width py-14'>
          <section id='application'>
            <Title title="应用场景" subTitle='Application scenario' dark></Title>
            <section className='sm:max-w-7xl sm:mx-auto mt-7 flex flex-wrap gap-6 justify-center'>
              <SelectedCard list={applicationList}></SelectedCard>
            </section>
          </section>
        </section>
      </div>
      <Footer></Footer>
    </Layout>
  )
}
