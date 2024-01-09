import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-800">
      <div className="container mt-24 mx-auto px-12 py-4">
        <Navbar />
        <HeroSection />
      </div>
    </main>
  );
}
