import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const cards = [1,2,3,4]

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className='h-screen w-screen snap-center justify-center mx-auto flex gap-6 flex-col items-center'>
        {/* <div className='grid grid-cols-2 gap-5'>
          {cards.map((card, i) =>(
            <motion.div
              className={selectedId === card ? 'rounded-xl bg-gray-200 w-2/3 h-2/3 shadow-2xl absolute top-0 bottom-0 right-0 left-0 mx-auto cursor-pointer z-10' : 'rounded-xl cursor-pointer bg-gray-200 w-96 h-64'}
              key={i}
              layout
              drag={selectedId === card ? 'x' : false}
              >
                {selectedId === card && (
                  <>
                    <div className='bg-white h-full w-full rounded-2xl' />
                    <div className='bg-white h-full w-full rounded-2xl' />
                    <div className='bg-white h-full w-full rounded-2xl' />

                  </>
                )}
              </motion.div>

          ))}
          <motion.div 
            className='absolute h-screen w-screen left-0 top-0 bg-black opacity-0 pointer-events-none'
            animate={{opacity:selectedId? 0.3:0}}>

          </motion.div>


        </div> */}
        <h3 className='text-xl'>Click/Tap to open the details about each project.</h3>
    </div>
  )
}

export default Projects