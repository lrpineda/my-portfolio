import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type Props = {
  dark: boolean;
  title: string;
  setDark: any;
};

export default function SubMenu({ dark, title, setDark }: Props) {
  const { ref, inView } = useInView({ threshold: 0.7 });
  if (inView && dark) {
    setDark(true);
  }
  if (inView && !dark) {
    setDark(false);
  }
  return (
    <div
      ref={ref}
      className={`${
        dark ? "bg-[#232425] text-white" : "bg-slate-50"
      } h-screen  w-screen snap-center flex justify-center md:items-end  md:py-3`}
    >
      <motion.img
        id={title}
        src={require(`../assets/sub-titles/${title}.svg`)}
        alt={title+' page'}
        className="w-96 md:w-full max-w-2xl md:max-w-7xl "
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        
      />
    </div>
  );
}
