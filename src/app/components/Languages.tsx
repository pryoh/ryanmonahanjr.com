import { FC } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

interface LanguagesProps {}

const Languages: FC<LanguagesProps> = ({}) => {
  return (
    <section className="bg-[#121212] py-16" id="languages">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-white">
          Languages
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <LanguageIcon icon={<SiHtml5 size={50} />} />
          <LanguageIcon icon={<SiCss3 size={50} />} />
          <LanguageIcon icon={<SiJavascript size={50} />} />
          <LanguageIcon icon={<SiTypescript size={50} />} />
          <LanguageIcon icon={<FaJava size={50} />} />
          <LanguageIcon icon={<SiPython size={50} />} />
        </div>
      </div>
    </section>
  );
};

interface LanguageIconProps {
  icon: React.ReactElement;
}

const LanguageIcon: FC<LanguageIconProps> = ({ icon }) => {
  return (
    <div className="rounded-full bg-gray-500 p-4 m-4 shadow-lg">{icon}</div>
  );
};

export default Languages;
