import React from 'react'
import Image from 'next/image'
import joinImg from '@/assets/img/about/join.svg'
import phoneImg from '@/assets/img/home/phoneFooter.svg'
import Link from 'next/link'

export default function Footer () {
  return (
    <section className='w-full sm:min-w-main-width relative'>
      <div className='hidden sm:block'>
        <Image src={joinImg} alt='' layout='responsive' />
      </div>
      <div className='block sm:hidden'>
        <Image src={phoneImg} alt='' layout='responsive' />
      </div>
      <section className='-mt-1 sm:mt-0 text-white absolute top-1/4 text-center w-full sm:text-3xl tracking-new-widest'>联系我们，为您的企业网络安全保驾护航</section>
      <section className='absolute top-1/2 pt-2 w-full flex justify-center'>
        <Link href='/spt-contact'>
          <div className='-mt-1 sm:mt-0 px-32 sm:px-6 py-2 sm:py-3 bg-white rounded-3xl text-blue-700 cursor-pointer hover:scale-105'>
            立即联系我们
          </div>
          {/* <Button size='large'  shape="round">立即联系我们</Button> */}
        </Link>
      </section>
    </section>
  )
}
