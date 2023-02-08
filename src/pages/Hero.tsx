import React from 'react';
import { motion } from 'framer-motion';
import me from '../assets/me-hero.png';
import { useInView } from 'react-intersection-observer';

export const Hero = ({ setDark }: any) => {
    const { ref, inView } = useInView({ threshold: 0.8 });
    if (inView) {
        setDark(false);
    }
    return (
        <>
            <div ref={ref} className="h-screen w-screen snap-end">
                <div className=' flex justify-between items-center  flex-col h-screen overflow-hidden pt-16 z-10'>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 }}
                        viewport={{ once: true }}
                        className='text-4xl md:text-7xl  xl:text-8xl text-center px-3 py-12 2xl:max-w-7xl'>
                        I am a Computer Engineer specializing in web development, building full stack solutions.
                    </motion.h2>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 400
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className='bg-[#274A71] rounded-t-full  md:w-[700px] overflow-visible relative h-2/4 my-16 z-10 flex justify-center items-center'>
                        <motion.img

                            src={me} alt="A picture of me " className=' grayscale relative -top-[26px]  md:-top-36 scale-x-[-1] w-full'

                        />
                    </motion.div>

                </div>
            </div>
        </>
    );
};