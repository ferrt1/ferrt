import { PiUserCircleFill } from "react-icons/pi";
import { MdDownload } from "react-icons/md";


export const About = () => {
  const handleDownloadCV = () => {
    const fileUrl = "ferrt/assets/documents/TrejoFernando2024cv.pdf";

    const a = document.createElement("a");
    a.href = fileUrl;
    a.target = "_blank";
    a.download = "TrejoFernando2024cv.pdf"; 

    a.click();
  };

  return (
    <section className="w-[95%] md:w-[732px] mx-auto mt-12 pb-12 relative">
    <h1 className="text-[24px] font-bold inline-block"> Sobre mí </h1>
    <PiUserCircleFill className="align-text-bottom w-[24px] h-[24px] inline ml-2" />
    <p className="mt-4 mb-2">
      Me llamo Fernando Trejo, estudiante avanzado de Licenciatura en Sistemas. Soy de Buenos Aires, Argentina y tengo 22 años.
    </p>
    <p>
      Amplío mi formación con estudios autodidactas para profundizar mis conocimientos en el campo.
    </p>

    <button
      className="bg-sand-color text-eggplant-color hover:bg-light-green-color font-medium py-2 px-4 rounded-md mt-4 flex items-center dark:bg-eggplant-color dark:text-shell-color dark:hover:bg-grape-color"
      onClick={handleDownloadCV}
    >
      <MdDownload  className="mr-2" />
      Descargar CV
    </button>

    <div className="border-b border-dashed border-grape-color dark:border-sand-color w-[95%] md:w-full absolute bottom-0"></div>
  </section>
  )
}
