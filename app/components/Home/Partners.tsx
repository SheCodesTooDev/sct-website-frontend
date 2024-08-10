import Button from '../common/Button';
import Line from '../../assets/illustrations/line.svg';
import Image from 'next/image';
const Partners = () => (
  <div className=' flex flex-col w-full justify-center items-center py-20 px-5 text-center'>
    <p className='font-medium text-2xl md:text-3xl leading-loose'>
      Our Partners
    </p>

    <div className='flex justify-center svg-container'>
      <Image src={Line} alt='line' />
    </div>
    <p className='font-medium text-xs md:text-sm leading-loose'>
      Collaborating for Success: Our Trusted Partnerships Drive Innovation and
      Empowerment.
    </p>

    {/* <div className='flex justify-center'>
      <Button color='bg-sctyellow'>Contact Us</Button>
    </div> */}
  </div>
);

export default Partners;
