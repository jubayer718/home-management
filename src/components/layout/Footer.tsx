import Link from "next/link";
import Container from "../Container";
import Newsletter from "./Newsletter";
import { AiOutlineHome } from "react-icons/ai";
import Button from "../ui/Reuseable/Button";
import IPhone from "@/Svg.Image/IPhone";
import PlayStore from "@/Svg.Image/Playstore";


// social icons
import { FaFacebookF,FaLinkedin,FaTwitter,FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-[#181A20] py-8">
      <Container>
        <Newsletter />

        {/* footer related */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {/*  */}
          <div>
            {/* Logo */}
            <span className='flex items-center gap-3'>
              <AiOutlineHome className='bg-[#EB6753] rounded-full text-white p-2' size={35} />
              <h5 className='text-2xl font-semibold text-white'>homes</h5>
            </span>

            <div className="mt-6 text-white space-y-4">
              <p className="flex flex-col mt-2">
                <span className="text-muted-foreground">Address</span>
                <span>789 Queensberry Street, North
                  Melbourne VIC 3051, Australia.</span>
              </p>

              <p className="flex flex-col mt-2">
                <span className="text-muted-foreground">Total Free Customer Care</span>
                <span>+(088) 123 456 789</span>
              </p>

              <p className="flex flex-col mt-2">
                <span className="text-muted-foreground">Live Support?</span>
                <span>hi@homez.com</span>
              </p>
            </div>
          </div>
          {/*  */}
          <div className=" flex flex-col mt-5 md:mt-0  md:items-end">
            <div >
               <h5 className="font-semibold text-white ">Popular Search </h5>
            <ul className="mt-6 space-y-2 ">
              <li><Link className="text-muted-foreground" href={'#'}>Apartment for Sale</Link></li>
              <li><Link className="text-muted-foreground" href={'#'}>Apartment for Rent</Link></li>
              <li><Link className="text-muted-foreground" href={'#'}>Office for Sale</Link></li>
              <li><Link className="text-muted-foreground" href={'#'}>Office for Rent</Link></li>
            </ul>

           </div>
          </div>
          {/*  */}
          <div className=" flex flex-col mt-5 md:mt-0  md:items-end">
            <div >
               <h5 className="font-semibold text-white ">Quick Link </h5>
            <ul className="mt-6 space-y-2 ">
              <li><Link className="text-muted-foreground" href={'#'}>Terms of Use</Link></li>
              <li><Link className="text-muted-foreground" href={'#'}>Privacy Policy</Link></li>
              <li><Link className="text-muted-foreground" href={'#'}>Pricing Plans</Link></li>
              <li><Link className="text-muted-foreground" href={'#'}>Our Services</Link></li>
              <li><Link className="text-muted-foreground" href={'#'}>Contact</Link></li>
              <li><Link className="text-muted-foreground" href={'#'}>Careers</Link></li>
              <li><Link className="text-muted-foreground" href={'#'}>FAQs</Link></li>
            </ul>

           </div>
          </div>
            {/*  */}
           <div className=" flex flex-col  mt-5 md:mt-0  md:items-end">
            <div className="flex flex-col " >
              <h5 className="font-semibold text-white mb-6">Apps </h5>
              
              <button className="flex items-center gap-2 mb-4 ">
                <IPhone />
                <p className="text-white ">
                  Download on the <br /> <span className="font-semibold ">app store</span>
                </p>
              </button>
            <button  className="flex items-center  ">
                <PlayStore/>
                <p className="text-white">
                 get in on<br /> <span className="font-semibold">Google Play</span>
                </p>
              </button>
              
           
           </div>
          </div>
        </div>

        <hr className="border border-white/10 mt-8 mb-6" />
        <div className=" md:flex  items-center justify-between">
          <p className="text-white">© Homez – All rights reserved</p>

          {/* social links */}
          <div className="flex items-center gap-4 text-white mt-5">
            <span className="text-white font-semibold mr-2">Follow us on</span>
            <button><Link href={'#'}><FaFacebookF/></Link></button>
            <button><Link href={'#'}><FaTwitter/></Link></button>
            <button><Link href={'#'}><FaInstagram/></Link></button>
            <button><Link href={'#'}><FaLinkedin/></Link></button>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default Footer;