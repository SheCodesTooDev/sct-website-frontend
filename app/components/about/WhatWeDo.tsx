import { news } from '@/app/data/news';
import YellowLine from '../common/YellowLine';
import NewsCard from '../common/cards/NewsCard';

const WhatWeDo = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-5 gap-y-12'>
        {news.slice(0, 3).map((article: any) => (
          <NewsCard key={article.id} {...article} />
        ))}
      </section>
    </div>
  );
};

export default WhatWeDo;
