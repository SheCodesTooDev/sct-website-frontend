import Image from 'next/image';
import Link from 'next/link';

const BigNewsCard = ({ image, title, date, slug }: any) => {
  return (
    <div className='flex flex-col items-start md:items-center xl:items-start px-0 justify-center text-start mb-5'>
      <div>
        <div className='relative h-80'>
          <Image
            className='rounded-xl h-80 object-cover'
            src={image}
            alt='illustration'
            layout='fill'
          />
        </div>

        <div className='flex flex-col justify-start items-start gap-3'>
          <p className='font-medium text-xl lg:text-2xl mt-8'>{title}</p>
          <p className='font-medium text-sm lg:text-lg   text-secondary'>
            {' '}
            📅 {date}
          </p>
          <Link
            href={`/news/${slug}`}
            className='text-sctblue text-sm  underline flex justify-end'
          >
            Read more -&gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BigNewsCard;
