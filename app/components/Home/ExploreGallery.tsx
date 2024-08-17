import Image from 'next/image';
import Button from '../common/Button';
import { heroImages } from '@/app/data/heroSectionImages';

const ExploreGallery = () => {
  return (
    <div className='split-background'>
      <div className='content text-balck mt-10'>
        <Button color='bg-sctyellow text-black text-xl p-3'>
          Explore Our Courses
        </Button>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 '>
          {heroImages.slice(0, 10).map((image, index) => (
            <Image
              key={index}
              className={`xl:w-80 xl:h-96 md:w-60 md:h-72 w-44 h-64 object-cover rounded-3xl ${
                index >= 4 ? 'hidden md:block' : ''
              } ${index >= 6 ? 'hidden xl:block' : ''} ${
                index >= 10 ? 'hidden' : ''
              }`}
              src={image}
              alt='hero'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreGallery;
