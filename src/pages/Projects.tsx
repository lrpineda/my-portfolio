import React, { useEffect } from 'react'
import projectData from '../resources/projectData'
import Project from '../components/Project/Project'
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0},
  visible: {
      opacity: 1,
      transition: {
          delayChildren: 0.4,
          staggerChildren: 0.25,
          ease: 'easeOut'

      }
  }
}

type Props = {
  setDark: any;
}

const Projects = ({setDark}:Props) => {
  const { ref, inView } = useInView({ threshold: 0.7 });
  useEffect(() => {
    if (inView) {
      setDark(false);
    }
  }, [inView]);

  return (
    <div ref={ref}  className='pt-8 md:pt-0 bg-slate-50 md:h-screen  relative  flex flex-col gap-3 snap-center snap-always items-center justify-center z-0 '>
      <motion.ul
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{once: true}}
        className='flex  overflow-hidden flex-col md:grid md:grid-cols-3 items-center gap-4 md:max-w-3xl xl:max-w-5xl'>
        {projectData.map((project, index) => (
          <Project {...project} key={index} />
        ))}

      </motion.ul>

      <h3 className='text-xl text-center pb-8'>Click/Tap to open the details about each project.</h3>
    </div>
  )
}

export default Projects