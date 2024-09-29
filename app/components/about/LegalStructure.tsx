'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import YellowLine from '../common/YellowLine';
import IraqLogo from '@/app/assets/logos/iraq.svg';
import UKLogo from '@/app/assets/logos/uk.svg';
import LegalIllustration from '@/app/assets/illustrations/legal.svg';
import ContractIllustration from '@/app/assets/illustrations/contract.svg';
import LocationIllustration from '@/app/assets/illustrations/location.svg';

const LegalStructure = () => {
  return (
    <>
      <motion.p
        className='mt-8 md:mt-24 text-center font-bold text-4xl leading-loose'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        Our Legal Structure
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
        className='font-medium text-start text-base md:text-md mb-16 leading-loose text-secondary'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        She Codes Too operates under official registrations in both Iraq and the
        United Kingdom.
      </motion.p>

      <div className='bg-gray-200 pb-10 w-full border border-t-1 rounded-lg shadow-md py-2 px-10 md:px-10 lg:px-16 xl:px-16 justify-center items-center md:grid md:grid-cols-2 place-items-center'>
        {/* Iraq Registration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <Image
            blurDataURL='data:image/jpeg...'
            placeholder='blur'
            loading='lazy'
            src={IraqLogo}
            className='mt-10'
            alt='iraq-logo'
          />
          <p className='text-3xl font-semibold mt-3'>Iraq Registration</p>
          <hr className='border-2 border-black w-8 mt-5 rounded-xl' />
          <section>
            <div className='flex items-center gap-8'>
              <Image
                blurDataURL='data:image/jpeg...'
                src={LegalIllustration}
                className='mt-10'
                alt='legal-illustration'
              />
              <p className='text-lg font-semibold text-sctblue mt-10'>
                Legal Name
              </p>
            </div>
            <p className='text-sm font-semibold mt-5'>
              Women of Tomorrow for Educational Development
            </p>
            <hr className='border-1 border-secondary w-52 mt-8 rounded-xl' />
          </section>

          <section>
            <div className='flex items-center gap-8'>
              <Image
                blurDataURL='data:image/jpeg...'
                src={ContractIllustration}
                className='mt-10'
                alt='contract-illustration'
              />
              <p className='text-lg font-semibold text-sctblue mt-10'>
                NGO Registration Number
              </p>
            </div>
            <p className='text-sm font-semibold mt-5'>1EO2406019</p>
            <hr className='border-1 border-secondary w-52 mt-8 rounded-xl' />
          </section>

          <section>
            <div className='flex items-center gap-8'>
              <Image
                blurDataURL='data:image/jpeg...'
                src={LocationIllustration}
                className='mt-10'
                alt='location-illustration'
              />
              <p className='text-lg font-semibold text-sctblue mt-10'>
                Headquarters
              </p>
            </div>
            <p className='text-sm font-semibold mt-5'>Baghdad, Iraq</p>
          </section>
        </motion.div>

        {/* UK Registration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className='pt-8 md:pt-0'
        >
          <Image
            blurDataURL='data:image/jpeg...'
            placeholder='blur'
            loading='lazy'
            src={UKLogo}
            className='mt-10'
            alt='uk-logo'
          />
          <p className='text-3xl font-semibold mt-3'>UK Registration</p>
          <hr className='border-2 border-black w-8 mt-5 rounded-xl' />

          <section>
            <div className='flex items-center gap-8'>
              <Image
                blurDataURL='data:image/jpeg...'
                src={LegalIllustration}
                className='mt-10'
                alt='legal-illustration'
              />
              <p className='text-lg font-semibold text-sctblue mt-10'>
                Legal Name
              </p>
            </div>
            <p className='text-sm font-semibold mt-5'>She Codes Too</p>
            <hr className='border-1 border-secondary w-52 mt-8 rounded-xl' />
          </section>

          <section>
            <div className='flex items-center gap-8'>
              <Image
                blurDataURL='data:image/jpeg...'
                src={ContractIllustration}
                className='mt-10'
                alt='contract-illustration'
              />
              <p className='text-lg font-semibold text-sctblue mt-10'>
                Charity Registration Number
              </p>
            </div>
            <p className='text-sm font-semibold mt-5'>1209658</p>
            <hr className='border-1 border-secondary w-52 mt-8 rounded-xl' />
          </section>

          <section>
            <div className='flex items-center gap-8'>
              <Image
                blurDataURL='data:image/jpeg...'
                src={LocationIllustration}
                className='mt-10'
                alt='location-illustration'
              />
              <p className='text-lg font-semibold text-sctblue mt-10'>
                Registered Address
              </p>
            </div>
            <p className='text-sm font-semibold mt-5'>Dorset, United Kingdom</p>
          </section>
        </motion.div>
      </div>
    </>
  );
};

export default LegalStructure;
