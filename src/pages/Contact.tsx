import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import ContactHeroSection from '../screens/Home/sections/ContactHeroSection/ContactHeroSection';
import ContactFormSection from '../screens/Home/sections/ContactForm/ContactForm';
import { FaqSection } from '../screens/Home/sections/FaqSection';
import { FooterSection } from '../screens/Home/sections/FooterSection';
import { Navbar } from '../components/ui/Navbar';

const Contact = () => {
    const navigationItems = [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about" },
        { label: "Pricing", path: "/pricing" },
      ];
      const navigate = useNavigate()
  return (
    <div className="bg-white w-full relative overflow-hidden">
    <Navbar/>
          <ContactHeroSection />
          <ContactFormSection/>
          <FaqSection/>
          <FooterSection/>
        </div>
  )
}

export default Contact