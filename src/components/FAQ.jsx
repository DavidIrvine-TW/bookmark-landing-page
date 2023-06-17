import React from "react";
import arrow from "../assets/icon-arrow.svg";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 2,
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: 3,
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit. More Info 35,000+ already joined Stay up-to-date with what we’re doing Contact Us Features Pricing Contact",
  },
  {
    id: 4,
    question: "Is there a mobile app?",
    answer:
      " Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  const handleAccordionClick = (index) => {
    setActive(index === active ? null : index);
  };

  return (
    <article className="px-[2rem] mt-[8.75rem] tablet:mx-auto tablet:w-[540px]  mb-[7.6875rem] tablet:mb-[9.375rem]">
      <div className="text-center mb-[4rem]">
        <h4 className="text-sec-head-mb text-darkblue font-bold tablet:text-sec-head-dk tablet:mb-[1rem]">
          Frequently Asked Questions
        </h4>
        <p className="text-body-mb text-grayblue tablet:text-body-dk">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      <div id="accordian" className="accordian ">
        {faqs.map((faq, index) => (
          <div id="content-container" key={faq.id}>
            <div
              id="question"
              className="flex justify-between items-center py-[0.75rem] tablet:py-[1.25rem]"
            >
              <p
                className={`text-[0.9375rem] tablet:text-[1.125rem] text-darkblue leading-[32px] ${
                  index === active ? "font-bold" : "font-reg"
                } `}
              >
                {faq.question}
              </p>

              <svg
                className={`cursor-pointer ${
                  index === active ? "duration-500 rotate-180" : ""
                }`}
                onClick={() => handleAccordionClick(index)}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="11"
              >
                <path
                  fill="none"
                  stroke={` ${index === active ? "#FA5757" : "#5267DF"}`}
                  strokeWidth="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
            </div>

            <div
              id="answer"
              className={`answer tablet:text-[1.125rem] border-t border-grayblue overflow-hidden ${
                index === active ? "h-[200px]" : "h-[0px]"
              }`}
            >
              <p className="py-[1.5rem] text-grayblue text-justify">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <button className="mt-[3rem] bg-softblue text-white mx-auto px-[1.5rem] py-[0.625rem] font-bold rounded">
          More Info
        </button>
      </div>
    </article>
  );
}

export default FAQ;
