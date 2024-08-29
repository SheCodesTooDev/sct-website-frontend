import React from 'react';
import AboutHero from '../components/about/AboutHero';
import LegalStructure from '../components/about/LegalStructure';
import WhatWeDo from '../components/about/WhatWeDo';

const About = () => {
  return (
    <div className='sct-bg flex flex-col w-full justify-center items-center py-20 px-8 xl:px-32 text-start'>
      <AboutHero />
      <LegalStructure />
      <WhatWeDo />
    </div>
  );
};

export default About;
