import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import me from '../assets/me-hero.png';
import { useInView } from 'react-intersection-observer';

export const Hero = ({setDark}:any) => {
    const { ref, inView } = useInView({ threshold: 0.7 });
    if (inView) {
        setDark(false);
    }
    return (
        <>
        <div ref={ref} className="h-screen w-screen snap-center">    
            <div  className=' flex justify-between items-center  flex-col h-screen overflow-hidden pt-16 z-10'>
                <h2 className='text-7xl  xl:text-8xl text-center px-40 2xl:px-[25vw]'>
                    I am a Computer Engineer specializing in web development, building full stack solutions.
                </h2>
                <div className='bg-[#274A71] rounded-t-full w-[695px] overflow-visible relative h-[646px] my-16 z-10'>
                    <img  src={me} alt="A picture of me " className='absolute grayscale -top-24 scale-x-[-1] '/>
                </div>
                
            </div>
        </div>
        </>
    );
};