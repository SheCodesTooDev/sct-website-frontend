import React from 'react';
import SCTSection from './SCTSection';
import LinkesSection from './LinkesSection';

const Footer = () => {
  return (
    <footer className='md:bg-trueGray-100 xl:flex xl:justify-between'>
      <SCTSection />
      <LinkesSection />
    </footer>
  );
};

export default Footer;
