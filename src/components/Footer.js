
import { FaGithub, FaLinkedin } from 'react-icons/fa'


export const Footer = () => {
    return (
        <footer className='footer items-center p-4 bg-base-300 text-neutral-content'>
            <div className="items-center grid-flow-col text-md mx-auto md:mx-0">
                <p>© 2022 Luis Pineda</p>
            </div>
            <div className="grid-flow-col gap-4 mx-auto md:mx-0 md:place-self-center md:justify-self-end">
                <a href='https://github.com/lrpineda' target={"_blank"} rel="noreferrer" ><FaGithub size={24}/></a>
                <a href='https://www.linkedin.com/in/luisrpineda/' target={"_blank"} rel="noreferrer"><FaLinkedin size={24}/></a>
            </div>
        </footer>
    );
}