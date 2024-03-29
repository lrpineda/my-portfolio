import React from 'react'
import { Nav } from './nav'
import { motion } from 'framer-motion'

type Props = {
  dark: boolean;
}

function Header({dark}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 300 }}
      whileInView={{opacity: 1, y: 0}}
      transition={{delay: 0.3}}
      viewport={{once: true}}

      className={`md:sticky top-0 max-w-7xl p-4 md:p-7 flex justify-center lg:justify-between mx-auto z-10  ${dark ? 'text-white': 'text-black'} `}>
      <motion.h1 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        transition={{delay: 0.4}}
        className='text-xl lg:text-[24px] font-extralight tracking-wider'>LUIS PINEDA</motion.h1>
      <Nav dark={dark} />
    </motion.div>
  )

}

export default Header