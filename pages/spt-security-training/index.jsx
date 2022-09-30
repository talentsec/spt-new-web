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
import MainImg from '@/assets/img/service/trainingMain.svg'
import valueIcon1 from '@/assets/img/service/trainingIconWhite.svg'
import valueIcon2 from '@/assets/img/service/trainingIconBlack.svg'
import shortComingIcon from '@/assets/img/product/tideUseIcon2.svg'
import arrow from '@/assets/img/service/arrow.svg'
import classIcon1 from '@/assets/img/product/user1.svg'
import classIcon2 from '@/assets/img/service/contentIcon.svg'
import advantageImg from '@/assets/img/service/advantage.svg'
import ServiceCard from '@/components/service/rescue/ServiceCard'
import Progress from '@/components/service/rescue/Progress'
import Footer from '@/components/common/Footer'
import ApplicationCard from '@/components/product/mituan/ApplicationCard'
import HoverCard from '@/components/common/HoverCard'


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

const classList = [
  {
    icon: classIcon1,
    hoverIcon: classIcon2,
    title: '以攻击为方向的理论课',
    color: '#F7F8FA',
    hoverColor: '#165DFF',
    height: '430px',
    hoverHeight: '500px',
    info: [
      {
        title: '课程描述',
        list: [
          '1.课程内容包括但不限于：了解攻守对抗规则，学习常见攻击手段，如木马攻击、钓鱼邮件、漏洞攻击、工控系统攻击、webshell木马、主机木马程序、权限获取、弱口令、SQL注入、文件上传等；',
          '2.了解常见攻击思路，学习攻击流程（侦查、武器化、荷载传输、弱点利用、安装后门、基于目标操作）…'
        ]
      }
    ]
  },
  {
    icon: classIcon1,
    hoverIcon: classIcon2,
    title: '以防御为方向的理论课',
    color: '#F7F8FA',
    hoverColor: '#165DFF',
    height: '430px',
    hoverHeight: '500px',
    info: [
      {
        title: '课程描述',
        list: [
          '课程内容包括但不限于：通过学习漏洞扫描实施标准、加固常见安全漏洞、安全事件闭环流程管理、IPS/WAF分析、告警日志分析技术、快速应急响应技术等提高网络安全防御以及应急事件响应能力…',
        ]
      }
    ]
  },
  {
    icon: classIcon1,
    hoverIcon: classIcon2,
    title: '攻击+防御结合靶场实操',
    color: '#F7F8FA',
    hoverColor: '#165DFF',
    height: '430px',
    hoverHeight: '500px',
    info: [
      {
        title: '课程描述',
        list: [
          '1.实操课程将通过谜团攻防靶场，从攻与防的双层角度，围绕业务场景了解攻击是怎么发生的，又可以如何防御该攻击，从而进一步掌握网络攻防知识；',
          '2.部分模拟的安全事件包括但不限于：主机服务器入侵、敏感信息泄露、用户弱口令、SQL注入、Web站点入侵…'
        ]
      }
    ]
  },
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

const valueList = [
  {
    title: '加强主观规范行为',
    text: '任何隐患在人员不规范操作后都可能造成“千里之堤溃于蚁穴”，提升员工的信息安全风险意识可以自然地规范人的行为，从而降低整体风险。',
    icon: valueIcon1,
    color: '#165DFF',
    textColor: '#fff'
  },
  {
    title: '定点安全风险清除',
    text: '通过一套机制筛选出安全意识较弱的人群进行针对性提升，消除隐患，防范于未然。',
    icon: valueIcon2,
    color: '#F7F8FA',
    textColor: '#000'
  },
  {
    title: '加强主观规范行为',
    text: '员工在经过静态、动态等多方位安全意识培训后会提升自我的安全认知能力，从而实现“人人受到宣传教育、人人增强防范意识、人人具备安全习惯”。',
    icon: valueIcon1,
    color: '#000',
    textColor: '#fff'
  },
]

const shortcomingList = [
  {
    icon: shortComingIcon,
    title: '培训体系差',
    content: '培训内容编排不够系统，知识结构散漫，客户无法进行体系学习'
  },
  {
    icon: shortComingIcon,
    title: '实战占比低',
    content: '由于实战内容制作过程复杂，导致市面培训内容以理论为主，实战内容占比较少'
  },
  {
    icon: shortComingIcon,
    title: '更新速度慢',
    content: '安全知识更新过快，导致培训内容落后，缺少紧跟国际最新趋势的安全培训'
  },
]

export default function Rescue() {
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
        <section className='w-screen sm:min-w-main-width flex items-center justify-center sm:max-w-7xl mx-auto py-20 gap:20'>
          <div className='sm:max-w-7xl w-1/2 px-5'>
            <div className=' text-5xl'>信息安全培训</div>
            <div className='mt-4 font-light'>
              <div className='text-xl w-full leading-8 tracking-new-widest'>我们站在攻击者的角度进行高端质量的安全课程内容输出以及培训，专注网络安全、信息安全、白帽子技术等领域，且配备了用于常规漏洞教学的网络攻防靶场。</div>
            </div>
            <div className='px-auto gap-6 mt-10 '>
              <Button 
                size='large' 
                type='primary' 
                shape="round"
                onClick={() => location.href = 'https://mituan.zone/'}>免费试用谜团靶场</Button>
            </div>
          </div>
          <div className='flex-shrink-0'>
            <Image src={MainImg} alt='' ></Image>
          </div>
        </section>
        <section className='sm:max-w-7xl sm:mx-auto mt-10' id='solution'>
          <section >
            <Title title="服务价值" subTitle='service value'></Title>
            <div className='sm:flex justify-center gap-6 mb-20'>
              {
                valueList.map((item,key) => {
                  return (
                    <div key={key} className="flex-1 p-8 rounded-lg hover:-translate-y-3 transition-all" style={{
                      backgroundColor: item.color,
                      color: item.textColor
                    }}>
                      <section className='mb-6'>
                        <Image src={item.icon} alt=''></Image>
                      </section>
                      <section className='mb-4 text-lg font-base'>
                        {item.title}
                      </section>
                      <section className='font-light leading-6'>
                        {item.text}
                      </section>
                    </div>
                  )
                })
              }
            </div>
          </section>
          <section id='content'>
            <Title title="现有网络安全培训的痛点" subTitle='CYBER SECURITY training pain points'></Title>
            <div className='sm:flex justify-center gap-4 mb-20'>
              {
                shortcomingList.map((item, key) => {
                  return <ApplicationCard key={key} data={item}></ApplicationCard>
                })
              }
            </div>
          </section>
          <section id="company">
            <Title title="培训优势" subTitle='Training advantage'></Title>
            <div className='sm:flex justify-center gap-16 mb-20'>
              <section className='w-2/5'>
                <h3 className='text-3xl'>我们的优势与亮点</h3>
                <h4 className='text-xl font-normal'>
                  <span className='inline-block w-1.5 h-1.5 rounded bg-blue-500 mr-3'></span>
                  专业的师资力量</h4>
                <section className='font-light text-gray-400 leading-6 pl-4 mb-5'>螣龙安科拥有大量资深信息安全专家，在信息安全各个方向都有较深的造诣，因此将针对不同课题安排不同的安全专家进行全面讲解</section>
                <h4 className='text-xl font-normal'>
                  <span className='inline-block w-1.5 h-1.5 rounded bg-blue-500 mr-3'></span>
                  完整的解决方案</h4>
                <section className='font-light text-gray-400 leading-6 pl-4 mb-5'>针对企业的安全问题及员工问题，为企业提供完整的培训方案，兼顾企业所有员工在意识评估过程出现的问题，避免安全死角</section>
                <h4 className='text-xl font-normal'>
                  <span className='inline-block w-1.5 h-1.5 rounded bg-blue-500 mr-3'></span>
                  定制化、实战型培训内容</h4>
                <section className='font-light text-gray-400 leading-6 pl-4 mb-5'>螣龙安科会针对每一个客户进行定制化的培训内容以实现最佳培训效果，秉承“实战为主，理论为辅”的宗旨进行课程培训，为客户留下更深刻的印象</section>
              </section>
              <section className='flex-shrink-0'>
                <Image src={advantageImg} alt=''></Image>
              </section>
            </div>
          </section>
        </section>
        <section className=' py-8 sm:max-w-7xl mx-auto'>
          <Title title="课程分类" subTitle='course sorts'></Title>
          <div className='flex justify-center gap-4 mb-20 w-full items-center h-96 mt-14'>
            {
              classList.map((item, key) => {
                return <HoverCard key={key} data={item} rounded></HoverCard>
              })
            }
          </div>
        </section>
      </div>
    </Layout>
  )
}
