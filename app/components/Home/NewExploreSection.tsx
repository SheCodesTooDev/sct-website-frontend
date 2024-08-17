import Blueline from '../common/BlueLine';
import YellowLine from '../common/YellowLine';
import ExploreGallery from './ExploreGallery';

const NewExploreSection = () => {
  return (
    <>
      <div className=' flex flex-col w-full justify-center items-center py-20 px-5 text-center'>
        <p className='font-bold text-5xl leading-loose text-sctblue'>
          Inspiring Women To Code
        </p>
        <YellowLine />
        <p className='font-md text-3xl md:text-xl w-60 leading-loose sm:w-72 md:w-full'>
          Explore the programming areas of interest <br /> you desire.
        </p>
      </div>
      <ExploreGallery />
    </>
  );
};

export default NewExploreSection;
