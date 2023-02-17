import { motion } from 'framer-motion'
import { closeSpring } from '../../utils/animations'

type Props = {
    image: any,
    isVisible: boolean,
}

const Image = ({image, isVisible}: Props) => {
    return (
        <motion.div
        className={`absolute top-0 left-0 bottom-0 overflow-hidden w-full h-[500px] xl:h-[540px] pointer-events-none `}>
        <motion.img
          src={`images/${image}`}
          alt=""
          initial={false}
          animate={
            isVisible ?{ x: 0, y: 0 } : { x: 0, y: 0 }
          }
          transition={closeSpring}>
  
        </motion.img>
      </motion.div>
  )
}

export default Image