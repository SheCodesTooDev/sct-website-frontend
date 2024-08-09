import Button from '../common/Button';
import Line from '../../assets/illustrations/line.svg';
import Image from 'next/image';
const InquirySection = () => (
  <div className='bg-lightblue flex flex-col w-full justify-center items-center py-20 px-5 text-center'>
    <p className='font-medium text-2xl md:text-3xl leading-loose'>
      Have questions or need assistance? <br /> Get in touch with us today!
    </p>

    <div className='flex justify-center my-2'>
      <Image src={Line} alt='line' />
    </div>

    <div className='flex justify-center'>
      <Button color='bg-sctyellow'>Contact Us</Button>
    </div>
  </div>
);

export default InquirySection;
