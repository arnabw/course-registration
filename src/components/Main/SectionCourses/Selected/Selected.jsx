import PropTypes from "prop-types";
import { FaDeleteLeft } from "react-icons/fa6";

const Selected = ({
  selected,
  totalHour,
  totalPrice,
  handleSelectDeleted,
  handleRemoveAllSelection,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 lg:w-[700px] max-h-96 overflow-y-auto space-y-2">
      <h2 className="text-[#2F80ED] font-bold text-lg">
        Credit Hour Remaining {15 - totalHour} hr
      </h2>
      <div className="my-4 py-4 border-y-2">
        <h3 className="text-xl font-bold text-[#1C1B1B]">Course Name</h3>
        <ul className="list-decimal text-[#1C1B1B] text-base md:text-2xl lg:text-sm italic ml-6">
          {selected.map((sub, idx) => (
            <li key={idx}>
              {sub.name}{" "}
              <button
                onClick={() => handleSelectDeleted(sub.id)}
                className="text-red-700 text-lg md:text-3xl lg:text-base"
              >
                <FaDeleteLeft />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="text-base font-medium text-[#1C1B1B] pb-4 border-b-2">
        Total Credit Hour : {totalHour} Credit
      </h3>
      <h3 className="text-[#1C1B1B] font-semibold text-base pt-4">
        Total Price : {totalPrice} USD
      </h3>
      <button
        onClick={handleRemoveAllSelection}
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Clear Your Selection
      </button>
    </div>
  );
};

Selected.propTypes = {
  selected: PropTypes.array.isRequired,
  totalHour: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  handleSelectDeleted: PropTypes.func.isRequired,
  handleRemoveAllSelection: PropTypes.func.isRequired,
};

export default Selected;
