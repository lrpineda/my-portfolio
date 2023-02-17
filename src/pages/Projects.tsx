import React, { useEffect } from 'react'
import projectData from '../resources/projectData'
import Project from '../components/Project/Project'
import { useInView } from "react-intersection-observer";

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
    <div ref={ref}  className='pt-8 md:pt-0 bg-slate-50 md:h-screen md:w-screen relative overflow-scroll flex flex-col gap-3 snap-center snap-always items-center justify-center z-0 '>
      <ul className='flex overflow-y-scroll  flex-col md:grid md:grid-cols-3 items-center gap-4 max-w-3xl'>
        {projectData.map((project, index) => (
          <Project {...project} key={index} />
        ))}

      </ul>

      <h3 className='text-xl text-center pb-8'>Click/Tap to open the details about each project.</h3>
    </div>
  )
}

export default Projects