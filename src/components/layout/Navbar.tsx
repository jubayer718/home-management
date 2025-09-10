"use client"
import React, { useState } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import Container from '../Container';
import Link from 'next/link';
import Button from '../ui/Reuseable/Button';
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='border-b fixed top-0 left-0 w-full  z-50'>
      <Container>
        <div className='flex items-center justify-between py-3 px-4 md:px-0'>
          {/* Logo */}
          <span className='flex items-center gap-3'>
            <AiOutlineHome className='bg-[#EB6753] rounded-full text-white p-2' size={35} />
            <h5 className='text-2xl font-semibold text-white'>homes</h5>
          </span>

          {/* Desktop Menu */}
          <ul className='hidden lg:flex items-center justify-center gap-10 font-medium text-white'>
            <Link href={"/home"}>Home</Link>
            <Link href={"/listing"}>Listing</Link>
            <Link href={"/member"}>Member</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/pages"}>Pages</Link>
          </ul>

          {/* Login + Add Property (Desktop) */}
          <div className='hidden lg:flex items-center gap-4'>
            <div className='flex items-center gap-2 text-white'>
              <FaRegCircleUser size={20} />
              <button><Link href={'/login'}>Login</Link></button>
              /
              <button><Link href={'/register'}>Register</Link></button>
            </div>

            <Button className='bg-white rounded-2xl' label='Add Property' icon={MdArrowOutward} />
          </div>

          {/* Hamburger Menu */}
          <button
            className='text-white lg:hidden text-2xl'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile/Tablet Side Drawer */}
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className='fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-[#0f172a] text-white flex flex-col gap-6 py-10 px-6 shadow-2xl lg:hidden z-50'
          >
            <ul className='flex flex-col gap-6 font-medium'>
              <Link href={"/home"} onClick={() => setIsOpen(false)}>Home</Link>
              <Link href={"/listing"} onClick={() => setIsOpen(false)}>Listing</Link>
              <Link href={"/member"} onClick={() => setIsOpen(false)}>Member</Link>
              <Link href={"/blog"} onClick={() => setIsOpen(false)}>Blog</Link>
              <Link href={"/pages"} onClick={() => setIsOpen(false)}>Pages</Link>
            </ul>

            <div className='flex flex-col gap-4 mt-6'>
              <div className='flex items-center gap-2'>
                <FaRegCircleUser size={20} />
                <button><Link href={'/login'} onClick={() => setIsOpen(false)}>Login</Link></button>
                /
                <button><Link href={'/register'} onClick={() => setIsOpen(false)}>Register</Link></button>
              </div>

              <Button className='bg-white rounded-2xl w-fit' label='Add Property' icon={MdArrowOutward} />
            </div>
          </motion.div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
