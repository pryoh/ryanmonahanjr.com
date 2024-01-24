"use client";
import { FC } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {
  FaLinkedin,
  FaFileDownload,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import AchievementsSection from "./AchievementSection";
import Link from "next/link";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section className="bg-[#121212] text-white min-h-screen flex flex-col items-center justify-center">
      {/* Text at the top */}
      <div className="text-center mb-8 mt-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl ">
          <div className="text-white text-xl sm:text-2xl lg:text-3xl">Hi,</div>
          <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-800">
            I&#39;m Ryan
          </span>
        </h1>
      </div>
      {/* Picture in the middle */}
      <div className="rounded-full border-2 border-white shadow-md bg-[#181818] w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] relative mb-4">
        <Image
          src="/images/hero-image.png"
          alt="hero image"
          className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          width={300}
          height={300}
        />
      </div>
      {/* TypeAnimation */}
      <TypeAnimation
        className="text-3xl sm:text-4xl lg:text-6xl font-extrabold"
        sequence={[
          "Web Developer",
          2000,
          "Project Manager",
          2000,
          "Blockchain Engineer",
          2000,
          "System Administrator",
          2000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{
          fontSize: "2em",
          display: "inline-block",
          marginTop: "1rem",
        }}
      />
      {/* Buttons at the bottom */}
      <div className="flex mt-8">
        <button className="w-10 h-10 rounded-full bg-[#121212] hover:bg-slate-600 flex items-center justify-center cursor-pointer mr-4">
          <Link
            href="https://www.linkedin.com/in/ryanmonahanjr/"
            target="_blank"
          >
            <FaLinkedin size={20} color="white" />
          </Link>
        </button>
        <button className="w-10 h-10 rounded-full bg-[#121212] hover:bg-slate-600 flex items-center justify-center cursor-pointer mr-4">
          <a
            href="/files/RyanMonahan-Resume.pdf"
            target="_blank"
            rel="noopner noreferrer"
          >
            <FaFileDownload size={20} color="white" />
          </a>
        </button>
        <button className="w-10 h-10 rounded-full bg-[#121212] hover:bg-slate-600 flex items-center justify-center cursor-pointer mr-4">
          <Link href="https://github.com/pryoh" target="_blank">
            <FaGithub size={20} color="white" />
          </Link>
        </button>
        <button className="w-10 h-10 rounded-full bg-[#121212] hover:bg-slate-600 flex items-center justify-center cursor-pointer">
          <Link href="mailto:ryanmonahanjr@gmail.com">
            <FaEnvelope size={20} color="white" />
          </Link>
        </button>
      </div>
      {/* AchievementsSection */}
      <AchievementsSection />
    </section>
  );
};

export default HeroSection;
