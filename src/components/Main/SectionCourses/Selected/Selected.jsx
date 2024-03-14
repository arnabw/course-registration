import PropTypes from "prop-types";
import { FaDeleteLeft } from "react-icons/fa6";

const Selected = ({ selected, totalHour, totalPrice, handleSelectDeleted }) => {
  return (
    <div className="bg-white rounded-xl p-6 lg:w-[700px] max-h-96 overflow-y-auto">
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
    </div>
  );
};

Selected.propTypes = {
  selected: PropTypes.array.isRequired,
  totalHour: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  handleSelectDeleted: PropTypes.func.isRequired,
};

export default Selected;
