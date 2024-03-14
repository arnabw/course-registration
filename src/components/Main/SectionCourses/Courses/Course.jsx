import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";

const Course = ({ Courses, handleSelected }) => {
  const { name, description, photo, price, credit } = Courses;

  //JSX
  return (
    <div className="bg-white rounded-lg p-4 space-y-4">
      <img className="w-full" src={photo} alt={name} />
      <article>
        <h1 className="text-[#1C1B1B] font-semibold text-lg">{name}</h1>
        <p className="text-[#1C1B1B] text-sm">{description}</p>
      </article>
      <ul className="flex justify-between items-center text-[#1C1B1B] text-base font-medium">
        <li className="flex items-center gap-3">
          <FiDollarSign />
          Price : {price}
        </li>
        <li className="flex items-center gap-3">
          <IoBookOutline />
          Credit : {credit}
        </li>
      </ul>
      <button
        onClick={() => handleSelected(name, credit, price)}
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
      >
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  Courses: PropTypes.object.isRequired,
  handleSelected: PropTypes.func.isRequired,
};

export default Course;
