import React from 'react';
import StoriesHero from '../components/stories/StoriesHero';
import StoriesList from '../components/stories/StoriesList';

const Stories = () => {
  return (
    <div className='sct-bg flex flex-col w-full justify-center items-center py-20 px-8 xl:px-32 text-start'>
      <StoriesHero />
      <StoriesList />
    </div>
  );
};

export default Stories;
