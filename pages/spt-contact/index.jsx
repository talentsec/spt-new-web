import React, { useEffect } from 'react'
import Layout from '@/components/common/Layout'
import Image from 'next/image'
import Title from '@/components/common/Title'
import mainImg from '@/assets/img/about/contactMain.png'
import phoneMain from '@/assets/img/home/phoneMain.png'
import icon1 from '@/assets/img/about/contectIcon1.svg'
import icon2 from '@/assets/img/about/contectIcon2.svg'
import icon3 from '@/assets/img/about/contectIcon3.svg'
import location from '@/assets/img/about/location.svg'
import Footer from '@/components/common/Footer'


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

export default function Contect() {
  useEffect(() => {
    const initMap = () => {
      const map = new AMap.Map('container', {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom: 18, //初始地图级别
        center: [121.4491, 31.02216], //初始地图中心点
        showIndoorMap: false //关闭室内地图
      });
      const marker = new AMap.Marker({
        icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
        position: [121.4491, 31.02216],
        offset: new AMap.Pixel(-13, -30)
      });
      marker.setMap(map);
    }
    if (!window.AMap) {
      const mapScript = document.createElement('script')
      mapScript.src = "https://webapi.amap.com/maps?v=1.4.15&key=96574f54a03b6e54ecec16c404a52fb4"
      document.head.appendChild(mapScript)
      mapScript.onload = initMap
    } else {
      initMap()
    }
  }, [])

  return (
    <Layout>
      <div className='sm:min-w-max'>
        <section className='w-full sm:min-w-main-width relative'>
          <div className='hidden sm:block'>
            <Image src={mainImg} alt='' layout='responsive' />
            <div className='sm:max-w-7xl mx-auto'>
              <div className='absolute top-1/4 text-5xl text-white'>联系我们</div>
              <div className='absolute top-1/2 w-3/5 -mt-8 font-light'>
                <div className='text-xl text-white leading-8 tracking-new-widest'>
                  合作共赢，共建安全网络环境美好未来
                </div>
              </div>
            </div>
          </div>
          <div className='block sm:hidden w-full'>
            <Image src={phoneMain} alt='' layout='responsive' />
            <div className='absolute top-14 w-screen'>
              <section className='text-2xl font-bold text-center w-full'>联系我们</section>
              <section className='text-center mt-4 text-gray-500'>合作共赢，共建安全网络环境美好未来</section>
            </div>
          </div>
          <div className='sm:hidden absolute top-44 px-5 w-full'>
            <div className='w-full shadow-card flex flex-col rounded-lg bg-white'>
              {
                list.map((item, key) => {
                  return (
                    <div
                      key={key} className='flex mx-6 py-6 justify-between' style={{
                      borderBottom: `${key === list.length - 1 ? '0px' : '1px'} solid rgba(0,0,0,.04)`
                      }}
                    >
                      <section className='flex-shrink-0 '>
                        <section>{item.title}</section>
                        <section className='text-gray-300 leading-6 flex-shrink-0 mt-2'>{item.content}</section>
                      </section>
                      <section className=''>
                        <Image src={item.icon} alt='' />
                      </section>
                      {/* {
                      key === list.length - 1 ? null : <span className='h-10 border-l'></span>
                    } */}
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className='hidden top-3/4 mx-auto px-auto  sm:flex  bg-white rounded-lg sm:max-w-7xl -translate-y-12 shadow-card justify-between px-8'>
            {
              list.map((item, key) => {
                return (
                  <div key={key} className='flex m-8 w-1/3 justify-between'>
                    <section className='flex-shrink-0 '>
                      <section>{item.title}</section>
                      <section className='text-gray-400 leading-6 flex-shrink-0'>{item.content}</section>
                    </section>
                    <section className='flex-shrink-0'>
                      <Image src={item.icon} alt='' />
                    </section>
                    {
                      key === list.length - 1 ? null : <span className='h-10 border-l' />
                    }
                  </div>
                )
              })
            }
          </div>
        </section>
        <section className='sm:max-w-7xl sm:mx-auto sm:mt-20 mt-52 px-3'>
          {/* <section>
            <Title title="商务咨询" subTitle='business inquiries'></Title>
            <div className='sm:flex justify-center gap-4 mb-20'>
            </div>
          </section> */}
          <section>
            <Title title='地址详情' subTitle='Address details' />
            <div className='sm:flex sm:flex-row-reverse justify-start sm:mb-20 rounded-lg sm:border p-4 gap-20 -mt-10 sm:mt-0'>
              <section className='sm:w-1/2 mb-5'>
                <section className='leading-7 font-light sm:pt-10'>
                  <h3 className='leading-8 text-xl gap-2 hidden sm:flex'>
                    <Image src={location} alt='' />
                    上海
                  </h3>
                  <article>通讯地址：上海市闵行区东川路555号乙楼1层1001室</article>
                  <article>电话：021-62241157</article>
                  <article>邮编：200023</article>
                  <article className='font-semibold mt-3'>技术合作、渠道合作及投融资相关</article>
                  <article>联系人：刘小姐</article>
                  <article>手机号：15618962651</article>
                  <article>电子邮件：lty@talentsec.cn</article>
                </section>
              </section>
              <section className='sm:w-1/2 sm:h-80 h-56 rounded-md overflow-hidden' id='container' />
            </div>
          </section>
        </section>
        <Footer />
      </div>
    </Layout>
  )
}
