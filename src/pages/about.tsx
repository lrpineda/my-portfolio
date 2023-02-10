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
    <div className="bg-[#232425] flex items-center justify-center pb-14 md:h-screen text-white snap-center">
      <div className="md:max-w-7xl flex flex-col md:flex-row overflow-y-scroll">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-5 text-2xl text-center md:text-left md:gap-10 md:text-5xl p-9 md:max-w-3xl"
        >
          <h2>
            I am currently a Software QA Engineer based in Utah, working on my
            Computer Engineering degree at Utah Valley University.
          </h2>
          <h2>
            I am excited to continue to work on adding more projects to my
            portfolio and look forward to collaborating with new people in the
            web development space.
          </h2>
        </motion.div>
        <motion.div
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className="flex md:flex-wrap justify-center items-center ">
          <motion.img variants={item}  src={memoji3} alt="memoji" className="w-32 md:w-64" />
          <motion.img variants={item} src={memoji1} alt="memoji" className="w-32 md:w-64" />
          <motion.img variants={item} src={memoji2} alt="memoji" className="w-32 md:w-64" />
        </motion.div>
      </div>
    </div>
  );
};
