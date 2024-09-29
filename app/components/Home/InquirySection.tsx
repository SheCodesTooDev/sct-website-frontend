'use client';
import Button from '../common/Button';
import Line from '../../assets/illustrations/line.svg';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const InquirySection = () => (
  <div className='bg-lightblue flex flex-col w-full justify-center items-center py-20 px-5 text-center'>
    <div className='bracet'></div>

    <motion.p
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 0.5,
        type: 'tween',
        ease: 'backInOut',
      }}
      className='font-medium text-2xl md:text-3xl leading-loose'
    >
      Have questions or need assistance? <br /> <br /> Get in touch with us
      today!
    </motion.p>
    <div className='end-bracet'></div>

    <div className='flex justify-center my-2'>
      <Image
        blurDataURL='data:image/jpeg...'
        placeholder='blur'
        loading='lazy'
        src={Line}
        alt='line'
      />
    </div>

    <div className='flex justify-center'>
      <Link href='contact'>
        <Button color='bg-sctyellow'>Contact Us</Button>
      </Link>
    </div>
  </div>
);

export default InquirySection;
