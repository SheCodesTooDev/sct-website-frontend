import React from 'react';
import logo from '../../assets/logos/sct.svg';
import Image from 'next/image';
import facebook from '../../assets/Icon/facebookIcon.png';
import twitt from '../../assets/Icon/twitterIcon.png';
import insta from '../../assets/Icon/instaIcon.png';

export default function FooterSec1() {
  return (
    <div
      className='bg-trueGray-100 pb-16
    md:pt-10
   lg:bg-white  '
    >
      <Image
        blurDataURL='data:image/jpeg...'
        placeholder='blur'
        loading='lazy'
        src={logo}
        alt='logo'
        className=' w-16 pt-10 ml-10
md:w-20
lg:ml-32 lg:w-24'
      />

      <p
        className='  text-gray-500 text-xs mt-5 ml-10 tracking-wide leading-5
md:pr-32 md:text-sm md:leading-6
lg:absolute lg:w-2/6 lg:leading-6 lg:ml-32   '
      >
        an educational organisation based in Iraq dedicated to empowering young
        Iraqi women in the tech industry by equipping them with essential
        programming skills necessary to pursue careers in tech.
      </p>
      <div
        className='flex  ml-10  mt-8 gap-5
lg:gap-8 lg:ml-32 lg:mt-36 '
      >
        <Image
          blurDataURL='data:image/jpeg...'
          placeholder='blur'
          loading='lazy'
          src={facebook}
          alt='Facebook icon'
          className='w-5
lg:w-6'
        />

        <Image
          blurDataURL='data:image/jpeg...'
          placeholder='blur'
          loading='lazy'
          src={twitt}
          alt='Twitter icon'
          className='w-5
lg:w-6'
        />

        <Image
          blurDataURL='data:image/jpeg...'
          placeholder='blur'
          loading='lazy'
          src={insta}
          alt='Instagram icon'
          className='w-5
lg:w-6'
        />
      </div>
    </div>
  );
}
