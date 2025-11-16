import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sophia",
    role: "Founder Of Cloud",
    profileImage: "/profile-image---szxn356qlumitmoloxeajnhm0ku-jpeg.png",
    contentImage: "/image---swiwwfm27xbubmg97nrmtork-png.png",
    text: "We Partnered With Them To Refine Our Marketing Efforts,\nand The Results Have Been Outstanding. Their Creative\ncampaigns And Precise Execution Not Only Improved Our\nbrand Visibility But Also Consistently Fostered Significantly\nbetter Customer Retention.",
    type: "large",
  },
  {
    id: 2,
    name: "Anjela",
    role: "Ceo Of Technova",
    profileImage: "/profile-image---zkws8xtkh5wzqjleswi1psdgwy-png.png",
    text: "Working With Them Has Been A Game Changer For Our Business. Their Innovative\nstrategies And Hands-on Approach Have Significantly Boosted Our Lead Generation.",
    type: "small",
  },
  {
    id: 3,
    name: "Mark",
    role: "Cmo Of Innosaas",
    profileImage: "/profile-image---puq34xmkr1np7djeonn65dyquuw-jpeg.png",
    text: "Them Completely Transformed Our Digital Marketing Strategy. Their Deep Understanding\nof Saas Dynamics And Data-driven Approach Allowed Us To Target The Right Audience,\nresulting In A 40% Increase In Sales Within Six Months.",
    type: "small",
  },
];

const headingWords = [
  { text: "What", width: "w-[141px]", left: "left-[calc(50.00%_-_281px)]" },
  { text: "Our", width: "w-[98px]", left: "left-[calc(50.00%_-_127px)]" },
  { text: "Clients", width: "w-[184px]", left: "left-[calc(50.00%_-_16px)]" },
  { text: "Say", width: "w-[100px]", left: "left-[calc(50.00%_+_181px)]" },
];

const cornerBrackets = [
  { top: "top-0", left: "left-0", rotation: "" },
  { top: "top-8", left: "left-0", rotation: "-rotate-90" },
  { top: "top-0", left: "left-[123px]", rotation: "rotate-90" },
  { top: "top-8", left: "left-[123px]", rotation: "rotate-180" },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col gap-[68px] py-[100px] px-20">
      <header className="flex flex-col gap-[9.1px]">
        <div className="flex justify-center">
          <div className="w-[132.55px] h-[41.6px] relative bg-[#04558f1a]">
            <div className="absolute w-full h-full top-0 left-0">
              {cornerBrackets.map((bracket, index) => (
                <div
                  key={index}
                  className={`${bracket.top} ${bracket.left} border-[#04558f] ${bracket.rotation} absolute w-2.5 h-2.5 border-t [border-top-style:solid] border-l [border-left-style:solid]`}
                />
              ))}
            </div>

            <div className="absolute top-2.5 left-[calc(50.00%_-_54px)] w-[109px] h-[22px] flex items-center justify-center [font-family:'Geist',Helvetica] font-medium text-[#04558f] text-lg text-center tracking-[0] leading-[21.6px] whitespace-nowrap">
              Testimonial
            </div>

            <div className="border border-solid border-[#04558f1a] absolute w-full h-full top-0 left-0" />
          </div>
        </div>

        <div className="h-[60px] relative">
          {headingWords.map((word, index) => (
            <div
              key={index}
              className={`absolute top-0 ${word.left} ${word.width} h-[60px] flex justify-center`}
            >
              <div className="flex items-center justify-center mt-[-9px] h-[78px] [font-family:'Geist',Helvetica] font-medium text-black text-6xl text-center tracking-[-1.80px] leading-[60px]">
                {word.text}
              </div>
            </div>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-[522px_1fr] gap-6 h-[544px]">
        <Card className="bg-[#cecece] rounded-[25px] overflow-hidden shadow-[inset_0px_1px_4px_#ffffff1a] border-0">
          <CardContent className="p-[30px] h-full flex flex-col gap-9">
            <div className="flex items-center gap-4">
              <div
                className="w-[54px] h-[54px] rounded-[54px] bg-cover bg-center flex-shrink-0"
                style={{
                  backgroundImage: `url(${testimonials[0].profileImage})`,
                }}
              />
              <div className="flex flex-col gap-2">
                <div className="[font-family:'Geist',Helvetica] font-semibold text-[#cecece] text-xl tracking-[-0.60px] leading-5">
                  {testimonials[0].name}
                </div>
                <div className="[font-family:'Geist',Helvetica] font-medium text-[#00000080] text-lg tracking-[0] leading-[21.6px]">
                  {testimonials[0].role}
                </div>
              </div>
            </div>

            <div
              className="flex-1 rounded-[20px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${testimonials[0].contentImage})`,
              }}
            />

            <p className="[font-family:'Geist',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[25.6px]">
              {testimonials[0].text.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < testimonials[0].text.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
          {testimonials.slice(1).map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-[#cecece] rounded-[25px] overflow-hidden shadow-[inset_0px_1px_4px_#ffffff1a] border-0 flex-1"
            >
              <CardContent className="p-[30px] h-full flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="w-[54px] h-[54px] rounded-[54px] bg-cover bg-center flex-shrink-0"
                    style={{
                      backgroundImage: `url(${testimonial.profileImage})`,
                    }}
                  />
                  <div className="flex flex-col gap-2">
                    <div className="[font-family:'Geist',Helvetica] font-semibold text-[#cecece] text-xl tracking-[-0.60px] leading-5">
                      {testimonial.name}
                    </div>
                    <div className="[font-family:'Geist',Helvetica] font-medium text-[#00000080] text-lg tracking-[0] leading-[21.6px]">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                <p className="[font-family:'Geist',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-[25.6px]">
                  {testimonial.text.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < testimonial.text.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          variant="ghost"
          className="h-auto bg-[linear-gradient(0deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.08)_100%),linear-gradient(0deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.08)_100%)] rounded-xl px-5 py-3.5"
        >
          <span className="[font-family:'Geist',Helvetica] font-semibold text-black text-lg text-center tracking-[-0.36px] leading-[21.6px]">
            See All
          </span>
        </Button>
      </div>
    </section>
  );
};
