'use client';
import Link from 'next/link';
import YellowLine from '../components/common/YellowLine';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';

const Contact = () => {
  return (
    <div className='sct-bg flex flex-col w-full justify-center items-center py-20 px-8 xl:px-32 text-start mb-10'>
      <div className='flex justify-center flex-col items-center'>
        <motion.p
          className='font-bold text-4xl leading-loose text-sctblue'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <YellowLine />
        </motion.div>

        <motion.p
          className='font-medium text-start text-lg md:text-md lg:mb-5 xl:mb-24 leading-loose text-black'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Get In Touch with us. We are here to assist you
        </motion.p>
        <motion.div
          className='green-square-contact lg:mt-32 flex items-center mt-10'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }} // Ensures it animates only once when scrolled into view
        ></motion.div>

        <div className='lg:grid lg:grid-cols-3 lg:gap-x-20'>
          <motion.div
            className=''
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }} // Ensures it animates only once when scrolled into view
          >
            <div className=' flex-col w-full mt-3 mb-8'>
              <p className='font-thin text-sm'>Location Info</p>
              <p className=' font-extrabold text-2xl  '>
                Find Us: Discover our Global Presence and Local Offices
              </p>
            </div>
          </motion.div>
          <motion.div
            className=''
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }} // Ensures it animates only once when scrolled into view
          >
            <div className='flex-col justify-start items-start '>
              <svg
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_1127_975)'>
                  <path
                    d='M0 24C0 24.943 0.374602 25.8474 1.0414 26.5142C1.70819 27.181 2.61256 27.5556 3.55556 27.5556H28.4444C29.3874 27.5556 30.2918 27.181 30.9586 26.5142C31.6254 25.8474 32 24.943 32 24V20.4445H0V24Z'
                    fill='#141414'
                  />
                  <path d='M0 11.5555H32V20.4444H0V11.5555Z' fill='#EEEEEE' />
                  <path
                    d='M28.4444 4.44446H3.55556C2.61256 4.44446 1.70819 4.81906 1.0414 5.48586C0.374602 6.15265 0 7.05702 0 8.00001L0 11.5556H32V8.00001C32 7.05702 31.6254 6.15265 30.9586 5.48586C30.2918 4.81906 29.3874 4.44446 28.4444 4.44446Z'
                    fill='#DD2E44'
                  />
                  <path
                    d='M9.97861 16.0533V17.1458H15.0017V16.4907C15.0017 16.1991 14.6737 16.2169 14.6737 16.4356V16.9262H10.7422V16.1618L13.4995 13.4044L13.9182 13.8498L11.4159 16.3796H14.0186C14.0186 16.3796 14.1368 15.6151 14.8462 15.6151L15.6568 16.1796V18.2364H8.34127C8.34127 18.2364 8.15905 19.2009 7.04883 19.0729C7.04883 19.0729 7.81327 18.5636 7.81327 17.9627C7.81327 17.3627 7.32261 16.8889 7.32261 16.8889L8.01416 16.4524C8.01416 16.4524 8.08705 16.8258 8.15994 16.9342C8.23372 17.0427 8.50572 17.1431 8.50572 17.1431H9.43372L9.42127 16.6578L9.28705 16.6L9.97861 16.0533ZM17.3582 16.944L17.2106 17.1458H16.7777C16.7795 16.1227 16.783 14.1076 16.7768 14.0871C16.7679 14.0596 16.9679 13.9147 16.9679 13.9147L16.095 13.4329V18.2382H17.7333L17.3582 16.944ZM22.2097 14.1973V17.1458H21.7733V14.5244L21.2266 15.0711V17.1467H20.7902V15.3991L20.2453 15.9458V15.9511L20.1262 16.064L20.2453 16.1102V16.5164C19.7244 16.2489 19.1528 16.6542 19.1528 17.1476V18.2391H22.7555V13.6533L22.2097 14.1973ZM19.9306 17.1458H19.8986C19.6799 17.1458 19.7075 16.8542 20.0079 16.8542C20.175 16.8542 20.2284 16.944 20.2453 17.024V17.1458H19.9306ZM21.0995 13.4053C21.0995 13.5404 21.0542 13.6516 20.9991 13.6516C20.9439 13.6516 20.8995 13.5413 20.8995 13.4053C20.8995 13.2693 20.9448 13.16 20.9991 13.16C21.055 13.16 21.0995 13.2693 21.0995 13.4053ZM20.1804 14.0693C20.1804 14.0693 20.3439 14.2249 20.6453 14.1787C20.9457 14.1333 21.0453 13.8604 21.0453 13.8604C21.0453 13.8604 21.2177 14.1422 21.4088 14.0969C21.6008 14.0516 21.7733 13.7511 21.7733 13.7511C21.7733 13.7511 21.7822 14.2329 21.4995 14.2782C21.2177 14.3236 21.0995 14.1236 21.0995 14.1236C21.0995 14.1236 20.9537 14.3422 20.6808 14.36C20.4079 14.3796 20.1804 14.0693 20.1804 14.0693ZM24.5751 16.9182L24.3395 17.1458H23.9573V14.0427L24.1839 13.9422L23.3022 13.4329V18.2382H24.9484L24.5751 16.9182Z'
                    fill='#007A3C'
                  />
                  <path
                    d='M9.52503 18.784C9.52695 18.8163 9.52223 18.8487 9.51117 18.8792C9.5001 18.9096 9.48292 18.9374 9.46068 18.961C9.43845 18.9845 9.41163 19.0033 9.38187 19.0161C9.35212 19.0289 9.32006 19.0355 9.28767 19.0354C9.25528 19.0353 9.22325 19.0286 9.19354 19.0157C9.16383 19.0028 9.13708 18.984 9.11494 18.9603C9.09279 18.9367 9.07571 18.9088 9.06476 18.8783C9.05381 18.8478 9.04921 18.8154 9.05125 18.7831C9.05506 18.7228 9.08173 18.6662 9.12583 18.6249C9.16993 18.5836 9.22813 18.5606 9.28856 18.5607C9.34899 18.5608 9.40711 18.584 9.45105 18.6255C9.49499 18.667 9.52145 18.7237 9.52503 18.784Z'
                    fill='#007A3C'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1127_975'>
                    <rect width='32' height='32' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              <p className=' text-start text-sm my-1'>Iraq Office</p>
              <svg
                width='27'
                height='3'
                viewBox='0 0 27 3'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='27' height='3' fill='black' />
              </svg>

              <p className=' text-start text-xl text-sctblue  mt-3'>
                Women of Tomorrow for Educational Development
              </p>
              <p className=' text-start  mt-3'>
                Baghdad, Karrada, Al-Wahda District, Block 903, Alley 38, House
                7, Iraq.
              </p>
            </div>
          </motion.div>
          <motion.div
            className='my-8'
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }} // Ensures it animates only once when scrolled into view
          >
            <div className='flex-col  '>
              <svg
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M29.6034 5.51718H2.39656C1.07294 5.51718 0 6.59012 0 7.91374V24.0862C0 25.4097 1.07294 26.4827 2.39656 26.4827H29.6034C30.927 26.4827 32 25.4098 32 24.0862V7.91374C32 6.59012 30.9271 5.51718 29.6034 5.51718Z'
                  fill='#41479B'
                />
                <path
                  d='M31.9668 7.51762C31.7779 6.38268 30.792 5.51718 29.6034 5.51718H28.9799L18.7586 12.2139V5.51724H13.2414V12.2139L3.02012 5.51724H2.39656C1.208 5.51724 0.222062 6.38268 0.0331875 7.51768L8.76931 13.2414H0V18.7587H8.76931L0.0331875 24.4823C0.222062 25.6172 1.208 26.4827 2.39656 26.4827H3.02012L13.2414 19.7861V26.4827H18.7586V19.7861L28.9799 26.4827H29.6034C30.792 26.4827 31.7779 25.6173 31.9668 24.4823L23.2307 18.7586H32V13.2413H23.2307L31.9668 7.51762Z'
                  fill='#F5F5F5'
                />
                <path
                  d='M17.6552 5.51718H14.3448V14.3447H0V17.6551H14.3448V26.4827H17.6552V17.6551H32V14.3447H17.6552V5.51718Z'
                  fill='#FF4B55'
                />
                <path
                  d='M1.55041 26.3282L13.2118 18.7586H11.1851L0.577344 25.6444C0.83917 25.9504 1.1738 26.1856 1.55041 26.3282ZM21.6501 18.7586H19.6233L30.9181 26.0902C31.2348 25.882 31.498 25.6021 31.686 25.273L21.6501 18.7586ZM0.253906 6.84218L10.112 13.2414H12.1388L0.968031 5.99012C0.66674 6.2145 0.42217 6.50631 0.253906 6.84218ZM20.7862 13.2414L31.4134 6.34293C31.1487 6.0377 30.8112 5.80424 30.4322 5.66418L18.7595 13.2414H20.7862Z'
                  fill='#FF4B55'
                />
              </svg>

              <p className=' text-start text-sm my-1'>UK Office</p>
              <svg
                width='27'
                height='3'
                viewBox='0 0 27 3'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='27' height='3' fill='black' />
              </svg>

              <p className=' text-start text-xl text-sctblue mt-3'>
                She Codes Too
              </p>
              <p className=' text-start mt-3'>
                LYTCHETT HOUSE 3 FREELAND PARK WAREHAM ROAD DORSET, BH16 6FA, UK
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center py-8'>
        <a href='mailto:info@shecodestooiq.com'>
          <div className='text-center mb-4 font-sans text-lg text-gray-800'>
            For any questions, please reach out to us at:
          </div>
          <div className='flex justify-center pt-1'>
            <Button color='bg-sctyellow'>info@shecodestooiq.com</Button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
