import React from 'react';
import NewsHero from '../components/news/NewsHero';
import NewsList from '../components/news/NewsList';

const NewsPage = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center py-20 px-10 xl:px-32 text-center'>
      <NewsHero />
      <NewsList />
    </div>
  );
};

export default NewsPage;
