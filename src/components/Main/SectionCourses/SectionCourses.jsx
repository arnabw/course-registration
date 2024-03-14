import Courses from "./Courses/Courses";
import Selected from "./Selected/Selected";

const SectionCourses = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row gap-6">
      <Courses />
      <Selected />
    </section>
  );
};

export default SectionCourses;
