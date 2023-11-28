import yoImage from "../../assets/imgs/profile/yo2.png";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const Title = () => {
  return (
    <section className="mt-4 mx-auto pb-16 text-center flex flex-col items-center md:flex-row md:w-[732px] md:text-left relative">
      <div className="border-b border-dashed border-grape-color dark:border-sand-color w-[95%] md:w-full absolute bottom-0"></div>
      <div>
        <img
          src={yoImage}
          alt=""
          className="h-[178px] rounded-full ring-sand-color dark:ring-grape-color ring-8 ml-2"
        />
        
      </div>
      <div className="justify-center mt-4 md:mt-0 md:ml-8">
        <h1 className="text-[32px] font-extrabold text-eggplant-color dark:text-sand-color">Fernando Trejo</h1>
        <h2 className="text-[18px] mt-1 font-semibold">Estudiante avanzado, Fullstack Developer</h2>
        <div className="flex mt-4 justify-center md:justify-start">
          <a href="https://github.com/ferrt1" rel="noreferrer" target="_blank" className="hover:text-grape-color dark:hover:text-light-green-color mr-4">
            <FaGithub className="w-[32px] h-[32px] cursor-pointer mx-auto"/>
          </a>
          <a href="https://www.linkedin.com/in/fermtrejo/" rel="noreferrer" target="_blank" className="hover:text-grape-color dark:hover:text-light-green-color">
              <FaLinkedin className="w-[32px] h-[32px] cursor-pointer" />
          </a>
        </div>
      </div>
    </section>
  );
};
