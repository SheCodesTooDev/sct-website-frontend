'use client';
import Image from 'next/image';
import Button from '../common/Button';
import { heroImages } from '@/app/data/heroSectionImages';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ExploreGallery = () => {
  return (
    <div className='split-background md:px-20'>
      <div className='content text-balck mt-8'>
        <Link href='/courses'>
          <Button
            extrStyles='hover:bg-sctblue hover:text-white'
            color='bg-sctyellow text-black text-lg md:text-xl p-2 md:p-4 mb-12 md:mb-8'
          >
            Explore Our Courses
          </Button>
        </Link>
        <motion.div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-5 mx-10 md:mx-0'>
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ x: 500, y: 0, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.8, type: 'tween' }}
            >
              <Image
                className={`md:w-80 md:h-96 w-full h-60 mb-4 object-cover rounded-3xl
        ${index % 2 === 1 ? 'translate-y-10 sm:mb-16' : ''}
        ${index % 3 === 0 ? 'md:translate-y-0' : ''}
        ${index % 3 === 1 ? 'md:translate-y-10' : ''}
        ${index % 3 === 2 ? 'md:translate-y-0' : ''}
        ${index % 5 === 0 ? 'xl:translate-y-0' : ''}
        ${index % 5 === 1 || index % 5 === 3 ? 'xl:translate-y-10' : ''}
        ${index % 5 === 2 ? 'xl:translate-y-20' : ''}
        ${index % 5 === 4 ? 'xl:translate-y-0' : ''}
        ${index >= 6 ? 'hidden md:hidden xl:block' : ''} ${
                  index >= 10 ? 'hidden xl:block' : ''
                }`}
                src={image}
                alt='hero'
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExploreGallery;
