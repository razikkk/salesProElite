import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/Accordion";
import React from "react";

const faqItems = [
  {
    id: "item-1",
    question: "Faq",
    answer:
      "At Salespro, We Leverage Data-driven Strategies, Including Precision performance Marketing, Engaging Content Creation, And Tailored Seo techniques To Boost Your Online Visibility And Conversion Rates.",
    defaultOpen: true,
  },
  {
    id: "item-2",
    question: "Faq",
    answer: "",
    defaultOpen: false,
  },
  {
    id: "item-3",
    question: "Faq",
    answer: "",
    defaultOpen: false,
  },
  {
    id: "item-4",
    question: "Faq",
    answer: "",
    defaultOpen: false,
  },
  {
    id: "item-5",
    question: "Faq",
    answer: "",
    defaultOpen: false,
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col gap-[68px] py-[100px]">
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
                  <p className="[font-family:'Geist',Helvetica] font-medium text-[#ffffff80] text-lg tracking-[0] leading-[21.6px]">
                    {item.answer}
                  </p>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
