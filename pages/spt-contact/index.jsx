import React, { useEffect } from 'react'
import Layout from '@/components/common/Layout'
import Image from 'next/image'
import Title from '@/components/common/Title'
import mainImg from '@/assets/img/about/contectMain.png'
import icon1 from '@/assets/img/about/contectIcon1.svg'
import icon2 from '@/assets/img/about/contectIcon2.svg'
import icon3 from '@/assets/img/about/contectIcon3.svg'
import location from '@/assets/img/about/location.svg'
import joinImg from '@/assets/img/about/join.svg'
import { Button } from 'antd'
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
  // useEffect(() => {
  //   AMapLoader.load({
  //     "key": "",              // 申请好的Web端开发者Key，首次调用 load 时必填
  //     "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  //     "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  //     "AMapUI": {             // 是否加载 AMapUI，缺省不加载
  //         "version": '1.1',   // AMapUI 缺省 1.1
  //         "plugins":[],       // 需要加载的 AMapUI ui插件
  //     },
  //     "Loca":{                // 是否加载 Loca， 缺省不加载
  //         "version": '1.3.2'  // Loca 版本，缺省 1.3.2
  //     },
  //   }).then(()=>{
  //     console.log(AMap)
  //   });
  // }, [])
  useEffect(() => {
    const initMap = () => {
      const map = new AMap.Map('container', {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom: 18, //初始地图级别
        center: [121.4491 , 31.02216 ], //初始地图中心点
        showIndoorMap: false //关闭室内地图
      });
      const marker = new AMap.Marker({
        icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
        position: [121.4491 , 31.02216 ],
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
      <div className='min-w-max'>
        <section className='w-screen sm:min-w-main-width '>
          <Image src={mainImg} alt='' layout='responsive'></Image>
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
        <section className='sm:max-w-7xl sm:mx-auto mt-20'>
          {/* <section>
            <Title title="商务咨询" subTitle='business inquiries'></Title>
            <div className='sm:flex justify-center gap-4 mb-20'>
            </div>
          </section> */}
          <section>
            <Title title="地址详情" subTitle='Address details'></Title>
            <div className='sm:flex justify-start mb-20 rounded-lg border p-4 gap-20'>
              <section className='w-1/2 h-80 rounded-md overflow-hidden' id='container'>
              </section>
              <section className='w-1/2'>
                <section className='leading-7 font-light pt-10'>
                  <h3 className='leading-8 text-xl flex gap-2'>
                    <Image src={location} alt=''></Image>
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
            </div>
          </section>
        </section>
         <Footer></Footer>
      </div>
    </Layout>
  )
}
