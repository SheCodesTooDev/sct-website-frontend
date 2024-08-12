import Image from 'next/image';

interface NewsProps {
  id: number;
  image: any;
  title: string;
  date: string;
  description: string;
}
const NewsCard: React.FC<NewsProps> = ({ image, title, date }) => {
  return (
    <div className='flex flex-col items-start px-0 md:px-10 xl:px-0 justify-center text-start mb-5'>
      <div className='flex gap-8 '>
        <Image
          className='rounded-xl w-40 h-24 object-cover'
          src={image}
          alt='illustration'
        />

        <div className='flex flex-col justify-start items-start gap-3'>
          <p className='font-medium text-md'>{title}</p>
          <p className='font-medium text-xs  mb-6 text-secondary'> 📅 {date}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
