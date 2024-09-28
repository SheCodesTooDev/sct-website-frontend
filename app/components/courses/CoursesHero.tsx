'use client';
import { motion } from 'framer-motion';
import YellowLine from '../common/YellowLine';

const CoursesHero = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  const subTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  const lineVariants = {
    visible: {
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  return (
    <>
      <motion.p
        className='font-bold text-4xl leading-loose text-sctblue'
        initial='hidden'
        animate='visible'
        variants={textVariants}
      >
        Our Courses
      </motion.p>

      <YellowLine />

      <motion.div
        className='font-medium text-lg md:text-md mb-16 leading-loose text-secondary w-60 sm:w-72 md:w-full'
        initial='hidden'
        animate='visible'
        variants={subTextVariants}
      >
        Empowering Growth: Hands-On Workshops and Expert-Led Courses at <br />
        <p className='font-bold text-black'>She Codes Too.</p>
      </motion.div>
    </>
  );
};

export default CoursesHero;
