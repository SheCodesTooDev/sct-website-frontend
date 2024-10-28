import { navLinks } from '@/app/data/navLinks';
import Link from 'next/link';
function DesktopNavLinks() {
  return (
    <ul className='absolute right-0 flex flex-row space-x-6 mx-2 lg:mx-6'>
      {navLinks.map((link, i) => (
        <li key={i} className='text-base hover:text-sctblue'>
          <Link href={link.href}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
}

export default DesktopNavLinks;
