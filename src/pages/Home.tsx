import { Button } from "../components/ui/button";
import React, { useEffect } from "react";
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

  useEffect(() => {
    // Show popup only once per session
    const hasShownPopup = sessionStorage.getItem("ghl_popup_shown");
  
    // If already shown -> DON'T load popup again
    if (hasShownPopup) return;
  
    // Mark as shown
    sessionStorage.setItem("ghl_popup_shown", "true");
  
    // Inject iframe
    const iframe = document.createElement("iframe");
    iframe.src = "https://api.leadconnectorhq.com/widget/form/8uUG1Ae0RXZVkC6yLduf";
    iframe.style.display = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.borderRadius = "4px";
    iframe.id = "popup-8uUG1Ae0RXZVkC6yLduf";
    iframe.setAttribute("data-layout", "{'id':'POPUP'}");
    iframe.setAttribute("data-trigger-type", "alwaysShow");
    iframe.setAttribute("data-activation-type", "alwaysActivated");
    iframe.setAttribute("data-deactivation-type", "neverDeactivate");
    iframe.setAttribute("data-form-name", "7 Steps Capture MIFGE");
    iframe.setAttribute("data-height", "340");
    iframe.setAttribute("data-layout-iframe-id", "popup-8uUG1Ae0RXZVkC6yLduf");
    iframe.setAttribute("data-form-id", "8uUG1Ae0RXZVkC6yLduf");
    iframe.title = "7 Steps Capture MIFGE";
    document.body.appendChild(iframe);
  
    // Inject script only once globally
    if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  
    // ❗ NO CLEANUP — GHL requires script to stay available
  }, []);
  
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
