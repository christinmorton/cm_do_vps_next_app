'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";

const DesktopMenu = () => {
  const pathname = usePathname()

  return (
    <div className='flex space-x-2'>
        <Link
            href='/'
            className={`${pathname === '/' ? 'bg-black text-white' : 'text-black'} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
        >
            Home
        </Link>
        <Link
            href='/portfolio'
            className={`${pathname === '/portfolio' ? 'bg-black text-white' : 'text-black'} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
        >
            Portfolio
        </Link>
        <Link
            href='/experience'
            className={`${pathname === '/experience' ? 'bg-black text-white' : 'text-black'} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
        >
            Experience
        </Link>
        <Link
            href='/contact'
            className={`${pathname === '/contact' ? 'bg-black text-white' : 'text-black'} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
        >
            Contact
        </Link>
    </div>
  )
}

export default DesktopMenu