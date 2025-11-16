import React from "react";

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
      <header className="mb-40">
  <div className="flex flex-col items-center text-center gap-6">

    {/* Main Title */}
    <div className="flex gap-3 justify-center">
      <h2 className="[font-family:'Geist',Helvetica] font-medium text-black text-6xl tracking-[-1.80px] leading-[60px]">
        Our
      </h2>
      <h2 className="[font-family:'Geist',Helvetica] font-medium text-black text-6xl tracking-[-1.80px] leading-[60px]">
        Value
      </h2>
    </div>

    {/* Subtitle Words */}
    <div className="flex flex-wrap justify-center gap-x-1 gap-y-1 max-w-[900px]">
      {subtitleWords.map((word, index) => (
        <span
          key={index}
          className="[font-family:'Geist',Helvetica] font-medium text-[#00000099] text-lg tracking-[0] leading-[21.6px]"
        >
          {word}
        </span>
      ))}
    </div>

  </div>
</header>


        <div className="flex flex-col gap-[100px]">
          {valueItems.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-12 items-center">
              {item.imagePosition === "left" ? (
                <>
                  <div
                    className="rounded-[30px] h-[470px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${item.imageSrc})` }}
                  />
                  <div className="flex flex-col gap-6">
                    <div className="relative w-fit bg-[#04558f1a] border border-solid border-[#04558f1a] px-3 py-2.5">
                      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-solid border-[#04558f]" />
                      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-solid border-[#04558f]" />
                      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-solid border-[#04558f]" />
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-solid border-[#04558f]" />
                      <span className="[font-family:'Geist',Helvetica] font-medium text-[#04558f] text-lg tracking-[0] leading-[21.6px]">
                        {item.badge}
                      </span>
                    </div>
                    <p className="[font-family:'Geist',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[44.8px]">
                      {item.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-6">
                    <div className="relative w-fit bg-[#04558f1a] border border-solid border-[#04558f1a] px-3 py-2.5">
                      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-solid border-[#04558f]" />
                      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-solid border-[#04558f]" />
                      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-solid border-[#04558f]" />
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-solid border-[#04558f]" />
                      <span className="[font-family:'Geist',Helvetica] font-medium text-[#04558f] text-lg tracking-[0] leading-[21.6px]">
                        {item.badge}
                      </span>
                    </div>
                    <p className="[font-family:'Geist',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[44.8px]">
                      {item.description}
                    </p>
                  </div>
                  <div
                    className="rounded-[30px] h-[470px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${item.imageSrc})` }}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValueSection
