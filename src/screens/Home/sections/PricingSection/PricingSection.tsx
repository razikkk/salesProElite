import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { CheckIcon } from "lucide-react";
import FadeInView from "../../../../components/ui/FadeInView";

const PricingSection = (): JSX.Element => {
  const [activePlan, setActivePlan] = useState<"standard" | "enterprise">("standard");

  const plans = {
    standard: {
      title: "Standard",
      subtitle: "Perfect for Individuals & Small Teams",
      description:
        "Get everything you need to kickstart your project with a high-quality design solution.",
      price: "$1500",
      period: "/ project",
      features: [
        "1 Active Request at a Time",
        "3-4 Days Turnaround",
        "Unlimited Design Requests",
        "Up to 60 Hours of Design Work Each Month",
        "Project Updates via Slack & Email",
        "Basic Project Management Support",
        "Feedback via Async & Loom",
      ],
    },

    enterprise: {
      title: "Enterprise",
      subtitle: "Built for Growing Companies",
      description:
        "Advanced support and faster delivery times for teams that need premium design at scale.",
      price: "$3000",
      period: "/ project",
      features: [
        "3 Active Requests at a Time",
        "1-2 Days Turnaround",
        "Unlimited Design Requests",
        "Up to 120 Hours of Design Work Each Month",
        "Dedicated Project Manager",
        "Priority Support",
        "Real-Time Collaboration & Revisions",
      ],
    },
  };

  const selected = plans[activePlan];

  return (
    <FadeInView>

    
<section className="w-full py-16 px-4 pt-32 md:pt-30">
  <div className="max-w-[700px] mx-auto">

    {/* Heading */}
    <div className="flex flex-col items-center mb-12">
      <h2 className="font-[Geist] font-medium text-black text-4xl md:text-5xl text-center leading-tight mb-4">
        Tailored Plans for
        <br className="hidden md:block" />
        Every Ambition
      </h2>

      <p className="text-[#707070] text-base text-center leading-relaxed">
        Choose a plan that fits your goals and
        <br className="hidden md:block" />
        scales with your success.
      </p>
    </div>

    {/* Toggle Buttons */}
    <div className="flex justify-center mb-12">
      <div className="bg-white rounded-[50px] shadow p-[5px] inline-flex">

        {/* STANDARD */}
        <Button
          onClick={() => setActivePlan("standard")}
          className={`
            h-auto rounded-[50px] px-5 py-[12px] text-base transition-all duration-300
            ${activePlan === "standard"
              ? "bg-black text-white"
              : "bg-[#ebeced] text-black hover:bg-[#dcdfe1]"
            }
          `}
        >
          Standard
        </Button>

        {/* ENTERPRISE */}
        <Button
          onClick={() => setActivePlan("enterprise")}
          className={`
            h-auto rounded-[50px] px-5 py-[12px] text-base transition-all duration-300
            ${activePlan === "enterprise"
              ? "bg-black text-white"
              : "bg-[#ebeced] text-black hover:bg-[#dcdfe1]"
            }
          `}
        >
          Enterprise
        </Button>

      </div>
    </div>

    {/* Card */}
    <Card className="bg-white rounded-[30px] shadow border-0">
      <CardContent className="p-4 md:p-6">
        
        <div className="bg-[#ebeced] rounded-[25px] p-6 md:p-10">

          {/* Title / Description */}
          <div className="mb-10">
            <h3 className="font-[Geist] font-medium text-black text-3xl md:text-4xl mb-2">
              {selected.title}
            </h3>

            <p className="text-[#707070] text-base mb-5">
              {selected.subtitle}
            </p>

            <div className="bg-white rounded-xl shadow px-5 py-3.5">
              <p className="text-sm">{selected.description}</p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            {selected.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 py-2.5 border-t border-[#c9c9c9]"
              >
                <CheckIcon className="w-5 h-5 shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-10 py-5">
          <div className="flex items-baseline gap-1">
            <span className="font-medium text-black text-3xl md:text-4xl">
              {selected.price}
            </span>
            <span className="text-base">{selected.period}</span>
          </div>

          <Button className="h-12 md:h-14 px-8 rounded-[50px] bg-[#04558f] text-white text-base md:text-lg">
            Get Started Today
          </Button>
        </div>

      </CardContent>
    </Card>
  </div>
</section>
</FadeInView>

  );
};

export default PricingSection;
