import { FaDiscord } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export const Contact = () => {
  return (
    <section className="bg-shell-color dark:bg-dark-grape-color w-[95%] md:w-[732px] mx-auto pb-16 relative">
      <div className="container py-4 mx-auto">
        <div>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Ponte en contacto
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div>
            <span className="inline-block p-3 dark:text-white rounded-full bg-sand-color dark:bg-eggplant-color">
              <CiMail className="text-[28px]" />
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Email
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Mail personal:
            </p>
            <p className="mt-2 text-eggplant-color dark:text-light-green-color">
              fernandotrejo125@gmail.com
            </p>
          </div>
          <div>
            <span className="inline-block p-3 dark:text-white rounded-full bg-sand-color dark:bg-eggplant-color">
              <FaDiscord className="text-[28px]" />
            </span>
            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Discord
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Red social:</p>
            <p className="mt-2 text-eggplant-color dark:text-light-green-color">
              @ferrt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
