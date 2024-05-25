import { Project } from "./Project";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import protoEVS from "../../assets/imgs/projects/protoEVS.png";
import protoIngenieria from "../../assets/imgs/projects/protoingenieria.png";
import database from "../../assets/imgs/projects/postgresql.png";
import ungsnet from "../../assets/imgs/projects/ungsnet.png";

import { MiniProject } from "./MiniProject";
import { useState } from "react";

export const ProjectsContainer = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="w-[95%] md:w-[732px] mx-auto my-12 pb-16 relative">
      <h1 className="text-[24px] font-bold inline-block"> Proyectos </h1>
      <PiSuitcaseSimpleFill className="align-text-bottom w-[24px] h-[24px] inline ml-2" />
      <div className="my-12">
        <Project
          image={ungsnet}
          alt={"UNGSNet"}
          title={"UNGSNet"}
          description="Chatbot realizado con inteligencia artificial."
          href={"https://ungsnet.pythonanywhere.com/"}
          technologies={
            "Python, HTML, CSS, JavaScript, APIs, Flask, scikit-learn"
          }
          texto={"Visitar"}
        />

        <Project
          image={protoIngenieria}
          alt={"Web de Ingenieria "}
          title={"Secretaria de Turismo"}
          description="Prototipo de Web. En iniciar sesión el usuario y contraseña es comerciante123.
              Conexión con API de Mercado Libre para consultar precios similares."
          href={"https://ingeproto.vercel.app"}
          technologies={"JavaScript, HTML, CSS"}
          texto={"Visitar"}
        />

        {showMore && (
          <div>
            <Project
              image={protoEVS}
              alt={"Web de EVS "}
              title={"Transporte Web"}
              description="Prototipo de Web estática para Universidad."
              href={"https://ferrt1.github.io/protoevs/"}
              technologies={"React, JavaScript, HTML, CSS"}
              texto={"Visitar"}
            />
            <Project
              image={database}
              alt={"PostgreSQL Logo"}
              title={"Diseño Base de Datos"}
              description={"Gestión de una Base de Datos"}
              href={
                "https://github.com/estelucero/proyecto_obra_social_postgresql"
              }
              technologies={"Go, PLpgSQL"}
              texto={"Código"}
            />
          </div>
          // Agrega más proyectos aquí si es necesario
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {showMore && (
          <>
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
            {/* agrego mas aca */}
          </>
        )}
      </div>
      {!showMore ? (
        <button
          onClick={toggleShowMore}
          className="text-center font-bold text-white bg-grape-color w-full py-2 border border-gray-300 rounded-md dark:text-black dark:bg-shell-color
          dark:hover:bg-sand-color transition duration-200"
        >
          Ver más
        </button>
      ) : (
        <button
          onClick={toggleShowMore}
          className="text-center font-bold text-white bg-grape-color w-full py-2 border mt-12 border-gray-300 rounded-md dark:text-black dark:bg-shell-color
           dark:hover:bg-sand-color transition duration-200"
        >
          Ver menos
        </button>
      )}
      <div className="border-b border-dashed border-grape-color dark:border-sand-color w-[95%] md:w-full absolute bottom-0"></div>
    </section>
  );
};
