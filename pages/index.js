import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card.jsx'
import TeamCard from '../components/TeamCard'
import Layout from '../components/Layout'
import { products, teams } from '../constant/info'
import 'antd/dist/antd.css'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        {/* <section>
          <section className='sm:text-4xl sm:font-medium text-center'>腾龙安科产品&服务</section>
        </section> */}
        <section className='sm:max-w-7xl sm:mx-auto'>
          <section>
            <section className='text-xl sm:text-4xl font-medium text-center pb-4'>螣龙安科产品&服务</section>
            <section className="text-xs  sm:text-base text-center text-slate-400">螣龙安科面以专业的技术和态度为不同领域的客户群体提供信息安全旗舰产品及相关的网络安全服务</section>
            <section className='sm:flex mt-10 sm:justify-around'>
              {
                products.map((item,index)=> {
                  return <Card key={index} data={item}></Card>
                })
              }
            </section>
          </section>
          <section className='mt-24'>
            <section className='sm:text-4xl sm:font-medium text-center'>为什么选择螣龙安科？</section>
          </section>
          <section>
            <section className='text-xl sm:text-4xl font-medium text-center pb-4'>首席顾问团队</section>
            <section className="text-xs  sm:text-base text-center text-slate-400">螣龙安科的技术顾问团队拥有多年网络安全行业从业经验以及深厚的技术底蕴</section>
            <div className='sm:flex  mt-10 w-full sm:justify-around'>
              {
                teams.map((item, key) => {
                  return <TeamCard key={key} data={item}></TeamCard>
                })
              }
            </div>
          </section>
          <section>d</section>
          <section>d</section>
          <section>d</section>
          <section>d</section>
        </section>
      </div>
    </Layout>
  )
}
