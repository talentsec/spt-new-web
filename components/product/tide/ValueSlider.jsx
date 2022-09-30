import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

const infoList = [
  {
    title: '基于超自动化实现的显示世界入侵技术',
    content: '- 基于端到端的高度场景化实现，潮汐BAS平台为客户提供了复杂的攻击场景，并且能够在生产环境中，大规模、全生命周期地进行动态安全评估，准确识别安全弱点。'
  },
  {
    title: '评估安全建设有效性',
    content: '- 深度与MITRE ATT&CK框架融合，潮汐BAS平台提供了安全产业内先进的攻击模拟向量及攻击自动化技术，为客户评估安全建设有效性、优化安全建设策略以及提高安全防御能力提供了巨大支撑。'
  },
  {
    title: '持续的安全建设评估与与升级',
    content: '- 基于高度标准化、细颗粒度的攻击模拟数据反馈，客户可以简单、快捷地进行安全建设优先级排序，并且针对已经部署的各类安全产品，进行全生命周期的动态测试和持续调优。'
  },
  {
    title: '高度可落地实践的报告',
    content: '- 详细的数据侧报告，无论是从高度友好的用户交互界面获取，还是从简洁设计的API接口获取，都能够为企业内部的红蓝队提供高价值的安全性分析数据，这些数据具备高度的实时性，可以有效地帮助企业及安全团队落地安全建设方案。'
  },
  {
    title: '灵活及先进的生产部署',
    content: '- 潮汐BAS平台基于云原生技术开发，采用了容器和虚拟化技术，可以灵活地部署在公有云、私有云、混合云等多种环境，支持在电脑端、移动终端等多种设备进行访问。'
  },
]

const Item = ({data}) => {
  return (
    <div
      className="w-72 flex-shrink-0 h-96 flex-grow-0 p-10 pb-10 shadow-xl mb-6 mt-2 mx-2 rounded-lg sm:hover:scale-105 transition-all" 
      >
      <div className='overflow-hidden h-full mb-6'>
        <h1 className='text-xl h-12'>{data.title}</h1>
        <section className='leading-7 font-light text-gray-500 mt-7'>
          {data.content}
        </section>
      </div>
    </div>
  )
}

export default function ValueSlider() {
  const contentBox = useRef(null)
  const [isLeftPosition, setIsLeftPosition] = useState(true)

  const slideLeft = () => {
    setIsLeftPosition(true)

    const element = contentBox.current
    const moveWidth = element.scrollWidth - element.clientWidth
    let curWidth = moveWidth
    const step = 20

    function move() {
      curWidth -= step
      element.scrollLeft = curWidth < 0 ? 0 : curWidth
      if (curWidth >= 0) {
        window.requestAnimationFrame(move);
      }
    }
    window.requestAnimationFrame(move);

  }

  const slideRight = () => {
    setIsLeftPosition(false)

    const element = contentBox.current
    const moveWidth = element.scrollWidth - element.clientWidth
    let curWidth = 0
    const step = 20

    function move() {
      curWidth += step
      element.scrollLeft = curWidth > moveWidth ? moveWidth : curWidth
      if (curWidth < moveWidth) {
        window.requestAnimationFrame(move);
      }
    }
    window.requestAnimationFrame(move);
  }

  return (
    <div className='w-full relative py-7'>
      <div 
        className='flex overflow-x-hidden overflow-y-visible gap-5' 
        ref={contentBox}>
        {
          infoList.map((item, index) => {
            return (
              <Item key={index} data={item} index={index} dark={index % 2 === 1}></Item>
            )
          })
        }
      </div>
      
      { isLeftPosition 
      ? 
      <div 
        className='w-8 h-12 absolute -right-9 z-10 top-48 cursor-pointer hover:scale-110 shadow-xl bg-white px-2 py-3 font-bord rounded-md'
        onClick={slideRight}>
          <RightOutlined />
      </div> 
      : 
      <div 
        className='w-8 h-12 absolute -left-9 z-10 top-48 cursor-pointer hover:scale-110 shadow-xl bg-white px-2 py-3 font-bord rounded-md'
        onClick={slideLeft}>
          <LeftOutlined />
      </div>}
    </div>
  )
}
