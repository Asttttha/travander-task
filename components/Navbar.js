'use client';

import Link from 'next/link'
import React from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const Navbar = () => {

  // to define pathname 
  const pathname = usePathname()


  return (
    <div className='flex items-center justify-between px-28 py-[40px]'>

      <div className='w-[148px]  flex justify-between items-center '>
        <Image src={logo} alt='logo' />
      </div>

      <div className='flex justify-between items-center w-5/12 font-inter text-[16px]'>
        <Link
          href='/'
          className={`${pathname === '/' ? 'font-semibold underline' : ''
            }  hover:font-semibold hover:underline`}>
          Home
        </Link>
        <Link
          href='/community'
          className={`${pathname === '/community' ? 'font-semibold underline' : ''
            } hover:font-semibold hover:underline`}>
          Community
        </Link>
        <Link
          href='/about'
          className={`${pathname === '/about' ? 'font-semibold underline' : ''
            } hover:font-semibold hover:underline`}>
          About us
        </Link>
        <button
          className='w-[160px] h-[60px] p-[18px] rounded-full shadow-md font-semibold leading-[24.2px] tracking-[0.015em] text-center'>
          Log in
        </button>
      </div>


    </div>
  )
}

export default Navbar