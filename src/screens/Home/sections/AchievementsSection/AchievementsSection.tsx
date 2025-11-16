import { Card, CardContent } from "@/components/ui/card";
import React from "react";

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
    <section className="w-full flex flex-col gap-[68px] py-20">
      <div className="flex justify-center items-center">
        <h2 className="[font-family:'Geist',Helvetica] font-medium text-black text-6xl text-center tracking-[-1.80px] leading-[60px]">
          Impact In Numbers
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-20">
        {achievementsData.map((achievement, index) => (
          <Card
            key={index}
            className="bg-[#04558f] rounded-[25px] overflow-hidden shadow-[inset_0px_1px_4px_#ffffff1a] border-0"
          >
            <CardContent className="flex flex-col justify-between h-[291px] p-6">
              <div className="[font-family:'Geist',Helvetica] font-semibold text-white text-[50px] tracking-[-1.50px] leading-[50px]">
                {achievement.value}
              </div>
              <div className="[font-family:'Geist',Helvetica] font-medium text-white text-xl tracking-[0] leading-6">
                {achievement.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
