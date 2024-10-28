import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/logos/sct.svg';

function LogoLink() {
  return (
    <div className=' text-center sm:mb-0 mx-2 lg:mx-6'>
      <Link href='/'>
        <Image
          blurDataURL='data:image/jpeg...'
          className=' w-16 h-8 md:w-20 md:h-auto'
          src={Logo}
          alt="'logo"
        />
      </Link>
    </div>
  );
}

export default LogoLink;
