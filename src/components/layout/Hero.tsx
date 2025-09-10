import Image from "next/image";
import HeroImage from "@/app/assets/images/hero.jpg"

const Hero = () => {
  return (
    <div>
      <Image
        src={HeroImage}
      className="bg-cover w-full lg:h-[500px]"
        alt=""
      />
    </div>
  );
};

export default Hero;