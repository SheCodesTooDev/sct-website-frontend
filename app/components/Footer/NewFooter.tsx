import React from 'react';
import SCTSection from './SCTSection';
import LinkesSection from './LinkesSection';

const NewFooter = () => {
  return (
    <footer className='md:bg-trueGray-100 lg:flex lg:justify-between'>
      <SCTSection />
      <LinkesSection />
    </footer>
  );
};

export default NewFooter;
