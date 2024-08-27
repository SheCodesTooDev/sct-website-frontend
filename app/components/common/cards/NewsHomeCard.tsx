import Image from 'next/image';
import Link from 'next/link';

const NewsHomeCard = ({ photo, title, date, slug }: any) => {
  return (
    <div className='flex flex-col items-start px-0 md:px-10 xl:px-0 justify-center text-start mb-10'>
      <div className=' grid  grid-cols-12 xl:grid-cols-2 gap-x-4'>
        <div className=' col-span-6 xl:col-span-1 relative w-full md:w-72 lg:w-full  xl:w-52 h-32'>
          <Image
            className='rounded-xl w-full h-32 md:w-72 lg:w-full  xl:w-52 object-cover '
            src={photo}
            alt='illustration'
            layout='fill'
          />
        </div>

        <div className=' col-span-6 xl:col-span-1 flex flex-col justify-start items-start gap-3'>
          <p className='font-medium text-md'>{title}</p>
          <p className='font-medium text-xs mb-3 text-secondary'> 📅 {date}</p>
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
