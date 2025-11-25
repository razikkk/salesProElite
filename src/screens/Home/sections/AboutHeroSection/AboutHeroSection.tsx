import React from 'react'
import FadeInView from '../../../../components/ui/FadeInView'

const AboutHeroSection = () => {
  return (
    <section className="w-full bg-white py-24 mt-10 flex flex-col items-center">
    <div className="container mx-auto px-5 flex flex-col items-center">
  
      {/* Centered Main Heading */}
      <FadeInView>

      <h1 className="font-[Geist] font-semibold text-black text-[68px] leading-[68px] tracking-[-2px] text-center mb-10">
  About Us
</h1>
      </FadeInView>

  
      {/* Center Image */}
      <img
        className="w-full max-w-[1240px] h-auto mt-10"
        alt="Container"
        src="/aboutUsimg.png"
      />
    </div>
  
    {/* Left aligned About Us box */}
    <div className="w-full max-w-[1240px] mt-16 px-5 flex flex-col items-start">
  {/* Label Box */}
  <div className="relative w-[101.2px] h-[41.6px] mb-6">
    <FadeInView>
    {/* Corners */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#04558f]" />
      <div className="absolute top-8 left-0 -rotate-90 w-2.5 h-2.5 border-t border-l border-[#04558f]" />
      <div className="absolute top-0 left-[91px] rotate-90 w-2.5 h-2.5 border-t border-l border-[#04558f]" />
      <div className="absolute top-8 left-[91px] rotate-180 w-2.5 h-2.5 border-t border-l border-[#04558f]" />
    </div>

    {/* Label Text */}

    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[78px] h-[22px] flex items-center justify-center text-[#04558f99] font-medium text-lg leading-[21.6px] font-[Geist]">
      About Us
    </div>

    {/* Border Box */}
    <div className="absolute inset-0 border border-[#04558f1a]" />
    </FadeInView>
  </div>

  {/* Paragraph */}
  <FadeInView>

  <p className="font-[Geist] font-normal text-black text-[32px] leading-[44.8px] max-w-[800px]">
    about us paragraph here!
  </p>
  </FadeInView>
</div>

  </section>
  

  )
}

export default AboutHeroSection