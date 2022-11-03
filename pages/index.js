import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import Card from '../components/common/Card.jsx'
import TeamCard from '../components/common/TeamCard'
import Layout from '../components/common/Layout'
import { products, teams, productList, tabList } from '../constant/info'
import { Button, Tabs } from 'antd'
import ProductCard from '../components/common/ProductCard.jsx'
import HomeTab from '../components/common/HomeTab.jsx'
import 'antd/dist/antd.css'
import Link from 'next/link.js'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const variantsItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function Home () {
  return (
    <Layout>
      <section className='w-full relative sm:min-width'>
        {/* <img src={backImg} alt=''></img> */}
        {/* <Image src={backImg} alt='' ></Image> */}
        <img src='./assets/img/main.svg' className='w-full hidden sm:block' />
        <img src='./assets/img/phoneMain.png' className='w-full sm:hidden' />
        <div className='w-full absolute top-16 sm:top-1/4 left-0 '>
          <div className='sm:max-w-7xl sm:mx-auto sm:w-full mx-8 h-full z-2'>
            <div className='text-xl text-center sm:text-left sm:text-4xl'>螣龙安科·中国·上海</div>
            <div
              className='inline-block w-full sm:w-fit text-2xl text-center sm:text-left  sm:text-5xl font-extrabold my-3' style={{
                background: 'linear-gradient(270deg, #346BFF 0%, #4BAAFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent'
              }}
            >让世界安全互联
            </div>
            <div className='text-center sm:text-left sm:text-sm my-6' style={{ 'letterSpacing?': '0.1em' }}>从“主动安全”视角构建企业网络安全壁垒</div>
            <div className='sm:pt-14 flex justify-around sm:justify-start'>
              <span>
                <Link href='/spt-asm'>
                  <Button type='primary'>产品试用</Button>
                </Link>
                {/* <Link href=''>
                  <Button style={{
                    marginLeft: '10px',
                    backgroundColor: '#E5E6EB'
                  }}
                  >查看案例
                  </Button>
                </Link> */}
              </span>
            </div>
          </div>
        </div>
        <div className='sm:-translate-y-1/3 sm:mx-auto sm:max-w-7xl'>
          <motion.ul
            className='sm:flex gap-3 px-8 sm:px-0 '
            variants={container}
            initial='hidden'
            animate='visible'
          >
            {
              productList.map((item, index) => {
                return (
                  <motion.li key={index} className='item' variants={variantsItem}>
                    <ProductCard key={index} data={item} />
                  </motion.li>
                )
              })
            }
          </motion.ul>
        </div>
      </section>
      <div className='px-8 sm:px-0'>
        {/* <section>
          <section className='sm:text-4xl sm:font-medium text-center'>腾龙安科产品&服务</section>
        </section> */}
        <section className='sm:max-w-7xl sm:mx-auto mt-20'>
          <section>
            <section className='text-xl sm:text-4xl font-medium text-center pb-4'>螣龙安科产品&服务</section>
            <section className='text-xs  sm:text-base text-center text-slate-400'>螣龙安科以专业的技术和态度为不同领域的客户群体提供信息安全旗舰产品及相关的网络安全服务</section>
            <section className='sm:flex mt-10 sm:justify-around'>
              {
                products.map((item, index) => {
                  return <Card key={index} data={item} />
                })
              }
            </section>
          </section>
          <section className='mt-24'>
            <section className='text-xl sm:text-4xl font-medium text-center pb-4'>为什么选择螣龙安科？</section>
            <div className='my-14 hidden sm:block'>
              <Tabs
                defaultActiveKey='1'
                centered
                tabBarGutter={160}
                items={tabList.map((item, key) => {
                  return ({
                    label: item.category,
                    key,
                    children: <HomeTab data={item} />
                  })
                })}
              />
            </div>
            <div className='sm:hidden block mb-20'>
              <Swiper pagination modules={[Pagination]} className='mySwiper'>
                {
                  tabList.map((item, key) => {
                    return (
                      <SwiperSlide key={key}>
                        <HomeTab data={item} />
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
          </section>
          <section>
            <section className='text-xl sm:text-4xl font-medium text-center pb-4'>首席顾问团队</section>
            <section className='text-xs  sm:text-base text-center text-slate-400'>螣龙安科的技术顾问团队拥有多年网络安全行业从业经验以及深厚的技术底蕴</section>
            <div className='sm:flex mt-10  justify-between'>
              {
                teams.map((item, key) => {
                  return <TeamCard key={key} data={item} index={key} />
                })
              }
            </div>
          </section>
        </section>
      </div>
    </Layout>
  )
}
