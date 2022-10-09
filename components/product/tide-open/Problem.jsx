import React from 'react'
import { Collapse, Space } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
const { Panel } = Collapse;

const problemList = [
  {
    title: '潮汐开源社区是什么？',
    text: '潮汐开源社区是一个构建于网络安全领域的相关社区，该社区秉持开源共享的精神，致力于将网络安全检测及渗透测试任务专业化、在线化、自动化与一体化。潮汐开源社区为广大安全从业人员提供了一个网络安全工具及基础测试任务的聚合平台，任何人或者组织都可以使用潮汐开源平台，直观地调用一些工具直接在线对安全资产进行探测，或者加入社区作为安全工具的开发者，上传自己创建的工具与编排供其他社区用户使用，潮汐开源社区的用户甚至可以将自己整套的网络渗透任务全部基于潮汐开源社区的平台实现。'
  },
  {
    title: '潮汐开源社区能为网络安全从业人员带来什么？',
    text: 'AI引擎、工具开源市场和订阅式安全应用告别重复的服务属性工作，大幅度提高工作效率；对于开发者而言，能直接调用平台的自动化安全能力，创造属于自己的安全工具或编排。'
  },
  {
    title: '我的数据安全吗？它们被保存在哪里？',
    text: '安全，潮汐平台将底层的存储引擎设计为 NoSQL，即非关系型数据库，技术选型是 MongoDB。潮汐平台基于 MongoDB 的 命名空间 设计了一个针对性的存储协议，基于这个协议，每个任务的数据存储相互之间都是独立的，并且可以根据协议被停止。'
  },
]


export default function Problem({ list, expandIndex }) {
  return (
    <div>
      {
        list.map((item, key) => {
          return (
            <Collapse
              key={key}
              defaultActiveKey={key === expandIndex ? ['1'] : []}
              expandIconPosition='end'
              expandIcon={({ isActive }) => !isActive ? <PlusOutlined /> : <MinusOutlined />}
              className="tide-collapse-custom-panel"
              ghost>
              <Panel header={item.title} key="1">
                <p className='text-gray-500 leading-6'>{item.text}</p>
              </Panel>
            </Collapse>
          )
        })
      }
    </div>
  )
}
