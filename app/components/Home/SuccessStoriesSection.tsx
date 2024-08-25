import Image from 'next/image';
import Blueline from '../common/BlueLine';
import { getSCTStories } from '@/app/services/api';
import HomeStoryCard from '../common/cards/HomeStoryCard';

interface storyProps {
  children: React.ReactNode;
  color: string;
  extrStyles?: string;
}

const SuccessStories = async () => {
  const stories = await getSCTStories();
  if (!Array.isArray(stories)) {
    console.error('Expected an array of stories, but received:', stories);
    return <div>Error loading stories.</div>;
  }
  const story = stories[Math.floor(Math.random() * stories.length)];

  return (
    <div className=' flex flex-col w-full justify-center items-center py-20 px-5 text-center'>
      <p className='font-medium text-3xl leading-loose'>Success Stories</p>
      <Blueline />
      <p className='font-medium text-lg leading-loose text-secondary w-60 sm:w-72 md:w-full'>
        Several selected alumni, who already believe in SheCodesToo.
      </p>

      <div className='xl:mx-16'>
        <HomeStoryCard slug={story?.slug} />
      </div>
    </div>
  );
};

export default SuccessStories;
