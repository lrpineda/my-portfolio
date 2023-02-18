import { motion } from "framer-motion";



const navigation: string[] = [
    'About',
    'Projects',
    'Contact',
    'Resume',
];



export const Nav = ({dark}:any) => {
    
    return (
        <motion.div 
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`lg:flex items-center  hidden lg:visible `}>
            <ul className="flex flex-row items-center space-x-4">
                {navigation.map((item) => (
                    <li  key={item}>
                        {item === 'Resume' ? (
                            <a href='/resume.pdf' target={"_blank"} rel="noreferrer" className={`${dark ? 'text-white': 'text-black'}  text-xl font-extralight`}>{item}</a>
                        ): (
                            <a href={`#${item.toLowerCase()}`} className={`${dark ? 'text-white': 'text-black'}  text-xl font-extralight`}>{item}</a>
                        )}
                        
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};