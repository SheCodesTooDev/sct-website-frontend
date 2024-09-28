'use client';
import { motion } from 'framer-motion';
import YellowLine from '../common/YellowLine';

const NewsHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      className='flex flex-col items-center text-center'
    >
      <motion.p
        className='font-bold text-4xl leading-loose text-sctblue'
        variants={itemVariants}
      >
        Latest News
      </motion.p>

      <motion.div className='my-4' variants={itemVariants}>
        <YellowLine />
      </motion.div>

      <motion.p
        className='font-medium text-lg md:text-md mb-16 leading-loose text-secondary w-60 sm:w-72 md:w-full'
        variants={itemVariants}
      >
        Stay up-to-date with the latest developments in the world of technology
        and coding.
      </motion.p>
    </motion.div>
  );
};

export default NewsHero;
