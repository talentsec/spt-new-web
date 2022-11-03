import React from 'react'

export default function Title({ title, subTitle, dark }) {
  return (
    <div className='text-center sm:py-6 mb-4 sm:mb-0'>
      <section
        className='font-din-bold text-xl sm:text-4xl uppercase font-bold tracking-new-widest' style={{
        color: dark ? '#475569' : 'rgb(243 244 246)',
        }}
      >{subTitle}
      </section>
      <section
        className='-translate-y-7 sm:-translate-y-10 text-xl sm:text-4xl font-medium sm:font-normal' style={{
        color: dark ? '#fff' : '#000',
        }}
      >{title}
      </section>
    </div>
  )
}
