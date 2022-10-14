import React from 'react'
import { motion } from 'framer-motion'

export default function AnimationWrapper ({ children }) {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0.3,
        scale: 0.92
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2
        }
      }}
      viewport={{
        once: true,
        margin: '-120px'
      }}
    >
      {children}
    </motion.div>
  )
}
