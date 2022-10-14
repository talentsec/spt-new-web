import React from 'react'
import { motion } from "framer-motion";


const infoList = [
  {
    title: '主动安全生态切入点',
    content: '- 通过为客户构建清晰的网络空间资产群视图，潮汐ASM平台作为构建安全视角的第一环，可以与潮汐BAS平台进行联动，构建端到端的高度场景化解决方案，为客户提供持续的安全能力覆盖，撬动包括BAS在内的整个主动安全生态。'
  },
  {
    title: '发现边缘资产',
    content: '- 通过使用潮汐ASM平台，客户可以构建实时、动态、完整的网络空间资产群视角，及时发现被遗忘的网络空间资产及安全建设盲点，进而有效地建设企业防线。'
  },
  {
    title: '与BAS联动',
    content: '- 潮汐ASM平台作为构建安全视角的第一环，可以与潮汐BAS平台进行联动，构建端到端的高度场景化解决方案，为客户提供持续的安全能力覆盖。'
  },
  {
    title: '抵御勒索病毒',
    content: '- 大量勒索病毒事件的起点都是企业网络空间资产群中的弱点资产，通过使用潮汐ASM平台，可以快速定位弱点资产，预防勒索病毒及外部攻击者入侵。'
  }
]

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const variantsItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Item = ({ data }) => {
  return (
    <div
      className='w-72 flex-shrink-0 h-96 flex-grow-0 p-9 pb-12 shadow-2xl mb-6 mt-2 mx-2 rounded-lg sm:hover:scale-105 transition-all'
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
  return (
    <div
      className='flex gap-5 justify-center'
    >
      <motion.ul
        className='sm:flex gap-3 px-8 sm:px-0 '
        variants={container}
        initial='hidden'
        animate='visible'
      >
        {
          infoList.map((item, index) => {
            return (
              <motion.li key={index} className='item' variants={variantsItem}>
                <Item key={index} data={item} index={index} />
              </motion.li>
            )
          })
        }
      </motion.ul>
    </div>
  )
}
