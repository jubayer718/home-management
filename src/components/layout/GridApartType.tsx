// import grid1 from '/public/grid1.jpg'
// import grid2 from '/public/grid2.jpg'
// import grid3 from '/public/grid4.jpg'
// import grid4 from '/public/grid4.jpg'
// import grid5 from '/public/grid5.jpg'
// import grid6 from '/public/grid6.jpg'
import Container from '../Container'
import Image from 'next/image'

const GridApartType = () => {
  return (
    <Container>

    <section className='space-y-4 my-5'>
      <h2 className='text-center text-3xl font-semibold'>Explore Apartment Types</h2>
      <p className='text-foreground text-center mb-10'>Aliquam lacinia diam quis lacus euismod</p>
      {/* level 1 */}
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div className='col-span-2  bg-gray-600  rounded-2xl relative'>
            <Image
              src={'/grid1.jpg'}
              width={240}
              height={200}
            
              alt=''
              className='w-full  h-full mix-blend-overlay '
            />
            <p className='absolute top-4 left-4 text-white flex flex-col'>
              <span className=' font-semibold'>Houses</span>
              <span>7 Properties</span>
            </p>
          </div>
          <div className='col-span-1  bg-gray-600  rounded-2xl relative'>
           <Image
              src={'/grid2.jpg'}
              width={240 }
              height={200}
            
              alt=''
              className='w-full mix-blend-overlay'
            />
             <p className='absolute top-4 left-4 text-white flex flex-col'>
              <span className=' font-semibold'>Apartments</span>
              <span>3 Properties</span>
            </p>
          </div>
          <div className='col-span-1  bg-gray-600  rounded-2xl relative'>
            <Image
              src={'/grid3.jpg'}
              width={240 }
              height={200}
            
              alt=''
              className='w-full mix-blend-overlay '
            />
             <p className='absolute top-4 left-4 text-white flex flex-col'>
              <span className=' font-semibold'>Office</span>
              <span>4 Properties</span>
            </p>
          </div>
          
      </div>
        {/* level 2 */}
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div className='col-span-1  bg-gray-600  rounded-2xl relative'>
            <Image
              src={'/grid4.jpg'}
              width={240 }
              height={200}
            
              alt=''
              className='w-full mix-blend-overlay'
            />
             <p className='absolute top-4 left-4 text-white flex flex-col'>
              <span className=' font-semibold'>Townhome</span>
              <span>2 Properties</span>
            </p>
          </div>
          <div className='col-span-1  bg-gray-600  rounded-2xl relative'>
           <Image
              src={'/grid5.jpg'}
              width={240 }
              height={200}
            
              alt=''
              className='w-full mix-blend-overlay'
            />
             <p className='absolute top-4 left-4 text-white flex flex-col'>
              <span className=' font-semibold'>Villa</span>
              <span>4 Properties</span>
            </p>
          </div>
          <div className='col-span-2  bg-gray-600  rounded-2xl relative'>
            <Image
              src={'/grid6.jpg'}
              width={240 }
              height={200}
            
              alt=''
              className='w-full h-full mix-blend-overlay'
            />
             <p className='absolute top-4 left-4 text-white flex flex-col'>
              <span className=' font-semibold'>Bungalaw</span>
              <span>1 Properties</span>
            </p>
          </div>
          
      </div>
    </section>
    </Container>
  );
};

export default GridApartType;