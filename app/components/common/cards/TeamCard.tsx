'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Linkedin from '@/app/assets/Icon/linkedin-black.svg';
import Email from '@/app/assets/Icon/email.svg';
import ImageWithBg from '../ImageWithBackground';

const TeamCard = ({ name, position, image, index }: any) => {
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
      className='border bg-white border-t-2 border-r-2 border-l-2 rounded-xl shadow-xl flex py-2 px-8 justify-center'
      initial='hidden'
      animate='visible'
      variants={cardVariants}
    >
      <div className='my-5'>
        <ImageWithBg index={index} image={image} />

        <div className='flex flex-col justify-center items-center'>
          <p className='font-bold text-nowrap text-lg lg:text-xl mt-2 my-3 text-center'>
            {name}
          </p>
          <div className='font-medium text-lg lg:text-xl mt-2 my-3'>
            <p className='text-start font-medium text-sm line-clamp-1 sm:text-md md:text-base w-full leading-loose text-secondary'>
              {position}
            </p>
          </div>
          {/* <div className="flex justify-center"> */}
          {/* <Link href={linkedin}>
              <div className='relative w-8 h-8 md:w-8 mx-2 mb-4'>
                <Image
                  className=' w-8 h-8 md:w-8 md:h-auto mx-2 mt-3'
                  src={Linkedin}
                  layout='fill'
                  alt="'logo"
                />
              </div>
            </Link> */}
          {/* <Link href={`mailto:${email}`}>
              <div className="relative w-8 h-8 md:w-8 mx-2 mb-4">
                <Image
                  className=" w-8 h-8 md:w-8 md:h-auto mx-2 mt-3"
                  src={Email}
                  layout="fill"
                  alt="'logo"
                />
              </div>
            </Link> */}
          {/* </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
