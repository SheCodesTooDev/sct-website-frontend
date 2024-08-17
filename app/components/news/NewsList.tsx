import { news } from '@/app/data/news';
import NewsCard from '../common/cards/NewsCard';

const NewsList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 gap-y-12'>
      {news.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default NewsList;
