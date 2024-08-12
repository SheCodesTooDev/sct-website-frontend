import Image from 'next/image';
import Blueline from '../common/BlueLine';
import { services } from '@/app/data/services';
import ServiceCard from '../common/cards/ServiceCard';
const Services = () => (
  <div className='bg-lightblue flex flex-col w-full justify-center items-center py-20 px-5 text-center'>
    <p className='font-medium text-3xl leading-loose'>Our Services</p>
    <Blueline />
    <p className='font-thin text-center text-xl md:text-lg leading-loose text-gray-600 md:w-4/5 lg:w-7/12'>
      Our services aim to empower young Iraqi women by providing them with
      access to resources, support, and opportunities to thrive in the tech
      industry, thereby bridging the gender gap and promoting diversity within
      the field.
    </p>
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 px-5 lg:px-10 mt-20 w-full'>
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  </div>
);

export default Services;
