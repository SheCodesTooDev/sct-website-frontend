import React from 'react';
import logo from '../../assets/logos/sct.svg';
import Image from 'next/image';
import facebook from '../../assets/Icon/facebookIcon.png';
import linkedin from '../../assets/Icon/linkedinb.png';
import insta from '../../assets/Icon/instaIcon.png';
import Link from 'next/link';

export default function SCTSection() {
  return (
    <div className='bg-trueGray-100 pb-8 md:pt-10 xl:bg-white xl:w-96 px-0'>
      <div className='px-5'>
        <Image
          blurDataURL='data:image/jpeg...'
          placeholder='blur'
          loading='lazy'
          src={logo}
          alt='logo'
          className='w-16 pt-10 md:w-20 xl:w-24'
        />
      </div>
      <p className='text-gray-500 text-sm py-5 px-5  leading-loose xl:absolute  xl:w-4/12 2xl:w-2/6 mb-5'>
        an educational organisation registered in the UK and Iraq dedicated to
        empowering young women in the tech industry by equipping them with
        essential programming skills necessary to pursue careers in tech.
      </p>
      <div className='flex pt-0 mt-0 px-5  gap-4 lg:gap-8  xl:mt-36 '>
        <Link href='https://www.facebook.com/she.codes.too.iq/'>
          <Image
            blurDataURL='data:image/jpeg...'
            placeholder='blur'
            loading='lazy'
            src={facebook}
            alt='Facebook icon'
            className='w-5 lg:w-6'
          />
        </Link>
        <Link href='https://www.linkedin.com/school/shecodestooiq'>
          <Image
            blurDataURL='data:image/jpeg...'
            placeholder='blur'
            loading='lazy'
            src={linkedin}
            alt='Linkedin icon'
            className='w-5 lg:w-6'
          />
        </Link>
        <Link href='https://www.instagram.com/'>
          <Image
            blurDataURL='data:image/jpeg...'
            placeholder='blur'
            loading='lazy'
            src={insta}
            alt='Instagram icon'
            className='w-5 lg:w-6'
          />
        </Link>
      </div>
    </div>
  );
}
