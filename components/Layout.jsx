import React, { useState } from 'react'
import { DownOutlined, SmileOutlined, MenuOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Collapse, List } from 'antd';
import { menuList } from '../constant/info';
import logo from '../public/assets/img/logo.png'
import Image from 'next/image';
import downArrow from '../public/assets/img/downArrow.png'
import productIcon from '../public/assets/img/productIcon.svg'
import { motion } from "framer-motion";
const { Panel } = Collapse;



const DropdownMenu = ({ list }) => {
  return (
    <Menu
      items={
        list.map((item, key) => {
          return {
            key,
            label: (
              <a target="_blank" rel="noopener noreferrer" href={item.link}>
                {item.title}
              </a>
            ),
          }
        })
      }
    />
  )
}

const ProductMenuList = () => (
  <div>
    <section className='text-center h-12 pt-3 border-b border-slate-100 text-slate-500'>潮汐·攻击面管理平台</section>
    <section className='text-center h-12 pt-3 border-b border-slate-100 text-slate-500'>潮汐·模拟攻击系统</section>
    <section className='text-center h-12 pt-3 text-slate-500'>谜团·网络攻靶场</section>
  </div>
)

const MenuList = () => {
  const list = menuList.slice(1)
  return (
    <Collapse accordion ghost expandIcon={()=> null} defaultActiveKey="0">
      {
        list.map((item, index) => {
          console.log(item)
          return (
            <Panel header={item.title} key={index}>
              {
                item.list.map((menu, key) => {
                  return <section key={key} className="h-9 text-gray-400 pl-3">{menu.title}</section>
                })
              }
            </Panel>
          )
        })
      }
    </Collapse>
  )
  return <Collapse accordion ghost>
    <Panel header="This is panel header 1" key="1">
      <p>{'text'}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{'text'}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{'text'}</p>
    </Panel>
  </Collapse>
}


export default function Layout({ children }) {
  const [menuDisplay, setMenuDisplay] = useState(false)
  const [productMenuDisplay, setProductMenuDisplay] = useState(false)
  const toggleMenu = () => {
    setMenuDisplay(!menuDisplay)
  }

  return (
    <div>
      <section className='w-full h-14 border-b border-slate-200 py-3 fixed z-10 bg-white'>
        <div className='sm:max-w-7xl sm:mx-auto flex justify-between px-6 h12 align-middle '>
          <div className='mt-2 hover:text-blue-600 sm:hidden' onClick={()=>setProductMenuDisplay(!productMenuDisplay)}>
            <Image src={productIcon} alt=''></Image>
          </div>
          <div className='w-28 sm:w-48 pt-1.5 sm:pt-0'>
            <Image src={logo} alt=""></Image>
          </div>
          <div className='hidden sm:block first:sm:block sm:pt-1 '>
            <span className='mr-10 cursor-pointer hover:text-blue-600'>首页</span>
            {
              menuList.map((item, key) => {
                return (
                  <span className='mr-10 cursor-pointer hover:text-blue-600' key={key}>
                    <Dropdown overlay={<DropdownMenu list={item.list} />} overlayClassName="navbar_dropdown__box">
                      <Space>
                        {item.title}
                        <Image src={downArrow} alt=""></Image>
                        {/* <DownOutlined /> */}
                      </Space>
                    </Dropdown>
                  </span>
                )
              })
            }
          </div>
          <div className='sm:hidden pt-1' onClick={()=>setMenuDisplay(!menuDisplay)}>
            <MenuOutlined />
          </div>
        </div>
      </section>
      <div className='pt-14'>
        {
          productMenuDisplay ? <motion.div
          initial={{ opacity: 1, height: 0 }}
          animate={{ opacity: 1, height: 'fit-content' }}
            className='fixed bg-white w-full z-10 shadow-xl overflow-hidden'
          >
            <ProductMenuList></ProductMenuList>
          </motion.div> : null
        }
        {
          menuDisplay ? <motion.div
            initial={{ opacity: 1, height: 0 }}
            animate={{ opacity: 1, height: 'fit-content' }}
            className='fixed bg-white w-full z-10 shadow-xl overflow-hidden'
          >
            <MenuList></MenuList>
          </motion.div> : null
        }
        {children}
      </div>
      <section>
        <div>
          q
        </div>
      </section>
    </div>
  )
}
