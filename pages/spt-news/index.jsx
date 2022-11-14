import React, { useEffect, useState } from 'react'
import Layout from '@/components/common/Layout'
import Image from 'next/image'
import Footer from '@/components/common/Footer'
import MainImg from '@/assets/img/product/newsMain.png'
import NewsPannel from '@/components/service/news/NewsPannel.jsx'
import img1 from '@/assets/img/news/news1.png'
import img2 from '@/assets/img/news/news2.png'
import img3 from '@/assets/img/news/news3.png'
import img4 from '@/assets/img/news/news4.png'
import img5 from '@/assets/img/news/news5.png'
import img6 from '@/assets/img/news/news6.png'
import img7 from '@/assets/img/news/news7.png'
import img8 from '@/assets/img/news/news8.png'
import img9 from '@/assets/img/news/news9.png'
import img10 from '@/assets/img/news/news10.png'
import img11 from '@/assets/img/news/news11.png'
import img12 from '@/assets/img/news/news12.png'
import img13 from '@/assets/img/news/news13.png'
import img14 from '@/assets/img/news/news14.png'
import img15 from '@/assets/img/news/news15.png'
import ASMDetail from '@/components/service/news/ASMDetail'

const newsList = [
  {
    category: '融资资讯',
    tag: '融资资讯',
    img: img1,
    title: '网络安全公司「螣龙安科」完成千万元新一轮融资，名川资本领投',
    link: 'https://www.cyzone.cn/article/661648.html',
    summary: '创业邦获悉，网络安全初创公司螣龙安科宣布完成千万元新一轮融资，本轮融资领投方为名川资本，中南资本跟投。'
  },
  {
    category: '融资资讯',
    tag: '融资资讯',
    img: img2,
    title: '主打自动化模拟攻击领域，「螣龙安科」完成千万元级别的新一轮融资',
    link: 'https://36kr.com/p/1508212817383429?channel=wechat',
    summary: '36氪获悉，网络安全初创公司「螣龙安科」已于日前完成千万元级别的新一轮融资，本轮融资领投方为名川资本，中南资本跟投。'
  },
  {
    category: '比赛快报',
    img: img3,
    title: '2022安全创客汇复赛重庆站圆满落幕，「螣龙安科」晋级20强半决赛',
    link: 'https://www.qianxin.com/chuangkehui/2022/news/details?id=5268',
    summary: '近日，2022安全创客汇复赛在重庆两江新区圆满结束，20家创新企业经过长达12小时的网安创业“拉力赛”，获得晋级席位，并将在2022北京网络安全大会期间进行最终对决。'
  },
  {
    category: '比赛快报',
    tag: '比赛快报',
    img: img4,
    title: '关注企业主动安全，「螣龙安科」成功晋级2022安全创客汇10强',
    link: 'https://i.ifeng.com/c/8I6GaT1F0et',
    summary: '7月27日，2022第七届安全创客汇决赛在北京圆满结束。经历了海选、50强、20强、10强的“拉力赛”，螣龙安科顺利晋级年度10强，进入总决赛！'
  },
  {
    category: '产品发布',
    tag: 'ASM',
    title: '螣龙安科：打造自动化攻击面发现管理系统 为企业实战化攻防赋能',
    summary: '近年来在大国博弈的背景下，网络空间已经没办法再独善其身，从俄乌网络战中能够看到，网络空间已经成为了下一个战场。在这样的大背景之下，用户开始清晰地意识到，应对更复杂的安全威胁仅仅做好安全合规是不够的，安全实战能力方面也需要得到真正的提升...',
    detail: ASMDetail
  },
  {
    category: '产品发布',
    tag: 'BAS',
    title: '重新定义企业安全- BAS自动化模拟攻击系统',
    link: 'https://zhuanlan.zhihu.com/p/386605103',
    summary: '长期以来，安全团队一直通过红（攻击者）蓝（防御者）团队演习来测试其组织防御的强度。这些演习由经验丰富的安全专业人员领导，并在受控环境下进行，最终，帮助企业或组织更清晰地了解其网络安全状况...'
  },
  {
    category: '产品发布',
    tag: '产品发布',
    title: '「螣龙安科｜潮汐安全感知平台 2.0」：商业平台与开源社区联动，创建主动安全平台',
    link: 'https://www.ithome.com/0/604/427.htm',
    summary: '近年来，随着网络技术的快速发展和应用，众多企业从中受益，也面临了前所未有的威胁与挑战，网络安全逐渐成为热门词汇。继近期《网络安全法》《数据安全法》《个人信息保护法》三法联动，企业掀起了新一轮安全热潮...'
  },
  {
    category: '产品发布',
    tag: '产品发布',
    title: '「螣龙安科｜潮汐安全感知平台」：为大型企业提供平台式基础设施，助力企业标准化输出安全能力',
    link: 'https://www.fromgeek.com/daily/1044-464808.html',
    summary: '2020年，螣龙安科推出潮汐BAS自动模拟攻击平台，基于“以攻为守、以攻促防”的安全角度，潮汐.自动模拟攻击系统结合AI模型和攻击技术，可以对整个安全基础架构进行连续、自动化的测试...'
  },
  {
    category: '产品发布',
    tag: '产品发布',
    title: '「螣龙安科｜网络攻防靶场」：网络安全培训的实战平台',
    link: 'https://zhuanlan.zhihu.com/p/386610269',
    summary: '现代世界中的种种元素都依赖于互联网技术。人们相信科技与技术会按照它被开发出来的样子去运作，并在人们需要使用的时候信手拈来...'
  },
  {
    category: '创始人动态',
    tag: '创始人动态',
    img: img5,
    title: '螣龙创始人王昊天亲自分享计算机教程-网络安全攻防实战',
    link: 'https://time.geekbang.org/course/intro/100055001',
    summary: '本Web网络安全攻防实践视频学习课程全集，由极客时间王昊天老师讲课，共64讲课程，在这门课程中，我们设计了三个主要板块，分别是Web前端基础技术、Web安全常见漏洞攻防演练以及互联网公司安全运营。'
  },
  {
    category: '创始人动态',
    tag: '创始人动态',
    img: img6,
    title: '螣龙创始人王昊天亲自分享计算机教程-Web 漏洞挖掘实战',
    link: 'https://time.geekbang.org/column/intro/100101501',
    summary: '这是一门安全课程，也是一门优雅编码课程...'
  },
  {
    category: '商业合作',
    tag: '商业合作',
    img: img7,
    title: '潮汐模拟攻击系统助力某大型教育集团入侵检测，为集团安全保驾护航',
    link: 'https://zhuanlan.zhihu.com/p/386692201',
    summary: '螣龙安科通过自主研发的潮汐攻击模拟平台为某大型教育集团合作，扫描其内部系统中的安全隐患。此次扫描证实该行业巨头实际已经被黑客控制超过一年，如果没有此次安全扫描，黑客后续还可能通过已攻破漏洞获取更多信息...'
  },
  {
    category: '商业合作',
    tag: '商业合作',
    img: img8,
    title: '螣龙与某大型保险集团合作，通过潮汐系统帮助客户进行全面安全体检',
    link: 'https://zhuanlan.zhihu.com/p/386687040',
    summary: '螣龙安科通过自主研发的潮汐攻击模拟平台为某大型保险集团客户进行漏洞扫描等一系列的安全体检，辅助网络安全险的定价。潮汐系统帮助其客户准确定位自身企业网络信息安全状况，罗列出各项潜在的安全隐患，并提出对应后期整改方案...'
  },
  {
    category: '商业合作',
    tag: '商业合作',
    img: img9,
    title: '创始人兼CEO王昊天为某大型金融集团开展CTO网安培训',
    link: 'https://zhuanlan.zhihu.com/p/386616509',
    summary: '螣龙安科CEO王昊天为某大型金融集团开展为其两天的CTO网安培训。在培训课程中，王昊天老师介绍了常见的网络攻击方式以及其运作原理，包括钓鱼邮件攻击原理、钓鱼邮件的识别、常见勒索病毒攻击原理、勒索病毒经典案例、以及这些攻击给企业的危害等等...'
  },
  {
    category: '商业合作',
    tag: '商业合作',
    img: img10,
    title: '创始人兼CEO王昊天出席中国电信内部攻防演练，全面助力企业护网',
    link: 'https://zhuanlan.zhihu.com/p/386615428',
    summary: '螣龙安科助力运营商进行护网内训，利用潮汐模拟攻击平台和谜团防御靶场为其提供理论结合实操的攻防演练服务...'
  },
  {
    category: '商业合作',
    tag: '商业合作',
    title: '谜团网络攻防靶场新用途-为网联清算进行反钓鱼邮件培训',
    link: 'https://zhuanlan.zhihu.com/p/386613492',
    summary: '网络钓鱼是一种网络攻击，是指具有恶意动机的攻击者伪装成信誉良好的企业以欺骗人们并收集其信用卡详细信息、用户名或密码等敏感信息的一系列行为...'
  },
  {
    category: '商业合作',
    tag: '商业合作',
    title: '「螣龙安科」携手51CTO，发布最新网络安全实战课程',
    link: 'https://zhuanlan.zhihu.com/p/251048903',
    summary: '一年一度的双十一狂欢节即将来临了，相信各大电商平台也正摩拳擦掌跃跃欲试中。回顾2019年，阿里巴巴双十一狂欢节的单日交易额就达到了2684亿人民币，创造了电商交易历史上新的记录...'
  },
  {
    category: '商业合作',
    tag: '商业合作',
    title: '与蓝盟IT外包达成战略合作！「螣龙安科」全面布局安全入侵感知入侵防御',
    link: 'http://vr.sina.com.cn/news/hz/2020-07-09/doc-iircuyvk2836881.shtml',
    summary: '螣龙安科与蓝盟IT外包达成战略合作，布局安全入侵感知入侵防御...'
  },
  {
    category: '螣龙活动',
    tag: '螣龙活动',
    img: img12,
    title: '强强联合：「螣龙安科」2022潮汐安全应用开发大赛',
    link: 'https://www.163.com/dy/article/HC0NLALN0539HCHD.html',
    summary: '7月2日，经过一周的大众投票， 2022首届潮汐安全应用开发大赛决出了总冠军以及前三甲，比赛圆满落下帷幕...'
  },
  {
    category: '螣龙活动',
    tag: '螣龙活动',
    title: '恭喜！「影舞者fscan」斩获「螣龙安科」首届潮汐安全开发大赛总冠军',
    link: 'https://zhuanlan.zhihu.com/p/540690453',
    summary: '首届潮汐安全应用开发大赛由安定坊CyberSec以及螣龙安科主办，比赛历时两个月，共吸引了50组个人/团队报名，最终8组单位进入了于2022年6月25日举办的决赛以及DEMO DAY...'
  },
  {
    category: '螣龙活动',
    tag: '螣龙活动',
    img: img13,
    title: '「螣龙安科」潮汐安全应用开发大赛路演项目公开！',
    link: 'https://www.bilibili.com/video/BV1ar4y1u7zF/?spm_id_from=333.337.search-card.all.click',
    summary: '潮汐安全应用开发大赛demo day路演录播完整视频～快来欣赏上海交通大学网络空间安全学院老师的犀利点评与参赛者精彩的项目演示吧！...'
  },
  {
    category: '行业研究',
    tag: '行业研究',
    img: img14,
    title: '容器漏洞评估',
    link: 'https://zhuanlan.zhihu.com/p/251030524',
    summary: '现阶段，我们正在从虚拟化过渡到容器化，一些我们所熟悉的容器化技术就包括了诸如docker或quay.io等。一般来说，我们可以通过配置程序依赖环境来为特定应用程序建立镜像，通常当开发人员使用容器时，它不仅把程序进行了打包，同时也可以将程序封装成操作系统一部分。可糟糕的是，我们不知道容器的连接库是否已打补丁或是否易受到攻击...'
  },
  {
    category: '行业研究',
    tag: '行业研究',
    img: img15,
    title: '威胁研究——与MAZE勒索软件事件相关的策略，技术和程序',
    link: 'https://www.its404.com/article/katekatezzzzz/106583024',
    summary: '至少从2019年5月开始，恶意行为者就一直在积极部署MAZE勒索软件。勒索软件最初是通过垃圾邮件和漏洞利用工具包分发的，后来又转移到妥协后进行部署，多个参与者参与了MAZE勒索软件的操作。MAZE背后的行为者还维护一个面向公众的网站...'
  },
]

