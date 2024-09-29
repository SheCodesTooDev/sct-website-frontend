'use client';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import Line from '../../assets/illustrations/line.svg';
import Image from 'next/image';
import YellowLine from '../common/YellowLine';
import { companies } from '@/app/data/compaines';
const Companies = () => (
  <div className='bg-sctblue flex flex-col w-full justify-center items-center py-20 px-5 text-center'>
    <p className='font-medium text-2xl md:text-3xl leading-loose text-white'>
      Our graduates have worked in
    </p>
    <YellowLine />
    <div className='flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10'>
      {companies.map((comp, index) => (
        <motion.div
          key={comp.id}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            delay: index * 0.3,
            type: 'tween',
            ease: 'easeOut',
          }}
        >
          <Image
            blurDataURL='data:image/jpeg...'
            className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain'
            key={comp.id}
            src={comp.icon}
            alt='graduates_work'
          />
        </motion.div>
      ))}
    </div>
  </div>
);

export default Companies;
