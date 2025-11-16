import React from 'react'
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import AboutHeroSection from '../screens/Home/sections/AboutHeroSection/AboutHeroSection';
import { AchievementsSection } from '../screens/Home/sections/AchievementsSection';
import OurValueSection from '../screens/Home/sections/OurValueSection/OurValueSection';
import { FaqSection } from '../screens/Home/sections/FaqSection';
import { FooterSection } from '../screens/Home/sections/FooterSection';

const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Pricing", path: "/pricing" },
  ];
const About = () : JSX.Element=> {
  const navigate = useNavigate()

  return (
    <div className="bg-white w-full relative">
<header className="-top-[15px] left-0 right-0 z-50 flex justify-center px-5">
        <div className="w-full max-w-[1400px] flex items-center">
          <img
            className="w-[223px] h-[125px] object-cover"
            alt="Salespro copy"
            src="/salespro-copy-4-1.png"
          />

<nav className="flex-1 ml-20 h-[90px] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] rounded-lg flex items-center px-20">
  <div className="flex items-center gap-[34px] mx-auto cursor-pointer">
    {navigationItems.map((item, index) => (
      <a
        key={index}
        onClick={()=> navigate(item.path)}
        className="[font-family:'Geist',Helvetica] font-medium text-black text-lg text-center tracking-[0] leading-[21.6px] whitespace-nowrap hover:opacity-70 transition-opacity"
      >
        {item.label}
      </a>
    ))}
  </div>

  <Button onClick={()=> navigate('/contact')} className="h-[50px] w-[151px] ml-auto bg-[linear-gradient(0deg,rgba(4,85,143,1)_0%,rgba(4,85,143,1)_100%)] rounded-xl [font-family:'Geist',Helvetica] font-semibold text-white text-lg tracking-[-0.36px] leading-[21.6px] hover:opacity-90">
    Contact Us
  </Button>
</nav>

        </div>
      </header>

   <AboutHeroSection/>
   <img
          className="w-full h-8 mt-[68px]"
          alt="Section separator"
          src="/section---separator.svg"
        />
   <AchievementsSection/>
   <img
          className="w-full h-8 mt-[68px]"
          alt="Section separator"
          src="/section---separator.svg"
        />
        <OurValueSection/>
        <FaqSection/>
        <FooterSection/>
    </div>
  )
}

export default About