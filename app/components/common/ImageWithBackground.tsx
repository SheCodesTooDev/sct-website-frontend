import Image from 'next/image';
import Line from '../../assets/illustrations/line.svg';

const ImageWithBg = ({ image, index }: any) => {
  return (
    <div className='relative'>
      <div
        className={`absolute inse bg-cover team-back-image ${
          index % 2 === 0 ? 'team-back-image' : 'team-back-image-blue'
        }`}
      ></div>

      <div className='relative z-10 w-[250px] h-[200px] mx-auto'>
        <Image src={image} alt='Foreground' layout='fill' objectFit='contain' />
      </div>
    </div>
  );
};
export default ImageWithBg;
