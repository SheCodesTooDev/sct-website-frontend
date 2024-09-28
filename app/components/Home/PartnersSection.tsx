'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { partners } from '@/app/data/partners';
import YellowLine from '../common/YellowLine';
const Partners = () => (
  <div className=' flex flex-col w-full justify-center items-center py-20 px-5 text-center'>
    <p className='font-medium text-3xl leading-loose'>
      Our Partners and Donors
    </p>

    <YellowLine />
    <p className=' text-lg md:text-base leading-loose  w-60 sm:w-72 md:w-full'>
      Thank you to our valued partners and donors for believing in and
      supporting our mission.
    </p>
    <div className=' mt-10 bg-white border border-t-1 rounded-xl shadow-md flex py-2 items-center px-6  sm:px-6 md:px-16 lg:px-20 justify-center'>
      {partners.map((ptr) => (
        <motion.div
          key={ptr.id}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }} // Ensures the animation runs only once when the element comes into view
        >
          <Image
            className='w-16 sm:w-20 sm:h-20 md:w-24 mx-0 md:mx-4 md:h-24 lg:w-36 lg:h-36 object-contain'
            src={ptr.image}
            alt='partner'
          />
        </motion.div>
      ))}
    </div>
  </div>
);

export default Partners;
