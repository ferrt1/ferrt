import { Project } from "./Project";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import protoEVS from "../../assets/imgs/projects/protoEVS.png";
import protoIngenieria from "../../assets/imgs/projects/protoIngenieria.png";
import database from "../../assets/imgs/projects/postgresql.png";
import { MiniProject } from "./MiniProject";

export const ProjectsContainer = () => {
  return (
    <section className="w-[95%] md:w-[732px] mx-auto my-12 pb-16 relative">
      <h1 className="text-[24px] font-bold inline-block"> Proyectos </h1>
      <PiSuitcaseSimpleFill className="align-text-bottom w-[24px] h-[24px] inline ml-2" />
      <div className="my-12">
        <Project
          image={protoEVS}
          alt={"Web de EVS "}
          title={"Transporte Web"}
          description="Prototipo de FrontWeb para Universidad."
          href={"https://ferrt1.github.io/ingeproto/"}
          technologies={"React, JavaScript, HTML, CSS"}
          texto={"Visitar"}
        />

        <Project
          image={protoIngenieria}
          alt={"Web de Ingenieria "}
          title={"Secretaria de Turismo"}
          description="Prototipo de FrontWeb para Universidad."
          href={"https://ferrt1.github.io/ingeproto/"}
          technologies={"JavaScript, HTML, CSS"}
          texto={"Visitar"}
        />

        <Project
          image={database}
          alt={"PostgreSQL Logo"}
          title={"Diseño Base de Datos"}
          description={"Gestión de una Base de Datos"}
          href={"https://github.com/estelucero/proyecto_obra_social_postgresql"}
          technologies={"Go, PLpgSQL"}
          texto={"Código"}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <MiniProject
          title={"Álbum Mundial"}
          href={"https://github.com/ferrt1/Album"}
          description={"Sistema de gestión de figuritas"}
          concepts={"Java, Herencia, Polimorfismo, Interfaces"}
        />
        <MiniProject
          title={"Grafo Red"}
          href={"https://github.com/ferrt1/GrafoRed"}
          description={"Modelado de redes con grafos."}
          concepts={"Java, Herencia, Polimorfismo, Interfaces"}
        />
        <MiniProject
          title={"Discord Bot"}
          href={"https://github.com/ferrt1/botdiscord"}
          description={"Discord Bot utilizando DiscordJS"}
          concepts={"NodeJS, API Discord, DiscordJS"}
        />
        <MiniProject
          title={"Team Solver"}
          href={"https://github.com/ferrt1/ManejoEquipo"}
          description={"Elección equipo adecuado"}
          concepts={"Java, BackTracking, MVC"}
        />
      </div>
      <div className="border-b border-dashed border-grape-color dark:border-sand-color w-[95%] md:w-full absolute bottom-0"></div>
    </section>
  );
};
