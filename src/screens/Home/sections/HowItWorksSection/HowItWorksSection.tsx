import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand Your Saas Product And Audience Needs through In-depth Research And Competitor Analysis.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "Develop A Customized Marketing Strategy That Aligns with Your Goals And Growth Targets.",
  },
  {
    number: "03",
    title: "Reporting & Analytics",
    description:
      "Track, Measure, And Provide Detailed Reports To Show how We're Driving Your Business Forward.",
  },
];

const profileImages = [
  {
    className: "top-[323px] left-[109px]",
    bgImage: "bg-[url(/profile-image---p7f9aeuewwj4cqflxvw9f9zmxj4-png.png)]",
  },
  {
    className: "top-[583px] left-[195px]",
    bgImage: "bg-[url(/profile-image---nwbzm5usrhv6ysevz63zaicfqg-png.png)]",
  },
  {
    className: "top-[293px] left-[1219px]",
    bgImage: "bg-[url(/profile-image---a6afesmtsc8gzxeamdvpvcauc6i-png.png)]",
  },
  {
    className: "top-[513px] left-[1131px]",
    bgImage: "bg-[url(/profile-image---j18qsyy9wk5jr0klnw3tj9qret0-png.png)]",
  },
];

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-20">
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-[15.5px] mb-[68px]">
          <div className="flex justify-center">
            <div className="relative shadow-[0px_4px_4px_#00000040] w-[132.55px] h-[41.6px] bg-[#04558f1a]">
              <div className="absolute w-full h-full top-0 left-0">
                <div className="top-0 left-0 border-[#04558f] absolute w-2.5 h-2.5 border-t [border-top-style:solid] border-l [border-left-style:solid]" />
                <div className="top-8 left-0 border-[#04558f] -rotate-90 absolute w-2.5 h-2.5 border-t [border-top-style:solid] border-l [border-left-style:solid]" />
                <div className="top-0 left-[123px] border-[#04558f] rotate-90 absolute w-2.5 h-2.5 border-t [border-top-style:solid] border-l [border-left-style:solid]" />
                <div className="top-8 left-[123px] border-[#04558f] rotate-180 absolute w-2.5 h-2.5 border-t [border-top-style:solid] border-l [border-left-style:solid]" />
              </div>
              <div className="absolute top-2.5 left-[calc(50.00%_-_56px)] w-[121px] h-[22px] flex items-center justify-center [font-family:'Geist',Helvetica] font-medium text-[#04558f] text-lg text-center tracking-[0] leading-[21.6px] whitespace-nowrap">
                How It Works
              </div>
              <div className="border border-solid border-[#04558f1a] absolute w-full h-full top-0 left-0" />
            </div>
          </div>

          <div className="flex justify-center items-center gap-[13px] h-[60px]">
            <div className="flex items-center justify-center [font-family:'Geist',Helvetica] font-medium text-black text-6xl text-center tracking-[-1.80px] leading-[60px]">
              Our
            </div>
            <div className="flex items-center justify-center [font-family:'Geist',Helvetica] font-medium text-black text-6xl text-center tracking-[-1.80px] leading-[60px]">
              Proven
            </div>
            <div className="flex items-center justify-center [font-family:'Geist',Helvetica] font-medium text-black text-6xl text-center tracking-[-1.80px] leading-[60px]">
              Process
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="w-[510px] flex flex-col gap-[84px]">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-white rounded-[25px] overflow-hidden shadow-[0px_15px_33px_#00000066,0px_4.79px_10.53px_#00000021,0px_1.81px_3.98px_#0000000d,0px_0.6px_1.31px_#00000005] border border-solid border-[#0000009e]">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="[font-family:'Geist',Helvetica] font-semibold text-[#0000009e] text-[50px] tracking-[-1.50px] leading-[50px]">
                      {step.number}
                    </div>
                    <div className="[font-family:'Geist',Helvetica] font-semibold text-white text-2xl tracking-[-0.72px] leading-6">
                      {step.title}
                    </div>
                    <div className="[font-family:'Geist',Helvetica] font-medium text-[#00000080] text-lg tracking-[0] leading-[21.6px]">
                      {step.description}
                    </div>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <img
                    className="absolute left-[239px] top-[223px] w-8 h-8"
                    alt="Arrow"
                    src="/arrow---tnq8o2rkhywkis6vdnhrfttdxwa-svg.svg"
                  />
                )}
              </div>
            ))}
          </div>

          {profileImages.map((image, index) => (
            <div
              key={index}
              className={`absolute w-[76px] h-[76px] rounded-[76px] ${image.bgImage} bg-cover bg-[50%_50%] ${image.className}`}
            />
          ))}
        </div>

        <img
          className="w-full h-8 mt-[68px]"
          alt="Section separator"
          src="/section---separator.svg"
        />
      </div>
    </section>
  );
};
