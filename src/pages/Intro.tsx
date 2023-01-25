import React from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.4
    },
  },
}

const item = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

function Intro() {
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0, display: 'none' }}
        className='flex h-screen w-screen  snap-center items-center justify-center flex-col'>
        <motion.div
          variants={container}
          initial='hidden'
          animate='visible'

          className='flex-col items-center px-11 
            font-thin text-[5rem] leading-[7.5rem] 
            md:leading-[9rem] 
            md:text-[6.5rem]
            lg:leading-[14rem]  
            lg:text-[12rem] 
            tracking-[.50rem]'>
          <motion.h1 variants={item}>Hello!</motion.h1>
          <motion.h1 variants={item}>I'm</motion.h1>
          <motion.h1 variants={item}>LUIS PINEDA </motion.h1>
        </motion.div>
        <motion.div
          initial={{ y: 3, visibility: 'hidden' }}
          animate={{ y: 0, visibility: 'visible' }}
          transition={{
            delay: 1.7,
            type: 'spring',
            stiffness: 40,
            damping: 0,
          }}
          className='flex flex-col items-center'>

          <h1><FiChevronDown /></h1>
          <h1>Scroll Down To Continue</h1>
        </motion.div>
      </motion.div>


    )
  }

export default Intro