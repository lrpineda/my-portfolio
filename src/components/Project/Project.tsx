import { useState, useRef } from "react";
import {
    motion,
    AnimatePresence,
} from "framer-motion";
import { openSpring, closeSpring } from "../../utils/animations";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "./Image";
import Content from "./Content";


type Props = {
    highlight: boolean;
    image: string;
    title: string;
    description: string;
    technologies: string;
    website: string;
    github: string;
}

const Project = (props: Props) => {
    const { highlight, image, title, description, technologies, website, github } = props;
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    return (
        <li className={` relative overflow-hidden flex bg-white h-52 w-80 text-black rounded-xl  ${highlight ? ' md:col-span-3 md:mx-auto md:w-[748px] xl:w-[1000px]  md:h-[480px] xl:h-[540px] ' : ' md:w-60 md:h-40 xl:w-80 xl:h-52  '}`}>
            {isVisible && (
                <motion.div
                    initial={false}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ pointerEvents: isVisible ? "auto" : "none" }}
                    className="fixed top-0 mx-auto bottom-0 left-0 cursor-pointer -z-10 md:z-20 bg-black bg-opacity-75 h-screen w-screen"
                    onClick={() => setIsVisible(!isVisible)}
                >

                </motion.div>
            )}
            <div className={` relative w-full h-full block `}>
                <AnimatePresence>
                    <motion.div
                        ref={cardRef}
                        className={` bg-zinc-800 text-white rounded-xl m-auto ${isVisible ? "fixed top-0 left-0 right-0 bottom-0 overflow-hidden w-screen lg:w-[1000px]  lg:h-[780px] xl:h-[800px] z-30 " : "relative w-full h-full z-10"}`}
                        layout
                        transition={isVisible ? openSpring : closeSpring}

                    >
                        {isVisible && (<p onClick={() => setIsVisible(!isVisible)}><AiFillCloseCircle className=" text-white border-2 rounded-full bg-black hover:text-black hover:bg-white transition-all duration-500 ease-in-out absolute top-3 right-3 z-40 h-9 w-9 cursor-pointer" /></p>)}
                        <Image image={image} isVisible />
                        <Content title={title} description={description} technologies={technologies} link={website} github={github} />
                    </motion.div>
                </AnimatePresence>
            </div>
            {!isVisible && (
                <div
                    className="h-full w-full absolute top-0 right-0 bottom-0 left-0 z-10"
                    onClick={() => setIsVisible(!isVisible)}
                ></div>
            )}
        </li>
    )
}

export default Project