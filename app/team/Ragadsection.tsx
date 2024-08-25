import ragad from '../assets/illustrations/raghad.svg' 
import Image from 'next/image'
import React from 'react'
import LinkedinIcon from "../components/common/LinkedinIcon";
import GmailIcon from "../components/common/gmail";

export default function Ragadsection() {
  return (
   <div className='flex justify-center items-center'>
     <div className="flex justify-center items-center w-11/12 ">
<div className="mr-14 ml-28 text-center">
<Image src={ragad} alt="ragad" className="h-auto w-56 ml-auto mr-auto"/>
<p className="font-bold text-lg m-2">
    Raghad Al-Abboodi
    </p>

<p className="text-xs mb-5">
    Founder of SheCodesToo
    </p>
<LinkedinIcon/> <GmailIcon />
</div>
<div className='w-7/12' >
<p className='leading-7 mt-28 ' style={{fontSize:'12px'}}>
  My name is Raghad, I work as a Software Engineer in UK. When I was a computer science lecturer in Baghdad,
   I observed female students being discouraged from developing their tech skills. This made me want to create a space
    for them to feel comfortable and empowered to become professional programmers. Hence I started She Codes Too 
    initiative back in 2020, to helps young women who do not have sufficient programming skills to find a job. 
    The teaching and supervision provided by this initiative will give women the necessary skills and confidence
     to pursue a career in tech.
     </p>
</div>
        </div>
   </div>
  )
}
