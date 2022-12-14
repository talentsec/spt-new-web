import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/img/news/asm1.png'
import img2 from '@/assets/img/news/asm2.png'

export default function ASMDetail() {
  return (
    <div
      className='p-2 sm:p-8 text-gray-600 overflow-auto' style={{
        height: '520px'
      }}
    >
      <h1 className='text-center text-3xl'>潮汐ASM介绍</h1>
      <h3 className='text-center text-xl my-6'>
        螣龙安科：打造自动化攻击面发现管理系统 为企业实战化攻防赋能
      </h3>
      <div
        className='leading-8 '
        style={{
          textIndent: '2em'
        }}
      >
        <section>
          近年来在大国博弈的背景下，网络空间已经没办法再独善其身，从俄乌网络战中能够看到，网络空间已经成为了下一个战场。在这样的大背景之下，用户开始清晰地意识到，应对更复杂的安全威胁仅仅做好安全合规是不够的，安全实战能力方面也需要得到真正的提升。此外，数字化的发展以及企业业务的发展让安全来到了一个业务驱动的时代，原来一些企业的业务对互联网依赖性并不强，但是随着企业对于应用系统和数据的依赖程度逐渐加深以及业务的拓展，企业暴露在互联网上的业务资产正在急剧增长。在攻击者视角下，只要企业将业务发布到互联网上，或者是跟互联网存在关联，那么无论这家企业位于世界上哪个国家，哪个角落，他们面对的风险和挑战其实是一样的。拿医院举例来说，过去人们看病都是在线下医院，但现在各大医院也正在推出互联网医院应用，网上挂号、复诊、报告查询等等越来越多的业务都被搬到了互联网上，与患者相关的个人隐私信息、病例信息就有可能暴露在外，成为一个安全隐患。
        </section>
        <section>
          严峻的网络安全形势，推动着企业用户的安全需求正在从合规驱动阶段逐步过渡向实战驱动阶段，在用户需求的呼唤下，一批更先进的安全产品和安全理念也应运而生，自动化攻击面发现管理等就是这一阶段的典型代表。
        </section>
        <section>
          作为专注网络安全的公司，螣龙安科身处网络攻防一线，将自身实战应用的攻击面发现管理工具升级，打造了潮汐自动化攻击面发现系统ASM——以攻击者视角聚焦企业网络空间IT资产，帮助客户时刻洞察网络空间资产风险，主动掌控资产动态，发现资产短板，及时提出收敛资产暴露面的数据支撑，验证暴露资产的漏洞可利用性，并形成关联关系的可快速构建的实战化、自动化、智能化的攻击面发现管理系统，无需专业实战攻防人才，即可让企业直接拥有攻击者视角及能力，提前预判风险，从而及时修补漏洞。
        </section>
        <section>
          行业中经常提到，安全的本质是攻防两端的对抗，在过去做安全建设时，企业用户更多是从防守者视角出发，通过采购安全设备和安全服务来查漏补缺，按图索骥般的强化自身的安全防御机制，但攻击者的视角和能力却被忽略了。攻击者视角的缺失催发了攻击面发现管理概念的诞生，攻击面发现管理概念最早由国际知名咨询机构Gartner于2018年首次提出，在2021年7月，Gartner发布了《2021安全运营技术成熟度曲线》，将攻击面发现管理相关技术定义为新兴技术。
        </section>
        <section className='w-full flex justify-center my-10'>
          <Image src={img1} alt='' />
        </section>
        <section>
          随着攻击技法的快速迭代，防守的技法也需要跟踪攻击技法的技术演进而演进，但对于企业用户来说，在有限的安全投入下，持续地跟进学习当前行业内最专业的技术是不现实的，如何借助一种技术，或是一个安全系统来帮助弥补攻击者视角的缺失，在无需学习攻击技法的情况下，也能够不断的动态调整防御策略，持续性地对自身安全态势进行监控和发现管理成为企业当下的核心需求。
        </section>
        <section>
          螣龙安科对攻击者视角的理解是，站在攻击者的位置用攻击者的思路思考、审视目标系统，持续性的监测目标的暴露面变化情况，主动、高效、迅速地找到突破路径及企业资产弱点。
        </section>
        <section>
          2021年Gartner报告中提到了“攻击面发现管理”的概念，与螣龙安科自身的理念和相关的产品技术不谋而合。因此，螣龙安科开始围绕这一工具雏形，在更深层的资产测绘功能和可视化层面逐渐丰富，并最终打造出了“潮汐自动化攻击面发现管理系统”。 通过潮汐攻击面发现管理系统，螣龙安科将攻击者的思路去融汇到这个系统里面，让客户得以用攻击者视角来审视自身的缺陷。
        </section>
        <section>
          潮汐ASM系统是一个网络空间资产攻击面管理系统，通过录入简单的种子信息（IP或域名等），潮汐ASM系统可以根据种子为核心，在智能引擎以及近百个全球化数据源的加持下，为企业客户自动化地拓展出完整的网络空间资产。系统具备网络空间资产的快速识别、探测和定位能力，在高速探测模式下，潮汐ASM系统能够在3秒的时间内扫描超过6万个端口；在深度探测模式下，潮汐ASM系统针对每个端口能够准确地地识别对应的协议以及服务组件。此外，系统内部内置了丰富的规则集，规则集数量在行业内处于领先水平，并且能够进行动态的添加和维护。
        </section>
        <section>
          螣龙安科现有客户的行业覆盖面极广，涉及政府、金融、运营商、能源等，典型头部客户包括中国电信集团、中国银联、西门子、中远集团等大型国企央企以及世界500强企业。潮汐攻击面发现管理系统将螣龙安科团队过往所有的攻防技战术和资源浓缩其中，以一种极简的使用方式交付给用户，能够完全自动化地帮助用户持续性的发现和梳理资产暴露面的情况，将包括域名、IP地址、端口情况，协议、操作系统、组件、指纹等等这些跟目标系统相关的信息详细地展现在用户眼中。
        </section>
        <section>
          在梳理完用户全部暴露在外的资产和攻击面后，潮汐自动化攻击面发现系统还会从关联关系的视角、端口数据的视角将不同资产之间的关联关系进行展示，帮助用户了解到未知的资产暴露情况，梳理这些资产的细节和暴露面，是实施攻击面发现管理的基础。
        </section>
        <section>
          极简的使用方式是潮汐自动化攻击面发现系统的最大特点。既然攻击者在最初面对一个目标时，可能掌握的最基础的信息只有企业的名称或者域名，那么潮汐系统就以同样的视角来提供给用户。用户只需要输入企业的公司名称或域名，系统便能够迅速在整个互联网中检测相关的暴露面资产，验证攻击路径，发现企业短板，最终将全部攻击面自动化地向用户交付。
        </section>
        <section className='w-full flex justify-center my-10'>
          <Image src={img2} alt='' />
        </section>
        <section>
          当前国内整体安全市场刚刚从合规安全转向实战化驱动和业务驱动，攻击面发现管理细分市场也处于刚刚起步阶段。补足攻击者视角的缺失注定成为企业用户们下一步安全防御建设的重要方向。随着安全意识的深入转变，主动攻击面发现管理市场很快会迎来爆发期。在这样蓬勃发展的市场环境下，螣龙安科也会继续持续扩大潮汐自动化攻击面发现管理系统的既有优势，持续以SAAS和定制化的模式向企业输送攻击者能力，赋能企业实战攻防能力建设。同时在技术层面不断增强资产测绘、漏洞验证以及暴露面收敛的能力，推动潮汐自动化攻击面发现管理系统在更多用户场景中得到广泛应用。
        </section>
      </div>

    </div>
  )
}
