import { useState, useEffect } from "react";
import Course from "./Course";
import PropTypes from "prop-types";

const Courses = ({ handleSelected }) => {
  //State
  const [courses, setCourses] = useState([]);

  //   Side Effect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("courses.json");
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    };
    fetchData();
  }, []);

  //JSX
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Course
          key={course.id}
          Courses={course}
          handleSelected={handleSelected}
        ></Course>
      ))}
      <h1>{courses.name}</h1>
    </div>
  );
};

Courses.propTypes = {
  handleSelected: PropTypes.func.isRequired,
};

export default Courses;
