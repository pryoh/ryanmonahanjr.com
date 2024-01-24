"use client";
import React from "react";
import dynamic from "next/dynamic";

interface AnimatedNumbersProps {
  includeComma: boolean;
  animateToNumber: number;
  locale: string;
  className: string;
  configs: (
    value: number,
    index: number
  ) => { mass: number; friction: number; tensions: number };
}

const AnimatedNumbers = dynamic<AnimatedNumbersProps>(
  () => import("react-animated-numbers") as any,
  { ssr: false }
);

interface Achievement {
  prefix?: string;
  metric: string;
  value: string;
  postfix?: string;
}

const achievementsList: Achievement[] = [
  {
    metric: "Projects",
    value: "5",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "1700",
  },
  {
    metric: "Certifications",
    value: "1",
  },
];

const AchievementsSection: React.FC = () => {
  return (
    <div className="px-4 py-8 xl:gap-16 xl:px-16">
      <div className="px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (index + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
