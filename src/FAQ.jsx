/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react";
import starIcon from "./assets/icon-star.svg";
import imagePlus from "./assets/icon-plus.svg";

function AccordionItem({ question, answer, defaultOpen }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.maxHeight = "0px";
      }
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col border-b-2 ${isOpen ? "pb-3" : ""}`}>
      <div
        className="text-Dark-purple flex justify-between items-center cursor-pointer hover:text-light-purple transition-all duration-700 ease-in-out"
        onClick={toggleAccordion}
        style={{
          paddingTop: "1.2rem",
          paddingBottom: "1.2rem",
        }}
      >
        <h3 className="font-bold text-lg">{question}</h3>
        <img
          src={imagePlus}
          alt="Toggle"
          className={`transform transition-transform duration-300 ease ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-max-height duration-700 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <p
          className={`text-Dark-purple transition-opacity duration-700 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <div className="relative h-[27rem] bg-no-repeat bg-cover bg-mobile-pattern sm:bg-desktop-pattern">
      <div className="flex justify-center items-center min-h-[90vh] p-10">
        <div className="w-full max-w-[37.5rem] rounded-2xl bg-white p-[2.5rem] ">
          <div className="header flex items-center gap-6 mb-6">
            <img src={starIcon} alt="Star" />
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-Dark-purple">
              FAQs
            </h1>
          </div>
          <AccordionItem
            question="What is Frontend Mentor, and how will it help me?"
            answer="Frontend Mentor offers realistic coding challenges to help developers improve their 
          frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
          all levels and ideal for portfolio building."
            defaultOpen={true}
          />
          <AccordionItem
            question="Is Frontend Mentor free?"
            answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
          option providing access to a range of projects suitable for all skill levels."
          />
          <AccordionItem
            question="Can I use Frontend Mentor projects in my portfolio?"
            answer=" Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
          way to showcase your skills to potential employers!"
          />
          <AccordionItem
            question="How can I get help if I'm stuck on a challenge?"
            answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
          channel where you can ask questions and seek support from other community members."
          />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
