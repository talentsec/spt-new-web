import React, { useState } from 'react'
import Layout from '@/components/common/Layout'
import Image from 'next/image'
import Title from '@/components/common/Title'
import { Button } from 'antd'
import valueIcon from '@/assets/img/service/riskValueIcon.svg'
import MainImg from '@/assets/img/service/responseMain.png'
import Link from 'next/link'
import Progress from '@/components/service/rescue/Progress'
import appImg1 from '@/assets/img/service/riskAppImg1.png'
import appImg2 from '@/assets/img/service/riskAppImg2.png'
import Footer from '@/components/common/Footer'
import contentIcon from '@/assets/img/service/redBlueValueIcon.svg'
import blueIcon from '@/assets/img/service/bluePartIcon.svg'
import contentImg1 from '@/assets/img/service/responseContent1.svg'
import contentImg2 from '@/assets/img/service/responseContent2.svg'
import appImg from '@/assets/img/service/responseApp.png'
import phoneAppImg from '@/assets/img/service/phoneResponseApp.svg'
import phoneMain from '@/assets/img/home/phoneMain.png'

const intrusionProcessList = [
  {
    button: '暴力破解',
    title: '暴力破解',
    text: '针对系统有包括rdp、ssh、telnet等，针对服务有包括mysql、ftp等，一般通过暴力破解工具进行爆破'
  },
  {
    button: '漏洞利用',
    title: '漏洞利用',
    text: '通过系统、服务的漏洞进行攻击，如永恒之蓝、Redis未授权访问等'
  },
  {
    button: '流量攻击',
    title: '流量攻击',
    text: '主要是对目标机器进行dos攻击，从而导致服务器瘫痪'
  },
  {
    button: '木马控制',
    title: '木马控制',
    text: '主要分为webshell和主机木马，webshell是存在于网站应用中，而主机木马是进入系统进行植入，目的都是对操作系统进行持久控制'
  },
  {
    button: '病毒感染',
    title: '病毒感染',
    text: '主要分挖矿病毒、蠕虫病毒、勒索病毒等，植入病毒后往往会影响受感染电脑的正常运作，或是被控制而不自知（电脑正常运作仅盗窃资料、或者被利用做其他用途等用户非自发引导的行为）'
  },
]

const securityIncidentList = [
  {
    button: '遏制',
    title: '遏制',
    text: '清除恶意软件，阻止黑客进一步攻击，限制黑客横向移动范围'
  },
  {
    button: '清理',
    title: '清理',
    text: '清理系统中存在的木马、webshell后门、恶意程序、挂马页面和异常系统服务与进程'
  },
  {
    button: '恢复',
    title: '恢复',
    text: '恢复被篡改的系统配置，删除黑客创建的后门账号'
  },
  {
    button: '加固',
    title: '加固',
    text: '对安全漏洞进行加固，协助客户尽快恢复业务的正常服务'
  },
]

const list = [
  {
    text: '应用场景',
    herf: '#application'
  },
  {
    text: '服务价值',
    herf: '#value'
  },
  {
    text: '服务内容',
    herf: '#content'
  },
  {
    text: '服务流程',
    herf: '#process'
  }
]

