import Image from "next/image";
import Container from "../Container";
import { Card, CardContent, CardHeader } from "../ui/card";
import { cn } from "@/lib/utils";


const Blog = () => {
  return (
    <Container className="my-8">
      <div>
        <div className=' flex flex-col  items-center justify-center space-y-3'>
          <h2 className='text-3xl font-semibold lg:w-[700px] text-center'>From Our Blog</h2>
          <p className=''>Aliquam lacinia diam quis lacus euismod</p>
        </div>
      </div>

      {/* card-1 */}

      <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* card-1 */}
        <Card className={cn(' w-full pb-5 shadow-none border-none')}>
          <CardHeader className={cn('relative px-0')}>
            <Image
              src={'/blogImg1.jpg'}
              width={400}
              height={200}
              // fill
              objectFit="cover"
              className="rounded-t-xl h-40"
              alt=""
            />
            <span className="bg-white text-black w-20 rounded-2xl shadow-md text-2xl font-bold text-center p-4 absolute right-4 -bottom-8"> Feb 03</span>
          </CardHeader>


          <CardContent className={cn('px-0 ')}>
            <p className="text-muted-foreground font-semibold">Villa</p>
            <h4 className='font-bold '>Diamond Manor Apartment in the New York and
              Service</h4>

          </CardContent>

        </Card>
        {/* card-2 */}
        <Card className={cn(' w-full pb-5 shadow-none border-none')}>
          <CardHeader className={cn('relative px-0')}>
            <Image
              src={'/blogImg2.jpg'}
              width={400}
              height={200}
              // fill
              objectFit="cover"
              className="rounded-t-xl h-40"
              alt=""
            />
            <span className="bg-white text-black w-20 rounded-2xl shadow-md text-2xl font-bold text-center p-4 absolute right-4 -bottom-8"> Feb 03</span>
          </CardHeader>


          <CardContent className={cn('px-0 ')}>
            <p className="text-muted-foreground font-semibold">Townhome</p>
            <h4 className='font-bold '>Unveils the Best Canadian Cities for Biking and
              Walk</h4>

          </CardContent>

        </Card>
        {/* card-3 */}

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Image
              src={'/blogImg3.jpg'}
              width={300}
              height={300}
              alt=""
              className="rounded-2xl"
            />
            <div className="">
              <p className="text-muted-foreground">Townhome</p>
              <h5 className=" font-semibold">7 Simple Ways to Keep
                Your Kids’ Toys From…</h5>
              <p className="text-muted-foreground">February 3, 2023</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={'/blogImg4.jpg'}
              width={300}
              height={300}
              alt=""
              className="rounded-2xl"
            />
            <div className="">
              <p className="text-muted-foreground">houses</p>
              <h5 className=" font-semibold">Housing Markets That
                Changed the Most This…</h5>
              <p className="text-muted-foreground">February 3, 2023</p>
            </div>
          </div>
        </div>

      </div>

    </Container>
  );
};

export default Blog;