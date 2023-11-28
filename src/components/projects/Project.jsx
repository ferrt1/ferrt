/* eslint-disable react/prop-types */
export const Project = ({ image, alt, title, technologies, description, href, texto }) => {
  return (
    <div className="mt-8">
      <div className="relative flex w-full flex-col md:flex-row rounded-xl bg-sand-color dark:bg-eggplant-color bg-clip-border shadow-xl">
        <div className="relative m-0 overflow-hidden rounded-b-none shrink-0 rounded-xl bg-clip-border md:w-[49%] md:rounded-bl-xl md:rounded-r-none">
          <img
            src={image}
            alt={alt}
            className="object-cover w-full h-full cursor-pointer max-h-[264px]
            transition-transform transform-gpu hover:scale-125"
          />
        </div>
        <div className="p-6">
          <h2 className="block mb-2 font-sans text-2xl antialiased font-bold tracking-normal text-eggplant-color dark:text-sand-color">
            {title}
          </h2>
          <p className="block mb-3 font-sans text-base antialiased font-normal leading-relaxed ">
            {description}
          </p>
          <p className="mb-8 text-sm">
            Tecnologías: {technologies}
          </p>
          <a
            href={href}
            className="font-bold px-6 py-3 text-shell-color dark:text-eggplant-color bg-grape-color dark:bg-shell-color rounded-md 
           hover:bg-dark-grape-color dark:hover:bg-sand-color transition duration-300 ease-in-out mr-4 cursor-pointer"
            rel="noreferrer" target="_blank"
          >
            {texto}
          </a>
        </div>
      </div>
    </div>
  );
};
