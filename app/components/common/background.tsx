import Image from 'next/image';
import background from '../../assets/illustrations/background.svg';

const Background = () => {
  return (
    <Image
      blurDataURL='data:image/jpeg...'
      placeholder='blur'
      loading='lazy'
      src={background}
      alt='background'
      className='fixed '
      style={{ zIndex: '-100' }}
    />
  );
};
export default Background;
