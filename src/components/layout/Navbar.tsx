"use server"
import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import {FaRegCircleUser} from "react-icons/fa6"
import Container from '../Container';
import Link from 'next/link';

import Button from '../ui/Reuseable/Button';

const Navbar = () => {
  return (
    <Container>
      <nav className='flex items-center justify-around'>
       <div className=' '>
      {/* Logo */}
      <span className='flex items-center gap-5'>
            <AiOutlineHome className='bg-[#EB6753] rounded-full text-white p-2' size={35 } />
        <h5 className='text-2xl font-semibold'>homes</h5>
      </span>
        </div>
        <ul className='flex items-center justify-center gap-10 font-medium'>
          <Link href={"/home"}>Home</Link>
          <Link href={"/listing"}>Listing</Link>
          <Link href={"/member"}>Member</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/pages"}>Pages</Link>
        </ul>

        {/* login */}
        <div className='flex items-center gap-2'>
          <FaRegCircleUser size={20 } />
          <button><Link href={'/login'} >Login</Link></button>/<button><Link href={'/register'}>Register</Link></button>
        </div>

        {/* addProperty */}
        <Button label='Add Property'  icon={MdArrowOutward}/>
        

      </nav>
      
   </Container>
  );
};

export default Navbar;