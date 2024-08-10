import Image from 'next/image';

interface ServiceProps {
  id: number;
  color: string;
  icon: any;
  title: string;
  description: string;
}
const ServiceCard: React.FC<ServiceProps> = ({
  id,
  color,
  icon,
  title,
  description,
}) => {
  return (
    <div className='flex flex-col items-start px-0 md:px-10 xl:px-0 justify-center text-start mb-5'>
      <span className={`${color} rounded-lg p-2 mb-5`}>
        <Image src={icon} alt='illustration' />
      </span>
      <p className='font-medium text-xl  mb-6'>{title}</p>
      <p className='font-medium text-lg md:text-sm  text-secondary md:w-72'>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
