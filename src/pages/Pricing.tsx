import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useNavigate } from "react-router-dom";
import { FaqSection } from "../screens/Home/sections/FaqSection";
import { FooterSection } from "../screens/Home/sections/FooterSection";
import PricingSection from "../screens/Home/sections/PricingSection/PricingSection";
import { Navbar } from "../components/ui/Navbar";


const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Pricing", path: "/pricing" },
  ];

const features = [
  "1 Active Request at a Time",
  "3-4 Days Turnaround",
  "Unlimited Design Requests",
  "Up to 60 Hours of Design Work Each Month",
  "Project Updates via Slack & Email",
  "Basic Project Management Support",
  "Feedback via Async & Loom",
];

 const Pricing = (): JSX.Element => {
    const navigate = useNavigate()
  return (
    <div className="bg-white w-full relative overflow-hidden">
     <Navbar/>
<PricingSection/>
    <FaqSection/>
    <FooterSection/>
    </div>
  );
};

export default Pricing