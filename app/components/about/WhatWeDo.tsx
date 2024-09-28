'use client';
import { motion } from 'framer-motion';
import { about } from '@/app/data/about';
import YellowLine from '../common/YellowLine';
import NewsCard from '../common/cards/NewsCard';
import AboutCard from '../common/cards/AboutCard';

const WhatWeDo = () => {
  return (
    <motion.div
      initial={{ x: 200, y: 0, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 1, type: 'tween' }}
      className='mt-24 flex justify-center flex-col items-center'
    >
      <section className='grid grid-cols-1 md:grid-cols-2 sm:gap-x-5 gap-y-24'>
        {about.map((item: any) => (
          <AboutCard key={item.id} {...item} />
        ))}
      </section>
    </motion.div>
  );
};

export default WhatWeDo;
