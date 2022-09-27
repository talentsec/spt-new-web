import React from 'react'
import Image from 'next/image'
import progress from '@/assets/img/service/progress.svg'
import progressIcon from '@/assets/img/service/progressIcon.png'
import progressBar from '@/assets/img/service/progressBar.svg'


const progressList = [
  {
    title: '应急响应',
    text: '对于已经感染的系统进行应急处置，捕获病毒样本并进行分析'
  },
  {
    title: '搜索病毒样本',
    text: '传送1-3个样本文件（文件大小越小越好）'
  },
  {
    title: '注意事项',
    text: '确认合作后，视情况安排工程师上门检查中毒情况，同时会对勒索病毒解密前一些关系到解密的成功率和解密出来的数据留存程度的事项进行讲解'
  },
  {
    title: '报价并开始清楚病毒及解密',
    text: '解密过程全程托管，螣龙安科工程师会通宵达旦、尽快解密数据，在完成解密后第一时间进行交付验证，尽量减少企业损失'
  },
  {
    title: '防御建议',
    text: '解密成功后，螣龙安科的专业工程师会提出相应的防御建议，协助企业修补系统漏洞，防止再次被入侵'
  },
  {
    title: '进行安全培训',
    text: '通过安全培训的方式，防止人为原因被钓鱼或者打开不明邮件感染病毒的情况出现，并给出防御方案以预防病毒再次入侵。'
  }
]

export default function Progress() {
  return (
    <div className='relative sm:min-w-max'>
      <div className='flex justify-center gap-5 '>
        {
          progressList.map((item, key) => {
            return (
              <div key={key} className="w-40 ">
                <section className='flex gap-3 h-20'>
                  <section className='flex-shrink-0'>
                    <Image src={progressIcon} alt=''></Image>
                  </section>
                  <section className='text-xl'>
                    {item.title}
                  </section>
                </section>
                <section className='mb-10'>
                  <Image src={progressBar} alt=''></Image>
                </section>
                <section className='text-sm text-gray-500 leading-7 w-34'>
                  {item.text}
                </section>
              </div>
            )
          })
        }
      </div>
      <div className='absolute top-16 w-full'>
        <div className='flex justify-center w-full'>
          <Image src={progress} alt=''></Image>
        </div>
      </div>
    </div>
  )
}
