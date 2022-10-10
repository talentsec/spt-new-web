import React, { useEffect, useState } from 'react'
import Layout from '@/components/common/Layout'
import Image from 'next/image'
import { Slider } from 'antd';
import Title from '@/components/common/Title'
import mainImg from '@/assets/img/about/usMain.svg'
import icon1 from '@/assets/img/about/contectIcon1.svg'
import icon2 from '@/assets/img/about/contectIcon2.svg'
import icon3 from '@/assets/img/about/contectIcon3.svg'
import Footer from '@/components/common/Footer'
import logo from '@/assets/img/about/logo.svg'
import companyImg from '@/assets/img/about/company.png'
import founderImg from '@/assets/img/about/founder.png'
import timeLine from '@/assets/img/about/timeLine.svg'
import investor1 from '@/assets/img/about/investor1.png'
import investor2 from '@/assets/img/about/investor2.png'
import investor3 from '@/assets/img/about/investor3.png'
import timeLine2 from '@/assets/img/about/awardTime.svg'
import award from '@/assets/img/about/award.png'
import { motion } from 'framer-motion';

const list = [
  {
    title: '服务咨询',
    content: '021-62241157',
    icon: icon1,
  },
  {
    title: '媒体联络',
    content: 'contact@talentsec.cn',
    icon: icon2,
  },
  {
    title: '竞聘求职',
    content: 'careers@talentsec.cn',
    icon: icon3,
  },
]

const awardList = [
  {
    year: '2021',
    text: '上海市科技型中小企业',
  },
  {
    year: '2021',
    text: 'ISO9001质量体系认证',
  },
  {
    year: '2022',
    text: 'ISO20000服务管理体系认证',
  },
  {
    year: '2022',
    text: 'ISO27001信息安全管理体系认证',
  },
  {
    year: '2022',
    text: '企业信用等级AAA证书',
  },
  {
    year: '2022',
    text: '上海市信息网络安全管理协会会员单位',
  },
  {
    year: '2022',
    text: '上海市信息安全行业协会会员单位',
  },
  {
    year: '2022',
    text: '上海市打击治理新型网络犯罪“玄武”实验室会员单位',
  },
]

const marks = {
  0: {
    style: {
      color: '#FFF',
    },
    label: <div className='text-xl font-light -translate-y-14'>2022.05</div>,
  },
  1: {
    style: {
      color: '#FFF',
    },
    label: <div className='text-xl font-light -translate-y-14'>2020.10</div>,
  },
  2: {
    style: {
      color: '#FFF',
    },
    label: <div className='text-xl font-light -translate-y-14'>2021.08</div>,
  },
  3: {
    style: {
      color: '#FFF',
    },
    label: <div className='text-xl font-light -translate-y-14'>2021.10</div>,
  },
  4: {
    style: {
      color: '#FFF',
    },
    label: <div className='text-xl font-light -translate-y-14'>2022.05</div>,
  },
  5: {
    style: {
      color: '#FFF',
    },
    label: <div className='text-xl font-light -translate-y-14'>2022.06</div>,
  },
  6: {
    style: {
      color: '#FFF',
    },
    label: <div className='text-xl font-light -translate-y-14'>2022.08</div>,
  },
  7: {
    style: {
      color: '#FFF',
    },
    label: <div className='text-xl font-light -translate-y-14'>2022.09</div>,
  }
};

const slideInfoList = [
  ['公司成立'],
  ['种子轮数百万融资'],
  ['BAS应用demo版发布'],
  ['BAS应用商用版发布'],
  ['天使轮数千万融资'],
  ['潮汐平台发布'],
  ['首届潮汐安全应用开发大赛'],
  [
    '8月 - ASM应用商业版',
    '8月 - BAS应用商业版v3',
    '9月 - 潮汐社区招募令',
  ]
]

