import Image from 'next/image';

const AboutCard = ({ title, description, icon }: any) => {
  return (
    <div className='relative bg-white border border-t-2 border-r-2 border-l-2 rounded-md shadow-xl flex py-2  px-6 justify-center'>
      <div className='my-5'>
        <div
          className='absolute -top-10 left-1/2 transform -translate-x-1/2
'
        >
          <Image
            className='w-16 h-16 object-contain mb-4 border border-t-2 border-r-2 border-l-2 rounded-md shadow-xl p-2 bg-white'
            src={icon}
            alt='partner'
          />
        </div>

        <div className='mt-6 flex flex-col justify-center items-center'>
          <p className='font-bold text-center text-lg lg:text-xl mt-2 my-3'>
            {title}
          </p>
          <div className='font-medium text-secondary text-base  mt-2 my-3'>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
