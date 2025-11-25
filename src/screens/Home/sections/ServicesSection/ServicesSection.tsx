import React from "react";
import FadeInView from "../../../../components/ui/FadeInView";
export const ServicesSection = (): JSX.Element => {
  return (
    <section className="w-full py-20">
    <div className="max-w-6xl mx-auto px-5 bg-[#ffffff0d] rounded-[40px] py-16 md:py-20">
  
      {/* Title Section */}
      <FadeInView>
        <div className="flex flex-col items-center gap-6 mb-14">
          
          {/* Bracket Box */}
          <div className="relative w-[132px] h-[42px] bg-[#04558f1a]">
            <div className="absolute inset-0 border border-[#04558f1a]" />
  
            {/* Corners */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#04558f]" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 rotate-[-90deg] border-t border-l border-[#04558f]" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 rotate-90 border-t border-l border-[#04558f]" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rotate-180 border-t border-l border-[#04558f]" />
  
            <div className="absolute inset-0 flex items-center justify-center text-[#04558f] font-medium text-lg">
              Our Services
            </div>
          </div>
  
          {/* Section Heading */}
          <h2 className="text-4xl md:text-6xl font-medium text-center leading-tight px-4">
            How We Help Your SaaS Succeed
          </h2>
        </div>
      </FadeInView>
  
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16">
  
        {/* Service 1 */}
        <FadeInView delay={0.15}>
          <div className="flex items-start gap-6">
            <img src="/icon-container-2.svg" className="w-24 h-20 md:w-28 md:h-20" />
            <div>
              <h3 className="text-xl font-semibold text-black">Performance Marketing</h3>
              <p className="text-black mt-2 leading-relaxed">
                Maximize your ROI with targeted ad campaigns, audience segmentation,
                and precision tracking.
              </p>
            </div>
          </div>
        </FadeInView>
  
        {/* Service 2 */}
        <FadeInView delay={0.25}>
          <div className="flex items-start gap-6">
            <img src="/icon-container-3.svg" className="w-24 h-20 md:w-28 md:h-20" />
            <div>
              <h3 className="text-xl font-semibold text-black">Content Marketing</h3>
              <p className="text-black mt-2 leading-relaxed">
                We create valuable content that builds trust and drives conversions.
              </p>
            </div>
          </div>
        </FadeInView>
  
        {/* Service 3 */}
        <FadeInView delay={0.35}>
          <div className="flex items-start gap-6">
            <img src="/icon-container.svg" className="w-24 h-20 md:w-28 md:h-20" />
            <div>
              <h3 className="text-xl font-semibold text-black">Paid Advertising</h3>
              <p className="text-black mt-2 leading-relaxed">
                Strategic ads that deliver measurable growth and consistent traffic.
              </p>
            </div>
          </div>
        </FadeInView>
  
        {/* Service 4 */}
        <FadeInView delay={0.45}>
          <div className="flex items-start gap-6">
            <img src="/icon-container-1.svg" className="w-24 h-20 md:w-28 md:h-20" />
            <div>
              <h3 className="text-xl font-semibold text-black">Email Marketing</h3>
              <p className="text-black mt-2 leading-relaxed">
                Convert leads into customers with targeted automation and newsletters.
              </p>
            </div>
          </div>
        </FadeInView>
  
      </div>
    </div>
  </section>
  
  
  );
};
