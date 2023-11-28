/* eslint-disable react/prop-types */

export const MiniProject = ({ title, description, concepts, href }) => {
  return (
    <div
  className="block rounded-lg bg-sand-color text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-eggplant-color">

  <div className="p-6">
    <h5
      className="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
      { title }
    </h5>
    <p className="mb-4 text-base text-black dark:text-white">
      { description }
    </p>
    <span className="mb-4 text-sm text-black dark:text-white block">
      { concepts }
    </span>
    <a
      type="button"
      href={href}
      className="text-shell-color inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-sm font-semibold bg-grape-color dark:text-eggplant-color dark:bg-shell-color transition duration-200 ease-in-out hover:bg-eggplant-color hover:text-shell-color dark:hover:bg-sand-color"
      rel="noreferrer"
      target="_blank">
      Ver Código
    </a>
  </div>
</div>
  )
}
