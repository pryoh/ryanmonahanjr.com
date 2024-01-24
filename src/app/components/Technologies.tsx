import { FC } from "react";
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
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

interface TechnologiesProps {}

const Technologies: FC<TechnologiesProps> = ({}) => {
  return (
    <section className="bg-[#121212] py-16" id="technologies">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-white">
          Technologies
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <TechnologiesIcon icon={<FaAws size={50} />} />
          <TechnologiesIcon icon={<SiDocker size={50} />} />
          <TechnologiesIcon icon={<SiGit size={50} />} />
          <TechnologiesIcon icon={<SiLinux size={50} />} />
          <TechnologiesIcon icon={<SiReact size={50} />} />
          <TechnologiesIcon icon={<SiPuppet size={50} />} />
          <TechnologiesIcon icon={<SiWireshark size={50} />} />
          <TechnologiesIcon icon={<SiMysql size={50} />} />
          <TechnologiesIcon icon={<SiEclipseide size={50} />} />
          <TechnologiesIcon icon={<SiVisualstudiocode size={50} />} />
          <TechnologiesIcon icon={<SiBootstrap size={50} />} />
          <TechnologiesIcon icon={<SiTailwindcss size={50} />} />
          <TechnologiesIcon icon={<SiFigma size={50} />} />
        </div>
      </div>
    </section>
  );
};

interface TechnologiesIconProps {
  icon: React.ReactElement;
}

const TechnologiesIcon: FC<TechnologiesIconProps> = ({ icon }) => {
  return (
    <div className="rounded-full bg-gray-500 p-4 m-4 shadow-lg">{icon}</div>
  );
};

export default Technologies;
