import React from 'react'
import { Collapse } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
const { Panel } = Collapse;

export default function Problem({ list, expandIndex }) {
  return (
    <div>
      <div className='hidden sm:block'>
        {
          list.map((item, key) => {
            return (
              <Collapse
                key={key}
                defaultActiveKey={key === expandIndex ? ['1'] : []}
                expandIconPosition='end'
                expandIcon={({ isActive }) => !isActive ? <PlusOutlined /> : <MinusOutlined />}
                className='tide-collapse-custom-panel'
                ghost
              >
                <Panel header={item.title} key='1'>
                  <p className='text-gray-500 leading-6 text-xs sm:text-sm'>{item.text}</p>
                </Panel>
              </Collapse>
            )
          })
        }
      </div>
      <div className='px-4 block sm:hidden'>
        {
          list.map((item, key) => {
            return (
              <Collapse
                key={key}
                defaultActiveKey={key === expandIndex ? ['1'] : []}
                expandIconPosition='end'
                expandIcon={({ isActive }) => !isActive ? <PlusOutlined /> : <MinusOutlined />}
                className='phone-tide-collapse-custom-panel'
                ghost
              >
                <Panel header={item.title} key='1'>
                  <p className='text-gray-500 leading-6 text-xs sm:text-sm'>{item.text}</p>
                </Panel>
              </Collapse>
            )
          })
        }
      </div>
    </div>

  )
}
