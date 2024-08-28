import YellowLine from '../common/YellowLine';

const CoursesHero = () => {
  return (
    <>
      <p className='font-bold text-4xl leading-loose text-sctblue'>
        Our Courses
      </p>

      <YellowLine />
      <div className='font-medium text-lg md:text-md mb-16  leading-loose text-secondary w-60 sm:w-72 md:w-full'>
        Empowering Growth: Hands-On Workshops and Expert-Led Courses at <br />{' '}
        <p className='font-bold text-black'>She Codes Too.</p>
      </div>
    </>
  );
};

export default CoursesHero;
