import Image from 'next/image';
import { NewsProps } from '@/app/types/newsTypes';
import Link from 'next/link';

const NewsCard: React.FC<NewsProps> = ({ image, title, date }) => {
  return (
    <div className='flex flex-col items-start px-0 md:px-10 xl:px-0 justify-center text-start mb-5'>
      <div className=''>
        <Image
          className='rounded-xl w-full h-full xl:w-92 xl:h-80 object-cover'
          src={image}
          alt='illustration'
        />
        <p className=' mt-4 font-medium text-xs lg:text-sm text-secondary'>
          📅 {date}
        </p>

        <div className='flex flex-col justify-start items-start gap-3'>
          <p className='font-medium text-lg lg:text-xl mt-2'>{title}</p>
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
