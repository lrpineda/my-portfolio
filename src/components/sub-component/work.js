export const Work = ({ project, imageUrl, desc, link }) => {
  return (
    <div className="hero md:w-10/12 shadow-xl group my-4">
      <figure>
        <img src={imageUrl} alt="spotlight" />
      </figure>
      <div className="invisible h-full flex flex-col min-w-full hero-content text-center text-white group-hover:visible group-hover:backdrop-blur-sm group-hover:bg-black/60 ">
        <h1 className="text-3xl font-bold">{project}</h1>
        <p class="m-3">{desc}</p>
        <a
          class="btn btn-primary"
          href={link}
          target={"_blank"}
          rel="noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};
