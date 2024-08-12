import Image from 'next/image';
import Line from '../../assets/illustrations/line.svg';

const Blueline = () => {
  return (
    <div className='flex justify-center svg-container'>
      <Image src={Line} alt='line' />
    </div>
  );
};
export default Blueline;
