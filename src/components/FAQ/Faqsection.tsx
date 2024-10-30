import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqsection = () => {
  const [sectionSelected, setSectionSelected] = useState("product");

  const faqItems = [
    {
      question: "How does it work?",
      answer:
        "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    },
    {
      question: "Why inhale melatonin?",
      answer: "Explanation of why melatonin is inhaled goes here.",
    },
    {
      question: "How much melatonin is there per inhale?",
      answer: "Amount of melatonin per inhale goes here.",
    },
    {
      question: "Is it an e-cigarette or tobacco product?",
      answer:
        "Information on whether it is an e-cigarette or tobacco product goes here.",
    },
    {
      question: "What's in it?",
      answer: "Ingredients in the product are listed here.",
    },
    {
      question: "What's not in it?",
      answer: "List of what is not in the product goes here.",
    },
    {
      question: "How long does it last?",
      answer: "Details on how long it lasts go here.",
    },
    {
      question: "How do I know it has run out/died?",
      answer: "Explanation of signs that it has run out or died goes here.",
    },
  ];

  return (
    <div className="md:w-[80%] w-11/12 mx-auto md:flex gap-16 my-20">
      <div className="flex flex-col space-y-4">
        <p
          className={`${
            sectionSelected === "product" ? "font-bold text-lg" : ""
          } cursor-pointer`}
          onClick={() => setSectionSelected("product")}
        >
          Sleepstiq{" "}
          <span
            className={`${
              sectionSelected === "product" ? "bg-fadedBackground" : ""
            }  pb-3  py-2 pl-1 pr-11`}
          >
            Product
          </span>
        </p>
        <p
          className={`${
            sectionSelected === "order" ? "font-bold text-lg" : ""
          } cursor-pointer`}
          onClick={() => setSectionSelected("order")}
        >
          Order
        </p>
        <p
          className={`${
            sectionSelected === "melan" ? "font-bold text-lg" : ""
          } cursor-pointer`}
          onClick={() => setSectionSelected("melan")}
        >
          Melantonin
        </p>
      </div>
      {sectionSelected === "product" && (
        <div className="md:w-[70%] my-7 md:my-0">
          <Accordion type="single" collapsible className="w-full ">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                className={`sm:px-10 px-1 py-4 border-[#BDBDBD] ${
                  index === 0 ? "border-t" : ""
                } `}
                value={`item-${index + 1}`}
              >
                <AccordionTrigger className="sm:text-base text-sm">
                  Q{index + 1}: {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-black sm:text-sm text-xs">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default Faqsection;
