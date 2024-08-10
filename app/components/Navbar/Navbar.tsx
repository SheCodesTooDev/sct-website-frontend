import React from 'react';
import Logo from '../../assets/logos/sct.svg';
import Menu from '../../assets/logos/menu.svg';

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='py-4 px-2 md:px-8 lg:px-36 flex justify-between items-center'>
      <Image className=' w-16 h-8 md:w-auto md:h-auto' src={Logo} alt="'logo" />
      <span className='hidden md:flex gap-8 lg:text-lg	'>
        <Link href='/'>Home</Link>
        <Link href='/services'>Services</Link>
        <Link href='/stories'>Stories</Link>
        <Link href='/contact'>Contact Us</Link>
      </span>
      <span className='flex md:hidden'>
        <Image src={Menu} alt='menu' />
      </span>
    </div>
  );
};

export default Navbar;
