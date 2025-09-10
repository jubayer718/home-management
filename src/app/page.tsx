
import FeatureList from "@/components/layout/FeatureList";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Feature List */}
      <FeatureList/>
    </>
  );
}
