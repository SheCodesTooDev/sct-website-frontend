import CourseCard from '../common/cards/CourseCard';
import { getSCTCourses } from '@/app/services/api';

const CoursesList = async () => {
  const courses = await getSCTCourses();
  if (!Array.isArray(courses)) {
    console.error('Expected an array of courses, but received:', courses);
    return <div>Error loading courses.</div>;
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 sm:gap-x-5 gap-y-12 z-10'>
      {courses.map((item) => {
        return (
          <div key={item.id}>
            <CourseCard {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default CoursesList;
