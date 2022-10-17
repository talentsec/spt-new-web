import React from 'react'
import Image from 'next/image'
import icon1 from '@/assets/img/product/tideUseIcon1.svg'
import icon2 from '@/assets/img/product/tideUseIcon2.svg'
import icon3 from '@/assets/img/product/tideUseIcon3.svg'

const infoList = [
  {
    title: '真实攻防对抗/演练活动',
    icon: icon1,
    demand: ['攻防演练活动发展至今已经高度标准化，在演练期间如何在第一时间快速攻下目标，机器肯定比人做的要好。'],
    use: [
      '1.模拟攻击：对整个安全基础架构进行连续、自动化的测试，从而确定系统的长处与弱点；',
      '2.定位安全短板：迅速定位当前亟需集中关注的区域，阻挡潜在的致命攻击。'
    ]
  },
  {
    title: '安全状况评估',
    icon: icon2,
    demand: ['企业安全状况的确定是企业安全建设的第一步，如对自身安全情况的了解不足或者存在误差，即使是一个很小的安全风险或漏洞，随着时间发展会变得难以控制，直至有一天企业安全被彻底击穿。'],
    use: [
      '1.潮汐集成了上百种攻击工具以及漏洞，对黑客攻击行为进行原子化操作拆解，可在企业环境里进行针对性单元仿真；',
      '2.可应用在多种类型资产以及linux、windows和mac3大系统。'
    ]
  },
  {
    title: '全年安全风险监测',
    icon: icon3,
    demand: ['企业安全的维护不是一蹴而就的事情，网络攻击方法在不断更新迭代，被动式的安全方法背后是巨大的安全危机，在面临新型的、强大的攻击时往往难以招架。'],
    use: [
      '1.以资产为核心的安全状态检查；',
      '2.产品 + 服务的综合服务模式，去除大量无效安全噪音；',
      '3.支持与海量安全设备联动；',
      '4.安全事件场景化。'
    ]
  },
]

export default function Occasion() {
  return (
    <div className='flex gap-10 w-full justify-between'>
      {
        infoList.map((item, key) => {
          return (
            <div key={key} className='rounded-t-3xl w-96 p-8 shadow-card'>
              <section>
                <Image src={item.icon} alt='' />
              </section>
              <section className='text-xl font-bold my-5'>
                {item.title}
              </section>
              <section>
                <div className='flex gap-3 items-center text-base'>
                  <span className='w-1 h-4 rounded-lg bg-blue-700 inline-block' />
                  需求
                </div>
                <div className='leading-6 font-light mt-2 mb-4'>
                  {item.demand[0]}
                </div>
              </section>
              <section>
                <div className='flex gap-3 items-center text-base'>
                  <span className='w-1 h-4 rounded-lg bg-blue-700 inline-block' />
                  应用
                </div>
                <div className='leading-6 font-light mt-2 mb-4'>
                  {
                    item.use.map((item, key) => {
                      return (
                        <div key={key} className='mb-2'>
                          {item}
                        </div>
                      )
                    })
                  }
                </div>
              </section>
            </div>
          )
        })
      }
    </div>
  )
}
