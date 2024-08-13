import Image from "next/image";
import Blueline from "../common/BlueLine";
import { courses } from "@/app/data/courses";
import CoursesCard from "../common/cards/CoursesCard";
const Courses = () => (
  <div className="bg-lightblue flex flex-col w-full justify-center items-center py-20 px-5 text-center">
    <p className="font-medium text-3xl leading-loose">Our Courses</p>
    <Blueline />
    <p className="font-thin text-center text-xl md:text-lg leading-loose text-gray-600 md:w-4/5 lg:w-7/12">
      Our courses and programs aim to empower young Iraqi women by providing
      them with access to resources, support, and opportunities to thrive in the
      tech industry, thereby bridging the gender gap and promoting diversity
      within the field.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 px-5 lg:px-10 mt-20 w-full">
      {courses.map((course) => (
        <CoursesCard key={course.id} {...course} />
      ))}
    </div>
  </div>
);

export default Courses;
