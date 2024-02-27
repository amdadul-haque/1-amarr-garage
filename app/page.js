import Image from "next/image";
import Features from "./components/Features";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>

      <Hero />
      <main className="max-w-screen-xl mx-auto px-5">
        <Features />
      </main>
    </>
  );
}
