import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import me from '../assets/me-hero.png';
import { useInView } from 'react-intersection-observer';

export const Hero = ({ setDark }: any) => {
    const { ref, inView } = useInView({ threshold: 0.8 });
    useEffect(() => {
        if (inView) {
            setDark(false);
        }
    }, [inView]);
    return (
        <>
            <div ref={ref} className="md:h-screen w-screen snap-end snap-always">
                <div className=' flex justify-between items-center gap-y-[100px] md:gap-0  flex-col md:h-screen overflow-hidden md:pt-16 '>
                    <motion.h2
                        initial={{ opacity: 0, y: -200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.25, type: 'spring', stiffness: 200 }}
                        viewport={{ once: true }}
                        className='text-4xl md:text-7xl  xl:text-8xl text-center px-3 py-12 2xl:max-w-7xl'>
                        I am a Computer Engineer specializing in web development, building full stack solutions.
                    </motion.h2>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 200
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className='bg-[#274A71] rounded-t-full  md:w-[600px] 2xl:w-1/3 overflow-visible relative h-96 md:h-[400px] z-10 flex justify-center items-center'>
                        <motion.img

                            src={me} alt="A picture of me " className=' grayscale relative -top-[26px]  md:-top-8 scale-x-[-1] w-full'

                        />
                    </motion.div>

                </div>
            </div>
        </>
    );
};