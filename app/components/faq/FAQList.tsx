import CourseCard from '../common/cards/CourseCard';
import { getSCTCourses } from '@/app/services/api';

const FaqList = async () => {
  const courses = await getSCTCourses();
  if (!Array.isArray(courses)) {
    console.error('Expected an array of courses, but received:', courses);
    return <div>Error loading courses.</div>;
  }
  return (
    <div className='container mx-auto'>
      <details className='[&_svg]:open:-rotate-180 border-b-1'>
        <summary className='bg-yellowgradient p-5 rounded-xl  flex cursor-pointer list-none items-center gap-4 w-full'>
          <div>Open this box</div>
          <div className='flex justify-end'>
            <svg
              className='rotate-0 transform text-blue-700 transition-all duration-300'
              fill='none'
              height='20'
              width='20'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              viewBox='0 0 24 24'
            >
              <polyline points='6 9 12 15 18 9'></polyline>
            </svg>
          </div>
        </summary>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
          varius quam. Nunc et fringilla erat. Suspendisse sagittis tellus et
          metus mattis iaculis. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque rhoncus sapien nec mauris lacinia, at mollis
          tortor hendrerit. Donec a libero erat. Cras sed purus sit amet justo
          vehicula interdum. Praesent orci erat, volutpat at suscipit sit amet,
          ultricies vitae dui. Nulla vel libero eros. Donec viverra tellus eu ex
          finibus ultrices id sit amet quam. Vivamus nibh massa, iaculis vitae
          odio at, porta eleifend elit. Sed molestie placerat lobortis.
          Pellentesque non fringilla tellus, eget ultricies arcu. Integer vitae
          vehicula ante. Donec eleifend neque eget vehicula tristique.
        </p>
      </details>
    </div>
  );
};

export default FaqList;
