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

// import required modules
import { EffectCards } from 'swiper/modules';




import { data } from '@/lib/FeatureListData';
import FeatureCard from '@/components/ui/Reuseable/FeatureCard';
import Container from '@/components/Container';


const SwiperFeatureList = () => {
  
 return (
    <Container className=''>
     {/* for desktop ad md */}
     <div className='hidden md:block'>
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
         data.map(feature => <SwiperSlide>
           <FeatureCard feature={feature } />
         </SwiperSlide> )
       }

      </Swiper>
     </div>

     {/*for mobile */}
     <div className='block md:hidden'>
    
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
       {
         data.map(feature => <SwiperSlide>
           <FeatureCard feature={feature } />
         </SwiperSlide> )
       }
      </Swiper>
  
     </div>
     
    </Container>
  );
};

export default SwiperFeatureList;