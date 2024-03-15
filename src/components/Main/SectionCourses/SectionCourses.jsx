import { useEffect, useState } from "react";
import Courses from "./Courses/Courses";
import Selected from "./Selected/Selected";
import { toast } from "react-toastify";
import {
  clearStorage,
  removeStorage,
  setStorage,
} from "../../../utilities/localStorage";

const SectionCourses = () => {
  //State
  const [selected, setSelected] = useState([]);
  const [totalHour, setTotalHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //Set Selection
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

    //Local Storage
    setStorage(obj, obj.credit + totalHour, obj.price + totalPrice);
  };

  //Remove Selection
  const handleSelectDeleted = (id) => {
    setSelected(selected.filter((select) => select.id !== id));

    const total = selected.find((select) => select.id === id);
    setTotalHour(totalHour - total.credit);
    setTotalPrice(totalPrice - total.price);
    toast.info("You've removed a course.");

    //Local Storage
    removeStorage(id, totalHour - total.credit, totalPrice - total.price);
  };

  // Remove All Selection
  const handleRemoveAllSelection = () => {
    if (!selected.length)
      return toast.warn("You didn't select any course yet.");

    setSelected([]);
    setTotalHour(0);
    setTotalPrice(0);
    toast.info("You've removed your selection.");

    //Local Storage
    clearStorage();
  };

  //Rending The Local Storage Data
  useEffect(() => {
    const course = JSON.parse(window.localStorage.getItem("course"));
    const credit = JSON.parse(window.localStorage.getItem("credit"));
    const price = JSON.parse(window.localStorage.getItem("price"));

    setSelected(course);
    setTotalHour(credit);
    setTotalPrice(price);
  }, []);

  return (
    <section className="flex flex-col-reverse lg:flex-row gap-6">
      <Courses handleSelected={handleSelected} />
      <Selected
        selected={selected}
        totalHour={totalHour}
        totalPrice={totalPrice}
        handleSelectDeleted={handleSelectDeleted}
        handleRemoveAllSelection={handleRemoveAllSelection}
      />
    </section>
  );
};

export default SectionCourses;
