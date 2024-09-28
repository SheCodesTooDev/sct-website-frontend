'use client';
import { delay, motion } from 'framer-motion';
import YellowLine from '../common/YellowLine';

const FaqHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      className='flex justify-center flex-col items-center'
    >
      <motion.p
        className='font-bold text-4xl text-center leading-loose text-sctblue'
        variants={itemVariants}
      >
        Frequently Asked Questions
      </motion.p>

      {/* Keep the YellowLine static in the layout */}
      <div className='my-4'>
        <YellowLine />
      </div>

      <motion.p
        className='font-medium text-center md:text-start text-base md:text-md mb-8 md:mb-16 leading-loose text-black'
        variants={itemVariants}
      >
        Your Questions, Answered: Everything You Need to Know About She Codes
        Too
      </motion.p>
    </motion.div>
  );
};

export default FaqHero;
