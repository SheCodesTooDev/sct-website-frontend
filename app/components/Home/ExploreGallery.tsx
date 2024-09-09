import Image from 'next/image';
import Button from '../common/Button';
import { heroImages } from '@/app/data/heroSectionImages';

const ExploreGallery = () => {
  return (
    <div className='split-background md:px-20'>
      <div className='content text-balck mt-8'>
        <Button color='bg-sctyellow text-black text-xl p-2 mb-8'>
          Explore Our Courses
        </Button>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-5 mx-10 md:mx-0'>
          {heroImages.map((image, index) => (
            <Image
              key={index}
              className={`md:w-80 md:h-96 w-full h-60 mb-4 object-cover rounded-3xl ${
                index % 2 === 1 ? 'translate-y-10 md:mb-16' : ''
              } ${
                index >= 6 ? 'hidden md:hidden xl:block' : '' // Ensure index >= 6 is hidden on small & medium screens but visible on xl
              } ${
                index >= 10 ? 'hidden xl:block' : '' // Only 10 images should be visible on extra-large screens
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
