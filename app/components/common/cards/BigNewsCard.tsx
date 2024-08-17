import Image from 'next/image';
import { NewsProps } from '@/app/types/newsTypes';

const BigNewsCard: React.FC<NewsProps> = ({ image, title, date }) => {
  return (
    <div className='flex flex-col items-start px-0 md:px-10 xl:px-0 justify-center text-start mb-5'>
      <div className=''>
        <Image
          className='rounded-xl w-full h-full xl:w-92 xl:h-80 object-cover'
          src={image}
          alt='illustration'
        />

        <div className='flex flex-col justify-start items-start gap-3'>
          <p className='font-medium text-xl lg:text-2xl mt-8'>{title}</p>
          <p className='font-medium text-sm lg:text-lg  mb-6 text-secondary'>
            {' '}
            📅 {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigNewsCard;
