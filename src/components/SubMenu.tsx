import React from 'react'
import about from '../assets/sub-titles/about.svg'
import { useInView } from 'react-intersection-observer';


type Props = {
    dark: boolean;
    title: string;
    setDark: any;

}

export default function SubMenu({dark, title, setDark}: Props) {
  const { ref, inView } = useInView({ threshold: 0.7 });
    if (inView && dark) {
        setDark(true);
    }
  return (
    <div ref={ref} className={`${dark ? 'bg-[#232425] text-white':'bg-white'} h-screen  w-screen snap-center text-[300px] flex justify-center items-end font-extrabold tracking-widest py-3`}>
       <img id='about' src={about} alt={title} className='h-[200px] '/>
    </div>
  )
}