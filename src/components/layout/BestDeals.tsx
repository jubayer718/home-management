import React from 'react';
import Button from '../ui/Reuseable/Button';
import Container from '../Container';
import { discoverData } from '@/lib/FeatureListData';
import { Card, CardContent, CardFooter } from '../ui/card';
import Image from 'next/image';

const BestDeals = () => {
  return (
    <div className='bg-[#EB6753] py-3'>
      <Container className='my-8'>
        <div className=''>
          <h1 className='text-3xl font-semibold text-white'>Discover Our Best Deals</h1>
          <div className='lg:flex items-center justify-between'>
            <p className='text-white '>Aliquam lacinia diam quis lacus euismod</p>

            <div className='flex gap-4 items-center '>
              <Button
                label='For Sale'
                className='bg-white/25 text-white cursor-pointer hover:bg-white hover:text-[#EB6753] rounded-2xl'
              />
              <Button
                label='For Rent'
                className='bg-white/25 text-white cursor-pointer hover:bg-white hover:text-[#EB6753] rounded-2xl'
              />

            </div>

          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-6'>
          {
            discoverData.map((data, idx) => <Card className='bg-white' key={idx}>

              <Image
                src={data.image as string}
                width={500}
                height={300}
                // fill
                objectFit="cover"
                className="rounded-t-xl"

                alt=""
              />


              <CardContent>
                <h4 className="font-bold  text-nowrap">{data.title}</h4>
              </CardContent>
              <CardFooter className=''>
                <p className="flex items-center justify-between w-full">
                  <span className="text-orange-500 font-bold  ">{data.Price}</span>
                  <div className='flex items-center gap-2'>
                    <span className='flex items-center gap-2'>
                      <data.quantity.bedIcon/>
                      <p>{data.quantity.bedAmount }</p>
                    </span>
                    <span className='flex items-center gap-2'>
                      <data.quantity.fountenIcon/>
                      <p>{data.quantity.fountenAmount }</p>
                    </span>
                    <span className='flex items-center gap-2'>
                      <data.quantity.stairs/>
                      <p>{data.quantity.stairsAmount }</p>
                    </span>

                  </div>
                </p>
              </CardFooter>
            </Card>)
          }
        </div>

      </Container>
    </div>
  );
};

export default BestDeals;