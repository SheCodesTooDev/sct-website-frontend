import Button from '../common/Button';
import Line from '../../assets/illustrations/line.svg';
import Image from 'next/image';
import YellowLine from '../common/YellowLine';
import { companies } from '@/app/data/compaines';
const Companies = () => (
  <div className='bg-sctblue flex flex-col w-full justify-center items-center py-20 px-5 text-center'>
    <p className='font-medium text-2xl md:text-3xl leading-loose text-white'>
      Our graduates have worked in
    </p>
    <YellowLine />
    <div className='flex justify-center'>
      {companies.map((comp) => (
        <Image
          className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 mx-3 md:mx-4 md:h-24 lg:w-32 lg:h-32 object-contain'
          key={comp.id}
          src={comp.icon}
          alt='partner'
        />
      ))}{' '}
    </div>
  </div>
);

export default Companies;
