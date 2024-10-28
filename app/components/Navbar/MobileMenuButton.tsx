import Image from 'next/image';
import Menu from '../../assets/logos/menu.svg';

function MobileMenuButton({ onClick }: any) {
  return (
    <button className='absolute right-2 top-2 p-' onClick={onClick}>
      <Image
        blurDataURL='data:image/jpeg...'
        placeholder='blur'
        loading='lazy'
        src={Menu}
        alt='menu'
      />
    </button>
  );
}
export default MobileMenuButton;
