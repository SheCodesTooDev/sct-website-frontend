'use client';
import YellowLine from '../common/YellowLine';
import ExploreGallery from './ExploreGallery';
import { motion } from 'framer-motion';

const NewExploreSection = () => {
  return (
    <>
      <div className=' flex flex-col w-full justify-center items-center py-10 px-5 md:px-0 text-center'>
        <p className='font-bold text-5xl leading-loose text-sctblue'>
          Inspiring Women To Code
        </p>
        <YellowLine />
        <motion.div
          initial={{ x: -500, y: 0, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25, type: 'tween' }}
        >
          <p className='font-md text-2xl leading-loose md:w-full'>
            Explore the programming areas of interest you desire.
          </p>
        </motion.div>
      </div>
      <ExploreGallery />
    </>
  );
};

export default NewExploreSection;
