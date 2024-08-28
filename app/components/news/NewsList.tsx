'use client';
import NewsCard from '../common/cards/NewsCard';
import { useState, useEffect } from 'react';

const NewsList = ({ articles }: any) => {
  console.log(articles);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 sm:gap-x-5 gap-y-12 z-10'>
      {articles.map((item: any, index: number) => {
        const rowIndex = Math.floor(index / 3);
        const positionInRow = index % 3;

        const shouldSpanTwoColumns =
          isLargeScreen &&
          ((rowIndex % 2 === 0 && positionInRow === 0) ||
            (rowIndex % 2 !== 0 && positionInRow === 2));

        return (
          <div
            key={item.id}
            className={`${shouldSpanTwoColumns ? 'xl:col-span-2' : ''}`}
          >
            <NewsCard {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;
