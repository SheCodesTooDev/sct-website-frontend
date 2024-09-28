import React from 'react'
import styles from "./Footer.module.css";
import Link from "next/link"


export default function FooterSec2() {
  return (
   <div className='bg-trueGray-100 pb-10
   md:flex  md:mt-10
   lg:flex lg:items-center lg:justify-between
   '>
    
     <div className='md:w-72 md:ml-10'>
        
<h4 className='pl-16 mb-5 text-lg font-semibold
md:text-lg md:pl-10
' >Main</h4>

<ul className='flex flex-wrap ml-10 
md:ml-5'>

 <li className='px-7 pb-6 text-sm text-gray-500
 md:px-4'>
    <a href="/about">About</a>
</li>

<li className='px-7 text-sm text-gray-500
md:px-4'>
    <a href="/success-stories">Stories</a>
</li>

 <li className='px-7 text-sm text-gray-500
 md:px-4'>
   <a href="/team"> Team</a>
</li>

 <li className='px-7 text-sm text-gray-500
 md:px-4'>
  <a href="#">Services</a>
</li>
    </ul>
  </div>


  <div  className='md:w-72 md:ml-10' >
    <h4 className='pl-16 mb-5 text-lg font-semibold mt-10
    md:mt-0 md:pl-0 md:text-lg'>
        Blog
        </h4>
    <ul className='flex flex-wrap ml-10
    md:-ml-4' >

      <li className='px-5 pb-6 text-sm text-gray-500
      md:px-4'>

        <a href="#">Popular Blog</a>
      </li>

      <li className='px-7 text-sm text-gray-500
       md:px-4'>
        <a href="#">New Blogs</a>
      </li>

      <li className='px-7 text-sm text-gray-500
       md:px-4'>
        <a href="#">Most Read</a>
      </li>
    </ul>
  </div>
  <div   className='md:w-72 md:ml-10'>
    <h4 className='pl-16 mb-5 text-lg font-semibold mt-10
    md:mt-0 md:pl-5 md:text-lg 
    lg:-mt-8' >Contact</h4>
    <ul >
      <li className='pl-16 text-sm text-gray-500
      md:pl-5'>
        <a href="/contacts">Contact Us</a>
      </li>
    </ul>
  </div>
   </div>
  )
}
