import { FaGithub } from 'react-icons/fa'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { motion, useDeprecatedInvertedScale } from 'framer-motion'

type Props = {
    title: string,
    description: string,
    technologies: string,
    link: string,
    github: string,
}

const Content = ({ title, description, technologies, link, github }: Props) => {
    return (
        <motion.div 
            className='pt-80 lg:pt-[540px] flex flex-col md:flex-row justify-center items-center gap-6 px-7 w-full'>
            <div className='flex flex-col max-w-lg'>
                <h1 className='text-2xl font-bold pt-2'>{title}</h1>
                <p className='py-3'>{description}</p>
                <h3 className='text-xl font-bold'>Technologies Used:</h3>
                <p className='pt-1 font-light'>{technologies}</p>
            </div>
            <div className='flex self-end justify-end gap-2 w-80'>
                <a href={github} target='_blank' className='rounded-full flex items-center justify-center w-10 h-10 bg-white' ><FaGithub className='text-black w-7 h-7' /></a> 
                <a href={link} target='_blank' className='' ><BsFillArrowRightCircleFill className='text-white w-10 h-10' /></a> 
            </div>

        </motion.div>
    )
}

export default Content