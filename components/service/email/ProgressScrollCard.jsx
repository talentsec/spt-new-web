import React, { useRef, useState } from 'react'
import button from '@/assets/img/service/slideButton.svg'
import icon from '@/assets/img/service/emailIcon.svg'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

const Item = ({ data, dark, index }) => {
  const contentBox = useRef(null)

  return (
    <div
      className='sm:w-1/4 sm:flex-shrink-0 sm:flex-grow-0 px-6 sm:px-8 py-6 sm:py-10 h-96 sm:h-auto'
      style={{
        backgroundColor: !dark ? '#1D2129' : '#fff',
        color: !dark ? '#fff' : '#4E5969'
      }}
    >
      <div className='overflow-hidden h-full mb-5' ref={contentBox}>
        <h1
          className='font-din-bold text-3xl sm:text-6xl' style={{
          background: 'linear-gradient(360deg, #165DFF 16.15%, #12D2AC 88.46%)',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          textAlign: 'justify',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
          }}
        >{'0' + (index + 1)}
        </h1>
        {
          data.map((element, indey) => {
            return (
              <div key={indey}>
                <section className='text-base sm:text-xl flex items-center gap-2 font-bold sm:py-4'>
                  {element.title}
                </section>
                <section className='font-light text-xs sm:text-sm leading-8 sm:leading-8 '>
                  {
                    element.items.map((proItem, indez) => {
                      return (
                        <div key={indez} className='flex items-center gap-2 '>
                          <Image src={icon} alt='' />
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
        window.requestAnimationFrame(move)
      }
    }
    window.requestAnimationFrame(move)
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
        window.requestAnimationFrame(move)
      }
    }
    window.requestAnimationFrame(move)
  }

  return (
    <div>
      <div className='w-full relative hidden sm:block'>
        <div
          className='flex overflow-hidden'
          ref={contentBox}
          style={{
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
            className='w-11 h-11 rounded-3xl bg-blue-700 absolute -right-5 z-10 top-56 cursor-pointer hover:scale-110'
            onClick={slideRight}
          >
            <Image src={button} alt='' />
          </div>
        :
          <div
            className='w-11 h-11 rounded-3xl bg-blue-700 absolute -left-5 z-10 top-56 cursor-pointer hover:scale-110 rotate-180'
            onClick={slideLeft}
          >
            <Image src={button} alt='' />
          </div>}
      </div>
      <div className='block sm:hidden w-screen'>
        <Swiper
        // effect={"coverflow"}
          pagination={false}
          grabCursor
          centeredSlides
          coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          }}
          slidesPerView={1.6}
          className='mySwiper'
        >
          {
          infoList.map((item, key) => {
            return (
              <SwiperSlide key={key}>
                <Item data={item} index={key} dark={key % 2 === 1} />
              </SwiperSlide>
            )
          })
        }
        </Swiper>
      </div>

    </div>

  )
}