const categoryList = [
  '全部资讯', '融资资讯', '比赛快报', '产品发布', '创始人动态', '商业合作', '螣龙活动', '行业研究'
]

export default function News() {
  const [curCategory, setCurCategory] = useState(categoryList[0])
  const [curNews, setCurNews] = useState(newsList)

  useEffect(() => {
    if (curCategory === '全部资讯') {
      setCurNews(newsList)
    } else {
      setCurNews(newsList.filter(item => item.category === curCategory))
    }
  }, [curCategory])

  return (
    <Layout>
      <div className='min-w-max mb-8 bg-gray-100 sm:bg-white'>
        <section className='hidden sm:block w-full sm:min-w-main-width relative'>
          <Image src={MainImg} alt='' layout='responsive' />
          <div className='sm:max-w-7xl text-4xl text-white mx-auto'>
            <div className='absolute top-1/3'>
              新闻资讯
            </div>
          </div>
          <div className='hidden top-3/4 mx-auto px-auto  sm:flex py-3 px-20 bg-white rounded-lg sm:max-w-7xl -translate-y-12 shadow-card justify-between font-bold'>
            {
              categoryList.map((item, key) => {
                return (
                  <div
                    key={key} className='p-4 cursor-pointer text-base' style={{
                    color: curCategory === item ? '#165DFF' : "#000"
                    }}
                    onClick={() => setCurCategory(item)}
                  >
                    {item}
                  </div>
                )
              })
            }
          </div>
        </section>
        <section
          className='sm:hidden flex w-screen overflow-auto bg-white text-gray-600 border-t'
          style={{

          }}
        >
          {
            categoryList.map((item, key) => {
              return (
                <div
                  key={key} className='p-4 cursor-pointer text-base flex-shrink-0'
                  style={{
                    color: curCategory === item ? '#165DFF' : "#000"
                  }}
                  onClick={() => setCurCategory(item)}
                >
                  {item}
                </div>
              )
            })
          }
        </section>
        <section className='sm:max-w-7xl sm:mx-auto mt-4 sm:mt-20 '>
          <h1 className='hidden sm:block text-xl ml-4 -mt-20'>
            {curCategory}
          </h1>
          <div>
            {
              curNews.map((item, key) => {
                return <NewsPannel key={key} data={item} />
              })
            }
          </div>
        </section>
      </div>
      {/* <ASMDetail></ASMDetail> */}
      <Footer />
    </Layout>
  )
}
