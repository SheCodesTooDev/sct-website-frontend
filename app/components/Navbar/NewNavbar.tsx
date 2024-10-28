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
    <>
      <div className='hidden relative py-6 sm:flex flex-col justify-center'>
        <LogoLink />
        <DesktopNavLinks />
      </div>
      <div className='sm:hidden relative flex flex-row my-4'>
        <LogoLink />
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </>
  );
}

export default NewNav;
