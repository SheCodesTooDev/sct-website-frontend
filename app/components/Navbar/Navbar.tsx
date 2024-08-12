'use client';
import React, { useState } from 'react';
import Logo from '../../assets/logos/sct.svg';
import Menu from '../../assets/logos/menu.svg';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/app/data/navLinks';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const path = usePathname();

  return (
    <nav className='w-full'>
      <div className='justify-between px-4 mx-auto md:max-w-7xl md:items-center md:flex '>
        <div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            <Image
              className=' w-16 h-8 md:w-20 md:h-auto'
              src={Logo}
              alt="'logo"
            />
            <div className='md:hidden'>
              <div
                className='block -mt-2 lg:-mt-0'
                onClick={() => setMobile(!mobile)}
              >
                <Image src={Menu} alt='menu' />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1   md:border-0 border-b-2 border-sctblue justify-self-center pb-8 mt-8 md:block md:pb-0 md:mt-0 ${
              mobile ? 'block' : 'hidden'
            }`}
          >
            <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              {navLinks.map((link, i) => (
                <li key={i} className='nav-links'>
                  <div>
                    <Link
                      className={`${
                        link.href === path
                          ? 'nav-active-elem dark:text-sctblue font-bold'
                          : ''
                      }`}
                      onClick={() => setMobile(false)}
                      href={link.href}
                    >
                      {link.text}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