export default function Contect() {
  const [selectedSlide, setSelectedSlide] = useState(2)
  const handleSlide = (val) => {
    setSelectedSlide(val)
  }
  return (
    <Layout>
      <div className='min-w-max'>
        <section className='w-screen sm:min-w-main-width '>
          <Image src={mainImg} alt='' layout='responsive'></Image>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <section className='absolute top-60 w-full'>
              <section className='flex justify-center'>
                <Image src={logo} alt=''></Image>
              </section>
              <h1 className='text-center font-bold text-5xl my-10'>让世界安全互联</h1>
              <section className='text-center text-gray-500 text-xl'>打造新一代安全生态，为客户安全保驾护航<span className='mx-2'></span>打造一流的网络安全产品，赢得客户的持续信任和认可</section>
            </section>
          </motion.div>
        </section>
        <section className='w-screen sm:min-w-main-width bg-gray-50 py-20'>
          <Title title="公司简介" subTitle='Company Profile'></Title>
          <section className='top-40 w-full'>
            <div className='flex sm:max-w-7xl mx-auto gap-8'>
              <section className='py-14 gap-7 w-1/2'>
                <article className='mb-4 leading-6 text-gray-700'>
                  上海螣龙科技有限公司是一家面向政府和企业的信息安全服务提供商，以专业的技术和优质的服务为不同领域客户群体提供信息安全旗舰产品。
                </article>
                <article className='leading-6 text-gray-700'>
                  螣龙安科始终以客户为中心，通过专业的安全产品与服务为客户打造安全稳固可信的网络空间生态环境，建立可靠的网络安全保护。
                  我们的使命是通过在网络攻击前线获得的创新技术和专业知识，不懈地保护我们的客户；我们希望将顶尖人员和高新技术聚集在一起，成为杰出的安全公司。
                </article>
              </section>
              <section className='flex-shrink-0 w-1/2'>
                <Image src={companyImg} alt=''></Image>
              </section>
            </div>
          </section>
        </section>
        <section className='w-screen sm:min-w-main-width py-20'>
          <Title title="创始人介绍" subTitle='Founder introduction'></Title>
          <section className='top-40 w-full flex justify-center'>
            <section className=''>
              <Image src={founderImg} alt=''></Image>
            </section>
            <section className='w-96 ml-20 pt-14'>
              <h1 className='text-blue-600 text-3xl'>王昊天</h1>
              <h1 className='text-xl'>开源文化爱好者/白帽子/螣龙安科创始人</h1>
              <article className='text-gray-400 leading-7'>
                上海交通大学信息安全学士，信息安全领域资深专家，上海信息安全行业协会理事。
                在网络安全领域工作超过10年，为两项数据安全技术的专利发明人，曾承担多个超大型网络安全事件项目并担任安全团队负责人，在信息安全领域拥有丰富的实战经验和研究成果。
              </article>
            </section>
          </section>
          <section className='bg-blue-700 -translate-y-2 relative'>
            {/* <Title title='发展历程' subTitle='Development History'></Title> */}
            <h1 className='text-4xl text-center text-white font-normal py-9'>发展历程</h1>

            <section className='flex justify-center pb-28 px-20'>
              {/* <Image src={timeLine} alt=''></Image> */}
              <div className='w-full'>
                <Slider
                  defaultValue={selectedSlide}
                  max={7}
                  min={0}
                  step={1}
                  marks={marks}
                  tooltip={{
                    open: false,
                  }}
                  onChange={handleSlide} />
              </div>
            </section>
            <section className='absolute top-56 flex justify-center w-full'>
              <div className='bg-white px-10 py-4 h-40 rounded-xl shadow-card sm:w-4/5 flex items-center flex-wrap'>
                {
                  slideInfoList[selectedSlide].map((item, key) => {
                    return (
                      <div key={key} className="w-full flex-shrink-0">
                        <section key={key} className='text-base leading-6 '>
                          {item}
                        </section>
                      </div>
                    )
                  })
                }
              </div>
            </section>
          </section>
        </section>
        <section className='sm:max-w-7xl sm:mx-auto'>
          <section>
            <Title title="投资者" subTitle='investor'></Title>
            <div className='sm:flex justify-center gap-8 mb-40'>
              <div className='bg-white w-72 h-32 border rounded-md shadow-card pl-10 pt-8 border-slate-100 sm:hover:scale-105 transition-all'>
                <Image src={investor1} alt=''></Image>
              </div>
              <div className='bg-white w-72 h-32 border rounded-md shadow-card pl-11 pt-11 border-slate-100 sm:hover:scale-105 transition-all'>
                <Image src={investor2} alt=''></Image>
              </div>
              <div className='bg-white w-72 h-32 border rounded-md shadow-card pl-10 pt-7 border-slate-100 sm:hover:scale-105 transition-all'>
                <Image src={investor3} alt=''></Image>
              </div>
            </div>
          </section>
          <section>
            <Title title="荣誉资质" subTitle='honorary award'></Title>
            <div className='sm:flex justify-center mb-20 gap-20 items-center px-40'>
              <section className='w-1/2 h-80 rounded-md overflow-hidden relative' id='container'>
                {/* <Image src={timeLine2} alt=''></Image> */}
                {
                  awardList.map((item, key) => {
                    return (
                      <div key={key} className="flex gap-4 font-light justify-start items-center h-9 hover:text-blue-600 cursor-pointer hover:font-normal">
                        <span className=' w-8 inline-block'>{item.year}</span>
                        <span className='inline-block rounded-lg bg-blue-600 w-2 h-2'></span>
                        <span className=''>{item.text}</span>
                      </div>
                    )
                  })
                }
                <div className='absolute h-72 -top-1 left-12 border-x border-blue-600 ml-1' style={{ transform: 'translateX(-1px)' }}></div>
              </section>
              <section className='w-1/2'>
                <Image src={award} alt=''></Image>
              </section>
            </div>
          </section>
        </section>
        <Footer></Footer>
      </div>
    </Layout>
  )
}
