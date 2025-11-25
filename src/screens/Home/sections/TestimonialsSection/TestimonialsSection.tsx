import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import React from "react";
import FadeInView from "../../../../components/ui/FadeInView";

const testimonials = [
  {
    id: 1,
    name: "Todd kransow",
    // role: "Founder Of Cloud",
    profileImage: "/profile-image---szxn356qlumitmoloxeajnhm0ku-jpeg.png",
    contentImage: "/image---swiwwfm27xbubmg97nrmtork-png.png",
    text: "Dilon is not the typitical marketing sales person, he follows through and delivers on what he says he's going to do.",
    type: "large",
  },
  {
    id: 2,
    name: "Agenaldo Bailey",
    // role: "Ceo Of Technova",
    profileImage: "/profile-image---zkws8xtkh5wzqjleswi1psdgwy-png.png",
    text: "I am very pleased with my service. My rep Dilon is accessible and attentive to my needs and concerns, GREAT GUY! ",
    type: "small",
  },
  {
    id: 3,
    name: "Ron Stluka",
    // role: "Cmo Of Innosaas",
    profileImage: "/profile-image---puq34xmkr1np7djeonn65dyquuw-jpeg.png",
    text: "Dilon",
    type: "Dilon is very talented sales representative, and i have no hesitation in recomending him highly.",
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
    <section className="w-full flex flex-col gap-16 py-20 px-6 md:px-20">

    {/* TOP LABEL */}
    <FadeInView>
      <header className="flex flex-col gap-4 items-center">
        <div className="relative bg-[#04558f1a] w-[132px] h-[42px] flex items-center justify-center">
          {cornerBrackets.map((bracket, index) => (
            <div
              key={index}
              className={`${bracket.top} ${bracket.left} border-[#04558f] ${bracket.rotation} absolute w-2.5 h-2.5 border-t border-l`}
            />
          ))}
  
          <span className="font-medium text-[#04558f] text-lg">Testimonial</span>
  
          <div className="border border-[#04558f1a] absolute inset-0" />
        </div>
  
        {/* HEADING */}
        <h2 className="font-medium text-black text-4xl md:text-6xl text-center leading-tight">
          What Our Clients Say
        </h2>
      </header>
    </FadeInView>
  
    {/* GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  
      {/* LEFT LARGE CARD */}
      <FadeInView delay={0.2}>
        <Card className="bg-[#cecece] rounded-[25px] overflow-hidden border-0 shadow-md min-h-[500px] flex">
          <CardContent className="p-6 flex flex-col justify-between w-full">
            {/* Profile */}
            <div className="flex items-center gap-4">
              <div
                className="w-[54px] h-[54px] rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${testimonials[0].profileImage})` }}
              />
              <div>
                <h3 className="font-semibold text-black/80 text-lg">
                  {testimonials[0].name}
                </h3>
                <p className="text-black/50 text-sm">{testimonials[0].role}</p>
              </div>
            </div>
  
            {/* Image */}
            <div
              className="w-full h-48 md:h-60 rounded-[20px] bg-cover bg-center"
              style={{ backgroundImage: `url(${testimonials[0].contentImage})` }}
            />
  
            {/* Text */}
            <p className="text-black/70 leading-relaxed text-base">
              {testimonials[0].text}
            </p>
          </CardContent>
        </Card>
      </FadeInView>
  
      {/* RIGHT STACKED CARDS */}
      <div className="flex flex-col gap-6">
        {testimonials.slice(1).map((item, idx) => (
          <FadeInView key={item.id} delay={0.3 + idx * 0.15}>
            <Card className="bg-[#cecece] rounded-[25px] overflow-hidden border-0 shadow-md flex-1 min-h-[240px]">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                {/* Profile */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-[54px] h-[54px] rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.profileImage})` }}
                  />
                  <div>
                    <h3 className="font-semibold text-black/80 text-lg">
                      {item.name}
                    </h3>
                    <p className="text-black/50 text-sm">{item.role}</p>
                  </div>
                </div>
  
                {/* Text */}
                <p className="text-black/70 leading-relaxed text-base">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          </FadeInView>
        ))}
      </div>
    </div>
  
    {/* BUTTON */}
    {/* <FadeInView delay={0.5}>
      <div className="flex justify-center">
        <Button className="bg-black/10 rounded-xl px-6 py-3 font-semibold text-black text-lg">
          See All
        </Button>
      </div>
    </FadeInView> */}
  
  </section>
  
  );
};
