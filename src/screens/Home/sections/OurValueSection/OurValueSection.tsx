import React from "react";
import FadeInView from "../../../../components/ui/FadeInView";

const valueItems = [
  {
    badge: "Innovation",
    description:
      "We continuously seek fresh ideas and cutting-edge tactics to stay ahead of market trends.",
    imagePosition: "left",
    imageSrc: "/dilon.png",
  },
  {
    badge: "Collaboration",
    description:
      "We work hand in hand with our clients, turning insights into impactful growth.",
    imagePosition: "right",
    imageSrc: "/dilon.png",
  },
];

const subtitleWords = [
  "At",
  "Salespro",
  "Your",
  "Success",
  "Is",
  "Our",
  "Success.",
  "We",
  "Are",
  "Committed",
  "To",
  "Driving",
  "Your",
  "Business",
  "Forward—one",
  "Smart",
  "Strategy",
  "At",
  "A",
  "Time.",
];

 const OurValueSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 px-5">
    <div className="max-w-[1400px] mx-auto">
  
      {/* Header */}
      <FadeInView>
        <header className="mb-20 md:mb-40">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="flex gap-3 justify-center flex-wrap">
              <h2 className="font-medium text-black text-4xl md:text-6xl leading-tight">
                Our
              </h2>
              <h2 className="font-medium text-black text-4xl md:text-6xl leading-tight">
                Value
              </h2>
            </div>
  
            <div className="flex flex-wrap justify-center gap-1 max-w-[900px]">
              {subtitleWords.map((word, index) => (
                <span
                  key={index}
                  className="font-medium text-[#00000099] text-base md:text-lg"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </header>
      </FadeInView>
  
      {/* Value Items */}
      <div className="flex flex-col gap-[60px] md:gap-[100px]">
        {valueItems.map((item, index) => (
          <FadeInView key={index}>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center"
            >
              {/* IMAGE LEFT */}
              {item.imagePosition === "left" ? (
                <>
                  <div
                    className="rounded-[20px] md:rounded-[30px] h-[300px] md:h-[470px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${item.imageSrc})` }}
                  />
  
                  <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left">
  
                    {/* Badge */}
                    <div className="relative w-fit mx-auto md:mx-0 bg-[#04558f1a] border border-[#04558f1a] px-3 py-2">
                      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#04558f]" />
                      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#04558f]" />
                      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#04558f]" />
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#04558f]" />
  
                      <span className="font-medium text-[#04558f] text-base md:text-lg">
                        {item.badge}
                      </span>
                    </div>
  
                    {/* Description */}
                    <p className="font-medium text-black text-xl md:text-[32px] leading-[30px] md:leading-[44px]">
                      {item.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* TEXT LEFT */}
                  <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left">
                    <div className="relative w-fit mx-auto md:mx-0 bg-[#04558f1a] border border-[#04558f1a] px-3 py-2">
                      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#04558f]" />
                      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#04558f]" />
                      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#04558f]" />
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#04558f]" />
  
                      <span className="font-medium text-[#04558f] text-base md:text-lg">
                        {item.badge}
                      </span>
                    </div>
  
                    <p className="font-medium text-black text-xl md:text-[32px] leading-[30px] md:leading-[44px]">
                      {item.description}
                    </p>
                  </div>
  
                  {/* IMAGE RIGHT */}
                  <div
                    className="rounded-[20px] md:rounded-[30px] h-[300px] md:h-[470px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${item.imageSrc})` }}
                  />
                </>
              )}
            </div>
          </FadeInView>
        ))}
      </div>
  
    </div>
  </section>
  
  
  );
};

export default OurValueSection
