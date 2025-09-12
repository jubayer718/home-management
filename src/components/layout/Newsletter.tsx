import React from 'react';
import Button from '../ui/Reuseable/Button';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

const Newsletter = () => {
  return (
    <div>
      <h3 className='text-white text-2xl font-bold text-center my-2'>Subscribe Our Newsletter</h3>
      <p className='text-white text-center '>We don’t send spam so don’t worry.</p>
      <div className='flex flex-col items-center w-96 mx-auto justify-center  relative'>
        <Input
          type="email"
          className={cn("bg-white  w-96 py-5 my-6")}
        
          placeholder="Your Email" />
        <Button
          label='Subscribe'
          className={cn('rounded-md bg-[#EB6753] text-white cursor-pointer absolute right-2 px-2 py-2') } 
        />
      </div>
    </div>
  );
};

export default Newsletter;