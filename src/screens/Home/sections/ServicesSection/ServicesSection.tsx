import React from "react";

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-5 bg-[#ffffff0d] rounded-[60px] py-20">
        
        {/* Section Title */}
        <div className="flex flex-col items-center gap-6 mb-16">
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

          <h2 className="text-6xl font-medium text-center leading-tight">
            How We Help Your Saas Succeed
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-16">
          
          {/* Service Card */}
          <div className="flex gap-6">
            <img src="/icon-container-2.svg" className="w-28 h-20" />
            <div>
              <h3 className="text-xl font-semibold text-black">
                Performance Marketing
              </h3>
              <p className="text-black mt-2 leading-relaxed">
                Maximize Your ROI With targeted ad campaigns, audience segmentation,
                and precision tracking.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <img src="/icon-container-3.svg" className="w-28 h-20" />
            <div>
              <h3 className="text-xl font-semibold text-black">
                Content Marketing
              </h3>
              <p className="text-black mt-2 leading-relaxed">
                We create valuable content that builds trust and drives conversions.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <img src="/icon-container.svg" className="w-28 h-20" />
            <div>
              <h3 className="text-xl font-semibold text-black">
                Paid Advertising
              </h3>
              <p className="text-black mt-2 leading-relaxed">
                Strategic ads that deliver measurable growth and consistent traffic.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <img src="/icon-container-1.svg" className="w-28 h-20" />
            <div>
              <h3 className="text-xl font-semibold text-black">
                Email Marketing
              </h3>
              <p className="text-black mt-2 leading-relaxed">
                Convert leads into customers with targeted automation and newsletters.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
