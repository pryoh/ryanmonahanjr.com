import { FC } from "react";
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

interface LanguagesProps {}

const Languages: FC<LanguagesProps> = ({}) => {
  const languages = [
    { icon: <SiHtml5 size={50} />, name: "HTML" },
    { icon: <SiCss3 size={50} />, name: "CSS" },
    { icon: <SiJavascript size={50} />, name: "JavaScript" },
    { icon: <SiTypescript size={50} />, name: "TypeScript" },
    { icon: <SiPython size={50} />, name: "Python" },
    { icon: <FaJava size={50} />, name: "Java" },
  ];
  return (
    <section className="bg-[#121212] mb-12" id="technologies">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-4 text-white">
          Languages
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          {languages.map((tech, index) => (
            <LanguageIcon key={index} icon={tech.icon} name={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface LanguageIconProps {
  icon: React.ReactElement;
  name: string;
}

const LanguageIcon: FC<LanguageIconProps> = ({ icon, name }) => {
  return (
    <div className="flex items-center m-2 sm:m-4 bg-gray-800 rounded-full border-2 border-gray-600 p-2">
      {/* Adjust size with width and height utilities instead of 'size' prop */}
      <div className="rounded-full bg-gray-500 p-2 sm:p-3 shadow-lg text-xs sm:text-sm lg:text-base">
        {React.cloneElement(icon, {
          className: "w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10",
        })}
      </div>
      <span className="ml-2 text-white text-sm sm:text-base lg:text-lg font-medium">
        {name}
      </span>
    </div>
  );
};

export default Languages;
