import React from 'react'
import { motion } from "framer-motion";

const item = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,

  }
}

type Props = {
  skillName: string,
  percentage: string,
  title: string,

}

const Skill = ({ skillName, percentage, title }: Props) => {

  return (
    <motion.div
      variants={item} 
      initial='hidden' 
      whileInView='visible' 
      className='relative flex items-center justify-center mx-auto bg-[#274A71] hover:bg-slate-100 h-32 w-32 md:h-52 md:w-52 rounded-full group hover:h-28 hover:w-28 hover:md:h-44 hover:md:w-44 transition-all duration-500 ease-in-out cursor-pointer '>
      <img className='h-20 md:h-36 group-hover:opacity-0 transition-all duration-500 ease-in-out' src={require(`../assets/icons/${skillName === 'git' || skillName === 'ts' ? skillName + '.png' : skillName + '.svg'}`)} alt={skillName} />
      <div className='absolute  opacity-0 flex items-center justify-center flex-col group-hover:opacity-100 transition-all duration-500 ease-in-out'>
        <h1 className='text-sm md:text-xl text-black'>{title}</h1>
        <h2 className=' h-full md:text-3xl text-black'>{percentage}</h2>

      </div>
    </motion.div>
  )
}

export default Skill