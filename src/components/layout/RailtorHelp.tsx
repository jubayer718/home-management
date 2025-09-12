import React from 'react';
import Container from '../Container';
import { Card, CardContent } from '../ui/card';
import Button from '../ui/Reuseable/Button';
import { MdArrowOutward } from "react-icons/md";
import { railtor } from '@/lib/FeatureListData';



const RailtorHelp = () => {
  return (
    <section className='my-6 bg-[#EB67531A] py-8'>
       <Container >
      <h3 className='text-3xl  font-semibold text-center'>See how Realtor can help</h3>\
      <p className='text-foreground text-center'>Aliquam lacinia diam quis lacus euismod</p>


  {/* card */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-10'>
        {railtor.map((data,idx) => <div  key={idx}>
         <Card className='p-5 bg-white shadow-none'>
            <div className='flex items-center justify-center'>
              <data.icon />
          </div>
        
          <CardContent className='flex flex-col items-center justify-center py-5 px-3 space-y-3'>
              <h4 className="font-semibold text-center">{data.title}</h4>
              <p className='text-center'>{data.paragraph}</p>
          
                 <Button
                label={data.button}
                icon={MdArrowOutward}
                className='border-amber-600 border rounded-2xl hover:bg-[#EB6753] hover:text-white  cursor-pointer'
              />
        
          </CardContent>
         
        </Card>
    
        </div>)}
     </div>

    </Container>
   </section>
  );
};

export default RailtorHelp;