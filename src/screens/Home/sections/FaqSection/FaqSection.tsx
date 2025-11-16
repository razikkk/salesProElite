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
      <div className="mx-auto flex flex-col gap-4 items-center">
        <div className="w-[58.44px] h-[41.6px] relative">
          <div className="absolute w-full h-full top-0 left-0">
            <div className="top-0 left-0 border-[#04558f] absolute w-2.5 h-2.5 border-t [border-top-style:solid] border-l [border-left-style:solid]" />
            <div className="top-8 left-0 border-[#04558f] -rotate-90 absolute w-2.5 h-2.5 border-t [border-top-style:solid] border-l [border-left-style:solid]" />
            <div className="top-0 left-12 border-[#04558f] rotate-90 absolute w-2.5 h-2.5 border-t [border-top-style:solid] border-l [border-left-style:solid]" />
            <div className="top-8 left-12 border-[#04558f] rotate-180 absolute w-2.5 h-2.5 border-t [border-top-style:solid] border-l [border-left-style:solid]" />
          </div>
          <div className="absolute top-2.5 left-[calc(50.00%_-_17px)] w-[35px] h-[22px] flex items-center justify-center [font-family:'Geist',Helvetica] font-medium text-[#04558f99] text-lg text-center tracking-[0] leading-[21.6px] whitespace-nowrap">
            Faq
          </div>
          <div className="border border-solid border-[#04558f1a] absolute w-full h-full top-0 left-0" />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex gap-4">
            <h2 className="[font-family:'Geist',Helvetica] font-medium text-black text-6xl text-center tracking-[-1.80px] leading-[60px]">
              Frequently
            </h2>
            <h2 className="[font-family:'Geist',Helvetica] font-medium text-black text-6xl text-center tracking-[-1.80px] leading-[60px]">
              Asked
            </h2>
          </div>
          <h2 className="[font-family:'Geist',Helvetica] font-medium text-black text-6xl text-center tracking-[-1.80px] leading-[60px]">
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
