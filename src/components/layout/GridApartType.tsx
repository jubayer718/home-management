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

    <section>
      {/* level 1 */}
        <div className=' flex lg:flex-row md:flex-row flex-col items-center gap-4'>
          <div className=''>
            <Image
              src={'/grid1.jpg'}
              width={ 100}
              height={100}
              alt=''
              className=''
            />
          </div>
          <div className=''>
            <Image
              src={'/grid1.jpg'}
           width={100}
           height={100}
              alt=''
              className=''
            />
          </div>
          <div className=''>
            <Image
              src={'/grid1.jpg'}
              width={100}
              height={100}
              alt=''
            />
          </div>
          
      </div>
        {/* level 2 */}
        <div  className=' flex lg:flex-row md:flex-row flex-col items-center gap-4'>
           <div className=''>
            <Image
              src={'/grid1.jpg'}
            width={100}
            height={100}
              alt=''
              className=''
            />
          </div>
          <div className=''>
            <Image
              src={'/grid1.jpg'}
              width={100}
              height={100}
              alt=''
              className=''
            />
          </div>
          <div className=''>
            <Image
              src={'/grid1.jpg'}
            width={100}
            height={100}
              alt=''
            />
          </div>
        </div>
    </section>
    </Container>
  );
};

export default GridApartType;