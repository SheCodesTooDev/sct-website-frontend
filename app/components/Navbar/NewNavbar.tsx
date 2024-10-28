'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import LogoLink from './LogoLink';
import DesktopNavLinks from './DesktopLinks';
import MobileMenuButton from './MobileMenuButton';
import MobileDrawer from './MobileDrawer';

function NewNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div>
      <div className='hidden py-6  md:flex z-auto flex-col justify-center md:mx-5 lg:mx-10'>
        <LogoLink />
        <DesktopNavLinks />
      </div>
      <div className='md:hidden  relative flex items-center h-full flex-row my-4 z-50'>
        <LogoLink />
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </div>
  );
}

export default NewNav;
