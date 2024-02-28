import Image from "next/image";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Colors from "./components/Colors";
import Warranty from "./components/Warranty";
import CarouselSlider from "./components/CarouselSlider";

export default function Home() {
  return (
    <>
      <CarouselSlider />
      {/* <Hero /> */}
      <main className="max-w-screen-xl mx-auto px-5">
        <Overview />
        <Features />
        <Colors />
        <Warranty />
      </main>
    </>
  );
}
