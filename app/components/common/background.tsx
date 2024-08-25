import Image from 'next/image';
import background from '../../assets/illustrations/background.svg';

const Background = () => {
  return (
      <Image src={background} alt='background' className='fixed ' style={{zIndex:'-10px'}}/>
  );
};
export default Background;