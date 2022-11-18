import React from 'react'
import Layout from '@/components/common/Layout'
import Image from 'next/image'
import Title from '@/components/common/Title'
import { Button, Tabs, Anchor } from 'antd'
import ApplicationImg from '@/assets/img/service/codeApplication.svg'
import ApplicationImg2 from '@/assets/img/service/codeApplication2.svg'
import contentIcon from '@/assets/img/service/redBlueValueIcon.svg'
import MainImg from '@/assets/img/service/codeMain.png'
import icon1 from '@/assets/img/product/user1.svg'
import icon2 from '@/assets/img/service/contentIcon.svg'
import Link from 'next/link'
import Problem from '@/components/product/tide-open/Problem'
import AnimationWrapper from '@/components/common/AnimationWrapper'
import phoneMain from '@/assets/img/home/phoneMain.png'

const list = [
  {
    text: '应用场景',
    href: '#application'
  },
  {
    text: '服务价值',
    href: '#value'
  },
  {
    text: '主要审计内容',
    href: '#content'
  },
  {
    text: 'Q&A',
    href: '#QA'
  }
]



const problemList = [
  {
    title: 'Q1：代码审计需要提供全部代码吗？',
    text: 'A：代码审计是按行收费的，根据客户需求进行范围内的代码审计工作。'
  },
  {
    title: 'Q2：代码审计的审计语言包括哪些呢？',
    text: '包括 Java、PHP、NET、JSP 等。'
  },
  {
    title: 'Q3：代码审计服务是怎么实施的？',
    text: 'A：通过人工和自动化工具结合的方式，检查源代码中的安全缺陷和规范性缺陷，分析由这些问题引发的安全漏洞，并提供代码修订措施和建议。'
  },
]

