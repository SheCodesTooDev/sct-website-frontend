import Image from 'next/image';
import Link from 'next/link';

const NewsHomeCard = ({ photo, title, date, slug }: any) => {
  return (
    <div className='flex flex-col items-start px-0 md:px-10 xl:px-0 justify-center text-start mb-5'>
      <div className='flex gap-8 '>
        <Image
          src={photo}
          width='0'
          height='0'
          sizes='100vw'
          className='rounded-xl w-24 h-24 md:w-40 xl:w-60 xl:h-36 object-cover'
          alt='news'
        />

        <div className='flex flex-col justify-start items-start gap-3'>
          <p className='font-medium text-md'>{title}</p>
          <p className='font-medium text-xs text-secondary'> 📅 {date}</p>
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

export default NewsHomeCard;
