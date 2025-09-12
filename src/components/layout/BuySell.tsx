import React from 'react';
import Container from '../Container';
import Button from '../ui/Reuseable/Button';
import {MdArrowOutward} from "react-icons/md"

const BuySell = () => {
  return (
    <div className='bg-[url(/bgImg.jpg)] bg-cover md:bg-contain bg-no-repeat md:h-[400px] py-8 flex flex-col items-center justify-center my-8'>
      <Container >
        <div className=' flex flex-col  items-center justify-center space-y-3'>
          <p className='text-white'>BUY OR SELL</p>
          <h2 className='text-3xl font-semibold text-white lg:w-[700px] text-center'>Looking to Buy a new property or sell an existing one?
            Homez provides an awesome solution!</h2>
          <div className='flex items-center justify-center gap-3 my-3'>
            <Button
              icon={MdArrowOutward}
              label='Submit Property'
              className='bg-white cursor-pointer hover:bg-[#EB6753] hover:text-white'
            />
            <Button
             icon={MdArrowOutward}
              label='Browse Property'
              className='bg-white cursor-pointer hover:bg-[#EB6753] hover:text-white'
            />
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default BuySell;