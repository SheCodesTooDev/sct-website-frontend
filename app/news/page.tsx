import React from 'react';
import NewsHero from '../components/news/NewsHero';
import NewsList from '../components/news/NewsList';
import { getArticles } from '../services/api';

const NewsPage = async () => {
  const articles = await getArticles();
  if (!Array.isArray(articles)) {
    console.error('Expected an array of articles, but received:', articles);
    return <div>Error loading articles.</div>;
  }
  return (
    <div className='sct-bg flex flex-col w-full justify-center items-center py-20 px-10 xl:px-32 text-center'>
      <NewsHero />
      <NewsList articles={articles} />
    </div>
  );
};

export default NewsPage;
