import React from 'react'
import Image from 'next/image'
import { Button } from 'antd'
import joinImg from '@/assets/img/about/join.svg'
import Link from 'next/link'

export default function Footer() {
  return (
    <section className='w-screen sm:min-w-main-width relative'>
      <Image src={joinImg} alt='' layout='responsive'></Image>
      <section className='text-white absolute top-10 text-center w-full text-3xl tracking-new-widest'>联系我们，为您的企业网络安全保驾护航</section>
      <section className='absolute top-24 w-full flex justify-center'>
        <Link href='/spt-contact'>
          <div className='px-6 py-3 bg-white rounded-3xl text-blue-700 cursor-pointer hover:scale-105'>
            立即联系我们
          </div>
          {/* <Button size='large'  shape="round">立即联系我们</Button> */}
        </Link>
      </section>
    </section>
  )
}
