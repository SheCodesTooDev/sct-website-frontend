import React from 'react'
import Image from 'next/image'
import ibrahim from '../assets/illustrations/ibrahim.svg'
import Patrick from '../assets/illustrations/Patrik.svg'
import aya from '../assets/illustrations/aya.svg'
import moh from '../assets/illustrations/mohammed.svg'
import ayaS from '../assets/illustrations/ayaS.svg'
import jafar from '../assets/illustrations/jaafar.svg'
import athraa from '../assets/illustrations/athraa.svg'
import LinkedinIcon from "../components/common/LinkedinIcon";
import GmailIcon from "../components/common/gmail";
import arrow2 from '../assets/illustrations/arrow2.svg'
import arrow3 from '../assets/illustrations/arrow3.svg'

export default function Teamsection() {
  return (
<div className='mt-14 '>
<div className='flex justify-center items-center gap-5'>
<div className='text-center w-60  border-2 border-solid border-gray-300 rounded-lg'>
<Image src={ibrahim} alt='' className='ml-auto mr-auto h-auto w-36 pt-2'/>
<p className='mt-4 font-bold text-lg'>
    Ibrahim Jamal
    </p>
<p className='text-xs mt-1'>
    Project manager
    </p>
<p className='text-xs mt-1 pl-3 pr-3 leading-4 mb-5'>
    Ibrahim is responsible for the day-to-day operations of the organisation.
    </p>
<LinkedinIcon /> <GmailIcon />
  </div>

  <div className='text-center w-60  border-2 border-solid border-gray-300 rounded-lg'>
<Image src={Patrick} alt='' className='ml-auto mr-auto h-auto w-36 pt-2'/>
<p className='mt-4 font-bold text-lg'>
    Ibrahim Jamal
    </p>
<p className='text-xs mt-1'>
    Project manager
    </p>
<p className='text-xs mt-1 pl-3 pr-3 leading-4 mb-5'>
    Ibrahim is responsible for the day-to-day operations of the organisation.
    </p>
<LinkedinIcon /> <GmailIcon />
  </div>

  <div className='text-center w-60 border-2 border-solid border-gray-300 rounded-lg'>
<Image src={aya} alt='' className='ml-auto mr-auto h-auto w-36'/>
<p className='mt-4 font-bold text-lg'>
    Ibrahim Jamal
    </p>
<p className='text-xs mt-1'>
    Project manager
    </p>
<p className='text-xs mt-1 pl-3 pr-3 leading-4 mb-4'>
    Ibrahim is responsible for the day-to-day operations of the organisation.
    </p>
<LinkedinIcon /> <GmailIcon />
  </div>

</div>
<Image src={arrow2} alt='arrow' className='relative left-20 bottom-8 ' style={{zIndex:'-5'}}/>


<div className='flex justify-center items-center gap-7 mb-40'>
<div className='text-center w-60  border-2 border-solid border-gray-300 rounded-lg'>
<Image src={moh} alt='' className='ml-auto mr-auto h-auto w-40'/>
<p className=' font-bold text-lg'>
Mohammed Ali   
 </p>
<p className='text-xs mt-1'>
Trainer
    </p>
<p className='text-xs mt-1 pl-3 pr-3 leading-4 mb-3'>
SheCodesToo s Lead Trainer, excelling in front-end development and mentoring.
    </p>
<LinkedinIcon /> <GmailIcon />
  </div>

  <div className='text-center w-60  border-2 border-solid border-gray-300 rounded-lg'>
<Image src={ayaS} alt='' className='ml-auto mr-auto h-auto w-36 '/>
<p className=' font-bold text-lg'>
Aya Salam
    </p>
<p className='text-xs mt-1'>
Trainer
    </p>
<p className='text-xs mt-1 pl-3 pr-3 leading-4 mb-4'>
Trainer with 3+ years in software development, Re-coded graduate.
    </p>
<LinkedinIcon /> <GmailIcon />
  </div>

  <div className='text-center w-60 border-2 border-solid border-gray-300 rounded-lg'>
<Image src={jafar} alt='' className='ml-auto mr-auto h-auto w-36'/>
<p className=' font-bold text-lg'>
Jaafar Mohammed
    </p>
<p className='text-xs mt-1'>
Teaching Assistant
    </p>
<p className='text-xs mt-1 pl-3 pr-3 leading-4 mb-4'>
Jaafar works as the Teaching Assistant for She Codes Too
    </p>
<LinkedinIcon /> <GmailIcon />
  </div>

  <div className='text-center w-60 border-2 border-solid border-gray-300 rounded-lg'>
<Image src={athraa} alt='' className='ml-auto mr-auto h-auto w-36'/>
<p className='font-bold text-lg'>
Athraa Mohammed
    </p>
<p className='text-xs mt-1'>
Teaching Assistant
    </p>
<p className='text-xs mt-1 pl-3 pr-3 leading-4 mb-5'>
Athraa works as the Teaching Assistant for She Codes Too
    </p>
<LinkedinIcon /> <GmailIcon />
  </div>

</div>

</div>
  )
}
