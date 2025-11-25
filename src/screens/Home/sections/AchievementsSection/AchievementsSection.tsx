import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import FadeInView from "../../../../components/ui/FadeInView";

const achievementsData = [
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "500+",
    label: "Clients",
  },
  {
    value: "1,000+",
    label: "Campaigns Launched",
  },
  {
    value: "50+",
    label: "countries worldwide",
  },
];

export const AchievementsSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col gap-16 py-16 md:py-20">

    {/* Heading */}
    <FadeInView>
      <div className="flex justify-center items-center px-4">
        <h2 className="[font-family:'Geist',Helvetica] font-medium text-black 
          text-4xl md:text-6xl text-center tracking-[-1.8px] leading-tight">
          Impact In Numbers
        </h2>
      </div>
    </FadeInView>
  
    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-20">
      {achievementsData.map((achievement, index) => (
        <FadeInView key={index} delay={index * 0.15}>
          <Card
            className="bg-[#04558f] rounded-[25px] overflow-hidden shadow-[inset_0px_1px_4px_#ffffff1a] border-0"
          >
            <CardContent className="flex flex-col justify-between h-[250px] md:h-[291px] p-6">
              <div className="[font-family:'Geist',Helvetica] font-semibold text-white 
                text-4xl md:text-[50px] tracking-[-1.5px] leading-[1.1]">
                {achievement.value}
              </div>
  
              <div className="[font-family:'Geist',Helvetica] font-medium text-white 
                text-lg md:text-xl leading-6">
                {achievement.label}
              </div>
            </CardContent>
          </Card>
        </FadeInView>
      ))}
    </div>
  
  </section>
  

  );
};
