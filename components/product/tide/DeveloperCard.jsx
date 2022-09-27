import React from 'react'
import Image from 'next/image'
import { RightOutlined } from '@ant-design/icons'
import icon1 from '@/assets/img/product/user1.svg'
import icon2 from '@/assets/img/product/user2.svg'
import icon3 from '@/assets/img/product/user3.svg'
import devIcon1 from '@/assets/img/product/developerIcon1.svg'
import devIcon2 from '@/assets/img/product/developerIcon2.svg'
import devIcon3 from '@/assets/img/product/developerIcon3.svg'

export default function DeveloperCard({data}) {
  return (
    <div className=' p-6 flex w-full mb-20'>
      <section className='p-8 h-68 bg-blue-700 w-1/3 flex-shrink-0 text-white'>
        <Image src={devIcon3} alt=''></Image>
        <section className='text-xl font-bold mt-7 mb-4'>
          清晰的包管理系统
        </section>
        <section className='leading-6'>
          简单清晰的开发文件结构，我们以工具文件夹为单位直接将整个文件夹进行打包和封装，上传至潮汐开源平台。其他编写者可以按包为单位轻松地在自己的编排中调用任意用户所编写的开放式工具包
        </section>
      </section>
      <section className='bg-white p-8 h-68 w-1/3 flex-shrink-0'>
        <Image src={devIcon2} alt=''></Image>
        <section className='text-xl font-bold mt-7 mb-4'>
          自主的镜像管理系统
        </section>
        <section className='text-gray-400 leading-6'>
        开发者所编写的dockerfile可直接在潮汐开源平台的自主镜像管理系统上构建，无需使用开发者本地的计算资源。开发者可直接在潮汐开源平台上管理自己上传的镜像
/编排/模组/应用，为您增效赋能，实现工作效率大幅提升
        </section>
      </section>
      <section className='bg-black p-8 h-68 text-white w-1/3 flex-shrink-0'>
        <Image src={devIcon1} alt=''></Image>
        <section className='text-xl font-bold mt-7 mb-4'>
          一键关联Github
        </section>
        <section className=' leading-6'>
          潮汐开源平台能够快速一键关联开发者的github账号，调用开发者在github上托管的dockerfile，而无需在潮汐开源平台上重新进行上传或者镜像文件的版本控制
        </section>
      </section>
    </div>
  )
}
