import Image from "next/image";
import HeroImage from "@/app/assets/images/hero1.jpg"
import Filter from "./Filter";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        src={HeroImage}
      
      className="bg-cover w-full lg:h-[500px]"
        alt=""
      />
      <Filter/>
    </div>
  );
};

export default Hero;