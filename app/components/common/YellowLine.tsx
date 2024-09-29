import Image from 'next/image';
import Line from '../../assets/illustrations/line-yellow.svg';

const YellowLine = () => {
  return (
    <div className='flex justify-center svg-container'>
      <Image
        blurDataURL='data:image/jpeg...'
        placeholder='blur'
        loading='lazy'
        src={Line}
        alt='line'
      />
    </div>
  );
};
export default YellowLine;
