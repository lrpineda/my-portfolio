import background from "../assets/bg_imagehero.jpg";

const Hero = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center  bg-cover bg-right "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex backdrop-blur-md bg-white/30 w-full min-h-screen items-center justify-center">
        <h1 className="text-6xl md:text-9xl text-white font-bold mx-auto lg:w-10/12 ">
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-yellow-400 to-yellow-200">
            Hello There!
          </span>
          <br />
          My name is Luis Pineda
        </h1>
      </div>
    </div>
  );
};

export default Hero;
