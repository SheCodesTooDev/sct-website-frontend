import Image from 'next/image';
import Student from '@/public/images/8 .jpeg';
import Link from 'next/link';
import Button from '@/app/components/common/Button';

const HomeStoryCard = () => (
  <div className='bg-gray-200 mt-10 w-full border border-t-1 rounded-lg shadow-md py-2 px-6 md:px-10 lg:px-16 xl:px-16 justify-center md:grid md:grid-cols-2 xl:grid-cols-3'>
    <section className='order-1'>
      <Image
        className='success-img w-64 h-64 md:w-58 md:h-58 xl:w-80 xl:h-80 mt-10 object-contain mx-auto'
        src={Student}
        alt='illustration'
      />
    </section>
    <section className='order-3 xl:px-5 xl:order-2 col-span-2 xl:col-span-1 px-0 md:px-16 lg:px-0 flex flex-col justify-center'>
      <p className='mt-10 font-medium text-xl sm:text-2xl leading-loose text-start'>
        Ula Ali
      </p>
      <p className='mt-2 text-start font-medium text-sm sm:text-md md:text-base w-full leading-loose text-secondary'>
        A sales engineer turned web developer. Ula discovered a newfound passion
        for coding and found a supportive community through She Codes Too.
      </p>
      <Link href='/dd' className='text-sctblue underline flex justify-end mt-4'>
        Read more -&gt;
      </Link>
    </section>
    <section className='order-2 flex items-center xl:order-3'>
      <div className='relative w-64 h-64 mx-auto mt-12'>
        {/* Middle Image */}
        <Image
          src={Student}
          className='absolute inset-0 m-auto w-16 h-16 xl:w-20 xl:h-20 rounded-full z-10'
          alt='center-image'
        />

        {/* Outer Images */}
        <div className='absolute inset-0 flex justify-center items-center'>
          <div className='relative w-56 h-56'>
            <Image
              src={Student}
              className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-14 h-14 xl:w-16 xl:h-16 rounded-full'
              alt='top-center-image'
            />
            <Image
              src={Student}
              className='absolute top-8 left-1/4 transform -translate-x-2/3 -translate-y-1/3 w-14 h-14 xl:w-16 xl:h-16 rounded-full'
              alt='top-left-image'
            />
            <Image
              src={Student}
              className='absolute top-8 right-1/4 transform translate-x-2/3 -translate-y-1/3 w-14 h-14 xl:w-16 xl:h-16 rounded-full'
              alt='top-right-image'
            />
            <Image
              src={Student}
              className='absolute top-1/2 left-0 transform -translate-x-6 -translate-y-2/4 w-14 h-14 xl:w-16 xl:h-16 rounded-full'
              alt='left-center-image'
            />
            <Image
              src={Student}
              className='absolute bottom-8 left-1/4 transform -translate-x-2/3 translate-y-1/3 w-14 h-14 xl:w-16 xl:h-16 rounded-full'
              alt='bottom-left-image'
            />
            <Image
              src={Student}
              className='absolute bottom-8 right-1/4 transform translate-x-2/3 translate-y-1/3 w-14 h-14 xl:w-16 xl:h-16 rounded-full'
              alt='bottom-right-image'
            />
            <Image
              src={Student}
              className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-14 h-14 xl:w-16 xl:h-16 rounded-full'
              alt='bottom-center-image'
            />
            <Image
              src={Student}
              className='absolute top-1/2 right-0 transform translate-x-6 -translate-y-2/4 w-14 h-14 xl:w-16 xl:h-16 rounded-full'
              alt='right-center-image'
            />
          </div>
        </div>
      </div>
    </section>
    <section className='order-last col-span-2 xl:col-span-3'>
      <div className='flex justify-center mt-12 mb-8'>
        <Button extrStyles='px-2 text-sm' color='bg-sctyellow'>
          More Stories
        </Button>
      </div>
    </section>
  </div>
);

export default HomeStoryCard;