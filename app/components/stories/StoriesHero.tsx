'use client';
import YellowLine from '../common/YellowLine';
import { motion } from 'framer-motion';
export default function StoriesHero() {
  return (
    <div className='flex justify-center flex-col items-center'>
      <motion.p
        className='font-bold text-center text-4xl leading-loose text-sctblue'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        Our Success Stories
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <YellowLine />
      </motion.div>

      <motion.div
        className=' font-extralight text-center text-lg md:text-xl mb-16 leading-loose text-black'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        Transforming Ambition into Expertise: Success Stories from <br />
        <p className='font-semibold leading-loose mt-2'>
          She Codes Too Front-End Developers.
        </p>
      </motion.div>
    </div>
  );
}
