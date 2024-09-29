import Image from 'next/image';
import In from '../../assets/illustrations/in.svg';

const LinkedinIcon = () => {
  return (
    <Image
      blurDataURL='data:image/jpeg...'
      placeholder='blur'
      loading='lazy'
      src={In}
      alt='Linkedin Icon'
      className=' w-7 mr-1 
      md:w-4 md:pb-2
      lg:inline lg:w-7 lg:mr-1 lg:pb-7 lg:mt-4'
    />
  );
};
export default LinkedinIcon;
