/* eslint-disable react/prop-types */

export const SkillCard = ({ icon, title }) => {
  return (
    <div className=" p-4 rounded-lg shadow-md flex items-center">
      <div className="mr-4 text-eggplant-color dark:text-shell-color">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  )
}
