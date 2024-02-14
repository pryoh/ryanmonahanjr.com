"use client";
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      className="text-white flex justify-center items-center h-full"
      id="about"
    >
      <div className="px-4 xl:px-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          About
        </h2>
        <p className="text-base lg:text-lg sm:p-4 md:p-6 lg:p-8">
          Driven and results-oriented Information Technology student at
          University of Central Florida. Proficient in Computer Networking,
          Project Management, System Administration, and Blockchain Development
          with a passion for applying technology solutions to real-world
          challenges.
        </p>
        <br />
        <p className="text-base lg:text-lg sm:p-4 md:p-6 lg:p-8 mb-8">
          Currently seeking opportunities to contribute my technical expertise
          and analytical skills in a professional setting.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
