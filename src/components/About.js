import profilePic from '../assets/aboutpic.jpg'

export const About = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-r from-orange-500 to-pink-500 ">
      <div className="py-16 w-11/12 mx-auto">
        <h1 className="text-4xl logo text-white text-center md:text-left" id='About'>
          About Me
        </h1>
        <div className="flex flex-col md:flex-row py-5 text-2xl lg:text-3xl text-white items-center">
          <p className='md:pr-8 py-8 text-center md:text-left'>
            I am currently a Software QA Engineer based in Utah, working on my
            Computer Engineering degree at Utah Valley University. 
            <br />
            <br />
            I am excited to continue to work on adding more projects to my portfolio
            and look forward to collaborating with new people in the web
            development space.
          </p>
          <img src={profilePic} alt="profile" className='md:w-1/2' />
        </div>
      </div>
    </div>
  );
};
