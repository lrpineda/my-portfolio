import { motion } from "framer-motion";
import memoji1 from "../assets/memoji.png";
import memoji2 from "../assets/memoji2.png";
import memoji3 from "../assets/memoji3.png";

const container = {
    hidden: { opacity: 0, x: 200},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.4,
            duration: 0.25
        }
    }
}

const item = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        
    }
}

export const About = () => {
  return (
    <div className="bg-[#232425] flex items-center justify-center pb-14 md:h-screen text-white snap-center snap-always">
      <div className="lg:max-w-7xl flex flex-col lg:flex-row overflow-hidden">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-5 text-2xl text-center lg:text-left md:gap-10 md:text-4xl p-9 md:max-w-3xl"
        >
          <h2>
          I am a software QA engineer based in Utah, with a passion for building and testing high-quality software products. I am currently pursuing a degree in Computer Engineering at Utah Valley University, with the ultimate goal of becoming a software developer. 
          </h2>
          <h2>
          My technical skills and industry knowledge have equipped me to work comfortably across both front-end and back-end development environments. With a strong work ethic and dedication to advancing my skill set, I am confident that I can achieve my professional goals and make a meaningful impact in the technology industry.
          </h2>
        </motion.div>
        <motion.div
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className="flex md:flex-wrap justify-center items-center  ">
          <motion.img variants={item}  src={memoji3} alt="memoji" className="w-32 md:w-52" />
          <motion.img variants={item} src={memoji1} alt="memoji" className="w-32 md:w-52" />
          <motion.img variants={item} src={memoji2} alt="memoji" className="w-32 md:w-52" />
        </motion.div>
      </div>
    </div>
  );
};
