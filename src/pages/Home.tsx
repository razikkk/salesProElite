import { Button } from "../components/ui/button";
import React from "react";
import { AchievementsSection } from "../screens/Home/sections/AchievementsSection";
import { FaqSection } from "../screens/Home/sections/FaqSection";
import { FooterSection } from "../screens/Home/sections/FooterSection";
import { HeroSection } from "../screens/Home/sections/HeroSection";
import { HowItWorksSection } from "../screens/Home/sections/HowItWorksSection";
import { ServicesSection } from "../screens/Home/sections/ServicesSection";
import { TestimonialsSection } from "../screens/Home/sections/TestimonialsSection";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Pricing", path: "/pricing" },
];

export const Home = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className="bg-white w-full relative overflow-hidden">
<Navbar/>

      <main className="w-full">
        <HeroSection />

        <div className="w-full flex justify-center px-5">
          <img
            className="w-full max-w-[1400px] h-16"
            alt="Section separator"
            src="/section---separator.svg"
          />
        </div>

        <AchievementsSection />
        <div className="mt-20">
  <TestimonialsSection />
</div>

<div className="mt-20">
  <ServicesSection />
</div>

<div className="mt-20">
  <HowItWorksSection />
</div>

<div className="mt-20">
  <FaqSection />
</div>
      </main>

      <FooterSection />
    </div>
  );
};
