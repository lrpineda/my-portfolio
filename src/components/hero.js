import background from "../assets/bg_imagehero.jpg";

const Hero = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-right "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col hover:backdrop-blur-xl hover:bg-black/80 duration-700 w-full min-h-screen items-center justify-center">
        <h1 className="text-center lg:text-left text-6xl md:text-9xl text-white font-bold mx-auto md:w-10/12 ">
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-600 to-sky-600">
            Hello There!
          </span>
          <br />
          My name is Luis Pineda
        </h1>
        <h2 className="text-center lg:text-left text-2xl md:text-3xl text-white font-bold mx-auto md:w-10/12">
          I am a Computer Engineer specializing in web development, building full stack solutions.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
