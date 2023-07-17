import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '@/public/logo.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 mb-12">
      <Link className="flex flex-row items-center gap-4" href="/">
        <Image src={logo} alt="logo" width={40} height={40} />
        <span className="font-semibold text-[14px] text-green-300">Coder's Blog</span>
      </Link>

      <ul className="flex flex-row gap-5 items-center justify-center">
        <li className="flex flex-row text-gray-400 hover:text-white font-medium">
          <Link href="/products">Products</Link>
        </li>
        <li className="flex flex-row text-gray-400 hover:text-white font-medium">
          <Link href="/pricing">Pricing</Link>
        </li>
        <li className="flex flex-row text-gray-400 hover:text-white font-medium">
          <Link href="/docs">Docs</Link>
        </li>
        <li className="flex flex-row text-gray-400 hover:text-white font-medium">
          <Link href="/company">Company</Link>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="">
          <Link href="/" className="font-medium py-2 px-5 transition-all duration-75 text-gray-400 hover:text-white">
            Login
          </Link>
        </li>
        <li className="">
          <Link href="/" className="font-medium py-2 px-5 bg-green-800 transition-all duration-100 rounded-md hover:bg-green-700 text-white">
            Signup
          </Link>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar