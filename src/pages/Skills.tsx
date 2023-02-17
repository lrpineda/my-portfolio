import React, { useEffect } from 'react'
import { useInView } from "react-intersection-observer";
import Skill from '../components/Skill'
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, },
  visible: {
      opacity: 1,
      transition: {
          delay: 0.6,
          delayChildren: 0.6,
          staggerChildren: 0.4,
      }
  }
}

type Props = {
  setDark: any;
}
const Skills = ({setDark}:Props) => {
  const { ref, inView } = useInView({ threshold: 0.7 });
  useEffect(() => {
    if (inView) {
      setDark(true);
    }
  }, [inView]);
  
  return (
    <div ref={ref} className='md:h-screen  snap-center snap-always bg-[#232425] pb-11 text-white justify-center mx-auto flex gap-6 flex-col items-center'>
       <motion.h2 
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className='font-thin tracking-wider text-3xl '>
          SKILLS
        </motion.h2>
       <motion.div variants={container} initial='hidden' whileInView='visible' viewport={{once:true}} className='flex flex-wrap max-w-7xl gap-4 justify-center items-center'>
            <Skill skillName='c++' title='C++' percentage='90%'/>
            <Skill skillName='codeceptjs' title='Codecept JS' percentage='95%'/> 
            <Skill skillName='css' title='CSS' percentage='100%'/>
            <Skill skillName='git' title='Git' percentage='100%'/>
            <Skill skillName='graphql' title='GraphQL' percentage='95%'/>
            <Skill skillName='html' title='HTML' percentage='100%'/>
            <Skill skillName='js' title='JavaScript' percentage='100%'/>
            <Skill skillName='mongodb' title='MongoDB' percentage='90%'/>
            <Skill skillName='nodejs' title='NodeJS' percentage='100%'/>
            <Skill skillName='python' title='Python' percentage='90%'/>
            <Skill skillName='react' title='React' percentage='95%'/>
            <Skill skillName='sql' title='SQL' percentage='99%'/>
            <Skill skillName='tailwind' title='Tailwind' percentage='100%'/>
            <Skill skillName='ts' title='TypeScript' percentage='95%'/>
            <Skill skillName='framer' title='Framer Motion' percentage='90%'/>
       </motion.div>
       <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }} 
        className='font-thin text-sm'>
        Icons by <a className='underline' target="_blank" href="https://icons8.com">Icons8</a>
        </motion.p>
    </div>
  )
}

export default Skills