import Image from 'next/image';
import Gmail from '../../assets/illustrations/gmail.svg';

const GmailIcon = () => {
  return (
    <Image
      blurDataURL='data:image/jpeg...'
      src={Gmail}
      alt='Gmail Icon'
      className=' w-7 ml-1  
      md:w-4 md:pb-2
      lg:inline lg:w-7 lg:ml-1 lg:pb-7 lg:mt-4'
    />
  );
};
export default GmailIcon;
