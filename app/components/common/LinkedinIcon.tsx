import Image from 'next/image';
import In from '../../assets/illustrations/in.svg';

const LinkedinIcon = () => {
  return (
      <Image src={In} alt='Linkedin Icon' className='inline w-7 mr-1 pb-7'/>
  );
};
export default LinkedinIcon;