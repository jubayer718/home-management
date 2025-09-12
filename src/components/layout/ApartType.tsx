"use client"


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';
import Container from '@/components/Container';

import SectionHeader from '../ui/Reuseable/SectionHeader';
import { MdArrowOutward } from "react-icons/md"
import { apartData } from '@/lib/FeatureListData';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

const ApartType = () => {
  return (
    <>
    
        <SectionHeader
          headerText='Explore Apartment Types'
          paragraphText='Explore and choice your best deal'
          label='All type'
          icon={MdArrowOutward}
      />
      
       <Container>
      <div>

         {/* card for desktop*/} 
          <div className='hidden md:block'>
            <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >

          {/* card for desktop*/}
          <div className=''>
            {
            apartData.map((data, idx) => <SwiperSlide key={idx}>
              <Card className='h-64 w-full'>
                <Image
                  src={data.image as string}
                  width={200}
                  height={200}
                  // fill
                  objectFit="cover"
                  className="rounded-t-xl  h-40"
                  alt=""
                />

                <CardContent className='flex flex-col items-center justify-center'>
                  <h4 className='font-semibold text-base'>{data.title}</h4>
                  <p>{data.paragraph }</p>
                </CardContent>

              </Card>
            </SwiperSlide>)
          }
          </div>

        </Swiper>
          </div>
          {/* card for mobile*/}

          <div className='md:hidden block'>

             <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <div className=''>
            {
            apartData.map((data, idx) => <SwiperSlide key={idx}>
              <Card className='h-64 w-full'>
                <Image
                  src={data.image as string}
                  width={200}
                  height={200}
                  // fill
                  objectFit="cover"
                  className="rounded-t-xl w-full  h-48"
                  alt=""
                />

                <CardContent className='flex flex-col items-center justify-center'>
                  <h4 className='font-semibold text-base'>{data.title}</h4>
                  <p>{data.paragraph }</p>
                </CardContent>

              </Card>
            </SwiperSlide>)
          }
          </div>
      </Swiper>
          </div>
      </div>
    </Container>
    
    </>
  );
};

export default ApartType;