const contentList = [
  {
    title: '系统所用开源框架',
    text: '包含java反序列化漏洞，导致远程代码执行；Spring、Struts2的相关安全问题'
  },
  {
    title: '应用代码关注要素',
    text: '日志伪造漏洞，密码明文存储，资源管理，调试程序残留，二次注入，反序列化'
  },
  {
    title: 'API滥用',
    text: '不安全的数据库调用、随机数创建、内存管理调用、字符串操作，危险的系统方法调用'
  },
  {
    title: '源代码设计',
    text: '不安全的域、方法、类修饰符，未使用的外部引用、代码'
  },
  {
    title: '错误处理不当',
    text: '程序异常处理，返回值用法，空指针，日志记录'
  },
  {
    title: '直接对象引用',
    text: '直接引用数据库中的数据、文件系统、内存空间'
  },
  {
    title: '资源滥用',
    text: '不安全的文件创建/修改/删除，竞争冲突，内存泄露'
  },
  {
    title: '业务逻辑错误',
    text: '欺骗密码找回功能，规避交易限制，越权缺陷，Cookies和session的问题'
  },
  {
    title: '规范性权限配置',
    text: '数据库配置规范，Web服务的权限配置，SQL语句编写规范'
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
          <div className='sm:min-w-main-width hidden sm:block'>
            <Image src={MainImg} alt='' layout='responsive' />
          </div>
          <div className='sm:min-w-main-width block sm:hidden'>
            <Image src={phoneMain} alt='' layout='responsive' />
          </div>
          <div className='sm:max-w-7xl mx-auto'>
            <div className='absolute top-1/4 text-xl sm:text-5xl sm:text-white text-center sm:text-left w-full sm:w-auto'>代码审计</div>
            <div className='absolute top-1/2 sm:w-3/5 -mt-5 font-light'>
              <div className='text-sm sm:text-xl sm:text-white sm:leading-8 text-center sm:text-left  tracking-new-widest px-10 sm:px-0'>
                从安全角度对应用系统的逻辑路径进行测试分析
              </div>
            </div>
            <div className='absolute top-1/2 w-full sm:w-auto px-auto gap-6 pt-16 flex justify-center sm:block'>
              <Link href='/spt-contact'>
                <Button size='large' type='primary' shape='round'>立即咨询</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className='sm:w-full sm:min-w-main-width sm:mx-auto mt-0'>
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
          <Anchor offsetTop={0} targetOffset={120} className='hidden sm:block'>
            <div className='mt-14 flex bg-white justify-center text-base gap-12 pt-2'>
              {
              list.map((item, key) => {
                return <Anchor.Link key={key} href={item.href} title={item.text} />
              })
            }
            </div>
          </Anchor>
        </section>
        <section className='sm:max-w-7xl sm:min-w-main-width mx-4 sm:mx-auto sm:mt-10 items-center' id='application'>
          <section className='mb-20 sm:mb-0'>
            <Title title='应用场景' subTitle='Application scenario' />
            <div className='sm:flex justify-center gap-16 mb-12 shadow-card sm:shadow-none rounded-lg sm:rounded-none p-6 sm:p-0'>
              <section className='sm:w-2/5 sm:pt-20'>
                <h1 className='text-lg sm:text-3xl font-bold text-bold'>新系统上线前</h1>
                <section className='mb-5 mt-8 font-light leading-6 text-gray-500 flex justify-between gap-3'>
                  <span className='inline-block w-2 h-2 rounded bg-blue-700 flex-grow-0 flex-shrink-0 mt-2' />
                  <span>
                    新上线系统对互联网环境适应性较差，因此在新系统上线前，需要对业务系统进行代码检测；代码审计可以充分挖掘代码中存在的安全缺陷，避免系统刚上线就遇到重大攻击
                  </span>
                </section>
                {/* <Link href='/spt-contact'>
                  <Button type='primary'>立即咨询</Button>
                </Link> */}
              </section>
              <section className='p-2 sm:p-auto'>
                <Image src={ApplicationImg} alt='' />
              </section>
            </div>
            <section className='w-full border-b mb-10 hidden sm:block' />
            <div className='sm:flex sm:flex-row-reverse justify-center gap-16 mb-10 shadow-card sm:shadow-none rounded-lg sm:rounded-none p-6 sm:p-0'>
              <section className='sm:w-2/5 sm:pt-20 sm:p-8'>
                <h1 className='text-lg sm:text-3xl font-bold'>已运行系统</h1>
                <section className='mb-5 mt-8 font-light leading-6 text-gray-500 flex justify-between gap-3'>
                  <span className='inline-block w-2 h-2 rounded bg-blue-700 flex-grow-0 flex-shrink-0 mt-2' />
                  <span>
                    通过代码安全审计，能够先于黑客发现系统的安全隐患，提前做好安全防御措施，保证系统各个环节在未知环境下都能经得起黑客挑战，保证业务系统稳定运行
                  </span>
                </section>
                {/* <Link href='/spt-contact'>
                  <Button type='primary'>立即咨询</Button>
                </Link> */}
              </section>
              <section className='p-2 sm:p-0'>
                <Image src={ApplicationImg2} alt='' />
              </section>
            </div>
            <section className='w-full border-b mb-20 hidden sm:block' />
          </section>
          <section id='value'>
            <Title title='服务价值' subTitle='service value' />
            <div className='sm:flex gap-8 w-full justify-between mb-10'>
              <div className='sm:p-6 sm:flex w-full items-center mb-20 sm:h-80'>
                <section className='bg-black p-5 sm:p-8 sm:w-1/3 text-white sm:h-60 sm:hover:h-80 flex items-center transition-all  rounded-lg sm:rounded-none mb-3 sm:mb-0'>
                  <div>
                    <div className='hidden sm:block'>
                      <Image src={icon2} alt='' />
                    </div>
                    <section className='text-base sm:text-xl font-bold sm:mt-7 mb-4'>
                      明确安全隐患点
                    </section>
                    <section className='leading-6 text-sm font-light sm:font-normal'>
                      代码审计能够对整个信息系统的所有源代码进行检查，从整套源代码切入，最终定位某个威胁点并加以验证，以此明确整个系统中存在的安全隐患点
                    </section>
                  </div>
                </section>
                <section className='bg-gray-100 p-5 sm:p-8 sm:w-1/3 sm:h-60 sm:hover:h-80 flex items-center transition-all  rounded-lg sm:rounded-none mb-3 sm:mb-0'>
                  <div>
                    <div className='hidden sm:block'>
                      <Image src={icon1} alt='' />
                    </div>
                    <section className='text-base sm:text-xl font-bold sm:mt-7 mb-4'>
                      提高安全意识
                    </section>
                    <section className='text-gray-400 leading-6 text-sm font-light sm:font-normal'>
                      代码审计服务可有效督促开发人员，尽量避免任何一处细微缺陷，减少安全隐患点，不断提高安全意识，从而降低整体安全风险
                    </section>
                  </div>
                </section>
                <section className='p-5 sm:p-8 sm:w-1/3 sm:h-60 bg-black text-white sm:hover:h-80 flex items-center transition-all rounded-lg sm:rounded-none'>
                  <div>
                    <div className='hidden sm:block'>
                      <Image src={icon2} alt='' />
                    </div>
                    <section className='text-base sm:text-xl font-bold sm:mt-7 mb-4'>
                      提高开发人员安全技能
                    </section>
                    <section className='leading-6 text-sm font-light sm:font-normal'>
                      在代码审计服务人员与开发人员的交互过程中，可提升开发人员的技能。通过为开发人员提供安全问题的解决方案，逐渐完善代码安全开发规范
                    </section>
                  </div>
                </section>
                {/* <section className='bg-blue-700 px-8 h-60 hover:h-80 text-white w-1/3'>
        <Image src={icon2} alt=''></Image>
        <section className='text-xl font-bold mt-7 mb-4'>
          白盒测试
        </section>
        <section className=' leading-6 text-sm'>
          授权获得被测目标的资料、应用源代码、数据库结构，并且接入内网进行渗透；进行代码审计
        </section>
      </section> */}
              </div>
            </div>
          </section>
        </section>
        <section className='w-full sm:bg-gray-100 sm:min-w-main-width py-14'>
          <section id='content'>
            <Title title='主要审计内容' subTitle='Main audit contents' />
            <AnimationWrapper>
              <section className='sm:max-w-7xl mt-7 flex flex-wrap sm:gap-6 justify-center mx-4 sm:mx-auto'>
                {
                  contentList.map((item, key) => {
                    return (
                      <div key={key} className='bg-gray-100 sm:bg-white mb-3 sm:mb-0 rounded-lg px-4 sm:px-6 py-5 sm:py-7 w-96 flex gap-4 sm:hover:scale-105 transition-all'>
                        <section className='shrink-0 hidden sm:block'>
                          <Image src={contentIcon} alt='' width={48} height={48} />
                        </section>
                        <section>
                          <div className='font-bold text-base sm:text-xl mb-2'>{item.title}</div>
                          <div className='text-gray-500 text-sm font-light leading-6'>{item.text}</div>
                        </section>
                      </div>
                    )
                  })
                }
              </section>
            </AnimationWrapper>
          </section>
        </section>
        <section className='py-8 sm:my-16 sm:max-w-7xl sm:min-w-main-width sm:mx-auto' id='QA'>
          <Title title='Q&A' subTitle='' />
          <Problem list={problemList} expandIndex={0} />
        </section>
      </div>
    </Layout>
  )
}
