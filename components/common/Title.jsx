import React from 'react'

export default function Title ({title, subTitle}) {
  return (
    <div className='text-center py-6 '>
      <section className='text-gray-100 text-4xl uppercase font-bold tracking-new-widest'>{subTitle}</section>
      <section className='-translate-y-10 text-4xl'>{title}</section>
    </div>
  )
}
