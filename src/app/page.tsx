import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import AchievementsSection from "./components/AchievementSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Languages from "./components/Languages";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Achievement Section */}

      {/* Content Below the Screen */}
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4">
        <AboutSection />
        <Languages />
        <Technologies />
        {/* Button to Mind Map page 
        <section className="text-center justify-items-center pb-16">
          <h2 className="font-bold text-4xl pb-2">Want to see everything?</h2>
          <p>Check out my interactive mind map</p>
          <Link
            href="/mindmap"
            className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full inline-block mt-4"
          >
            Go to Mind Map
          </Link>
  </section> */}
        <ProjectsSection />
        {/* <EmailSection /> */}
        <Footer />
      </div>
    </main>
  );
}
