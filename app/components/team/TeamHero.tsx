'use client';
import YellowLine from '../common/YellowLine';
import { motion } from 'framer-motion';
export default function TeamHero() {
  return (
    <div className='flex justify-center flex-col items-center'>
      <motion.div
        className='green-square-team'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true }}
      ></motion.div>

      <motion.p
        className='font-bold text-center text-4xl leading-loose text-sctblue'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        Who is behind SheCodesToo;
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <YellowLine />
      </motion.div>
    </div>
  );
}
