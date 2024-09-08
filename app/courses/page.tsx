import React from 'react';
import CoursesHero from '../components/courses/CoursesHero';
import CoursesList from '../components/courses/CoursesList';

const Courses = () => {
  return (
    <div className='sct-bg flex flex-col w-full justify-center items-center py-20 px-10 xl:px-32 text-center'>
      <CoursesHero />
      <CoursesList />
    </div>
  );
};

export default Courses;
