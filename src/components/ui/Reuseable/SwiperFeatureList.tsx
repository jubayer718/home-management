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
import { data } from '@/lib/FeatureListData';
import FeatureCard from '@/components/ui/Reuseable/FeatureCard';
import Container from '@/components/Container';


const SwiperFeatureList = () => {
  
 return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
     >
     
          {
         data.map(feature => <SwiperSlide>
           <FeatureCard feature={feature } />
         </SwiperSlide> )
       }

      </Swiper>
    </Container>
  );
};

export default SwiperFeatureList;