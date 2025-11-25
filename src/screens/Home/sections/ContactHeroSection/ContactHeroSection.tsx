import React from 'react'
import FadeInView from '../../../../components/ui/FadeInView'

const ContactHeroSection = () => {
  return (
    <FadeInView>

    
    <section className="w-full py-[140px] px-5">
    <div className="max-w-[1400px] mx-auto flex flex-col gap-[50px] items-center">
      <div className="flex flex-col gap-6 items-center max-w-[814px]">
        <h1 className="[font-family:'Geist',Helvetica] font-semibold text-black text-[68px] text-center tracking-[-2.04px] leading-[68px] whitespace-nowrap">
          Contact Us
        </h1>

        <p className="[font-family:'Geist',Helvetica] font-medium text-[#00000080] text-xl text-center tracking-[0] leading-6">
          We're excited to connect with you! Whether you have a question about
          our services, need assistance with your marketing strategy, or are
          ready to take the next step in your growth journey, our team is here
          to help.
        </p>
      </div>

      <img
        className="w-auto h-auto"
        alt="Asterix asterix"
        src="/asterix---asterix.svg"
      />
    </div>
  </section> 
  </FadeInView>
  
)
}

export default ContactHeroSection