const contentList = [
  {
    title: '安全赋值',
    content: [
      '对资产进行识别，并对资产的价值进行赋值',
      '对威胁进行识别，描述威胁的属性，并对威胁出现的频率赋值',
      '对脆弱性进行识别，并对具体资产的脆弱性的严重程度赋值'
    ]
  },
  {
    title: '风险判断',
    content: [
      '根据威胁及威胁利用脆弱性的难易程度判断安全事件发生的可能性',
      '根据脆弱性的严重程度及安全事件所作用的资产的价值计算安全事件造成的损失',
      '根据安全事件发生的可能性以及安全事件出现后的损失，计算安全事件一旦发生对组织的影响，即风险值'
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
    content: '就发现的问题提出防护对策、整改措施，解决在安全评估中发现的技术性安全问题，所有的被评估对象应不再存在中、高风险漏洞'
  },
]

const progressList = [
  {
    title: '快速响应',
    text: '螣龙安科工程师团队经验丰富，可进行快速响应和安全事件级别定位，为处置安全事件排序'
  },
  {
    title: '攻击分析',
    text: '可通过网络流量、系统日志等方式分析安全事件类型，得出入侵路径，并结合系统与网络安全现状，为客户定制安全事件解决方案'
  },
  {
    title: '事件处置',
    text: '就发现的问题一一处理，切断入侵途径，清理恶意程序、病毒等，恢复客户的数据，助力正常业务工作的开展和继续'
  },
  {
    title: '整合优化',
    text: '入侵风险解除后，可就客户的整体情况与此次事件处置过程整合出一份完整的《应急响应报告》，让客户对自身安全现状有更充足的了解'
  },
  {
    title: '更多合作',
    text: '向已合作过且有意愿的客户推送【潮汐主动安全平台（BAS/ASM应用）】或【谜团网络攻防靶场】，给予客户更全面的安全保障服务建议，全效保障客户安全'
  }
]

const applicationList = [
  {
    img: appImg1,
    title: '黑客入侵救援',
    text: '远程实时响应，上海2小时内到达现场，处理黑客攻击、病毒爆发、木马/后门程序、脱库/入侵等事件，让客户摆脱黑客控制；通过对服务器漏洞发掘和业务系统漏洞发掘，对业务系统进行全面的渗透测试，避免再次遭到黑客攻击'
  },
  {
    img: appImg2,
    title: '敏感时期监控服务',
    text: '特殊时期，如元旦、春节等节假日，两会、国庆等敏感时期，新系统和新功能上线，促销和商业活动等重要时期，螣龙安科可提供远程/驻场安全运维监控，防止黑客攻击'
  },
]


export default function Response() {
  const [selectedIntrusionProcessItem, setSelectedIntrusionProcessItem] = useState(intrusionProcessList[0])
  const [selectedSecurityIncidentItem, setSelectedSecurityIncidentItem] = useState(securityIncidentList[0])


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
            <div className='absolute font-medium sm:font-normal top-1/4 text-xl sm:text-5xl sm:text-white text-center sm:text-left w-full sm:w-auto'>应急响应</div>
            <div className='absolute top-1/2 sm:w-3/5 -mt-5 font-light'>
              <div className='text-center sm:text-left text-sm sm:text-xl sm:text-white leading-8 w-full tracking-new-widest px-10 sm:px-0 '>
                事件发生后1小时内快速响应，降低企业损失
              </div>
            </div>
            <div className='absolute top-1/2 px-auto gap-6 pt-16 w-full sm:w-auto flex justify-center sm:justify-start'>
              <Link href='/spt-contact'>
                <Button size='large' type='primary' shape='round'>立即咨询</Button>
              </Link>
            </div>
          </div>
        </section>
        {/* <section className='sm:max-w-7xl sm:min-w-main-width sm:mx-auto mt-14'>
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
        </section> */}
        <section className='sm:max-w-7xl sm:min-w-main-width sm:mx-auto mt-10 items-center' id='content'>
          <section id='process' className='mx-4 sm:mx-auto'>
            <Title title='应用场景' subTitle='Application scenario' />
            <section className='sm:max-w-7xl sm:mx-auto sm:mt-7 sm:flex flex-wrap gap-8 justify-center'>
              {
                applicationList.map((item, key) => {
                  return (
                    <div key={key} className='bg-white rounded-lg p-8 sm:flex gap-4 sm:hover:scale-105 transition-all sm:w-1/2 flex-1 shadow-card mb-3 sm:mb-0'>
                      <section className='shrink-0 w-6 sm:w-auto mb-2 sm:mb-0'>
                        <Image src={contentIcon} alt='' width={48} height={48} />
                      </section>
                      <section>
                        <div className='font-bold text-lg sm:text-xl mb-2'>{item.title}</div>
                        <div className='text-gray-500 text-sm font-light leading-6'>{item.text}</div>
                      </section>
                    </div>
                  )
                })
              }
              <section className='relative w-full mb-20 sm:transition-all'>
                <section className='hidden sm:block'>
                  <Image src={appImg} alt='' layout='responsive' />
                </section>
                <section className='block sm:hidden'>
                  <Image src={phoneAppImg} alt='' layout='responsive' />
                </section>
                <section className='absolute top-0 sm:top-2 text-white text-center py-4 sm:py-8 px-4 sm:px-56'>
                  <div className='mb-4 sm:text-3xl'>
                    做企业高效的“止血棒”
                  </div>
                  <div className='text-xs sm:text-sm leading-6 sm:leading-7 font-light'>
                    信息时代，计算机技术飞速发展，有组织、有目的的网络攻击形势愈加明显，近些年来企业成为了网络攻击的主要受害者。事实上一旦遭受攻击，企业往往会面临信息业务中断、系统宕机、网络瘫痪等重大风险，而螣龙安科提供的入侵应急响应服务（溯源、分析、处置、优化等）可有效遏制入侵态势，第一时间为企业止损。
                  </div>
                </section>
              </section>
            </section>
          </section>
          <section id='value'>
            <Title title='服务内容' subTitle='Service Content' />
            <div className='gap-4 mb-20 mx-4 sm:mx-auto'>
              <section className='sm:flex gap-6 items-center border-b pb-10 mb-6 sm:mb-20 w-full justify-center shadow-card sm:shadow-none rounded-lg sm:rounded-none p-4 sm:p-0'>
                <section className='sm:w-1/2 sm:px-6'>
                  <h1 className='text-lg sm:text-3xl mb-6'>分析入侵过程</h1>
                  <div className='flex items-start gap-3'>
                    <section className='pt-1 hidden sm:block'>
                      <Image src={blueIcon} alt='' />
                    </section>
                    <div>
                      <h2 className='hidden sm:block text-xl font-normal mb-4'>主要类型</h2>
                      <section className='flex flex-wrap gap-2'>
                        {
                          intrusionProcessList.map((item, key) => {
                            return (
                              <span
                                key={key} className='shrink-0 border-blue-700 border-2 text-blue-700 font-light px-4 sm:py-1 rounded-2xl cursor-pointer' style={{
                                backgroundColor: selectedIntrusionProcessItem.button === item.button ? 'rgb(29 78 216)' : '#fff',
                                color: selectedIntrusionProcessItem.button !== item.button ? 'rgb(29 78 216)' : '#fff',
                                }}
                                onClick={() => setSelectedIntrusionProcessItem(item)}
                              >
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
                      <Image src={blueIcon} alt='' />
                    </section>
                    <div>
                      <h2 className='text-base sm:text-xl font-bold sm:font-normal'>{selectedIntrusionProcessItem.title}</h2>
                      <section className='text-gray-500 font-light text-sm leading-6 sm:h-14'>
                        {selectedIntrusionProcessItem.text}
                      </section>
                    </div>
                  </div>
                </section>
                <section>
                  <Image src={contentImg1} alt='' />
                </section>
              </section>
              <section className='sm:flex flex-row-reverse gap-6 items-center border-b mb-10 w-full justify-center shadow-card sm:shadow-none rounded-lg sm:rounded-none p-4 sm:p-0'>
                <section className='sm:w-1/2 m:px-6'>
                  <h1 className='text-lg sm:text-3xl mb-6'>处置安全事件</h1>
                  <div className='flex items-start gap-3'>
                    <section className='pt-1 flex-shrink-0 w-6 hidden sm:block'>
                      <Image src={blueIcon} alt='' />
                    </section>
                    <div>
                      <h2 className='text-xl font-normal mb-4 hidden sm:block'>主要类型</h2>
                      <section className='flex flex-wrap gap-2'>
                        {
                          securityIncidentList.map((item, key) => {
                            return (
                              <span
                                key={key} className='shrink-0 border-blue-700 border-2 text-blue-700 font-light px-4 sm:py-1 rounded-2xl cursor-pointer' style={{
                                backgroundColor: selectedSecurityIncidentItem.button === item.button ? 'rgb(29 78 216)' : '#fff',
                                color: selectedSecurityIncidentItem.button !== item.button ? 'rgb(29 78 216)' : '#fff',
                                }}
                                onClick={() => setSelectedSecurityIncidentItem(item)}
                              >
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
                      <Image src={blueIcon} alt='' />
                    </section>
                    <div>
                      <h2 className='text-base sm:text-xl font-bold sm:font-normal'>{selectedSecurityIncidentItem.title}</h2>
                      <section className='text-gray-500 font-light text-sm leading-6 h-14'>
                        {selectedSecurityIncidentItem.text}
                      </section>
                    </div>
                  </div>
                </section>
                <section>
                  <Image src={contentImg2} alt='' />
                </section>
              </section>
            </div>
          </section>
        </section>
        <section className='w-full sm:bg-gray-100 sm:min-w-main-width sm:py-14'>
          <section id='process' className='mb-40 mt-4'>
            <Title title='服务流程' subTitle='Service Process' />
            <Progress list={progressList} />
          </section>
        </section>

      </div>
      <Footer />
    </Layout>
  )
}
