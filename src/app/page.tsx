
import ApartType from "@/components/layout/ApartType";
import BuySell from "@/components/layout/BuySell";
import FeatureList from "@/components/layout/FeatureList";
import GridApartType from "@/components/layout/GridApartType";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import RailtorHelp from "@/components/layout/RailtorHelp";


export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      
      {/* Feature List */}
      <FeatureList />


      {/* Feature types */}
      <GridApartType />
      
      {/* Railtor help */}
      <RailtorHelp />
      
      {/* Apartment type */}
      <ApartType />
      
      {/* buy sell */}
      <BuySell/>

    </>
  );
}
