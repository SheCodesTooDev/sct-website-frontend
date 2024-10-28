'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Tag from '@/app/assets/illustrations/html-tag.svg';
import { useRouter } from 'next/navigation';

const CourseCard = ({ title, description, slug, isCourseOpen }: any) => {
  // Define the animation variants for the card
  const router = useRouter();

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };
  const handleClick = (e: any) => {
    if (!isCourseOpen) {
      e.preventDefault();
    } else {
      router.push(`/courses/${slug}`);
    }
  };
  return (
    <motion.div
      className='border h-full bg-white border-t-2 border-r-2 border-l-2 rounded-md shadow-xl flex py-2 px-6 justify-center'
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
        <div className='flex flex-col  text-start justify-start items-start'>
          <p className='font-bold text-lg lg:text-xl mt-2 my-3'>{title}</p>
          <div className='font-medium text-lg lg:text-xl mt-2 my-3'>
            {description.map((block: any, index: any) => (
              <p
                key={index}
                className='text-start font-medium text-sm sm:text-md md:text-base w-full leading-loose text-secondary'
              >
                {block.type === 'heading' &&
                  block.level === 6 &&
                  block.children.map((child: any, idx: any) => child.text)}
              </p>
            ))}
          </div>

          <button
            className={`${
              isCourseOpen ? 'bg-sctyellow' : 'bg-gray-400 cursor-not-allowed'
            } p-2 rounded-lg px-4 text-base lg:text-xl mt-4 text-black ${
              isCourseOpen ? 'hover:bg-sctblue hover:text-white' : 'text-white'
            }`}
            onClick={handleClick}
          >
            {isCourseOpen ? 'Join →' : 'Applications are closed'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
