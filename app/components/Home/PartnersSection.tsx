import Image from 'next/image';
import { partners } from '@/app/data/partners';
import YellowLine from '../common/YellowLine';
const Partners = () => (
  <div className=' flex flex-col w-full justify-center items-center py-20 px-5 text-center'>
    <p className='font-medium text-3xl leading-loose'>Our Partners</p>

    <YellowLine />
    <p className=' text-lg md:text-sm leading-loose  w-60 sm:w-72 md:w-full'>
      Collaborating for Success: Our Trusted Partnerships Drive Innovation and
      Empowerment.
    </p>
    <div className=' mt-10 border border-t-1 rounded-xl shadow-md flex py-2  px-6 sm:px-6 md:px-16 lg:px-20 justify-center'>
      {partners.map((ptr) => (
        <Image
          className='w-16 sm:w-20 sm:h-20 md:w-24 mx-0 md:mx-4 md:h-24 lg:w-36 lg:h-36 object-contain'
          key={ptr.id}
          src={ptr.image}
          alt='partner'
        />
      ))}
    </div>
  </div>
);

export default Partners;
