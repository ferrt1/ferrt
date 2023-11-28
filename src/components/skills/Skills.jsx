import { FaBook , FaPython, FaReact, FaNodeJs, FaJava, FaDatabase, FaHtml5, FaCss3Alt    } from "react-icons/fa";
import { SiMysql, SiPostgresql  } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";

import { IoLogoJavascript } from "react-icons/io5";

import { SkillCard} from "./SkillCard.jsx"

export const Skills = () => {
  return (
    <section className="w-[95%] md:w-[732px] mx-auto my-6 pb-16 relative">
      <h2 className="text-[24px] font-bold inline-block mb-6">Estudios y Habilidades</h2>
      <FaBook className="align-text-bottom w-[24px] h-[24px] inline ml-2" />
      <ul className="list-disc ml-6 mb-6 pl-4">
        <li className="mb-4">
          <span className="font-bold">Licenciatura en Sistemas</span>, <span className="font-normal"> Universidad Nacional de General Sarmiento </span> 
          <span className="block text-[14px] font-light dark:text-gray-200">2021 - Actualidad</span>
        </li>
        <li className="mb-4">
          <span className="font-bold">Tecnicatura en Sistemas</span>, Universidad Nacional de General Sarmiento
          <span className="block text-[14px]  font-light dark:text-gray-200">2020 - Actualidad</span>
        </li>
        <li className="mb-4">
          <span className="font-bold">Inglés</span>
          <span className="block text-[14px] font-light dark:text-gray-200">B2 - Intermedio Avanzado</span>
        </li>
        {/* Puedes agregar más elementos de lista según sea necesario */}
      </ul>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SkillCard icon={<FaJava />} title="Java" />
        <SkillCard icon={<FaPython />} title="Python" />
        <SkillCard icon={<IoLogoJavascript />} title="JavaScript" />
        <SkillCard icon={<FaNodeJs />} title="Node.js" />
        <SkillCard icon={<FaDatabase  />} title="SQL" />
        <SkillCard icon={<DiMongodb  />} title="MongoDB" />
        <SkillCard icon={<SiMysql />} title="MySQL" />
        <SkillCard icon={<SiPostgresql />} title="PostgreSQL" />
        <SkillCard icon={<FaHtml5 />} title="HTML" />
        <SkillCard icon={<FaCss3Alt  />} title="CSS" />
        <SkillCard icon={<FaReact  />} title="React" />
        <SkillCard icon={<BiLogoSpringBoot  />} title="Spring" />
      </div>
      <div className="border-b border-dashed border-grape-color dark:border-sand-color w-[95%] md:w-full absolute bottom-0"></div>
    </section>
  );
};
