"use client";
import React from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const tab = "skills"; // Set the default tab
  const tabContent = TAB_DATA.find((t) => t.id === tab)?.content;

  return (
    <section
      className="text-white flex justify-center items-center h-full"
      id="about"
    >
      <div className="pb-8 px-4 xl:px-16 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">About</h2>
        <p className="text-base lg:text-lg px-16">
          Driven and results-oriented Information Technology student at
          University of Central Florida. Proficient in Computer Networking,
          Project Management, System Administration, and Blockchain Development
          with a passion for applying technology solutions to real-world
          challenges. Currently seeking opportunities to contribute my technical
          expertise and analytical skills in a professional setting.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
