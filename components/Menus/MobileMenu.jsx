'use client';

import Link from "next/link"
import { useState } from "react";
import { usePathname } from "next/navigation";

import { FaUser, FaGoogle } from "react-icons/fa";

const MobileMenu = ({isloggedIn}) => {
  const [loggedIn, setIsLoggedIn] = useState(isloggedIn)
  const pathname = usePathname()
  return (
    <div id='mobile-menu' className="md:hidden">
        <div className='space-y-1 px-2 pb-3 pt-2'>
          <Link
            href='/'
            className={`${pathname === '/' ? 'bg-black text-white' : 'text-black'} text-black block rounded-md px-3 py-2 text-base font-medium`}
          >
            Home
          </Link>
          <Link
            href='/shop'
            className={`${pathname === '/shop' ? 'bg-black text-white' : 'text-black'} text-black block rounded-md px-3 py-2 text-base font-medium`}
          >
            Shop
          </Link>
          <Link
            href='/cart'
            className={`${pathname === '/cart' ? 'bg-black text-white' : 'text-black'} text-black block rounded-md px-3 py-2 text-base font-medium`}
          >
            Cart
          </Link>
          <Link
            href='/contact'
            className={`${pathname === '/contact' ? 'bg-black text-white' : 'text-black'} text-black block rounded-md px-3 py-2 text-base font-medium`}
          >
            Contact
          </Link>
          
          {/* {!loggedIn && (
            <button className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4'>
            <FaGoogle className='text-white mr-2' />
            <span>Login or Register</span>
          </button>
          )} */}
        </div>
      </div>
  )
}

export default MobileMenu