'use client';
import YellowLine from '../common/YellowLine';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <motion.div
        className='green-square'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true }} // Ensures it animates only once when scrolled into view
      ></motion.div>

      <motion.p
        className='font-bold text-4xl leading-loose text-sctblue'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        About
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <YellowLine />
      </motion.div>

      <motion.p
        className='font-medium text-start text-base md:text-md mb-16 leading-loose text-black'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        She Codes Too is dedicated to advancing the education and career
        prospects of women in Iraq and the United Kingdom within the field of
        technology. Our primary objective is to empower women by providing them
        with the skills, knowledge, and opportunities necessary to succeed in
        the tech industry. We create programs to teach women over a period of 6
        or 7 months through online and in-person classes. Through a variety of
        courses related to computer programming, the participants learn about
        their desired topic or area. Besides teaching technical skills, we also
        provide mentoring and instruction in soft skills and career development
        to reach maximum benefits for the participants and enable them to secure
        tech jobs.
      </motion.p>
    </div>
  );
};

export default AboutHero;
