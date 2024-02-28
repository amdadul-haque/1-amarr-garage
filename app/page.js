import Image from "next/image";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Colors from "./components/Colors";
import Warranty from "./components/Warranty";
import CarouselSlider from "./components/CarouselSlider";
import GarageDoors from "./components/GarageDoors";
import InstallAndRepair from "./components/InstallAndRepair";

export default function Home() {
  return (
    <>
      <CarouselSlider />
      {/* <Hero /> */}
      <main className="max-w-screen-xl mx-auto px-5">
        <Overview />
        <GarageDoors />
        <InstallAndRepair />
        <Features />
        <Colors />
        <Warranty />
      </main>
    </>
  );
}
