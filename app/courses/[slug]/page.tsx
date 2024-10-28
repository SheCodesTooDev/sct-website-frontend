import { getSCTCourse } from '../../services/api';
import YellowLine from '../../components/common/YellowLine';
import Link from 'next/link';
import Button from '@/app/components/common/Button';
const Course = async ({ params }: any) => {
  const { slug } = params;
  const course = await getSCTCourse(slug);

  return (
    <div className='sct-bg py-20 px-8 flex flex-col items-center w-full xl:px-32 text-start'>
      <div className='flex justify-center flex-col items-center'>
        <p className='font-bold text-center text-4xl leading-loose text-sctblue mb-8'>
          {course.title}
        </p>

        <div className='font-medium text-start text-base md:text-md mb-16 leading-loose text-black'>
          Data Analytics Program is a 8-month program designed to empower women
          in the field of Data Analytics to start a career in this field. The
          program offers the following:
          <ul className='list-disc list-inside'>
            <li>Foundation of Data Analytics Training with Excel</li>
            <li>Advanced Data Analytics Training with SQL and Python</li>
            <li>Data Analytics in Business Training</li>
            <li>Career Development Sessions</li>
            <li>Mentorship</li>
            <li>Capstone Project and Showcase Events</li>
            <li>Job Placement Support</li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <Button
            extrStyles='hover:bg-sctblue hover:text-white'
            color='bg-sctblue'
          >
            <a href='https://drive.google.com/file/d/1KXuVgiwV2uqrBHhbBLLxwGEzML6x8PYF/view?usp=sharing'>
              Read More Details Here
            </a>
          </Button>
          <Button
            extrStyles='hover:text-black hover:bg-sctyellow'
            color='bg-sctyellow'
          >
            <a href='https://forms.gle/FqRMDq6zkLUPWWfs8'>Apply Now</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Course;
