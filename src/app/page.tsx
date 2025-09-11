
import FeatureList from "@/components/layout/FeatureList";
import GridApartType from "@/components/layout/GridApartType";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";


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
      <GridApartType/>
    </>
  );
}
