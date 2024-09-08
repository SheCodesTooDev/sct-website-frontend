import React from 'react';
import FaqHero from '../components/faq/FAQHero';
import FaqList from '../components/faq/FAQList';

const FAQ = () => {
  return (
    <div className='sct-bg flex flex-col w-full justify-center items-center py-20 px-8 xl:px-32 text-start'>
      <FaqHero />
      <FaqList />
    </div>
  );
};

export default FAQ;
