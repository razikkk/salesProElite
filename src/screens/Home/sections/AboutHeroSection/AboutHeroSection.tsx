import React from 'react'

const AboutHeroSection = () => {
  return (
    <section className="w-full bg-white py-24 mt-10 flex flex-col items-center">
    <div className="container mx-auto px-5 flex flex-col items-center">
  
      {/* Centered Main Heading */}
      <h1 className="[font-family:'Geist',Helvetica] font-semibold text-black text-[68px] text-center tracking-[-2px] leading-[68px] mb-10">
        About Us
      </h1>
  
      {/* Center Image */}
      <img
        className="w-full max-w-[1240px] h-auto mt-10"
        alt="Container"
        src="/aboutUsimg.png"
      />
    </div>
  
    {/* Left aligned About Us box */}
    <div className="w-full max-w-[1240px] mt-16 px-5 flex flex-col items-start">
  
      <div className="w-[101.2px] h-[41.6px] relative mb-6">
        <div className="absolute w-full h-full top-0 left-0">
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#04558f]" />
          <div className="absolute top-8 left-0 -rotate-90 w-2.5 h-2.5 border-t border-l border-[#04558f]" />
          <div className="absolute top-0 left-[91px] rotate-90 w-2.5 h-2.5 border-t border-l border-[#04558f]" />
          <div className="absolute top-8 left-[91px] rotate-180 w-2.5 h-2.5 border-t border-l border-[#04558f]" />
        </div>
  
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[78px] h-[22px] flex items-center justify-center [font-family:'Geist',Helvetica] font-medium text-[#04558f99] text-lg leading-[21.6px]">
          About Us
        </div>
  
        <div className="absolute w-full h-full top-0 left-0 border border-solid border-[#04558f1a]" />
      </div>
  
      {/* Paragraph */}
      <p className="[font-family:'Geist',Helvetica] font-normal text-black text-[32px] leading-[44.8px] max-w-[800px]">
        about us paragraph here!
      </p>
  
    </div>
  </section>
  

  )
}

export default AboutHeroSection