import { useState } from "react";
import Courses from "./Courses/Courses";
import Selected from "./Selected/Selected";
import { toast } from "react-toastify";

const SectionCourses = () => {
  //State
  const [selectedSub, setSelectedSub] = useState([]);
  const [totalHour, setTotalHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //Event Handle
  const handleSelected = (title, hour, price) => {
    //Validation
    if (selectedSub.find((sub) => sub === title)) {
      return toast.warn("You've already selected this course.");
    } else if (totalHour + hour > 15) {
      return toast.error("Not more than 15 credit");
    }

    setSelectedSub([...selectedSub, title]);
    setTotalHour(totalHour + hour);
    setTotalPrice(totalPrice + price);
    toast.success("You are successfully selected this subject.");
  };

  return (
    <section className="flex flex-col-reverse lg:flex-row gap-6">
      <Courses handleSelected={handleSelected} />
      <Selected
        selectedSub={selectedSub}
        totalHour={totalHour}
        totalPrice={totalPrice}
      />
    </section>
  );
};

export default SectionCourses;
