import React from 'react'
import Image from 'next/image'
import { RightOutlined } from '@ant-design/icons'
import icon1 from '@/assets/img/product/user1.svg'
import icon2 from '@/assets/img/service/contentIcon.svg'


export default function ServiceCard() {
  return (
    <>
      <div className='p-6 hidden sm:flex w-full items-center mb-20 h-96'>
        <section className='bg-black p-8 w-1/3 text-white h-80 hover:h-96 flex items-center transition-all'>
          <div>
            <Image src={icon2} alt='' />
            <section className='text-xl font-bold mt-7 mb-4'>
              勒索处置
            </section>
            <section className='leading-6 text-sm'>
              协助解密、赎金支付、病毒清除。对于已破译的病毒，提供24小时解密服务，协助恢复数据；对于暂无解密手段的病毒，分析病毒样本，协助客户与黑客进行沟通，确定赎金交易方案，获取解密器，审计解密器有效性及安全性，有效清除病毒威胁
            </section>
          </div>
        </section>
        <section className='bg-gray-200 p-8 w-1/3 h-80 hover:h-96 flex items-center transition-all'>
          <div>
            <Image src={icon1} alt='' />
            <section className='text-xl font-bold mt-7 mb-4'>
              隐患加固
            </section>
            <section className='text-gray-400 leading-6 text-sm'>
              风险评估、整改优化。结合客户网络安全现状，提出整改优化思路，完善网络安全防护方案，提升客户持续抵御勒索病毒的能力
            </section>
            <section className='h-10' />
          </div>
        </section>
        <section className='bg-blue-700 p-8 h-80 text-white w-1/3 hover:h-96 flex items-center transition-all'>
          <div>
            <Image src={icon2} alt='' />
            <section className='text-xl font-bold mt-7 mb-4'>
              勒索预防
            </section>
            <section className=' leading-6 text-sm'>
              风险排查、24h持续监控。对企业系统进行整体检测，全面排查风险端口与高危漏洞，及时查杀勒索风险，提供7✖️24h持续监控，实时预警勒索病毒险情
            </section>
            <section className='h-10' />
          </div>
        </section>
      </div>
      <div className='block sm:hidden px-3'>
        <div className='bg-black text-white rounded-lg p-5'>
          <section className='text-xl mb-2'>
            勒索处置
          </section>
          <section className='leading-5 text-sm font-light'>
            协助解密、赎金支付、病毒清除。对于已破译的病毒，提供24小时解密服务，协助恢复数据；对于暂无解密手段的病毒，分析病毒样本，协助客户与黑客进行沟通，确定赎金交易方案，获取解密器，审计解密器有效性及安全性，有效清除病毒威胁
          </section>
        </div>
        <div className='bg-gray-200 text-white-400 rounded-lg p-5 mt-2'>
          <section className='text-xl mb-2'>
            勒索处置
          </section>
          <section className='leading-5 text-sm font-light'>
            协助解密、赎金支付、病毒清除。对于已破译的病毒，提供24小时解密服务，协助恢复数据；对于暂无解密手段的病毒，分析病毒样本，协助客户与黑客进行沟通，确定赎金交易方案，获取解密器，审计解密器有效性及安全性，有效清除病毒威胁
          </section>
        </div>
        <div className='bg-blue-700 text-white rounded-lg p-5 mt-2'>
          <section className='text-xl mb-2'>
            勒索处置
          </section>
          <section className='leading-5 text-sm font-light'>
            协助解密、赎金支付、病毒清除。对于已破译的病毒，提供24小时解密服务，协助恢复数据；对于暂无解密手段的病毒，分析病毒样本，协助客户与黑客进行沟通，确定赎金交易方案，获取解密器，审计解密器有效性及安全性，有效清除病毒威胁
          </section>
        </div>
      </div>
    </>

  )
}
