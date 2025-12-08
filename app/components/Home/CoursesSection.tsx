"use client";
import Blueline from "../common/BlueLine";
import { courses } from "@/app/data/courses";
import CoursesCard from "../common/cards/CoursesCard";
const Courses = () => (
  <div className="bg-lightblue flex flex-col w-full justify-center items-center py-20 px-5 text-center">
    <p className="font-medium text-3xl leading-loose">Our Courses</p>
    <Blueline />
    <p className="px-5 font-extralight md:font-thin text-center text-xl md:text-lg leading-loose text-gray-600 md:w-4/5 lg:w-7/12">
      Our courses and programmes aim to empower young women by providing them
      with access to resources, support, and opportunities in the tech industry,
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 px-5 lg:px-10 mt-20 w-full">
      {courses.map((course, index) => (
        <CoursesCard {...course} />
      ))}
    </div>
  </div>
);

export default Courses;
