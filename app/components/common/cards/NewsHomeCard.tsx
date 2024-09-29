import Image from 'next/image';
import Link from 'next/link';

const NewsHomeCard = ({ photo, title, date, slug }: any) => {
  return (
    <div className='mt-10 flex flex-col items-start md:items-center xl:items-start px-0 justify-center text-start mb-5 w-full'>
      <div className='flex w-full gap-x-5 '>
        <Image
          src={photo}
          width='0'
          height='0'
          sizes='100vw'
          className='rounded-xl w-[90px] h-[100px] md:w-40 xl:w-60 xl:h-36 object-cover'
          alt='news'
        />

        <div className='flex flex-col justify-start items-start gap-3'>
          <p className='font-medium text-sm lg:text-base'>{title}</p>
          <p className='font-medium text-xs text-secondary'> 📅 {date}</p>
          <Link
            href={`/news/${slug}`}
            className='text-sctblue text-sm lg:text-base  underline flex justify-end mt-2'
          >
            Read more -&gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsHomeCard;
