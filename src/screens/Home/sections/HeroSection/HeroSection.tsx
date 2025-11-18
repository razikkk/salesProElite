import { Button } from "../../../../components/ui/button";
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
    <section className="w-full bg-white py-24 md:py-20 mt-20 md:mt-16">
    <div className="container mx-auto px-4 md:px-5 flex flex-col items-center">
      
      {/* TRUSTED BOX */}
      <div className="relative w-[230px] md:w-[255px] h-[40px] md:h-[45px] mb-8">
        <img
          className="absolute w-5 h-5 md:w-[25px] md:h-[25px] top-2.5 left-3"
          alt="Icon"
          src="/icon---d5nr2dwen8uw5n5nrohhl1vfwoy-svg.svg"
        />
  
        {/* Corner borders */}
        <div className="absolute w-full h-full top-0 left-0">
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-black opacity-40 border-t border-l" />
          <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-black opacity-40 border-t border-l rotate-[-90deg]" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 border-black opacity-40 border-t border-l rotate-90" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-black opacity-40 border-t border-l rotate-180" />
        </div>
  
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-medium text-[#04558f99] text-sm md:text-lg">
            Trusted By 1.2k+ People
          </span>
        </div>
  
        <div className="border border-[#04558f1a] absolute inset-0" />
      </div>
  
      {/* MAIN HEADING */}
      <div className="w-full flex flex-col gap-2 text-center">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {headingLine1.map((word, index) => (
            <h1
              key={index}
              className={`font-semibold ${word.color} text-[32px] leading-[36px] 
              md:text-[68px] md:leading-[68px] tracking-tight`}
            >
              {word.text}
            </h1>
          ))}
        </div>
  
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {headingLine2.map((word, index) => (
            <h1
              key={index}
              className={`font-semibold ${word.color} text-[32px] leading-[36px] 
              md:text-[68px] md:leading-[68px] tracking-tight`}
            >
              {word.text}
            </h1>
          ))}
        </div>
      </div>
  
      {/* SUBHEADING */}
      <div className="mt-4 space-y-1">
        <div className="flex flex-wrap justify-center gap-1">
          {subheadingLine1Words.map((word, i) => (
            <p
              key={i}
              className="text-[#48484899] text-base md:text-xl leading-6 whitespace-nowrap"
            >
              {word}
            </p>
          ))}
        </div>
  
        <div className="flex flex-wrap justify-center gap-1">
          {subheadingLine2Words.map((word, i) => (
            <p
              key={i}
              className="text-[#48484899] text-base md:text-xl leading-6 whitespace-nowrap"
            >
              {word}
            </p>
          ))}
        </div>
      </div>
  
      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-3 mt-7 w-full sm:w-auto items-center sm:items-start">
  
        {/* On mobile both buttons same width */}
        <Button className="w-full sm:w-[150px] h-[50px] rounded-xl shadow-[0px_10px_28px_#ff440040] 
          bg-[#04558f] border border-[#04558f] text-white text-lg font-semibold">
          Get A Demo Call
        </Button>
  
        <Button className="w-full sm:w-[130px] h-[50px] rounded-xl 
          bg-black/40 text-white text-lg font-semibold">
          About Us
        </Button>
  
      </div>
  
      {/* HERO IMAGE */}
      <img
        className="mt-20 md:mt-[180px] w-full max-w-[1240px] h-auto px-2"
        alt="Container"
        src="/herosalesproelite.png"
      />
    </div>
  </section>
  
  
  );
};
