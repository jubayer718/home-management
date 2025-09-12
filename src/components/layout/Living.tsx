"use client"


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Container from '../Container';
import { livingData } from '@/lib/FeatureListData';
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';

const Living = () => {
  return (
    <div className='my-12'>
      <Container className=''>
        <div className=' flex flex-col  items-center justify-center space-y-3'>
          <h2 className='text-3xl font-semibold lg:w-[700px] text-center'>People Love Living with Realtor</h2>
          <p className=''>Aliquam lacinia diam quis lacus euismod</p>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >


          {
            livingData.map((data, idx) => <SwiperSlide key={idx}>
              <Card className='py-6 mt-12'>
                <CardHeader>

                <div className='flex items-center gap-4'>

                  <Image
                    src={data.image as string}
                    width={40}
                    height={40}
                    // fill
                    objectFit="cover"
                    className="rounded-t-xl relative rounded-full"

                    alt=""
                  />
                  <div className='flex flex-col'>
                    <span className='font-semibold'>{data.name}</span>
                    <span>{data.designation}</span>
                  </div>
                </div>
                </CardHeader>


                <CardContent>

                  <p className=''>{data.paragraph}</p>
                </CardContent>

              </Card>


            </SwiperSlide>
            )
          }
        </Swiper>
      </Container>
    </div>
  );
};

export default Living;