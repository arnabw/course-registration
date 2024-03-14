import { useState } from "react";
import Courses from "./Courses/Courses";
import Selected from "./Selected/Selected";
import { toast } from "react-toastify";

const SectionCourses = () => {
  //State
  const [selected, setSelected] = useState([]);
  const [totalHour, setTotalHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //Event Handle
  const handleSelected = (obj) => {
    //Validation
    if (selected.find((select) => select.id === obj.id)) {
      return toast.warn("You've already selected this course.");
    } else if (totalHour + obj.credit > 15) {
      return toast.error("Not more than 15 credit");
    }

    setSelected([...selected, obj]);
    setTotalHour(totalHour + obj.credit);
    setTotalPrice(totalPrice + obj.price);
    toast.success("You are successfully selected this course.");
  };

  const handleSelectDeleted = (id) => {
    setSelected(selected.filter((select) => select.id !== id));

    const total = selected.find((select) => select.id === id);
    setTotalHour(totalHour - total.credit);
    setTotalPrice(totalPrice - total.price);
    toast.info("You've removed a course.");
  };

  return (
    <section className="flex flex-col-reverse lg:flex-row gap-6">
      <Courses handleSelected={handleSelected} />
      <Selected
        selected={selected}
        totalHour={totalHour}
        totalPrice={totalPrice}
        handleSelectDeleted={handleSelectDeleted}
      />
    </section>
  );
};

export default SectionCourses;
