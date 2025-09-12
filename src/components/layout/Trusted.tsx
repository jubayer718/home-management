import React from 'react';
import Container from '../Container';

const Trusted = () => {
  return (
    <Container>
      <div>
        <h6 className='text-center mb-14'>Trusted by the world’s best</h6>
        <div className='grid place-items-center md:gap-10 grid-cols-3 md:grid-cols-6 gap-6'>
          <img src="/amazon.jpg" alt="" />
          <img src="/amd.jpg" alt="" />
          <img src="/cisco.jpg" alt="" />
          <img src="/dropcam.jpg" alt="" />
          <img src="/logitech.jpg" alt="" />
          <img src="/spotify.jpg" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Trusted;