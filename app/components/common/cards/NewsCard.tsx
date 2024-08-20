import Image from 'next/image';
import { NewsProps } from '@/app/types/newsTypes';
import Link from 'next/link';

const NewsCard: React.FC<NewsProps> = ({ image, title, date }) => {
  return (
    <div className='text-start'>
      <div className=''>
        <Image
          className='rounded-xl w-full h-80  md:h-80  lg:h-92 object-cover'
          src={image}
          alt='illustration'
        />
        <p className=' mt-4 font-medium text-xs lg:text-sm text-secondary'>
          📅 {date}
        </p>

        <div className='flex flex-col justify-start items-start'>
          <p className='font-medium text-lg lg:text-xl mt-2 my-3'>{title}</p>
          <Link
            href={`/news`}
            className='text-sctblue text-sm  underline flex justify-end'
          >
            Read more -&gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
