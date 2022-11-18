import React, { useState } from 'react'
import Link from 'next/link'
import { MenuOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space, Collapse, Button } from 'antd'
import { menuList } from '@/constant/info'
import logo from '@/assets/img/home/logo.svg'
import Image from 'next/image'
import downArrow from '@/assets/img/home/downArrow.png'
import productIcon from '@/assets/img/home/productIcon.svg'
import { motion } from 'framer-motion'
import Head from 'next/head'
const { Panel } = Collapse


const ProductMenuList = () => (
  <div>
    {
      menuList[0].list.map((item, key) => {
        return (
          <Link key={key} href={item.link}>
            <section className='text-center h-14 pt-4 border-b border-slate-100 text-slate-500 hover:text-blue-700'>{item.title}</section>
          </Link>
        )
      })
    }
  </div>

  // <div>
  //   <section className='text-center h-12 pt-3 border-b border-slate-100 text-slate-500'>潮汐·攻击面管理平台</section>
  //   <section className='text-center h-12 pt-3 border-b border-slate-100 text-slate-500'>潮汐·模拟攻击系统</section>
  //   <section className='text-center h-12 pt-3 text-slate-500'>谜团·网络攻靶场</section>
  // </div>
)



export default function Layout ({ children }) {
  const [menuDisplay, setMenuDisplay] = useState(false)
  const [productMenuDisplay, setProductMenuDisplay] = useState(false)
  const toggleMenu = () => {
    setMenuDisplay(!menuDisplay)
  }

  const MenuList = () => {
    const list = menuList.slice(1).concat({
      title: '资讯',
      list: [],
      link: 'spt-news'
    })

    return (
      <Collapse accordion ghost expandIcon={() => null} defaultActiveKey='0'>
        {
          list.map((item, index) => {
            return item.link
              ? 
                <Link href={item.link} key={index}>
                  <section
                    className='px-4 py-3'
                    onClick={() => setMenuDisplay(false)}
                  >
                    {item.title}
                  </section>
                </Link>
              :
              (
                <Panel header={item.title} key={index}>
                  {
                  item.list.map((menu, key) => {
                    return (
                      <Link href={menu.link} key={key}>
                        <section className='h-9 text-gray-400 pl-3' onClick={() => setMenuDisplay(false)}>
                          {menu.title}
                        </section>
                      </Link>
                    )
                  })
                }
                </Panel>
              )
          })
        }
      </Collapse>
    )
  }

  const handleMenuDisplay = () => {
    if (productMenuDisplay) {
      setProductMenuDisplay(false)
    }
    setMenuDisplay(!menuDisplay)
  }

  const handleProductMenuDisplay = () => {
    if (menuDisplay) {
      setMenuDisplay(false)
    }
    setProductMenuDisplay(!productMenuDisplay)
  }

  return (
    <div className='sm:min-w-main-width'>
      <Head>
        <title>螣龙安科</title>
        <meta name='description' content='螣龙安科官方网站' />
        <link rel='icon' href='/app-icon.svg' />
      </Head>
      <section
        className='w-full h-14 border-x-0  py-3 fixed z-10 glassmorphism shadow-none sm:bg-white sm:shadow-sm sm:min-w-main-width' style={{
          zIndex: '161'
        }}
      >
        <div className='sm:max-w-7xl sm:mx-auto flex justify-between px-6 sm:px-0 h12 align-middle'>
          <div className='mt-2 hover:text-blue-600 pr-4 sm:hidden' onClick={handleProductMenuDisplay}>
            <Image src={productIcon} alt='' />
          </div>
          <Link href='/'>
            <div className='w-28 sm:w-48 pt-1.5 sm:pt-1 cursor-pointer'>
              <Image src={logo} alt='' />
            </div>
          </Link>
          <div className='hidden sm:block first:sm:block sm:pt-1 sm:-mr-10'>
            <Link href='/'>
              <span className='mr-10 cursor-pointer hover:text-blue-600 text-gray-900'>
                首页
              </span>
            </Link>
            {
              menuList.map((item, key) => {
                return (
                  <span className='mr-10 cursor-pointer hover:text-blue-600' key={key}>
                    <Dropdown overlay={<Menu items={item.list.map((element, key) => {
                      return {
                        key: String(key),
                        label: (
                          <Link href={element.link}>
                            <div className='hover:text-blue-700'>
                              {element.title}
                            </div>
                          </Link>
                        )
                      }
                    })}
                                       />}
                    >
                      <Space>
                        {item.title}
                        <Image src={downArrow} alt='' />
                        {/* <DownOutlined /> */}
                      </Space>
                    </Dropdown>
                  </span>
                )
              })
            }
            <Link href='/spt-news'>
              <span className='mr-10 cursor-pointer hover:text-blue-600 text-gray-900'>
                资讯
              </span>
            </Link>
          </div>
          <div className='sm:hidden pt-1 pl-4' onClick={handleMenuDisplay}>
            <MenuOutlined />
          </div>
        </div>
      </section>
      <div className='pt-14' style={{ minHeight: 'calc(100vh - 360px)' }}>
        {
          productMenuDisplay
            ?
              <motion.div
                initial={{ opacity: 1, height: 0 }}
                animate={{ opacity: 1, height: 'fit-content' }}
                className='fixed bg-white w-full z-10 shadow-xl overflow-hidden'
              >
                <ProductMenuList />
              </motion.div> : null
        }
        {
          menuDisplay
            &&
              <motion.div
                initial={{ opacity: 1, height: 0 }}
                exit={{ opacity: 1, height: 0 }}
                animate={{ opacity: 1, height: 'fit-content' }}
                className='fixed bg-white w-full shadow-xl overflow-hidden'
                style={{ zIndex: '500' }}
              >
                <MenuList />
              </motion.div> 
        }
        {children}
      </div>
      <section className='w-full  py-10 bg-gray-100 sm:block hidden'>
        <div className='sm:max-w-7xl sm:mx-auto flex justify-between align-middle pb-8 h-80'>
          <div className='flex flex-col h-auto justify-between'>
            <div className='text-xs  text-gray-500  leading-6'>
              <section className='font-normal text-sm mb-3 text-black'>关注或联系我们</section>
              <section>邮箱：contact@talentsec.cn</section>
              <section>联系地址：上海市闵行区东川路555号乙楼1层1001室</section>
              <section className='mb-1'>联系电话：021-62241157</section>
              <Link href='/spt-contact'>
                <Button type='primary'>联系我们</Button>
              </Link>
            </div>
            <span>
              <Image src={logo} alt='' />
            </span>
          </div>
          <div className='flex'>
            {
              menuList.map((item, index) => {
                return (
                  <div key={index} className='text-xs  text-gray-500 leading-6 pr-20'>
                    <div className='font-normal text-sm mb-3 text-black'>{item.title}</div>
                    {
                      item.list.map((menu, key) => {
                        return (
                          <Link href={menu.link} key={key}>
                            <div className='hover:text-blue-600 cursor-pointer'>{menu.title}</div>
                          </Link>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='border-t sm:mx-auto border-slate-300 sm:max-w-7xl flex justify-between text-gray-400 text-xs font-light py-3'>
          <span>©2020 Serpurity Co.,Ltd All Rights Reserved.</span>
          <span>沪ICP备20019790号-1</span>
        </div>
      </section>
      <section className='w-full pt-10 sm:hidden mt-10'>
        <div className='text-xs  text-gray-500  leading-6 flex justify-center flex-col items-center align-middle'>
          <span className='mb-8'><Image src={logo} alt='' /></span>
          <section className='font-normal text-sm mb-3'>关注或联系我们</section>
          <section>邮箱：contact@talentsec.cn</section>
          <section>联系地址：上海市闵行区东川路555号乙楼1层1001室</section>
          <section className='mb-1 font-din-bold'>联系电话：021-62241157</section>
          <span>
            <Link href='/spt-contact'>
              <Button type='primary'>联系我们</Button>
            </Link>
          </span>
        </div>
        <div className='border-t sm:mx-auto border-slate-300  text-gray-400 text-xs font-light py-1 px-0 mt-7 w-full'>
          <span className='scale-75 text-xs inline-block text-start'>©2020 Serpurity Co.,Ltd All Rights Reserved.</span>
          <span className='scale-75 text-xs float-right inline-block'>沪ICP备20019790号-1</span>
        </div>
      </section>
    </div>
  )
}
