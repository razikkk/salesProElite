import React from 'react'
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import AboutHeroSection from '../screens/Home/sections/AboutHeroSection/AboutHeroSection';
import { AchievementsSection } from '../screens/Home/sections/AchievementsSection';
import OurValueSection from '../screens/Home/sections/OurValueSection/OurValueSection';
import { FaqSection } from '../screens/Home/sections/FaqSection';
import { FooterSection } from '../screens/Home/sections/FooterSection';
import { Navbar } from '../components/ui/Navbar';

const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Pricing", path: "/pricing" },
  ];
const About = () : JSX.Element=> {
  const navigate = useNavigate()

  return (
    <div className="bg-white w-full relative overflow-hidden">
<Navbar/>

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