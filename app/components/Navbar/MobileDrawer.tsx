import Link from 'next/link';
function MobileDrawer({ isOpen, onClose }: any) {
  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button className='absolute right-7 top-4 p-3' onClick={onClose}>
        ddsd{' '}
      </button>
      <ul className='flex flex-col justify-center items-center space-y-4'>
        <li className='text-3xl hover:text-blue-900 hover:font-semibold'>
          <Link href='/'>Home</Link>
        </li>
        <li className='text-3xl hover:text-blue-900 hover:font-semibold'>
          <Link href='/'>About</Link>
        </li>{' '}
        <li className='text-3xl hover:text-blue-900 hover:font-semibold'>
          <Link href='/'>Team</Link>
        </li>{' '}
        <li className='text-3xl hover:text-blue-900 hover:font-semibold'>
          <Link href='/'>Courses</Link>
        </li>{' '}
        <li className='text-3xl hover:text-blue-900 hover:font-semibold'>
          <Link href='/'>News</Link>
        </li>{' '}
        <li className='text-3xl hover:text-blue-900 hover:font-semibold'>
          <Link href='/'>Stories</Link>
        </li>
        <li className='text-3xl hover:text-blue-900 hover:font-semibold'>
          <Link href='/'>FAQ</Link>
        </li>{' '}
        <li className='text-3xl hover:text-blue-900 hover:font-semibold'>
          <Link href='/'>Contact</Link>
        </li>
        {/* Add other navigation links */}
      </ul>
    </div>
  );
}

export default MobileDrawer;
