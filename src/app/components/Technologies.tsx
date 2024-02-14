import { FC } from "react";
import React from "react";
import {
  SiGit,
  SiDocker,
  SiLinux,
  SiPuppet,
  SiJenkins,
  SiMicrosoftazure,
  SiWireshark,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiEclipseide,
  SiVisualstudiocode,
  SiBootstrap,
  SiTailwindcss,
  SiFigma,
  SiReact,
  SiTerraform,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

interface TechnologiesProps {}

const Technologies: FC = () => {
  const technologies = [
    { icon: <FaAws size={50} />, name: "AWS" },
    { icon: <SiDocker size={50} />, name: "Docker" },
    { icon: <SiGit size={50} />, name: "Git" },
    { icon: <SiWireshark size={50} />, name: "Wireshark" },
    { icon: <SiPuppet size={50} />, name: "Puppet" },
    { icon: <SiLinux size={50} />, name: "Linux" },
    { icon: <SiReact size={50} />, name: "React" },
    { icon: <SiJenkins size={50} />, name: "Jenkins" },
    { icon: <SiTerraform size={50} />, name: "Terraform" },
    { icon: <SiMysql size={50} />, name: "MySQL" },
  ];

  return (
    <section className="bg-[#121212] mb-12" id="technologies">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-4 text-white">
          Technologies
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          {technologies.map((tech, index) => (
            <TechnologiesIcon key={index} icon={tech.icon} name={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TechnologiesIconProps {
  icon: React.ReactElement;
  name: string;
}

const TechnologiesIcon: FC<TechnologiesIconProps> = ({ icon, name }) => {
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

export default Technologies;
