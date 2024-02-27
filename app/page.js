import Image from "next/image";
import Features from "./components/Features";

export default function Home() {
  return (
    <>
      <main className="max-w-screen-xl mx-auto px-5">
        <Features />
      </main>
    </>
  );
}
