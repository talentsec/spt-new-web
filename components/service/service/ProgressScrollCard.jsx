import React, { useRef, useState } from 'react'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import button from '@/assets/img/service/slideButton.svg'
import itemButton from '@/assets/img/service/slideButton2.svg'
import Image from 'next/image'


const Item = ({ data, dark, index, infoList }) => {
  const contentBox = useRef(null)
  const [isBottomPosition, setIsBottomPosition] = useState(false)

  const slideTop = () => {
    setIsBottomPosition(false)

    const element = contentBox.current
    const moveHeight = element.scrollHeight - element.clientHeight
    let curHeight = moveHeight
    const step = 20

    function move() {
      curHeight = curHeight - step
      element.scrollTop = curHeight < 0 ? 0 : curHeight
      if (curHeight > 0) {
        window.requestAnimationFrame(move);
      }
    }
    window.requestAnimationFrame(move);
  }

  const slideBottom = () => {
    setIsBottomPosition(true)

    const element = contentBox.current
    const moveHeight = element.scrollHeight - element.clientHeight
    let curHeight = 0
    const step = 20

    function move() {
      curHeight += step

      element.scrollTop = curHeight > moveHeight ? moveHeight : curHeight
      if (curHeight < moveHeight) {
        window.requestAnimationFrame(move);
      }
    }
    window.requestAnimationFrame(move);
  }


  return (
    <div
      className='w-1/4 flex-shrink-0 flex-grow-0 px-8 pt-10 pb-16'
      style={{
        backgroundColor: !dark ? '#1D2129' : '#F7F8FA',
        color: !dark ? '#fff' : '#4E5969',
        height: '400px'
      }}
    >
      <div className='overflow-hidden h-full mb-5' ref={contentBox}>
        <h1
          className='font-din-bold text-6xl' style={{
          background: 'linear-gradient(360deg, #165DFF 16.15%, #12D2AC 88.46%)',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          textAlign: 'justify',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          }}
        >{'0' + (index + 1)}
        </h1>
        {
          data.map((element, indey) => {
            return (
              <div key={indey}>
                <section className='text-xl flex items-center gap-2 font-bold py-4'>
                  <span
                    className='inline-block' style={{
                    width: '4px',
                    height: '20px',
                    background: 'linear-gradient(360deg, #165DFF 16.15%, #12D2AC 88.46%), #D9D9D9',
                    borderRadius: '8px'
                    }}
                  />
                  {element.title}
                </section>
                <section className='font-light font-sm leading-8 pl-4'>
                  {
                    element.items.map((proItem, indez) => {
                      return (
                        <div key={indez}>
                          {proItem}
                        </div>
                      )
                    })
                  }
                </section>
              </div>
            )
          })
        }
      </div>
      {
        isBottomPosition
          ?
            <span
              className='cursor-pointer hover:animate-pulse rotate-180 inline-block'
              onClick={slideTop}
            >
              <Image src={itemButton} alt='' />
            </span>
          :
            <span
              className='cursor-pointer hover:animate-pulse rotate-180'
              onClick={slideBottom}
            >
              <Image src={itemButton} alt='' />
            </span>
      }

    </div>
  )
}

export default function ProgressScrollCard({ infoList }) {
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
    <div className='w-full  relative'>
      <div
        className='flex overflow-hidden'
        ref={contentBox}
        style={{
          // justifyContent: isLeftPosition ? 'start' : 'end',
          // transform: isLeftPosition ? "translateX('0px')" : "translateX('-600px')",
          transition: 'all .3s ease 0s'
        }}
      >
        {
          infoList.map((item, index) => {
            return (
              <Item key={index} data={item} index={index} dark={index % 2 === 1} />
            )
          })
        }
      </div>

      {isLeftPosition
        ?
          <div
            className='w-11 h-11 rounded-3xl bg-blue-700 absolute -right-5 z-10 top-44 cursor-pointer hover:scale-110'
            onClick={slideRight}
          >
            <Image src={button} alt='' />
          </div>
        :
          <div
            className='w-11 h-11 rounded-3xl bg-blue-700 absolute -left-5 z-10 top-44 cursor-pointer hover:scale-110 rotate-180'
            onClick={slideLeft}
          >
            <Image src={button} alt='' />
          </div>}
    </div>
  )
}
