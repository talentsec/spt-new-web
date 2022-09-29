import React, { useRef } from 'react'
import { Carousel, Button } from 'antd';
import Image from 'next/image';
import { DownloadOutlined } from '@ant-design/icons'
import img1 from '@/assets/img/product/asmSlide1.svg'
import img2 from '@/assets/img/product/asmSlide2.svg'
import img3 from '@/assets/img/product/asmSlide3.svg'
import leftImg from '@/assets/img/product/asmLeftButton.svg'
import rightImg from '@/assets/img/product/asmRightButton.svg'


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function AsmCarousel() {

  const carousel = useRef(null)

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const next = () => {
    carousel.current.next()
  }

  const prev = () => {
    carousel.current.prev()
  }

  return (
    <div className='w-full relative px-auto '>
      <div className='absolute top-52 cursor-pointer hover:scale-110' onClick={prev}>
        <Image src={leftImg} alt=''></Image>
      </div>
      <div className='px-40'>
        <Carousel afterChange={onChange} className="" ref={carousel} dots={{className: 'asm_carousel__dots'}}>
          <div>
            <Image src={img3} alt=''/>
          </div>
          <div>
            <Image src={img2} alt=''/>
          </div>
          <div>
          <Image src={img1} alt=''/>
          </div>
        </Carousel>
      </div>
      <div className='absolute top-52 right-0 cursor-pointer hover:scale-110' onClick={next}>
        <Image src={rightImg} alt='' ></Image>
      </div>

    </div>
  )
}
