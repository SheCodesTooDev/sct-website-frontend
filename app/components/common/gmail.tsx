import Image from 'next/image';
import Gmail from '../../assets/illustrations/gmail.svg';

const GmailIcon = () => {
  return (
      <Image src={Gmail} alt='Gmail Icon' className='inline w-7 ml-1 pb-7'/>
  );
};
export default GmailIcon;