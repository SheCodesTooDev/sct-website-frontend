'use client';
import Image from 'next/image';
import Blueline from '../common/BlueLine';
import { partners } from '@/app/data/partners';
import { getSCTStories } from '@/app/services/api';
import { useEffect } from 'react';
import HomeStoryCard from '../common/cards/HomeStoryCard';
getSCTStories;
const SuccessStories = () => {
  // useEffect(() => {
  //   getSCTStories();
  // }, []);
  return (
    <div className=' flex flex-col w-full justify-center items-center py-20 px-5 text-center'>
      <p className='font-medium text-3xl leading-loose'>Success Stories</p>

      <Blueline />
      <p className='font-medium text-lg md:text-sm leading-loose text-secondary w-60 sm:w-72 md:w-full'>
        Several selected alumni, who already believe in SheCodesToo.
      </p>
      <div className='xl:mx-16'>
        <HomeStoryCard />
      </div>
    </div>
  );
};

export default SuccessStories;
