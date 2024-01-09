"use client";

import { FC } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hi, I'm{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-800">
              Ryan
            </span>
          </h1>
          <TypeAnimation
            className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"
            sequence={[
              "Web Developer", // Types 'One'
              2000, // Waits 1s
              "Project Manager", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "Blockchain Engineer", // Types 'Three' without deleting 'Two'
              2000,
              "System Administrator",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed optio
            minima nihil numquam ratione! Vero, a quo. Inventore id, mollitia
            aperiam ipsam ipsa cumque neque totam iusto nostrum quos amet?
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white mt-3">
              <span className="block bg-slate-800 hover:bg-slate-200 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-slate-800 w-[250px] h-[250px] lg:w[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
