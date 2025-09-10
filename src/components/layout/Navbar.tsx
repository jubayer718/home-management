import Image from 'next/image';
import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import Container from '../Container';

const Navbar = () => {
  return (
    <Container>
       <div className=''>
      {/* Logo */}
      <span className='flex items-center gap-2'>
        <AiOutlineHome size={24} />
        <h5 className='text-2xl font-semibold'>homes</h5>
      </span>
    </div>
   </Container>
  );
};

export default Navbar;