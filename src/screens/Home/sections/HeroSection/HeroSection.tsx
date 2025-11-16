import { Button } from "@/components/ui/button";
import React from "react";

export const HeroSection = (): JSX.Element => {
  const headingLine1 = [
    { text: "Scale", color: "text-black" },
    { text: "Smarter", color: "text-[#04558f]" },
  ];

  const headingLine2 = [
    { text: "Not", color: "text-black" },
    { text: "Harder", color: "text-black" },
  ];

  const subheadingLine1Words = [
    "Unlock",
    "the",
    "full",
    "potential",
    "of",
    "your",
    "brand",
    "with",
    "tailored",
    "marketing",
  ];

  const subheadingLine2Words = [
    "solutions",
    "that",
    "drive",
    "real",
    "results.",
  ];

  return (
    <section className="w-full bg-white py-20 mt-16">
      <div className="container mx-auto px-5 flex flex-col items-center">
        <div className="flex flex-col items-center gap-4 max-w-[613px]">
          <div className="relative w-[255.25px] h-[45px]">
            <img
              className="absolute w-[25.25px] h-[25px] top-2.5 left-3"
              alt="Icon"
              src="/icon---d5nr2dwen8uw5n5nrohhl1vfwoy-svg.svg"
            />

            <div className="absolute w-full h-full top-0 left-0">
              <div className="top-0 left-0 border-black opacity-[0.42] absolute w-2.5 h-2.5 border-t [border-top-style:solid] border-l [border-left-style:solid]" />
              <div className="top-[35px] left-0 border-black -rotate-90 opacity-[0.42] absolute w-2.5 h-2.5 border-t [border-top-style:solid] border-l [border-left-style:solid]" />
              <div className="top-0 left-[245px] border-black rotate-90 opacity-[0.38] absolute w-2.5 h-2.5 border-t [border-top-style:solid] border-l [border-left-style:solid]" />
              <div className="top-[35px] left-[245px] border-black rotate-180 opacity-[0.38] absolute w-2.5 h-2.5 border-t [border-top-style:solid] border-l [border-left-style:solid]" />
            </div>

            <div className="absolute top-3 left-[calc(50.00%_-_86px)] w-[202px] h-[22px] flex items-center justify-center [font-family:'Geist',Helvetica] font-medium text-[#04558f99] text-lg text-center tracking-[0] leading-[21.6px] whitespace-nowrap">
              Trusted By 1.2k+ People
            </div>

            <div className="border border-solid border-[#04558f1a] absolute w-full h-full top-0 left-0" />
          </div>

          <div className="w-full flex flex-col gap-0">
            <div className="flex items-center justify-center gap-4 h-[68px]">
              {headingLine1.map((word, index) => (
                <h1
                  key={`heading-line1-${index}`}
                  className={`[font-family:'Geist',Helvetica] font-semibold ${word.color} text-[68px] text-center tracking-[-2.04px] leading-[68px]`}
                >
                  {word.text}
                </h1>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 h-[68px]">
              {headingLine2.map((word, index) => (
                <h1
                  key={`heading-line2-${index}`}
                  className={`[font-family:'Geist',Helvetica] font-semibold ${word.color} text-[68px] text-center tracking-[-2.04px] leading-[68px]`}
                >
                  {word.text}
                </h1>
              ))}
            </div>
          </div>

          <div className="w-full h-12 mt-[25px]">
            <div className="flex items-center justify-center gap-1 h-6">
              {subheadingLine1Words.map((word, index) => (
                <p
                  key={`subheading-line1-${index}`}
                  className="[font-family:'Geist',Helvetica] font-normal text-[#48484899] text-xl text-center tracking-[0] leading-6 whitespace-nowrap"
                >
                  {word}
                </p>
              ))}
            </div>

            <div className="flex items-center justify-center gap-1 h-6">
              {subheadingLine2Words.map((word, index) => (
                <p
                  key={`subheading-line2-${index}`}
                  className="[font-family:'Geist',Helvetica] font-normal text-[#48484899] text-xl text-center tracking-[0] leading-6 whitespace-nowrap"
                >
                  {word}
                </p>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-[28px]">
            <Button className="h-auto w-[150.64px] h-[49.6px] rounded-xl shadow-[0px_10px_28px_#ff440040] bg-[linear-gradient(180deg,rgba(4,85,143,1)_0%,rgba(4,85,143,1)_100%)] border border-solid border-[#04558f] [font-family:'Geist',Helvetica] font-semibold text-white text-lg tracking-[-0.36px] leading-[21.6px]">
              Get A Demo Call
            </Button>

            <Button className="h-auto w-[115.95px] h-[49.6px] rounded-xl bg-[linear-gradient(0deg,rgba(0,0,0,0.37)_0%,rgba(0,0,0,0.37)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)] [font-family:'Geist',Helvetica] font-semibold text-white text-lg tracking-[-0.36px] leading-[21.6px]">
              About Us
            </Button>
          </div>
        </div>

        <img
          className="mt-[218px] w-full max-w-[1240px] h-auto"
          alt="Container"
          src="/container.svg"
        />
      </div>
    </section>
  );
};
