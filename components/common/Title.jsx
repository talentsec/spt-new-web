import React from 'react'

export default function Title({ title, subTitle, dark }) {
  return (
    <div className='text-center py-6'>
      <section className='font-din-bold text-4xl uppercase font-bold tracking-new-widest' style={{
        color: dark ? '#475569' : 'rgb(243 244 246)',
      }}>{subTitle}</section>
      <section className='-translate-y-10 text-4xl ' style={{
        color: dark ? '#fff' : '#000',
      }}>{title}</section>
    </div>
  )
}
