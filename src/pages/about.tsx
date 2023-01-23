import memoji1 from '../assets/memoji.png';
import memoji2 from '../assets/memoji2.png';
import memoji3 from '../assets/memoji3.png';

export const About = () => {
    return (
        <div className="bg-[#232425] flex items-center justify-center h-screen text-white snap-center">
            <div className="flex flex-col max-w-5xl gap-10 text-5xl p-9 ">
                <h2>I am currently a Software QA Engineer based in Utah, working on my Computer Engineering degree at Utah Valley University.</h2>
                <h2>I am excited to continue to work on adding more projects to my portfolio and look forward to collaborating with new people in the web development space.</h2>
            </div>
            <div className='flex flex-wrap justify-center items-center'>
                <img src={memoji3} alt="memoji" className="" />
                <img src={memoji1} alt="memoji" className="" />
                <img src={memoji2} alt="memoji" className="" />
            </div>
        </div>
    );
};
