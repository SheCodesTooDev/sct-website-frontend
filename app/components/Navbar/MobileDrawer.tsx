import Link from 'next/link';
import { navLinks } from '@/app/data/navLinks';
function MobileDrawer({ isOpen, onClose }: any) {
  return (
    <div
      className={`bg-white fixed flex flex-col justify-center text-sctblue items-center z-10 top-0 right-0 h-full w-full  transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button className='text-2xl absolute right-7 top-4 p-3' onClick={onClose}>
        X
      </button>
      <ul className='flex flex-col justify-center items-center space-y-4'>
        {navLinks.map((link, i) => (
          <li
            key={i}
            className='text-3xl hover:text-sctyellow hover:font-semibold'
          >
            <Link onClick={onClose} href={link.href}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileDrawer;
