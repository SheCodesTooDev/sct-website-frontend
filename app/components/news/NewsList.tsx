'use client';
import { news } from '@/app/data/news';
import NewsCard from '../common/cards/NewsCard';
import { useState, useEffect } from 'react';

const NewsList = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    // Set initial screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 sm:gap-x-5 gap-y-12 z-10'>
      {news.map((item, index) => {
        // Determine the row number and position within the row
        const rowIndex = Math.floor(index / 3); // Determine the row index (0-based)
        const positionInRow = index % 3; // Determine the position within the row (0 for first, 2 for last)

        // Apply `col-span-2` based on the alternating row pattern
        const shouldSpanTwoColumns =
          isLargeScreen &&
          ((rowIndex % 2 === 0 && positionInRow === 0) || // First item of every even row
            (rowIndex % 2 !== 0 && positionInRow === 2)); // Last item of every odd row

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
