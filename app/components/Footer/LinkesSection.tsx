import React from 'react';

export default function LinkesSection() {
  return (
    <div
      className='bg-trueGray-100 pb-10 pt-2 xl:px-5 
   md:flex  md:mt-10
   lg:grid lg:grid-cols-3 lg:items-center xl:mx-24
   '
    >
      <div className='md:w-96 lg:w-72 pb-10'>
        <h4
          className='px-5 mb-5 text-lg font-semibold
md:text-lg md:pl-10
'
        >
          Main
        </h4>

        <ul
          className='flex flex-wrap w-2/3 
md:ml-5'
        >
          <li
            className='px-5 pb-6 text-sm text-gray-500
 md:px-4'
          >
            <a href='/about'>About</a>
          </li>

          <li
            className='px-5 text-sm text-gray-500
md:px-4'
          >
            <a href='/success-stories'>Stories</a>
          </li>

          <li
            className='px-5 text-sm text-gray-500
 md:px-4'
          >
            <a href='/team'> Team</a>
          </li>

          <li
            className='px-5 text-sm text-gray-500
 md:px-4'
          >
            <a href='/courses'>Courses</a>
          </li>
        </ul>
      </div>

      <div className='md:w-72 md:ml-10 pb-6'>
        <h4
          className='px-5 mb-5 text-lg font-semibold
md:text-lg md:pl-10
'
        >
          News
        </h4>

        <ul
          className='flex flex-wrap w-2/3 
md:ml-5'
        >
          <li
            className='px-5 pb-6 text-sm text-gray-500
 md:px-4'
          >
            <a href='/news'>Latest News</a>
          </li>
        </ul>
      </div>
      <div className='md:w-72 md:ml-10'>
        <h4
          className='px-5 mb-5 text-lg font-semibold
md:text-lg md:pl-10
'
        >
          Contact
        </h4>

        <ul
          className='flex flex-wrap w-2/3 
md:ml-5'
        >
          <li
            className='px-5 pb-6 text-sm text-gray-500
 md:px-4'
          >
            <a href='/contact'>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
