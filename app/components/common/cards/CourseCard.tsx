'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '@/app/assets/illustrations/html-tag.svg';
import { truncateText } from '@/app/utils/truncateText';
import Button from '../Button';

const CourseCard = ({ title, description, icon, isCourseOpen }: any) => {
  // Define the animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      className='border border-t-2 border-r-2 border-l-2 rounded-md shadow-xl flex py-2 px-6 justify-center'
      initial='hidden'
      animate='visible'
      variants={cardVariants}
    >
      <div className='my-5'>
        <Image
          blurDataURL='data:image/jpeg...'
          className='w-10 h-10 object-contain mb-4'
          src={Tag}
          alt='partner'
        />
        <div className='flex flex-col justify-start items-start'>
          <p className='font-bold text-lg lg:text-xl mt-2 my-3'>{title}</p>
          <div className='font-medium text-lg lg:text-xl mt-2 my-3'>
            {description.map((block: any, index: any) => (
              <p
                key={index}
                className='text-start font-medium text-sm sm:text-md md:text-base w-full leading-loose text-secondary'
              >
                {block.type === 'paragraph' &&
                  block.children.map((child: any, idx: any) => {
                    return truncateText(child.text, 150);
                  })}
              </p>
            ))}
          </div>
          <Link className='mt-4' href={isCourseOpen ? 'news' : '#'} passHref>
            <Button
              extrStyles='text-xs sm:text-base text-black'
              color={
                isCourseOpen
                  ? 'bg-sctyellow'
                  : 'bg-gray-400 cursor-not-allowed text-white'
              }
            >
              {isCourseOpen ? 'Join ->' : 'Applications are closed'}
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
