import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/Accordion";
import React from "react";
import FadeInView from "../../../../components/ui/FadeInView";
const faqItems = [
  {
    id: "item-1",
    question: "What services does SalesProElite offer?",
    answer:
      "SalesProElite provides social media management, paid ads, content creation, funnel building, CRM automation, and performance marketing to help businesses grow online.",
    defaultOpen: true,
  },
  {
    id: "item-2",
    question: "How long does it take to see results?",
    answer:
      "Clients typically see initial traction within 7–14 days and strong results within 30–60 days, depending on the campaign and industry.",
    defaultOpen: false,
  },
  {
    id: "item-3",
    question: "Do you guarantee results?",
    answer:
      "While no agency can guarantee exact revenue, we ensure optimized campaigns, transparent reporting, and proven strategies that consistently generate leads and sales.",
    defaultOpen: false,
  },
  {
    id: "item-4",
    question: "What makes SalesProElite different?",
    answer:
      "We use data-driven strategies, high-quality content, advanced tracking, and CRM automation to deliver predictable, scalable growth for our clients.",
    defaultOpen: false,
  },
  {
    id: "item-5",
    question: "How much do your services cost?",
    answer:
      "Our pricing varies based on your goals and campaign type. We offer flexible monthly plans—book a free call to get a tailored quote.",
    defaultOpen: false,
  },
];


export const FaqSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col gap-[68px] py-[100px]">

  {/* HEADER SECTION */}
  <FadeInView>
    <div className="mx-auto flex flex-col gap-6 items-center">

      {/* Small Label Box */}
      <div
        className="relative px-6 py-2 bg-[#04558f1a]
        inline-flex items-center justify-center
        min-w-[80px] w-auto h-auto"
      >
        {/* Corners */}
        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#04558f]" />
        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-t border-l border-[#04558f] -rotate-90" />
        <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-l border-[#04558f] rotate-90" />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-t border-l border-[#04558f] rotate-180" />

        {/* Border */}
        <div className="absolute inset-0 border border-[#04558f1a]" />

        {/* Text */}
        <span className="relative z-10 text-[#04558f99] font-medium text-lg whitespace-nowrap">
          FAQ
        </span>
      </div>

      {/* Title */}
      <div className="flex flex-col items-center text-center">
        <div className="flex gap-3 flex-wrap justify-center">
          <h2 className="font-medium text-black text-4xl sm:text-5xl md:text-6xl leading-tight">
            Frequently
          </h2>
          <h2 className="font-medium text-black text-4xl sm:text-5xl md:text-6xl leading-tight">
            Asked
          </h2>
        </div>

        <h2 className="font-medium text-black text-4xl sm:text-5xl md:text-6xl leading-tight">
          Questions
        </h2>
      </div>

    </div>
  </FadeInView>

  {/* ACCORDION */}
  <FadeInView>
    <div className="mx-auto w-full max-w-[660px] px-4">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="flex flex-col gap-2.5"
      >
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="bg-[#04558f] rounded-[20px] overflow-hidden shadow-[inset_0px_1px_4px_#ffffff1a] border-0"
          >
            <AccordionTrigger className="px-6 py-6 hover:no-underline [&[data-state=open]]:pb-3">
              <span className="[font-family:'Geist',Helvetica] font-semibold text-white text-2xl tracking-[-0.72px] leading-6 text-left">
                {item.question}
              </span>
            </AccordionTrigger>

            {item.answer && (
              <AccordionContent className="px-6 pb-6 pt-3">
                <p className="[font-family:'Geist',Helvetica] font-medium text-[#ffffff80] text-lg leading-[21.6px]">
                  {item.answer}
                </p>
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </FadeInView>

</section>

  );
};
